import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signOut,
  type User,
} from 'firebase/auth';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
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
import { adminEmail, auth } from './lib/firebase';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    let unsubscribe = () => {};

    void setPersistence(auth, browserSessionPersistence)
      .then(() => {
        if (!active) return;
        unsubscribe = onAuthStateChanged(
          auth,
          (currentUser) => {
            if (currentUser && currentUser.email?.toLowerCase() !== adminEmail) {
              setUser(null);
              setAuthReady(true);
              void signOut(auth).catch(() => {
                if (active) setAuthError('Sesi akun non-admin tidak dapat ditutup. Tutup browser dan hubungi administrator.');
              });
              return;
            }
            setUser(currentUser);
            setAuthReady(true);
          },
          () => {
            if (active) {
              setAuthError('Sesi Firebase tidak dapat diverifikasi. Muat ulang halaman atau login kembali.');
              setAuthReady(true);
            }
          },
        );
      })
      .catch(() => {
        if (active) {
          setAuthError('Pengaturan sesi aman gagal diterapkan. Login dinonaktifkan sampai halaman dimuat ulang.');
          setAuthReady(true);
        }
      });

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  const isAdmin = user?.email?.toLowerCase() === adminEmail;

  if (!authReady) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-subText">
        Memeriksa sesi login...
      </div>
    );
  }

  if (authError) {
    return (
      <div role="alert" className="min-h-screen flex items-center justify-center p-6 text-center text-sm text-error">
        {authError}
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden font-sans">
      <Sidebar email={user.email ?? adminEmail} />
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        <header className="h-16 bg-white border-b border-border flex items-center px-8 shrink-0 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-mainText">Admin System</h2>
          <span className="ml-auto text-sm text-subText">{user.email}</span>
        </header>

        <div className="p-8">
          <Routes>
            <Route path="/login" element={<Navigate to="/" replace />} />
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
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App;