import { Plus, AlertCircle } from 'lucide-react';

export default function KategoriProduk() {
  return (
    <div className="space-y-6">
      {/* Header Halaman & Tombol Tambah */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Kategori Produk</h2>
          <p className="text-sm text-subText">Kelola pengelompokan jenis karpet.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
          <Plus size={18} />
          Tambah Kategori
        </button>
      </div>

      {/* Info Peringatan Aturan Bisnis */}
      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start gap-3">
        <AlertCircle className="text-primary mt-0.5" size={18} />
        <div>
          <h4 className="text-sm font-medium text-primary">Informasi Penghapusan</h4>
          <p className="text-sm text-primary/80 mt-1">
            Sistem mencegah penghapusan kategori yang masih memiliki produk. Jika Anda ingin menyembunyikan kategori, silakan ubah statusnya menjadi <strong>Nonaktif</strong>.
          </p>
        </div>
      </div>

      {/* Tabel Kategori */}
      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-mainText">
            <thead className="bg-light border-b border-border text-subText">
              <tr>
                <th className="px-6 py-3 font-medium">Nama Kategori</th>
                <th className="px-6 py-3 font-medium">Jumlah Produk</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-sm text-subText">
                  Belum ada data kategori.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}