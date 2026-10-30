import { useEffect, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  CreditCard,
  Gift,
  LoaderCircle,
  Trophy,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../lib/firebase';

type DashboardRecord = Record<string, unknown> & { id: string };
type DashboardData = {
  agen: DashboardRecord[];
  transaksi: DashboardRecord[];
  penukaran: DashboardRecord[];
};

const emptyData: DashboardData = { agen: [], transaksi: [], penukaran: [] };
const numberFormat = new Intl.NumberFormat('id-ID');

function statusOf(record: DashboardRecord) {
  return String(record.status ?? '').trim().toLocaleLowerCase('id-ID');
}

function dateOf(record: DashboardRecord): Date | null {
  const value = record.tanggal ?? record.createdAt;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (
    value !== null
    && typeof value === 'object'
    && 'toDate' in value
    && typeof value.toDate === 'function'
  ) {
    const date: unknown = value.toDate();
    return date instanceof Date && !Number.isNaN(date.getTime()) ? date : null;
  }
  if (typeof value === 'number') {
    const date = new Date(value < 1_000_000_000_000 ? value * 1000 : value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  if (typeof value === 'string') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  return null;
}

function numericValue(value: unknown) {
  const parsed = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function StatCard({
  title,
  value,
  detail,
  icon: Icon,
  iconClass,
  valueClass = 'text-mainText',
}: {
  title: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  iconClass: string;
  valueClass?: string;
}) {
  return (
    <div className="bg-white p-5 rounded-lg border border-border shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-subText font-medium">{title}</p>
          <h3 className={`text-2xl font-bold mt-1 ${valueClass}`}>{value}</h3>
        </div>
        <div className={`p-2 rounded-md ${iconClass}`}><Icon size={20} /></div>
      </div>
      <p className="text-xs text-subText mt-3">{detail}</p>
    </div>
  );
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>(emptyData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const loadedCollections = new Set<keyof DashboardData>();
    const failedCollections = new Set<keyof DashboardData>();
    const currentData: DashboardData = { ...emptyData };
    const unsubscribe = (Object.keys(currentData) as (keyof DashboardData)[]).map((name) =>
      onSnapshot(
        collection(firestore, name),
        (snapshot) => {
          currentData[name] = snapshot.docs.map((document) => ({
            ...document.data(),
            id: document.id,
          }));
          loadedCollections.add(name);
          if (active) {
            setData({ ...currentData });
            setLoading(loadedCollections.size + failedCollections.size < 3);
          }
        },
        (reason) => {
          if (active) {
            failedCollections.add(name);
            setError(`Gagal membaca collection "${name}": ${reason.message}`);
            setLoading(loadedCollections.size + failedCollections.size < 3);
          }
        },
      ),
    );

    return () => {
      active = false;
      unsubscribe.forEach((stop) => stop());
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 py-16 text-sm text-subText" role="status">
        <LoaderCircle size={18} className="animate-spin" />
        Memuat data dashboard dari Firebase...
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-5 text-sm text-red-800">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="mt-0.5 shrink-0" />
          <div>
            <h2 className="font-semibold">Data dashboard tidak dapat dimuat</h2>
            <p className="mt-1">{error}</p>
            <p className="mt-2">Pastikan Cloud Firestore sudah dibuat di Firebase Console dan aturan Firestore mengizinkan aplikasi membaca collection tersebut.</p>
          </div>
        </div>
      </div>
    );
  }

  const now = new Date();
  const thisMonthTransactions = data.transaksi.filter((transaction) => {
    if (!['terverifikasi', 'verified'].includes(statusOf(transaction))) return false;
    const date = dateOf(transaction);
    return date !== null
      && date.getFullYear() === now.getFullYear()
      && date.getMonth() === now.getMonth();
  }).length;
  const activeAgents = data.agen.filter((agent) =>
    ['aktif', 'active'].includes(statusOf(agent)),
  ).length;
  const outstandingPoints = data.agen.reduce(
    (total, agent) => total + numericValue(agent.poin),
    0,
  );
  const waitingRedemptions = data.penukaran.filter((redemption) =>
    ['menunggu', 'pending', 'menunggu review'].includes(statusOf(redemption)),
  ).length;

  const monthKeys = Array.from({ length: 6 }, (_, index) => {
    const month = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);
    return {
      key: `${month.getFullYear()}-${month.getMonth()}`,
      bulan: new Intl.DateTimeFormat('id-ID', { month: 'short' }).format(month),
      transaksi: 0,
    };
  });
  const monthIndex = new Map(monthKeys.map((month, index) => [month.key, index]));
  data.transaksi.forEach((transaction) => {
    const date = dateOf(transaction);
    if (!date) return;
    const index = monthIndex.get(`${date.getFullYear()}-${date.getMonth()}`);
    if (index !== undefined) monthKeys[index].transaksi += 1;
  });

  const recentActivity = [...data.transaksi]
    .sort((left, right) => (dateOf(right)?.getTime() ?? 0) - (dateOf(left)?.getTime() ?? 0))
    .slice(0, 4);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Agen Aktif"
          value={numberFormat.format(activeAgents)}
          detail={`${numberFormat.format(data.agen.length)} total agen`}
          icon={Users}
          iconClass="bg-light text-primary"
        />
        <StatCard
          title="Transaksi Diverifikasi"
          value={numberFormat.format(thisMonthTransactions)}
          detail="Bulan berjalan"
          icon={CreditCard}
          iconClass="bg-green-50 text-success"
        />
        <StatCard
          title="Poin Outstanding"
          value={numberFormat.format(outstandingPoints)}
          detail="Total saldo poin agen"
          icon={Trophy}
          iconClass="bg-blue-50 text-primary"
        />
        <StatCard
          title="Menunggu Review"
          value={numberFormat.format(waitingRedemptions)}
          detail="Permintaan penukaran hadiah"
          icon={Gift}
          iconClass="bg-orange-50 text-warning"
          valueClass="text-warning"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-border shadow-sm lg:col-span-2">
          <h3 className="text-base font-semibold text-mainText mb-4">Tren Transaksi (6 Bulan)</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthKeys}>
                <defs>
                  <linearGradient id="colorTransaksi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="bulan" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dx={-10} />
                <Tooltip cursor={{ stroke: '#E2E8F0', strokeWidth: 2 }} />
                <Area type="monotone" dataKey="transaksi" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorTransaksi)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
          <h3 className="text-base font-semibold text-mainText mb-4">Aktivitas Transaksi</h3>
          {recentActivity.length ? (
            <div className="space-y-4">
              {recentActivity.map((transaction) => {
                const invoice = transaction.nomorInvoice ?? transaction.invoice ?? transaction.id;
                const agentName = transaction.namaAgen ?? transaction.agen;
                const admin = transaction.admin;
                return (
                  <div key={transaction.id} className="flex items-start gap-3">
                    <div className="p-2 bg-light rounded-full text-primary mt-1"><Activity size={14} /></div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-mainText">
                        Transaksi {String(transaction.status ?? 'baru')}
                      </p>
                      <p className="text-xs text-subText break-words">
                        {admin ? `Admin ${String(admin)} memproses` : 'Transaksi'} {String(invoice)}
                        {agentName ? ` · ${String(agentName)}` : ''}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-subText">Belum ada data transaksi.</p>
          )}
        </div>
      </div>
    </div>
  );
}
