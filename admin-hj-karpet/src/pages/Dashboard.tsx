import { Users, CreditCard, Trophy, Gift, ArrowUpRight, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Data demo untuk grafik agar tidak kosong
const dataGrafik = [
  { bulan: 'Jan', transaksi: 15 },
  { bulan: 'Feb', transaksi: 28 },
  { bulan: 'Mar', transaksi: 45 },
  { bulan: 'Apr', transaksi: 30 },
  { bulan: 'Mei', transaksi: 65 },
  { bulan: 'Jun', transaksi: 85 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-subText font-medium">Agen Aktif</p>
              <h3 className="text-2xl font-bold text-mainText mt-1">1,240</h3>
            </div>
            <div className="p-2 bg-light rounded-md text-primary"><Users size={20} /></div>
          </div>
          <p className="text-xs text-success flex items-center mt-3"><ArrowUpRight size={14} className="mr-1"/> +12% dari bulan lalu</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-subText font-medium">Transaksi Diverifikasi</p>
              <h3 className="text-2xl font-bold text-mainText mt-1">850</h3>
            </div>
            <div className="p-2 bg-green-50 rounded-md text-success"><CreditCard size={20} /></div>
          </div>
          <p className="text-xs text-subText mt-3">Data bulan berjalan (Demo)</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-subText font-medium">Poin Outstanding</p>
              <h3 className="text-2xl font-bold text-mainText mt-1">45.2K</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-md text-primary"><Trophy size={20} /></div>
          </div>
          <p className="text-xs text-subText mt-3">Menunggu diklaim</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-subText font-medium">Menunggu Review</p>
              <h3 className="text-2xl font-bold text-warning mt-1">12</h3>
            </div>
            <div className="p-2 bg-orange-50 rounded-md text-warning"><Gift size={20} /></div>
          </div>
          <p className="text-xs text-subText mt-3">Permintaan penukaran hadiah</p>
        </div>

      </div>

      {/* Area Grafik dan Aktivitas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Grafik Utama */}
        <div className="bg-white p-6 rounded-lg border border-border shadow-sm lg:col-span-2">
          <h3 className="text-base font-semibold text-mainText mb-4">Tren Transaksi (Demo)</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataGrafik}>
                <defs>
                  <linearGradient id="colorTransaksi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="bulan" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dx={-10} />
                <Tooltip cursor={{stroke: '#E2E8F0', strokeWidth: 2}} />
                <Area type="monotone" dataKey="transaksi" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorTransaksi)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* List Aktivitas */}
        <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
          <h3 className="text-base font-semibold text-mainText mb-4">Aktivitas Admin</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="p-2 bg-light rounded-full text-primary mt-1"><Activity size={14} /></div>
                <div>
                  <p className="text-sm font-medium text-mainText">Poin diverifikasi</p>
                  <p className="text-xs text-subText">Admin Budi memverifikasi transaksi INV-00{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}