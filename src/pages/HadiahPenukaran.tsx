import { Plus, Package, Clock } from 'lucide-react';

export default function HadiahPenukaran() {
  return (
    <div className="space-y-8">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Hadiah & Penukaran</h2>
          <p className="text-sm text-subText">Kelola katalog hadiah dan proses permintaan penukaran poin agen.</p>
        </div>
      </div>

      {/* BAGIAN 1: PERMINTAAN PENUKARAN */}
      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border bg-blue-50/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="text-warning" size={20} />
            <h3 className="font-semibold text-mainText">Antrean Permintaan Penukaran</h3>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-mainText">
            <thead className="bg-light border-b border-border text-subText">
              <tr>
                <th className="px-6 py-3 font-medium">Tanggal & Agen</th>
                <th className="px-6 py-3 font-medium">Hadiah Diminta</th>
                <th className="px-6 py-3 font-medium">Harga Poin</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Review</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-sm text-subText">
                  Belum ada permintaan penukaran.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BAGIAN 2: KATALOG HADIAH */}
      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Package className="text-primary" size={20} />
            <h3 className="font-semibold text-mainText">Katalog Hadiah</h3>
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
            <Plus size={18} />
            Tambah Hadiah
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-mainText">
            <thead className="bg-light border-b border-border text-subText">
              <tr>
                <th className="px-6 py-3 font-medium">Nama Hadiah</th>
                <th className="px-6 py-3 font-medium">Syarat Poin</th>
                <th className="px-6 py-3 font-medium">Syarat Rank</th>
                <th className="px-6 py-3 font-medium">Stok</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-sm text-subText">
                  Belum ada katalog hadiah.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}