import { Search, Plus, Calculator } from 'lucide-react';

export default function TransaksiPoin() {
  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Transaksi & Poin</h2>
          <p className="text-sm text-subText">Verifikasi pembelian agen dan berikan poin sesuai aturan.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
          <Plus size={18} />
          Catat Transaksi Manual
        </button>
      </div>

      {/* Info Aturan Bisnis */}
      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start gap-3">
        <Calculator className="text-primary mt-0.5" size={18} />
        <div>
          <h4 className="text-sm font-medium text-primary">Aturan Perhitungan Poin</h4>
          <p className="text-sm text-primary/80 mt-1">
            Agen mendapatkan <strong>100 poin</strong> untuk setiap <strong>Rp 10.000.000</strong> nilai pembelian bersih. Poin baru akan masuk ke saldo agen setelah Anda menekan tombol Verifikasi.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        
        {/* Baris Pencarian & Filter */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-subText">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Cari No. Invoice atau Nama Agen..." 
              className="w-full pl-10 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-mainText"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select className="border border-border rounded-md px-3 py-2 text-sm text-mainText focus:outline-none focus:border-primary">
              <option value="">Semua Status</option>
              <option value="menunggu">Menunggu Verifikasi</option>
              <option value="terverifikasi">Terverifikasi</option>
              <option value="ditolak">Ditolak</option>
            </select>
          </div>
        </div>

        {/* Tabel Data Transaksi */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-mainText">
            <thead className="bg-light border-b border-border text-subText">
              <tr>
                <th className="px-6 py-3 font-medium">No. Invoice & Tgl</th>
                <th className="px-6 py-3 font-medium">Agen</th>
                <th className="px-6 py-3 font-medium">Nilai Bersih</th>
                <th className="px-6 py-3 font-medium">Estimasi Poin</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-sm text-subText">
                  Belum ada data transaksi.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}