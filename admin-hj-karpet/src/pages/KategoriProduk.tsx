import { Plus, Edit, Trash2, AlertCircle } from 'lucide-react';

// Data demo kategori
const dummyCategories = [
  { id: 1, nama: 'Karpet Masjid', jumlahProduk: 45, status: 'Aktif' },
  { id: 2, nama: 'Karpet Permadani', jumlahProduk: 12, status: 'Aktif' },
  { id: 3, nama: 'Karpet Custom', jumlahProduk: 8, status: 'Aktif' },
  { id: 4, nama: 'Karpet Roll Reguler', jumlahProduk: 0, status: 'Nonaktif' },
];

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
              {dummyCategories.map((kategori) => (
                <tr key={kategori.id} className="border-b border-border hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">{kategori.nama}</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-subText px-2 py-1 rounded-md text-xs">
                      {kategori.jumlahProduk} produk
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${kategori.status === 'Aktif' ? 'bg-green-100 text-success' : 'bg-gray-200 text-subText'
                      }`}>
                      {kategori.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3 text-subText">
                      <button className="hover:text-primary transition-colors" title="Edit">
                        <Edit size={18} />
                      </button>
                      <button
                        className={`transition-colors ${kategori.jumlahProduk > 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-error'}`}
                        title={kategori.jumlahProduk > 0 ? "Tidak bisa dihapus (Masih ada produk)" : "Hapus Kategori"}
                        disabled={kategori.jumlahProduk > 0}
                      >
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