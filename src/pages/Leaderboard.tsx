import { History, Info } from 'lucide-react';

export default function Leaderboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Leaderboard Agen</h2>
          <p className="text-sm text-subText">Pantau peringkat agen berdasarkan perolehan poin selama satu siklus tahunan.</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="bg-white border border-border rounded-md px-4 py-2 text-sm font-medium text-mainText focus:outline-none focus:border-primary">
            <option value="2026">Siklus Aktif: 2026</option>
            <option value="2025">Riwayat: 2025</option>
            <option value="2024">Riwayat: 2024</option>
          </select>
          <button className="flex items-center gap-2 bg-light text-primary px-4 py-2 rounded-md hover:bg-blue-100 transition-colors text-sm font-medium">
            <History size={18} />
            Export Data
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden flex flex-col">
        {/* Info Aturan */}
        <div className="bg-blue-50/50 p-4 border-b border-border flex items-start gap-3 text-sm">
          <Info className="text-primary mt-0.5" size={18} />
          <p className="text-mainText">
            Papan peringkat ini dihitung otomatis dari transaksi terverifikasi. Sesuai aturan privasi, aplikasi Agen (Publik) hanya akan menampilkan <strong>Top 5</strong> dengan <strong>Nama Samaran</strong>.
          </p>
        </div>

        {/* Tabel Leaderboard */}
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left text-sm text-mainText">
            <thead className="bg-light border-b border-border text-subText">
              <tr>
                <th className="px-6 py-3 font-medium text-center w-20">Peringkat</th>
                <th className="px-6 py-3 font-medium">Data Asli (Admin)</th>
                <th className="px-6 py-3 font-medium">Tampilan Publik</th>
                <th className="px-6 py-3 font-medium">Total Poin</th>
                <th className="px-6 py-3 font-medium">Hadiah Terbesar Ditebus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-sm text-subText">
                  Belum ada data untuk ditampilkan di leaderboard.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}