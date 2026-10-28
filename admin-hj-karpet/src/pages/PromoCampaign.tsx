import { Plus, Edit, Trash2, Calendar, Megaphone, Image as ImageIcon } from 'lucide-react';

// Data demo Promo
const dummyPromos = [
  { id: 1, judul: 'Kejutan Akhir Tahun 2026', tglMulai: '01 Nov 2026', tglSelesai: '31 Des 2026', rank: 'Semua Rank', status: 'Aktif' },
  { id: 2, judul: 'Spesial Gold Member', tglMulai: '01 Sep 2026', tglSelesai: '30 Sep 2026', rank: 'Khusus Gold', status: 'Kadaluarsa' },
  { id: 3, judul: 'Flash Sale Kemerdekaan', tglMulai: '15 Agu 2026', tglSelesai: '17 Agu 2026', rank: 'Semua Rank', status: 'Kadaluarsa' },
];

export default function PromoCampaign() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Promo & Campaign</h2>
          <p className="text-sm text-subText">Atur program promosi, batas waktu, dan target peringkat agen.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
          <Plus size={18} />
          Buat Promo Baru
        </button>
      </div>

      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden flex flex-col">
        {/* Info Aturan */}
        <div className="bg-blue-50/50 p-4 border-b border-border flex items-start gap-3 text-sm">
          <Calendar className="text-primary mt-0.5" size={18} />
          <p className="text-mainText">
            Sistem otomatis menandai promo sebagai <span className="font-semibold text-error">Kadaluarsa</span> jika tanggal saat ini melewati Tanggal Selesai. Promo kadaluarsa tidak akan ditampilkan di aplikasi Agen.
          </p>
        </div>

        {/* Tabel Promo */}
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left text-sm text-mainText">
            <thead className="bg-light border-b border-border text-subText">
              <tr>
                <th className="px-6 py-3 font-medium w-16">Banner</th>
                <th className="px-6 py-3 font-medium">Judul Promo</th>
                <th className="px-6 py-3 font-medium">Periode Berlaku</th>
                <th className="px-6 py-3 font-medium">Target Rank</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyPromos.map((promo) => (
                <tr key={promo.id} className={`border-b border-border hover:bg-gray-50 transition-colors ${promo.status === 'Kadaluarsa' ? 'bg-gray-50/50' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-subText/50">
                      <ImageIcon size={20} />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{promo.judul}</td>
                  <td className="px-6 py-4 text-subText">
                    {promo.tglMulai} - {promo.tglSelesai}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{promo.rank}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      promo.status === 'Aktif' ? 'bg-green-100 text-success' : 'bg-red-50 text-error/70'
                    }`}>
                      {promo.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3 text-subText">
                      <button className="hover:text-primary transition-colors" title="Lihat/Edit">
                        <Edit size={18} />
                      </button>
                      <button className="hover:text-error transition-colors" title="Hapus">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}