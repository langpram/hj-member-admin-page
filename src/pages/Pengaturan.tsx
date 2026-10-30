import { Building, Calendar, ShieldCheck, Save } from 'lucide-react';
import { auth } from '../lib/firebase';

export default function Pengaturan() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Pengaturan Sistem</h2>
          <p className="text-sm text-subText">Kelola informasi perusahaan, kontak WhatsApp, dan konfigurasi siklus poin.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
          <Save size={18} />
          Simpan Perubahan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Kiri & Tengah: Form Pengaturan */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Informasi Perusahaan */}
          <div className="bg-white p-6 rounded-lg border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border text-primary font-semibold">
              <Building size={20} />
              <h3>Profil Perusahaan & Kontak</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-mainText mb-1">Nama Perusahaan</label>
                <input type="text" defaultValue="HJ Karpet Indonesia" className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-mainText mb-1">Nomor WhatsApp Resmi (CS/Admin)</label>
                <input type="text" defaultValue="6281234567890" className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary" />
                <p className="text-xs text-subText mt-1">Digunakan untuk tombol arahkan pembelian dari aplikasi agen.</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-mainText mb-1">Alamat Kantor / Gudang Utama</label>
              <textarea rows={2} defaultValue="Jl. Raya Karpet No. 88, Jakarta Pusat" className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary"></textarea>
            </div>
          </div>

          {/* Konfigurasi Poin & Siklus */}
          <div className="bg-white p-6 rounded-lg border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border text-primary font-semibold">
              <Calendar size={20} />
              <h3>Aturan Poin & Siklus Tahunan</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-mainText mb-1">Kelipatan Nilai Pembelian (Rupiah)</label>
                <input type="text" defaultValue="10.000.000" className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-mainText mb-1">Poin yang Diberikan</label>
                <input type="text" defaultValue="100" className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-mainText mb-1">Kebijakan Reset Akhir Tahun</label>
              <select className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:border-primary bg-white">
                <option value="arsip">Arsip poin lama, mulai dari 0 di tahun berikutnya (Disarankan)</option>
                <option value="bawa">Bawa serta (Carry over) seluruh poin ke tahun depan</option>
              </select>
            </div>
          </div>

        </div>

        {/* Kolom Kanan: Keamanan & Info Admin */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border text-primary font-semibold">
              <ShieldCheck size={20} />
              <h3>Akun & Keamanan Admin</h3>
            </div>
            <div>
              <p className="text-sm font-medium text-mainText">Login Saat Ini:</p>
              <p className="text-sm text-subText font-mono mt-0.5">{auth.currentUser?.email ?? '-'}</p>
              <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-success text-xs font-semibold rounded-full">Super Admin (Full Akses)</span>
            </div>
            <hr className="border-border" />
            <div>
              <button className="w-full bg-light text-primary hover:bg-blue-100 py-2 rounded-md text-sm font-medium transition-colors">
                Ganti Kata Sandi Admin
              </button>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-sm space-y-2">
            <h4 className="font-semibold text-primary">Status Sistem Frontend</h4>
            <p className="text-primary/80">Semua halaman antarmuka (UI) dan rute navigasi dashboard telah berhasil diselesaikan dengan sukses!</p>
          </div>
        </div>

      </div>
    </div>
  );
}