import { Search, Plus, Eye, Edit, UserX, UserCheck, Shield } from 'lucide-react';

// Data demo agen
const dummyAgents = [
  { id: 1, idAgen: 'AGN-001', nama: 'Budi Santoso', noHp: '081234567890', rank: 'Gold', poin: '12.500', status: 'Aktif', tglDaftar: '10 Jan 2026' },
  { id: 2, idAgen: 'AGN-002', nama: 'Siti Aminah', noHp: '085712345678', rank: 'Silver', poin: '4.200', status: 'Aktif', tglDaftar: '15 Feb 2026' },
  { id: 3, idAgen: 'AGN-003', nama: 'Rudi Hermawan', noHp: '081987654321', rank: 'Bronze', poin: '150', status: 'Nonaktif', tglDaftar: '01 Mar 2026' },
];

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
              {dummyAgents.map((agen) => (
                <tr key={agen.id} className="border-b border-border hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-primary">{agen.idAgen}</p>
                    <p className="font-medium text-mainText">{agen.nama}</p>
                    <p className="text-xs text-subText">Bergabung: {agen.tglDaftar}</p>
                  </td>
                  <td className="px-6 py-4 text-subText">{agen.noHp}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${
                      agen.rank === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                      agen.rank === 'Silver' ? 'bg-gray-200 text-gray-700' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      <Shield size={12} />
                      {agen.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-mainText">{agen.poin}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      agen.status === 'Aktif' ? 'bg-green-100 text-success' : 'bg-red-100 text-error'
                    }`}>
                      {agen.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3 text-subText">
                      <button className="hover:text-primary transition-colors" title="Lihat Detail Profil">
                        <Eye size={18} />
                      </button>
                      <button className="hover:text-primary transition-colors" title="Edit Data">
                        <Edit size={18} />
                      </button>
                      <button className="hover:text-warning transition-colors" title={agen.status === 'Aktif' ? 'Nonaktifkan Agen' : 'Aktifkan Agen'}>
                        {agen.status === 'Aktif' ? <UserX size={18} /> : <UserCheck size={18} />}
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