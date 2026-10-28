import { Search, Plus, CheckCircle, XCircle, Package, Clock, Shield, Edit, Trash2 } from 'lucide-react';

// Data demo Permintaan Penukaran
const dummyRequests = [
  { id: 1, agen: 'Budi Santoso', idAgen: 'AGN-001', hadiah: 'Kipas Angin Cosmos', poin: '1.200', tgl: '28 Mar 2026', status: 'Menunggu Review' },
  { id: 2, agen: 'Siti Aminah', idAgen: 'AGN-002', hadiah: 'Voucher Belanja Rp 100rb', poin: '500', tgl: '27 Mar 2026', status: 'Disetujui' },
  { id: 3, agen: 'Rudi Hermawan', idAgen: 'AGN-003', hadiah: 'Smartphone Samsung', poin: '15.000', tgl: '25 Mar 2026', status: 'Ditolak' },
];

// Data demo Katalog Hadiah
const dummyRewards = [
  { id: 1, nama: 'Kipas Angin Cosmos', poin: '1.200', rank: 'Semua Rank', stok: 15, status: 'Aktif' },
  { id: 2, nama: 'Smartphone Samsung A05', poin: '15.000', rank: 'Silver & Gold', stok: 2, status: 'Aktif' },
  { id: 3, nama: 'Tiket Liburan Bali', poin: '50.000', rank: 'Khusus Gold', stok: 0, status: 'Habis' },
];

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
              {dummyRequests.map((req) => (
                <tr key={req.id} className="border-b border-border hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-primary">{req.agen}</p>
                    <p className="text-xs text-subText">{req.tgl} • {req.idAgen}</p>
                  </td>
                  <td className="px-6 py-4 font-medium">{req.hadiah}</td>
                  <td className="px-6 py-4 text-warning font-bold">{req.poin}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      req.status === 'Menunggu Review' ? 'bg-orange-100 text-warning' : 
                      req.status === 'Disetujui' ? 'bg-green-100 text-success' : 
                      'bg-red-100 text-error'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3 text-subText">
                      {req.status === 'Menunggu Review' ? (
                        <>
                          <button className="hover:text-success transition-colors flex items-center gap-1" title="Setujui & Potong Poin">
                            <CheckCircle size={18} />
                          </button>
                          <button className="hover:text-error transition-colors flex items-center gap-1" title="Tolak">
                            <XCircle size={18} />
                          </button>
                        </>
                      ) : (
                        <span className="text-xs text-subText italic">Selesai</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
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
              {dummyRewards.map((reward) => (
                <tr key={reward.id} className="border-b border-border hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">{reward.nama}</td>
                  <td className="px-6 py-4 font-bold text-primary">{reward.poin}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-subText bg-gray-100 px-2 py-1 rounded-md">
                      <Shield size={12} />
                      {reward.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${reward.stok === 0 ? 'text-error' : 'text-mainText'}`}>
                      {reward.stok}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      reward.status === 'Aktif' ? 'bg-green-100 text-success' : 'bg-red-100 text-error'
                    }`}>
                      {reward.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3 text-subText">
                      <button className="hover:text-primary transition-colors" title="Edit Hadiah">
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