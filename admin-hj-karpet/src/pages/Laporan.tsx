import { FileText, Download, Calendar, TrendingUp, DollarSign, Award, Gift } from 'lucide-react';

export default function Laporan() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-mainText">Laporan & Analitik</h2>
          <p className="text-sm text-subText">Unduh dan pantau rekapitulasi transaksi, poin, serta performa agen.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-white border border-border text-mainText px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium">
            <Calendar size={18} />
            Filter Bulan: Maret 2026
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-navy transition-colors text-sm font-medium">
            <Download size={18} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Grid Ringkasan Laporan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-subText font-medium">Total Pembelian Bersih</p>
              <h3 className="text-2xl font-bold text-mainText mt-1">Rp 148.500.000</h3>
            </div>
            <div className="p-2 bg-light rounded-md text-primary"><DollarSign size={20} /></div>
          </div>
          <p className="text-xs text-success flex items-center mt-3"><TrendingUp size={14} className="mr-1"/> +18% dari bulan lalu</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-subText font-medium">Total Poin Diterbitkan</p>
              <h3 className="text-2xl font-bold text-mainText mt-1">1.485 Poin</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-md text-primary"><Award size={20} /></div>
          </div>
          <p className="text-xs text-subText mt-3">Dari 45 transaksi terverifikasi</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-subText font-medium">Total Hadiah Ditebus</p>
              <h3 className="text-2xl font-bold text-mainText mt-1">28 Item</h3>
            </div>
            <div className="p-2 bg-orange-50 rounded-md text-warning"><Gift size={20} /></div>
          </div>
          <p className="text-xs text-subText mt-3">Poin berhasil dipotong</p>
        </div>
      </div>

      {/* Tabel Kategori Laporan Tersedia */}
      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border bg-light/50">
          <h3 className="font-semibold text-mainText">Jenis Laporan Tersedia</h3>
        </div>
        <div className="divide-y divide-border">
          {[
            { judul: 'Laporan Rekapitulasi Transaksi Bulanan', desc: 'Detail seluruh pembelian bersih, diskon, dan status verifikasi.', file: 'rekap_transaksi_maret_2026.csv' },
            { judul: 'Laporan Perolehan & Penukaran Poin Agen', desc: 'Riwayat masuk dan keluarnya poin untuk setiap akun agen.', file: 'rekap_poin_agen_maret_2026.csv' },
            { judul: 'Laporan Aktivitas & Peringkat Tahunan', desc: 'Data lengkap performa agen selama siklus berjalan.', file: 'performa_agen_tahunan_2026.csv' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-light text-primary rounded-md mt-0.5"><FileText size={20} /></div>
                <div>
                  <h4 className="font-medium text-mainText">{item.judul}</h4>
                  <p className="text-xs text-subText mt-0.5">{item.desc}</p>
                </div>
              </div>
              <button className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-navy self-end sm:self-center">
                <Download size={16} /> Unduh ({item.file})
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}