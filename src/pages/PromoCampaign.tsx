import { Plus, Calendar } from 'lucide-react';

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
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-sm text-subText">
                  Belum ada promo atau campaign.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}