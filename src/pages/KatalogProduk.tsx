import { Search, Plus } from 'lucide-react';

export default function KatalogProduk() {
  return (
    <div className="space-y-6">
      {/* Header Halaman & Tombol Tambah */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Katalog Produk</h2>
          <p className="text-sm text-subText">Kelola daftar karpet dan harga untuk aplikasi agen.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
          <Plus size={18} />
          Tambah Produk
        </button>
      </div>

      {/* Kotak Utama: Pencarian & Tabel */}
      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        
        {/* Baris Pencarian */}
        <div className="p-4 border-b border-border flex items-center gap-2">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-subText">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Cari nama produk atau SKU..." 
              className="w-full pl-10 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-mainText"
            />
          </div>
        </div>

        {/* Tabel Data */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-mainText">
            <thead className="bg-light border-b border-border text-subText">
              <tr>
                <th className="px-6 py-3 font-medium">SKU</th>
                <th className="px-6 py-3 font-medium">Nama Produk</th>
                <th className="px-6 py-3 font-medium">Kategori</th>
                <th className="px-6 py-3 font-medium">Harga</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-sm text-subText">
                  Belum ada data produk.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}