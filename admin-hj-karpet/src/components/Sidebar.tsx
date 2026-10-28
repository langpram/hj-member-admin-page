import { useState } from 'react';
import {
  LayoutDashboard, Image, Package, Tags, Users,
  CreditCard, Gift, Megaphone, Bell, Trophy, FileText, Settings,
  ChevronsLeft, ChevronsRight,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const LOGO_URL =
  'https://res.cloudinary.com/dnh5owdpa/image/upload/v1781836066/LOGO_HJ_PNG_c3ktnh.png';

// Menu asli tidak diubah, hanya dikelompokkan per section
const menuGroups = [
  {
    title: 'Ringkasan',
    items: [
      { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Konten & Katalog',
    items: [
      { path: '/banner', label: 'Manajemen Banner', icon: Image },
      { path: '/katalog', label: 'Katalog Produk', icon: Package },
      { path: '/kategori', label: 'Kategori Produk', icon: Tags },
      { path: '/promo', label: 'Promo & Campaign', icon: Megaphone },
      { path: '/pengumuman', label: 'Pengumuman', icon: Bell },
    ],
  },
  {
    title: 'Operasional',
    items: [
      { path: '/agen', label: 'Data Agen', icon: Users },
      { path: '/transaksi', label: 'Transaksi & Poin', icon: CreditCard },
      { path: '/hadiah', label: 'Hadiah & Penukaran', icon: Gift },
    ],
  },
  {
    title: 'Analitik & Sistem',
    items: [
      { path: '/leaderboard', label: 'Leaderboard', icon: Trophy },
      { path: '/laporan', label: 'Laporan', icon: FileText },
      { path: '/pengaturan', label: 'Pengaturan', icon: Settings },
    ],
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? 'w-[72px]' : 'w-64'
      } bg-white border-r border-border flex flex-col h-full shrink-0 transition-[width] duration-200`}
    >
      {/* Header: logo + tulisan */}
      <NavLink
        to="/"
        className={`h-16 flex items-center gap-3 border-b border-border ${
          collapsed ? 'justify-center px-0' : 'px-5'
        }`}
      >
        {logoError ? (
          <div className="w-10 h-10 shrink-0 rounded-lg bg-navy text-white flex items-center justify-center font-bold text-sm">
            HJ
          </div>
        ) : (
          <img
            src={LOGO_URL}
            alt="HJ Karpet"
            className="w-10 h-10 shrink-0 object-contain"
            onError={() => setLogoError(true)}
          />
        )}

        {!collapsed && (
          <div className="leading-tight overflow-hidden">
            <p className="font-bold text-navy truncate">HJKARPET</p>
            <p className="text-xs text-subText truncate">Admin Program</p>
          </div>
        )}
      </NavLink>

      {/* Daftar menu */}
      <div className="flex-1 overflow-y-auto py-3">
        <nav className="px-3">
          {menuGroups.map((group, i) => (
            <div key={group.title} className={i > 0 ? 'mt-4' : ''}>
              {collapsed ? (
                i > 0 && <div className="border-t border-border mb-2" />
              ) : (
                <p className="px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-subText/70">
                  {group.title}
                </p>
              )}

              <div className="space-y-1">
                {group.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    title={collapsed ? item.label : undefined}
                    className={({ isActive }) =>
                      `flex items-center gap-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                        collapsed ? 'justify-center px-0' : 'px-3'
                      } ${
                        isActive
                          ? 'bg-light text-primary'
                          : 'text-subText hover:bg-light hover:text-primary'
                      }`
                    }
                  >
                    <item.icon size={20} className="shrink-0" />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer: peran + tombol sembunyikan */}
      <div className="border-t border-border p-3">
        {!collapsed && (
          <div className="px-3 pb-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-subText/70">
              Peran Anda
            </p>
            <p className="text-sm font-medium text-navy">Super Admin</p>
          </div>
        )}

        <button
          onClick={() => setCollapsed((c) => !c)}
          title={collapsed ? 'Tampilkan menu' : 'Sembunyikan menu'}
          className={`w-full flex items-center gap-3 py-2.5 rounded-md text-sm text-subText hover:bg-light hover:text-primary transition-colors ${
            collapsed ? 'justify-center px-0' : 'px-3'
          }`}
        >
          {collapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
          {!collapsed && <span>Sembunyikan menu</span>}
        </button>
      </div>
    </aside>
  );
}