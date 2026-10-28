import { Trophy, Medal, Award, History, Info } from 'lucide-react';

// Data demo Leaderboard (Tahun Berjalan)
const dummyLeaderboard = [
  { rank: 1, idAgen: 'AGN-001', namaAsli: 'Budi Santoso', namaSamaran: 'B*** S******', poin: '45.200', hadiahTerbesar: 'Motor Honda Beat' },
  { rank: 2, idAgen: 'AGN-002', namaAsli: 'Siti Aminah', namaSamaran: 'S*** A*****', poin: '38.500', hadiahTerbesar: 'Smartphone Samsung' },
  { rank: 3, idAgen: 'AGN-005', namaAsli: 'Ahmad Faisal', namaSamaran: 'A**** F*****', poin: '21.000', hadiahTerbesar: 'TV LED 32 Inch' },
  { rank: 4, idAgen: 'AGN-003', namaAsli: 'Rudi Hermawan', namaSamaran: 'R*** H*******', poin: '15.500', hadiahTerbesar: 'Voucher Belanja' },
  { rank: 5, idAgen: 'AGN-008', namaAsli: 'Dewi Lestari', namaSamaran: 'D*** L******', poin: '12.000', hadiahTerbesar: '-' },
  { rank: 6, idAgen: 'AGN-010', namaAsli: 'Hendra Gunawan', namaSamaran: 'H***** G******', poin: '9.800', hadiahTerbesar: '-' },
];

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
              {dummyLeaderboard.map((agen) => (
                <tr key={agen.idAgen} className={`border-b border-border transition-colors ${agen.rank <= 3 ? 'bg-yellow-50/30 hover:bg-yellow-50/50' : 'hover:bg-gray-50'}`}>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {agen.rank === 1 ? <Trophy className="text-yellow-500" size={24} /> :
                       agen.rank === 2 ? <Medal className="text-gray-400" size={24} /> :
                       agen.rank === 3 ? <Award className="text-amber-600" size={24} /> :
                       <span className="font-bold text-subText text-lg">{agen.rank}</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-mainText">{agen.namaAsli}</p>
                    <p className="text-xs text-subText">{agen.idAgen}</p>
                  </td>
                  <td className="px-6 py-4">
                    {agen.rank <= 5 ? (
                      <span className="bg-gray-100 text-subText px-2 py-1 rounded font-mono text-xs tracking-wider">
                        {agen.namaSamaran}
                      </span>
                    ) : (
                      <span className="text-xs text-subText italic">Tidak tampil publik</span>
                    )}
                  </td>
                  <td className="px-6 py-4 font-bold text-primary">{agen.poin}</td>
                  <td className="px-6 py-4 text-subText">{agen.hadiahTerbesar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}