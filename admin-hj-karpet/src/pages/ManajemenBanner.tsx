import { Plus, Edit, Trash2, Smartphone, GripVertical, Image as ImageIcon } from 'lucide-react';

// Data demo banner
const dummyBanners = [
  { id: 1, judul: 'Promo Lebaran 2026', status: 'Aktif', tglMulai: '15 Mar 2026', tglSelesai: '15 Apr 2026', gambar: 'https://placehold.co/600x300/2563EB/FFFFFF?text=Promo+Lebaran' },
  { id: 2, judul: 'Katalog Karpet Custom Baru', status: 'Aktif', tglMulai: '01 Jan 2026', tglSelesai: '31 Des 2026', gambar: 'https://placehold.co/600x300/16345C/FFFFFF?text=Karpet+Custom' },
  { id: 3, judul: 'Flash Sale Akhir Tahun', status: 'Draft', tglMulai: '-', tglSelesai: '-', gambar: 'https://placehold.co/600x300/64748B/FFFFFF?text=Flash+Sale' },
];

export default function ManajemenBanner() {
  const activeBanners = dummyBanners.filter(b => b.status === 'Aktif');

  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Manajemen Banner</h2>
          <p className="text-sm text-subText">Atur banner promosi yang muncul di beranda aplikasi Agen.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
          <Plus size={18} />
          Tambah Banner
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Tabel Daftar Banner (Porsi lebih lebar) */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-border shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border bg-light/50">
            <h3 className="font-medium text-mainText">Daftar Banner</h3>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-sm text-mainText">
              <thead className="bg-light border-b border-border text-subText">
                <tr>
                  <th className="px-4 py-3 w-10"></th>
                  <th className="px-4 py-3 font-medium">Gambar</th>
                  <th className="px-4 py-3 font-medium">Judul & Periode</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dummyBanners.map((banner) => (
                  <tr key={banner.id} className="border-b border-border hover:bg-gray-50 transition-colors group">
                    {/* Icon untuk geser urutan (Drag & Drop placeholder) */}
                    <td className="px-4 py-4 text-subText/40 cursor-grab hover:text-primary">
                      <GripVertical size={18} />
                    </td>
                    <td className="px-4 py-4">
                      <div className="w-24 h-12 bg-gray-200 rounded overflow-hidden">
                        <img src={banner.gambar} alt={banner.judul} className="w-full h-full object-cover" />
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-medium">{banner.judul}</p>
                      <p className="text-xs text-subText mt-1">{banner.tglMulai} s/d {banner.tglSelesai}</p>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        banner.status === 'Aktif' ? 'bg-green-100 text-success' : 'bg-gray-100 text-subText'
                      }`}>
                        {banner.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
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

        {/* Kolom Kanan: Preview HP Android */}
        <div className="bg-white rounded-lg border border-border shadow-sm p-6 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-6 text-subText">
            <Smartphone size={20} />
            <h3 className="font-medium">Preview Aplikasi Agen</h3>
          </div>
          
          {/* Mockup HP */}
          <div className="w-[280px] h-[550px] border-[8px] border-gray-900 rounded-[2.5rem] overflow-hidden relative bg-gray-50 shadow-inner flex flex-col">
            {/* Poni HP (Notch) */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-2xl mx-16 z-20"></div>
            
            {/* Header App Palsu */}
            <div className="bg-primary text-white p-4 pt-8 pb-3 shadow-sm z-10 flex items-center justify-between">
              <span className="font-bold text-sm">HJ Karpet</span>
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
            </div>

            {/* Konten Scroll HP */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Slider Banner di dalam HP */}
              <div className="w-full aspect-[2/1] bg-gray-200 rounded-lg overflow-hidden relative shadow-sm">
                {activeBanners.length > 0 ? (
                  <img src={activeBanners[0].gambar} alt="Banner Aktif" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-subText/50">
                    <ImageIcon size={32} />
                    <span className="text-xs mt-2">Tidak ada banner aktif</span>
                  </div>
                )}
                
                {/* Indikator Titik (Dots) */}
                <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
                  {activeBanners.map((_, idx) => (
                    <div key={idx} className={`h-1.5 rounded-full ${idx === 0 ? 'w-4 bg-primary' : 'w-1.5 bg-white/60'}`}></div>
                  ))}
                </div>
              </div>

              {/* Elemen UI palsu lainnya supaya HP terlihat nyata */}
              <div className="grid grid-cols-4 gap-3">
                {[1,2,3,4].map(i => <div key={i} className="aspect-square bg-gray-200 rounded-2xl"></div>)}
              </div>
              <div className="h-24 bg-white border border-gray-200 rounded-xl"></div>
              <div className="h-32 bg-white border border-gray-200 rounded-xl"></div>
            </div>
            
            {/* Bottom Nav App Palsu */}
            <div className="h-14 bg-white border-t border-gray-200 flex justify-around items-center px-2">
              {[1,2,3,4].map(i => <div key={i} className={`w-6 h-6 rounded-md ${i===1 ? 'bg-primary/20' : 'bg-gray-200'}`}></div>)}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}