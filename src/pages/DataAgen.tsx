import { Search, Plus } from 'lucide-react';

export default function DataAgen() {
  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Data Agen</h2>
          <p className="text-sm text-subText">Kelola akun, profil, dan pantau poin member agen.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
          <Plus size={18} />
          Tambah Agen Baru
        </button>
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
              placeholder="Cari ID Agen, nama, atau no. HP..." 
              className="w-full pl-10 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-mainText"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select className="border border-border rounded-md px-3 py-2 text-sm text-mainText focus:outline-none focus:border-primary">
              <option value="">Semua Peringkat</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="bronze">Bronze</option>
            </select>
          </div>
        </div>

        {/* Tabel Data Agen */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-mainText">
            <thead className="bg-light border-b border-border text-subText">
              <tr>
                <th className="px-6 py-3 font-medium">ID & Nama Agen</th>
                <th className="px-6 py-3 font-medium">Kontak</th>
                <th className="px-6 py-3 font-medium">Peringkat</th>
                <th className="px-6 py-3 font-medium">Saldo Poin</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-sm text-subText">
                  Belum ada data agen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}