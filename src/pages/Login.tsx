import { useState, type FormEvent } from 'react';
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  Bell,
  Box,
  Eye,
  EyeOff,
  Gift,
  LoaderCircle,
  Users,
} from 'lucide-react';
import { adminEmail, auth } from '../lib/firebase';

const LOGO_URL =
  'https://res.cloudinary.com/dnh5owdpa/image/upload/v1781836066/LOGO_HJ_PNG_c3ktnh.png';

function authErrorMessage(code: string) {
  if (
    code === 'auth/invalid-credential'
    || code === 'auth/user-not-found'
    || code === 'auth/wrong-password'
  ) {
    return 'Username atau password salah.';
  }
  if (code === 'auth/too-many-requests') {
    return `Terlalu banyak percobaan login (${code}). Coba lagi beberapa saat.`;
  }
  if (code === 'auth/network-request-failed') {
    return `Tidak dapat terhubung ke Firebase (${code}). Periksa koneksi internet.`;
  }
  if (code === 'auth/operation-not-allowed' || code === 'auth/admin-restricted-operation') {
    return `Login Email/Password belum diaktifkan (${code}). Buka Firebase Console → Authentication → Sign-in method, lalu aktifkan Email/Password.`;
  }
  if (code === 'auth/unauthorized-domain') {
    return `Domain aplikasi belum diizinkan (${code}). Tambahkan localhost di Firebase Console → Authentication → Settings → Authorized domains.`;
  }
  if (code === 'auth/invalid-api-key' || code === 'auth/app-not-authorized') {
    return `Konfigurasi Firebase web app tidak diterima (${code}). Periksa API key dan project di src/lib/firebase.ts.`;
  }
  if (code === 'auth/configuration-not-found') {
    return `Firebase Authentication belum disiapkan untuk project ini (${code}). Aktifkan Authentication di Firebase Console.`;
  }
  return `Login gagal${code ? ` (kode Firebase: ${code})` : ''}. Pastikan user admin dan provider Email/Password sudah disiapkan di Firebase Console.`;
}

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const normalizedUsername = username.trim().toLowerCase();
    if (normalizedUsername !== 'admin' && normalizedUsername !== adminEmail) {
      setError('Username atau password salah.');
      setSubmitting(false);
      return;
    }

    try {
      await setPersistence(auth, browserSessionPersistence);
      const credential = await signInWithEmailAndPassword(auth, adminEmail, password);
      if (credential.user.email?.toLowerCase() !== adminEmail) {
        await signOut(auth);
        setError('Akun ini tidak memiliki akses admin.');
      } else {
        setPassword('');
      }
    } catch (reason) {
      const code =
        typeof reason === 'object'
        && reason !== null
        && 'code' in reason
        && typeof reason.code === 'string'
          ? reason.code
          : '';
      setError(authErrorMessage(code));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[radial-gradient(circle_at_10%_20%,#dbeafe_0%,#eff6ff_60%,#e2e8f0_100%)]">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl shadow-slate-300/80 overflow-hidden flex flex-col md:flex-row min-h-[540px]">
        <section className="w-full md:w-5/12 bg-gradient-to-b from-[#081528] to-[#0D2340] text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
          />
          <p className="relative z-10 text-[11px] leading-relaxed text-slate-300/80">
            Bersama HJKARPET, wujudkan pengelolaan agen dan katalog yang lebih efisien dan terintegrasi.
          </p>

          <div className="relative z-10 my-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
              Kelola katalog &amp; agenmu dengan mudah
            </h1>
          </div>

          <div className="relative z-10 mt-auto pt-4 flex justify-center -mb-16 md:-mb-14">
            <div className="w-56 bg-slate-900 rounded-t-[32px] p-2.5 pt-3 border-t-2 border-x-2 border-slate-700/60 shadow-[0_25px_25px_rgba(0,0,0,0.4)]">
              <div className="w-20 h-3 bg-slate-950 rounded-full mx-auto mb-2" />
              <div className="bg-[#0B1E36] rounded-t-[22px] p-3 text-white space-y-3 border border-slate-800 min-h-[220px]">
                <div className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-md bg-blue-600 flex items-center justify-center font-bold text-[8px]">HJ</div>
                    <span className="font-semibold text-slate-200">HJKARPET</span>
                  </div>
                  <Bell size={12} className="text-slate-400" />
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-3 shadow-md">
                  <p className="text-[9px] text-blue-100">Total Poin Agen</p>
                  <p className="text-sm font-bold mt-0.5">5.750.000 <span className="text-[8px] font-normal">Pts</span></p>
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-center text-[8px] pt-1">
                  <div className="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700/50"><Box size={12} className="mx-auto mb-0.5 text-blue-400" />Katalog</div>
                  <div className="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700/50"><Users size={12} className="mx-auto mb-0.5 text-blue-400" />Agen</div>
                  <div className="bg-slate-800/80 p-1.5 rounded-lg border border-slate-700/50"><Gift size={12} className="mx-auto mb-0.5 text-blue-400" />Hadiah</div>
                </div>
                <div className="bg-slate-800/40 p-1.5 rounded-lg flex items-center justify-between text-[8px]">
                  <span className="text-slate-300">Penukaran Poin</span>
                  <span className="text-emerald-400 font-semibold">+ 150 Pts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full md:w-7/12 bg-white p-8 md:p-14 flex flex-col justify-center">
          <div className="mb-6">
            {logoError ? (
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center font-extrabold text-slate-900 text-sm tracking-tighter">
                HJ
              </div>
            ) : (
              <img
                src={LOGO_URL}
                alt="HJ Karpet"
                className="w-12 h-12 object-contain"
                onError={() => setLogoError(true)}
              />
            )}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Login</h2>
            <p className="text-xs text-slate-500 mt-1 font-medium">Silakan login untuk melanjutkan ke dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-xs font-semibold text-slate-700 mb-1.5">Username</label>
              <input
                id="username"
                name="username"
                autoComplete="username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder="Masukkan username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full px-3.5 py-2.5 pr-10 text-sm rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  placeholder="Masukkan password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-[#0C1D36] hover:bg-[#071325] active:bg-[#040b17] disabled:opacity-70 text-white text-sm font-semibold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              {submitting && <LoaderCircle size={16} className="animate-spin" />}
              {submitting ? 'Memproses...' : 'Masuk'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
