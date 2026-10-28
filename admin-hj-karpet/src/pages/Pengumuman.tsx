import { Plus, Edit, Trash2, Bell, Search, CalendarClock } from 'lucide-react';

// Data demo Pengumuman
const dummyAnnouncements = [
  { id: 1, judul: 'Perubahan Jam Operasional Gudang', kategori: 'Info Umum', tglRilis: '10 Okt 2026', tglBerakhir: '-', status: 'Aktif' },
  { id: 2, judul: 'Stok Karpet Masjid Turki Telah Masuk!', kategori: 'Info Stok', tglRilis: '25 Sep 2026', tglBerakhir: '25 Okt 2026', status: 'Aktif' },
  { id: 3, judul: 'Pemenang Undian Poin Kuartal 3', kategori: 'Promo & Hadiah', tglRilis: '01 Agu 2026', tglBerakhir: '31 Agu 2026', status: 'Selesai' },
];

export default function Pengumuman() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Pengumuman</h2>
          <p className="text-sm text-subText">Kelola pesan siaran dan informasi penting untuk aplikasi Agen.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
          <Plus size={18} />
          Buat Pengumuman Baru
        </button>
      </div>

      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden flex flex-col">
        {/* Info Notifikasi */}
        <div className="bg-blue-50/50 p-4 border-b border-border flex items-start gap-3 text-sm">
          <Bell className="text-primary mt-0.5" size={18} />
          <p className="text-mainText">
            Pengumuman yang berstatus <span className="font-semibold text-primary">Aktif</span> akan muncul di kotak masuk (Inbox) aplikasi Agen. Fitur Notifikasi Push (Push Notification) akan dikonfigurasi saat integrasi Firebase.
          </p>
        </div>

        {/* Baris Pencarian */}
        <div className="p-4 border-b border-border flex items-center gap-2 bg-white">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-subText">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Cari judul pengumuman..." 
              className="w-full pl-10 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-mainText"
            />
          </div>
        </div>

        {/* Tabel Pengumuman */}
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left text-sm text-mainText">
            <thead className="bg-light border-b border-border text-subText">
              <tr>
                <th className="px-6 py-3 font-medium">Judul & Kategori</th>
                <th className="px-6 py-3 font-medium">Tanggal Rilis</th>
                <th className="px-6 py-3 font-medium">Berakhir Pada</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyAnnouncements.map((item) => (
                <tr key={item.id} className="border-b border-border hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-mainText">{item.judul}</p>
                    <p className="text-xs text-subText mt-1">{item.kategori}</p>
                  </td>
                  <td className="px-6 py-4 text-subText">{item.tglRilis}</td>
                  <td className="px-6 py-4">
                    {item.tglBerakhir === '-' ? (
                      <span className="text-xs text-subText italic">Tanpa Batas</span>
                    ) : (
                      <span className="flex items-center gap-1 text-subText"><CalendarClock size={14}/> {item.tglBerakhir}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Aktif' ? 'bg-green-100 text-success' : 'bg-gray-100 text-subText'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3 text-subText">
                      <button className="hover:text-primary transition-colors" title="Edit">
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