import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import KatalogProduk from './pages/KatalogProduk';
import KategoriProduk from './pages/KategoriProduk';
import ManajemenBanner from './pages/ManajemenBanner';
import DataAgen from './pages/DataAgen';
import TransaksiPoin from './pages/TransaksiPoin';
import HadiahPenukaran from './pages/HadiahPenukaran';
import PromoCampaign from './pages/PromoCampaign';
import Pengumuman from './pages/Pengumuman';
import Leaderboard from './pages/Leaderboard';
import Laporan from './pages/Laporan'; 
import Pengaturan from './pages/Pengaturan';

function HalamanPlaceholder({ judul }: { judul: string }) {
  return (
    <div className="bg-white rounded-lg border border-dashed border-primary/30 p-12 text-center shadow-sm">
      <h3 className="text-xl font-semibold text-primary mb-2">Modul {judul}</h3>
      <p className="text-subText">Halaman ini sedang dalam antrean pengembangan selanjutnya.</p>
    </div>
  );
}

function App() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        <header className="h-16 bg-white border-b border-border flex items-center px-8 shrink-0 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-mainText">Admin System</h2>
        </header>

        <div className="p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/banner" element={<ManajemenBanner />} />
            <Route path="/katalog" element={<KatalogProduk />} />
            <Route path="/kategori" element={<KategoriProduk />} />
            <Route path="/agen" element={<DataAgen />} />
            <Route path="/transaksi" element={<TransaksiPoin />} />
            <Route path="/hadiah" element={<HadiahPenukaran />} />
            <Route path="/promo" element={<PromoCampaign />} />
            <Route path="/pengumuman" element={<Pengumuman />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/pengaturan" element={<Pengaturan />} />
            
            {/* Rute Laporan */}
            <Route path="/laporan" element={<Laporan />} />
            
            <Route path="/pengaturan" element={<HalamanPlaceholder judul="Pengaturan" />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App;