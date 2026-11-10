export interface ProjectChartData {
  type: 'line' | 'bar' | 'donut' | 'scatter';
  title: string;
  subtitle?: string;
  data: {
    label: string;
    value: number;
    secondaryValue?: number;
    color?: string;
    formatted?: string;
  }[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: 'Business Intelligence' | 'Python & Analytics' | 'SQL & Database';
  shortDescription: string;
  datasetName: string;
  datasetSize: string;
  tools: string[];
  githubUrl: string;
  dashboardUrl?: string;
  kpis: { label: string; value: string; change?: string; note?: string }[];
  problemStatement: string;
  datasetOverview: string;
  dataCleaningSteps: string[];
  codeSnippet?: {
    language: 'sql' | 'python';
    title: string;
    code: string;
  };
  exploratoryAnalysis: string[];
  visualizations: ProjectChartData[];
  keyFindings: string[];
  businessRecommendations: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Fellowship' | 'Academic';
  points: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
  url: string;
  skills: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Competent';
    experience: string;
    focus: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Ayudha Kusuma Rahmadhani",
  shortName: "Ayudha Kusuma",
  title: "DATA ANALYST",
  headline: "Turning Data Into Actionable Insights.",
  description:
    "Mahasiswa Teknik Informatika STMIK Widya Cipta Dharma dengan minat mendalam pada data analysis, data visualization, dan business intelligence. Terbiasa mengolah data penjualan riil toko kelontong dan ritel untuk menemukan pola belanja, mendeteksi produk terlaris, dan membantu pemilik bisnis mengambil keputusan yang tepat.",
  email: "yudhadeux@gmail.com",
  campus: "STMIK Widya Cipta Dharma",
  major: "Teknik Informatika",
  location: "Samarinda, Kalimantan Timur (Open to Remote / Hybrid)",
  linkedin: "https://linkedin.com/in/ayudha-kusuma",
  github: "https://github.com/yudhadeux",
  photoUrl: "/assets/ayudha-kusuma.jpeg",
  stats: [
    { value: "4+", label: "Completed Projects", detail: "Analisis data UMKM & ritel praktis" },
    { value: "3+", label: "Core Data Tools", detail: "Excel, SQL, Python, Power BI" },
    { value: "3.75", label: "IPK / GPA", detail: "Teknik Informatika STMIK WiCiDa" },
    { value: "100%", label: "Curious About Data", detail: "Berorientasi solusi bisnis nyata" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Data Analysis",
    description: "Pengolahan data, formula analitis, dan eksplorasi data pemula hingga menengah",
    skills: [
      { name: "Microsoft Excel", level: "Advanced", experience: "2+ Tahun", focus: "Pivot Table, VLOOKUP/XLOOKUP, IF nested, Conditional Formatting" },
      { name: "SQL", level: "Proficient", experience: "2+ Tahun", focus: "SELECT, WHERE, GROUP BY, HAVING, JOIN, Aggregate Functions" },
      { name: "Python", level: "Proficient", experience: "1.5+ Tahun", focus: "Data wrangling, script otomatisasi, pembersihan data" },
      { name: "Pandas & NumPy", level: "Proficient", experience: "1.5+ Tahun", focus: "DataFrame manipulation, filtering, sorting, agregasi nilai" }
    ]
  },
  {
    category: "Data Visualization",
    description: "Pembuatan grafik komunikatif dan dashboard analitik interaktif",
    skills: [
      { name: "Power BI", level: "Proficient", experience: "1.5+ Tahun", focus: "Dashboard visual, kartu KPI, hubungan relasi tabel, filter interaktif" },
      { name: "Tableau", level: "Competent", experience: "1+ Tahun", focus: "Bar chart, Line trend, Donut chart, visual storytelling" },
      { name: "Matplotlib & Seaborn", level: "Proficient", experience: "1.5+ Tahun", focus: "Histogram, boxplot, barplot, visualisasi tren penjualan" }
    ]
  },
  {
    category: "Database",
    description: "Penyimpanan dan perancangan skema basis data relasional",
    skills: [
      { name: "MySQL", level: "Proficient", experience: "2+ Tahun", focus: "DDL, DML, perancangan tabel relasi, query transaksi penjualan" },
      { name: "PostgreSQL", level: "Competent", experience: "1+ Tahun", focus: "Query dasar, indexing, agregasi data transaksi" }
    ]
  },
  {
    category: "Tools & Workflow",
    description: "Lingkungan kerja pemrograman dan dokumentasi data notebook",
    skills: [
      { name: "Google Colab", level: "Proficient", experience: "2+ Tahun", focus: "Notebook berbasis cloud, pembersihan dataset, visualisasi cepat" },
      { name: "Jupyter Notebook", level: "Proficient", experience: "2+ Tahun", focus: "Eksplorasi data interaktif, dokumentasi analisis" },
      { name: "Git & GitHub", level: "Competent", experience: "1.5+ Tahun", focus: "Version control, repositori kode analisis data" }
    ]
  }
];

export const PROJECTS: ProjectDetail[] = [
  {
    id: "warung-baim-sales-analysis",
    title: "Analisis Jual Beli Barang di Warung Baim",
    category: "Business Intelligence",
    shortDescription:
      "Menganalisis 1.250 transaksi buku kas Warung Baim untuk mengidentifikasi barang paling laris, jam belanja terpadat, dan mengoptimalkan persediaan stok sembako.",
    datasetName: "Buku Kas & Transaksi Harian Warung Baim (Warung Kelontong)",
    datasetSize: "1.250 transaksi · 45 varian barang sembako · Periode 3 Bulan",
    tools: ["Excel", "SQL", "Power BI"],
    githubUrl: "https://github.com/yudhadeux/analisis-warung-baim",
    dashboardUrl: "#",
    kpis: [
      { label: "Total Omzet Bulanan", value: "Rp 18.4 Juta", change: "+12.5% MoM", note: "Stabil di awal bulan" },
      { label: "Rata-rata Transaksi", value: "42 Trx / Hari", change: "Puncak hari Sabtu", note: "Hari pasar lingkungan" },
      { label: "Metode Pembayaran", value: "78% Tunai", change: "22% QRIS", note: "QRIS mulai diadopsi pemuda" },
      { label: "Rata-rata Belanja", value: "Rp 24.500", change: "Per struk/nota", note: "Kebutuhan harian rumah" }
    ],
    problemStatement:
      "Warung Baim adalah toko kelontong di lingkungan perumahan yang mengalami kendala manajemen stok: barang kebutuhan pokok yang cepat laku (beras, minyak goreng, mie instan) sering kehabisan stok mendadak, sementara barang lambat laku (sabun cuci kemasan besar dan bumbu dapur tertentu) menumpuk hingga mendekati masa kadaluarsa. Pemilik warung juga belum memiliki pencatatan digital mengenai waktu paling ramai pembeli.",
    datasetOverview:
      "Dataset dibuat dari digitalisasi buku catatan kas Warung Baim selama 3 bulan terakhir yang mencakup Nomor Transaksi, Tanggal, Jam Pembelian, Nama Barang, Kategori (Sembako, Makanan Ringan, Minuman, Kebutuhan Rumah), Jumlah (Qty), Harga Satuan, Total Bayar, dan Metode Bayar (Tunai / QRIS).",
    dataCleaningSteps: [
      "Menginput dan memvalidasi catatan manual kertas ke lembar kerja Microsoft Excel terstruktur.",
      "Melakukan standarisasi penulisan nama produk (misal: 'Indomie Goreng' diseragamkan dengan 'Mie Goreng Indomie').",
      "Membuat kolom baru Jam Belanja (Hour of Day) untuk mengelompokkan waktu transaksi: Pagi (06:00-11:00), Siang (11:00-15:00), dan Sore/Malam (15:00-21:00).",
      "Menghapus 14 entri duplikat dan transaksi retur barang rusak karena kemasan bocor."
    ],
    codeSnippet: {
      language: "sql",
      title: "Query SQL: Menghitung 5 Barang Paling Laris & Total Pendapatan",
      code: `-- Query SQL untuk menentukan 5 produk paling laris di Warung Baim
SELECT 
  nama_barang,
  kategori_barang,
  SUM(jumlah_beli) AS total_unit_terjual,
  SUM(total_harga) AS total_omzet,
  ROUND(AVG(total_harga / jumlah_beli), 0) AS harga_rata_rata
FROM transaksi_warung_baim
GROUP BY nama_barang, kategori_barang
ORDER BY total_unit_terjual DESC
LIMIT 5;`
    },
    exploratoryAnalysis: [
      "5 produk teratas (Beras 5kg, Minyak Goreng 1L, Mie Instan Goreng, Telur Ayam 1kg, dan Gula Pasir) menyumbang 64% dari perputaran omzet harian warung.",
      "Terdapat dua gelombang jam belanja paling ramai: Pagi hari pukul 06.30 - 08.30 (didominasi ibu rumah tangga membeli bahan masakan pagi) dan Sore hari pukul 16.30 - 19.00 (pembelian rokok, mie instan, dan minuman dingin).",
      "Pembayaran non-tunai (QRIS) meningkat signifikan pada rentang waktu sore hingga malam hari, sebagian besar digunakan oleh pelanggan usia 18-35 tahun."
    ],
    visualizations: [
      {
        type: "bar",
        title: "5 Barang Paling Laris Terjual di Warung Baim (Unit)",
        subtitle: "Beras, minyak goreng, dan mie instan mendominasi volume penjualan",
        data: [
          { label: "Beras 5kg", value: 380, color: "#0d9488" },
          { label: "Minyak 1L", value: 310, color: "#0284c7" },
          { label: "Mie Instan", value: 295, color: "#4f46e5" },
          { label: "Telur 1kg", value: 240, color: "#059669" },
          { label: "Gula Pasir", value: 185, color: "#f59e0b" }
        ]
      },
      {
        type: "line",
        title: "Tren Kepadatan Transaksi Berdasarkan Jam Buka Warung (06:00 - 21:00)",
        subtitle: "Puncak keramaian terjadi pada pagi hari (07.00) dan sore hari (18.00)",
        data: [
          { label: "06:00", value: 18 },
          { label: "07:00", value: 58 },
          { label: "08:00", value: 45 },
          { label: "10:00", value: 22 },
          { label: "12:00", value: 28 },
          { label: "14:00", value: 19 },
          { label: "16:00", value: 36 },
          { label: "18:00", value: 64 },
          { label: "20:00", value: 32 }
        ]
      },
      {
        type: "donut",
        title: "Metode Pembayaran Konsumen Warung Baim",
        subtitle: "Mayoritas transaksi masih menggunakan uang tunai",
        data: [
          { label: "Uang Tunai (Cash)", value: 78, color: "#0d9488" },
          { label: "QRIS / Transfer", value: 22, color: "#0284c7" }
        ]
      }
    ],
    keyFindings: [
      "Kategori sembako adalah penopang perputaran arus kas utama Warung Baim dengan perputaran stok rata-rata 3-5 hari habis.",
      "Kehabisan stok minyak goreng dan telur ayam pada jam pagi mengakibatkan potensi kehilangan omzet sekitar Rp 120.000 per hari.",
      "Pelanggan yang berbelanja di atas Rp 50.000 memiliki kecenderungan 70% lebih besar menggunakan pembayaran QRIS."
    ],
    businessRecommendations: [
      "Terapkan aturan Re-order Point (ROP): Lakukan pemesanan ulang sembako ke agen grosir saat stok beras sisa 3 karung dan minyak sisa 1 dus.",
      "Siapkan uang kembalian pecahan kecil (Rp 2.000, Rp 5.000, Rp 10.000) sebelum jam buka pukul 06.00 pagi guna mempercepat antrean pembeli.",
      "Buat paket bundling hemat awal bulan (misal: 'Paket Hemat Masak: Beras 5kg + Minyak 1L + Telur 1kg') dengan diskon seribu rupiah untuk menarik loyalitas warga sekitar."
    ]
  },
  {
    id: "indomaret-retail-sales-analysis",
    title: "Analisis Ekosistem & Pola Penjualan Gerai Indomaret",
    category: "Python & Analytics",
    shortDescription:
      "Menganalisis 3.800 transaksi POS Indomaret menggunakan Python untuk mengidentifikasi hubungan pembelian produk (Market Basket), kategori terlaris, dan jam puncak belanja.",
    datasetName: "POS Transaction Dataset Gerai Indomaret",
    datasetSize: "3.800 struk belanja · 12 kategori produk · 1 bulan observasi",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/yudhadeux/analisis-penjualan-indomaret",
    dashboardUrl: "#",
    kpis: [
      { label: "Total Transaksi", value: "3.800 Struk", change: "+8.4% vs bulan lalu", note: "Data kasir POS" },
      { label: "Rata-rata Keranjang", value: "Rp 46.200", change: "Basket size", note: "Rata-rata belanja per orang" },
      { label: "Item per Transaksi", value: "2.8 Item", change: "Konsisten", note: "Didominasi minuman & snack" },
      { label: "Transaksi Non-Tunai", value: "64.5%", change: "+5.1%", note: "i.saku, QRIS, e-Money" }
    ],
    problemStatement:
      "Manajemen gerai ritel modern Indomaret ingin memaksimalkan pendapatan dari produk impulsif (*impulse buying*) yang diletakkan di dekat area kasir dan rak depan. Gerai membutuhkan analisis data untuk mengetahui kombinasi produk yang paling sering dibeli secara bersamaan serta kategori yang menyumbang porsi pendapatan terbesar.",
    datasetOverview:
      "Dataset berisikan record transaksi point of sale (POS) harian mencakup Transaction ID, Waktu Transaksi, Kategori Produk (Minuman Dingin, Roti & Kue, Makanan Ringan, Personal Care, Makanan Instan), Jumlah Unit, Harga, Total Belanja, dan Metode Pembayaran.",
    dataCleaningSteps: [
      "Melakukan parsing kolom Waktu Transaksi menggunakan library Pandas `to_datetime()` untuk memisahkan tanggal, hari, dan jam belanja.",
      "Menghilangkan transaksi uji coba sistem internal kasir (transaksi dengan nilai Rp 0).",
      "Membuat tabel pivot hubungan antar-kategori untuk mencari pasangan produk yang dibeli dalam satu struk yang sama.",
      "Mengelompokkan transaksi menjadi hari kerja (Weekday) dan akhir pekan (Weekend) untuk membandingkan lonjakan pembelian."
    ],
    codeSnippet: {
      language: "python",
      title: "Python Script: Analisis Frekuensi Pembelian Kategori Produk Menggunakan Pandas",
      code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Membaca dataset transaksi Indomaret
df = pd.read_csv('transaksi_indomaret.csv')
df['waktu_transaksi'] = pd.to_datetime(df['waktu_transaksi'])
df['jam'] = df['waktu_transaksi'].dt.hour

# Menghitung total omzet per kategori
kategori_omzet = df.groupby('kategori_produk')['total_harga'].sum().sort_values(ascending=False)
print("Omzet per Kategori:\\n", kategori_omzet)

# Menghitung pasangan produk (keranjang belanja)
struk_kategori = df.groupby('transaction_id')['kategori_produk'].apply(list)
kombinasi_kopi_roti = struk_kategori.apply(
    lambda x: ('Minuman Kopi' in x) and ('Roti' in x)
).mean() * 100

print(f"\\nPersentase struk yang membeli Kopi bersamaan dengan Roti: {kombinasi_kopi_roti:.2f}%")`
    },
    exploratoryAnalysis: [
      "Kategori Minuman Siap Minum (*Ready to Drink*) dan Makanan Ringan menyumbang 52.8% dari seluruh transaksi di gerai Indomaret.",
      "Analisis keranjang belanja menunjukkan korelasi kuat: 43.6% pembeli yang membeli minuman kopi botol dingin juga membeli roti manis dalam satu struk belanja.",
      "Waktu puncak belanja hari kerja berada pada jam istirahat siang (12:00 - 13:30) dan jam pulang kantor (17:30 - 20:00), sedangkan pada akhir pekan transaksi merata sepanjang siang hingga malam."
    ],
    visualizations: [
      {
        type: "bar",
        title: "Kontribusi Omzet Berdasarkan Kategori Produk (Juta Rupiah)",
        subtitle: "Minuman dingin dan makanan ringan menjadi motor utama penjualan gerai",
        data: [
          { label: "Minuman Dingin", value: 68.4, color: "#0d9488" },
          { label: "Makanan Ringan", value: 54.2, color: "#0284c7" },
          { label: "Kebutuhan Pribadi", value: 36.8, color: "#4f46e5" },
          { label: "Makanan Instan", value: 28.5, color: "#059669" },
          { label: "Susu & Olahan", value: 24.1, color: "#f59e0b" }
        ]
      },
      {
        type: "line",
        title: "Perbandingan Pola Kunjungan: Hari Kerja (Weekday) vs Akhir Pekan (Weekend)",
        subtitle: "Hari kerja memiliki dua lonjakan tajam pada jam istirahat dan jam pulang kerja",
        data: [
          { label: "08:00", value: 24, secondaryValue: 18 },
          { label: "10:00", value: 38, secondaryValue: 42 },
          { label: "12:00", value: 85, secondaryValue: 68 },
          { label: "14:00", value: 46, secondaryValue: 62 },
          { label: "16:00", value: 58, secondaryValue: 74 },
          { label: "18:00", value: 92, secondaryValue: 88 },
          { label: "20:00", value: 76, secondaryValue: 84 },
          { label: "22:00", value: 32, secondaryValue: 48 }
        ]
      },
      {
        type: "donut",
        title: "Metode Pembayaran Transaksi di Indomaret",
        subtitle: "Mayoritas konsumen menggunakan pembayaran digital dan uang elektronik",
        data: [
          { label: "E-Wallet (QRIS/i.saku)", value: 42, color: "#0d9488" },
          { label: "Kartu Debit / Flazz", value: 22, color: "#0284c7" },
          { label: "Uang Tunai (Cash)", value: 36, color: "#64748b" }
        ]
      }
    ],
    keyFindings: [
      "Produk yang ditaruh di dekat jalur kasir memiliki kecepatan perputaran 2.4x lebih cepat dibanding produk di lorong belakang.",
      "Pembeli dengan metode non-tunai (i.saku / e-wallet) membelanjakan nominal rata-rata Rp 12.000 lebih banyak per transaksi dibanding pembeli tunai.",
      "Produk private label Indomaret (seperti air mineral dan tissue Indomaret) memiliki margin keuntungan kotor 18% lebih tinggi dibanding merek nasional."
    ],
    businessRecommendations: [
      "Letakkan rak pajangan roti manis tepat di samping showcase pendingin minuman kopi untuk mendorong pembelian impulsif instan.",
      "Buat program promo bundling resmi 'Kopi + Roti' hemat Rp 2.500 khusus pada jam makan siang (11.30 - 13.30).",
      "Gunakan promosi cashback poin anggota i.saku / Indomaret Poinku untuk menaikkan basket size belanja di atas Rp 50.000."
    ]
  },
  {
    id: "kedai-kopi-boba-analysis",
    title: "Analisis Penjualan Menu Favorit Kedai Kopi & Minuman Boba",
    category: "Business Intelligence",
    shortDescription:
      "Menganalisis 2.400 pesanan kedai minuman lokal untuk menentukan menu terlaris, preferensi kadar manis, serta efektivitas promo diskon online ojek online.",
    datasetName: "Catatan Pemesanan Kasir & Aplikasi Ojek Online Kedai Kopi",
    datasetSize: "2.400 cup pesanan · 18 varian menu · Data 6 bulan",
    tools: ["Excel", "SQL", "Tableau"],
    githubUrl: "https://github.com/yudhadeux/analisis-kopi-boba",
    dashboardUrl: "#",
    kpis: [
      { label: "Total Cup Terjual", value: "2.400 Cup", change: "+15.2% MoM", note: "Kopi & Boba" },
      { label: "Total Penjualan", value: "Rp 38.6 Juta", change: "Stabil", note: "Bulan terakhir" },
      { label: "Penjualan Online", value: "58.4%", change: "+8% share", note: "GoFood & GrabFood" },
      { label: "Harga Rata-rata Cup", value: "Rp 19.500", change: "Harga bersahabat", note: "Segmen pelajar & pekerja" }
    ],
    problemStatement:
      "Pemilik kedai minuman lokal 'Kopi & Boba Nusantara' menghadapi variasi menu yang terlalu banyak (18 varian), namun beberapa menu jarang sekali dipesan sehingga bahan baku sirup dan boba sering terbuang sia-sia. Pemilik ingin menyederhanakan menu, memahami tingkat kemanisan (sugar level) yang disukai pembeli, dan mengukur efektivitas diskon promo online.",
    datasetOverview:
      "Dataset mencakup Order ID, Tanggal & Jam, Nama Menu, Kategori (Espresso-based, Milk Tea / Boba, Non-Coffee), Ukuran Cup (Regular, Large), Pilihan Sugar Level (100% Normal, 70% Less, 50% Half, 0% No Sugar), Channel Pemesanan (Dine-in / Takeaway / Online), dan Nilai Transaksi.",
    dataCleaningSteps: [
      "Menggabungkan data struk pesanan kasir fisik (POS) dengan laporan rekapitulasi penjualan merchant aplikasi online.",
      "Menyeragamkan format penulisan sugar level dan topping tambahan (boba jelly, grass jelly, egg pudding).",
      "Membuat calculated field untuk menghitung selisih harga kotor dan harga bersih setelah potongan komisi platform online (20%).",
      "Membersihkan pesanan fiktif atau pesanan batal dari sistem."
    ],
    codeSnippet: {
      language: "sql",
      title: "Query SQL: Proporsi Penjualan per Varian Menu Minuman",
      code: `-- Menghitung kontribusi omzet tiap varian minuman
SELECT 
  nama_menu,
  kategori_menu,
  COUNT(order_id) AS total_cup_terjual,
  ROUND(COUNT(order_id)::numeric / SUM(COUNT(order_id)) OVER () * 100, 1) AS share_penjualan_pct,
  SUM(harga_bersih) AS total_omzet_bersih
FROM log_pesanan_minuman
WHERE status_pesanan = 'Selesai'
GROUP BY nama_menu, kategori_menu
ORDER BY total_cup_terjual DESC;`
    },
    exploratoryAnalysis: [
      "Dua menu teratas (Kopi Susu Gula Aren dan Brown Sugar Boba Fresh Milk) menyumbang 58.2% dari total pesanan cup yang terjual.",
      "64% pelanggan lebih menyukai opsi 'Less Sugar (70%)' dan 'Half Sugar (50%)', menandakan tingginya kesadaran konsumen terhadap kadar gula yang tidak terlalu manis.",
      "Penjualan melalui aplikasi online menghasilkan volume pesanan 58% lebih banyak, namun margin keuntungan bersih per cup lebih tipis akibat komisi potongan platform ojek online."
    ],
    visualizations: [
      {
        type: "bar",
        title: "Top 5 Menu Paling Laris (Jumlah Cup Terjual)",
        subtitle: "Kopi Susu Aren dan Brown Sugar Boba menjadi menu bintang kedai",
        data: [
          { label: "Kopi Aren", value: 840, color: "#0d9488" },
          { label: "Brown Sugar Boba", value: 550, color: "#0284c7" },
          { label: "Matcha Latte", value: 380, color: "#4f46e5" },
          { label: "Americano", value: 290, color: "#059669" },
          { label: "Choco Hazelnut", value: 210, color: "#f59e0b" }
        ]
      },
      {
        type: "donut",
        title: "Preferensi Kadar Gula (Sugar Level) Pelanggan",
        subtitle: "Mayoritas pelanggan memilih kadar gula di bawah 100% (Less / Half Sugar)",
        data: [
          { label: "Less Sugar (70%)", value: 44, color: "#0d9488" },
          { label: "Half Sugar (50%)", value: 24, color: "#0284c7" },
          { label: "Normal Sugar (100%)", value: 22, color: "#f59e0b" },
          { label: "No Sugar (0%)", value: 10, color: "#64748b" }
        ]
      },
      {
        type: "line",
        title: "Tren Penjualan Harian: Hari Biasa vs Periode Diskon Promo Online",
        subtitle: "Promo online mendongkrak volume penjualan cup hingga 45% di akhir pekan",
        data: [
          { label: "Sen", value: 54, secondaryValue: 72 },
          { label: "Sel", value: 48, secondaryValue: 68 },
          { label: "Rab", value: 62, secondaryValue: 84 },
          { label: "Kam", value: 58, secondaryValue: 80 },
          { label: "Jum", value: 82, secondaryValue: 115 },
          { label: "Sab", value: 110, secondaryValue: 165 },
          { label: "Min", value: 105, secondaryValue: 158 }
        ]
      }
    ],
    keyFindings: [
      "Menu non-kopi berbahan sirup rasa buah hanya menyumbang kurang dari 5% penjualan namun menyerap biaya modal persediaan tinggi.",
      "Ukuran cup 'Large' menghasilkan margin keuntungan Rp 4.500 lebih tinggi per cup dibanding ukuran 'Regular'.",
      "Jam malam hari (19.00 - 22.00) merupakan waktu penjualan tertinggi untuk kategori menu Boba dan Non-Coffee bagi pelanggan anak muda."
    ],
    businessRecommendations: [
      "Rampingkan menu: Hapus 4 varian sirup yang tidak laku guna menekan biaya pemborosan bahan baku hingga Rp 1.500.000 per bulan.",
      "Tawarkan opsi 'Upsize Large Hemat' (cukup tambah Rp 3.000) di kasir untuk meningkatkan nilai transaksi rata-rata.",
      "Standarisasi takaran gula bawaan ke level 70% manis agar cita rasa lebih konsisten dan mengurangi penggunaan sirup gula sebesar 15%."
    ]
  },
  {
    id: "umkm-marketplace-review-analysis",
    title: "Analisis Ulasan & Rating Pelanggan Toko Online UMKM",
    category: "Python & Analytics",
    shortDescription:
      "Menganalisis 1.650 ulasan pembeli di marketplace untuk menemukan faktor penyebab ulasan negatif bintang 1-2 serta memetakan kepuasan pelanggan produk lokal.",
    datasetName: "Data Ulasan Pembeli Marketplace (Shopee / Tokopedia)",
    datasetSize: "1.650 ulasan teks & rating · 6 kategori produk UMKM",
    tools: ["Python", "Pandas", "Matplotlib", "Google Colab"],
    githubUrl: "https://github.com/yudhadeux/analisis-ulasan-umkm",
    dashboardUrl: "#",
    kpis: [
      { label: "Total Ulasan", value: "1.650 Ulasan", change: "100% terverifikasi", note: "Ulasan pembeli nyata" },
      { label: "Rata-rata Rating", value: "4.54 / 5.0", change: "Kategori baik", note: "Skala rating marketplace" },
      { label: "Kepuasan Positif", value: "86.2%", change: "Bintang 4 & 5", note: "Kualitas barang disukai" },
      { label: "Keluhan Pelanggan", value: "13.8%", change: "Bintang 1, 2, 3", note: "Fokus perbaikan operasional" }
    ],
    problemStatement:
      "Sebuah toko online UMKM lokal mengalami penurunan rating toko dari 4.8 menjadi 4.5 di marketplace dalam 3 bulan terakhir. Pemilik toko cemas dan mengira kualitas bahan produk mereka memburuk, padahal mereka belum mengetahui pasti apakah komplain pembeli berasal dari cacat produk, keterlambatan kurir pengiriman, atau kesalahan ukuran pakaian.",
    datasetOverview:
      "Dataset mencakup ID Ulasan, Tanggal Ulasan, Nama Produk, Kategori, Skor Rating (1 sampai 5 Bintang), Teks Ulasan Pembeli, dan Waktu Ekspedisi Pengiriman Barang (hari).",
    dataCleaningSteps: [
      "Mengimpor dataset ulasan ke Google Colab menggunakan pustaka Pandas.",
      "Melakukan pembersihan teks (*Text Preprocessing*): mengubah huruf menjadi huruf kecil (*case folding*), menghapus karakter tanda baca dan emotikon berulang.",
      "Membuat kategorisasi sentimen: Positif (Bintang 4-5), Netral (Bintang 3), dan Negatif (Bintang 1-2).",
      "Mengekstrak kata kunci yang sering muncul pada ulasan negatif (misal: 'lambat', 'pecah', 'robek', 'kurir', 'salah ukuran')."
    ],
    codeSnippet: {
      language: "python",
      title: "Python Script: Ekstraksi Frekuensi Kata Kunci Komplain Ulasan Negatif",
      code: `import pandas as pd
from collections import Counter
import re

# Load dataset ulasan
df = pd.read_csv('ulasan_umkm.csv')

# Filter ulasan bintang 1 dan 2
ulasan_negatif = df[df['rating'] <= 2]['teks_ulasan'].dropna()

# Ekstraksi kata kunci keluhan
kata_keluhan = []
stopwords = {'dan', 'yang', 'di', 'ke', 'dari', 'ini', 'itu', 'saya', 'tidak', 'tapi'}

for teks in ulasan_negatif:
    kata_bersih = re.findall(r'\\b[a-z]{4,}\\b', teks.lower())
    for k in kata_bersih:
        if k not in stopwords:
            kata_keluhan.append(k)

# 5 kata keluhan paling banyak muncul
top_keluhan = Counter(kata_keluhan).most_common(5)
for kata, frek in top_keluhan:
    print(f"Kata Keluhan: '{kata}' muncul sebanyak {frek} kali")`
    },
    exploratoryAnalysis: [
      "71.4% ulasan bintang 1 dan 2 ternyata mengeluhkan masalah eksternal pengiriman ekspedisi (paket terlambat lebih dari 5 hari dan kemasan luar plastik sobek), bukan karena cacat bahan produk.",
      "Produk pakaian memiliki keluhan dominan 'salah ukuran' karena pembeli tidak membaca rincian ukuran lingkar dada (size chart) di deskripsi produk.",
      "Pembeli yang menerima pesanan dalam waktu kurang dari 3 hari memiliki rata-rata rating 4.82 bintang."
    ],
    visualizations: [
      {
        type: "bar",
        title: "Penyebab Utama Ulasan Negatif (Bintang 1 & 2)",
        subtitle: "Faktor keterlambatan pengiriman dan kemasan rusak menjadi pemicu 71% komplain",
        data: [
          { label: "Kurir Lambat", value: 48, color: "#e11d48" },
          { label: "Kemasan Sobek", value: 23, color: "#ea580c" },
          { label: "Salah Ukuran", value: 16, color: "#f59e0b" },
          { label: "Jahitan / Fisik", value: 8, color: "#0284c7" },
          { label: "Warna Beda", value: 5, color: "#64748b" }
        ]
      },
      {
        type: "donut",
        title: "Distribusi Skor Bintang Ulasan Pembeli",
        subtitle: "86% ulasan berada pada level sangat puas (Bintang 4 dan 5)",
        data: [
          { label: "Bintang 5", value: 68, color: "#0d9488" },
          { label: "Bintang 4", value: 18, color: "#0284c7" },
          { label: "Bintang 3", value: 6, color: "#f59e0b" },
          { label: "Bintang 1-2", value: 8, color: "#e11d48" }
        ]
      },
      {
        type: "line",
        title: "Pengaruh Durasi Pengiriman terhadap Nilai Rating Pembeli",
        subtitle: "Pengiriman di atas 4 hari menurunkan rating kepuasan secara drastis",
        data: [
          { label: "1 Hari", value: 4.9 },
          { label: "2 Hari", value: 4.8 },
          { label: "3 Hari", value: 4.6 },
          { label: "4 Hari", value: 4.1 },
          { label: "5 Hari", value: 3.2 },
          { label: "6 Hari+", value: 2.1 }
        ]
      }
    ],
    keyFindings: [
      "Kualitas produk UMKM sebenarnya sudah sangat baik (hanya 8% keluhan jahitan/kualitas fisik produk).",
      "Kerusakan paket di ekspedisi terjadi karena toko hanya menggunakan plastik kresek tipis 1 lapis tanpa pelindung kardus atau bubble wrap.",
      "Ulasan pembeli yang menyertakan foto dan video memiliki kecenderungan memberikan bintang 5 jika kemasan luar diterima dalam kondisi rapi."
    ],
    businessRecommendations: [
      "Tingkatkan standar kemasan (*Packaging SOP*): Gunakan plastik bubble wrap tebal dan isolasi bertuliskan 'Fragile / Jangan Dibanting'.",
      "Evaluasi mitra ekspedisi: Nonaktifkan jasa pengiriman kurir yang memiliki catatan keterlambatan di atas 4 hari.",
      "Pasang tabel panduan ukuran pakaian (Size Chart) berbentuk infografis visual langsung pada foto produk kedua di marketplace agar pembeli tidak salah pilih ukuran."
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Mahasiswa & Project Data Analyst Pemula",
    company: "STMIK Widya Cipta Dharma (WiCiDa)",
    location: "Samarinda, Kalimantan Timur",
    period: "2023 - Sekarang",
    type: "Academic",
    points: [
      "Mengerjakan proyek studi kasus analisis data penjualan riil pada UMKM lokal (Warung Baim, gerai ritel Indomaret, dan kedai kopi lokal) menggunakan Excel, SQL, dan Python.",
      "Melakukan pembersihan data (*data cleaning*), penanganan nilai kosong, standarisasi format tanggal, dan pembuatan visualisasi grafik interaktif.",
      "Menyusun laporan rekomendasi bisnis praktis untuk membantu pemilik usaha mengoptimalkan stok barang cepat laku dan jadwal operasional toko."
    ]
  },
  {
    role: "Praktikan Basis Data & Analisis Sistem",
    company: "Laboratorium Komputer STMIK Widya Cipta Dharma",
    location: "Samarinda, Kalimantan Timur",
    period: "2023 - 2024",
    type: "Academic",
    points: [
      "Merancang skema relasi database (ERD), normalisasi tabel data (1NF-3NF), dan penulisan query SQL (SELECT, JOIN, GROUP BY, Aggregate Functions) di MySQL.",
      "Menganalisis aliran proses bisnis sistem informasi toko dan membuat visualisasi dashboard metrik performa penjualan sederhana."
    ]
  },
  {
    role: "Peserta Studi Independen / Sertifikasi Data Analytics",
    company: "Google Data Analytics & Dicoding Indonesia",
    location: "Online / Indonesia",
    period: "2023 - 2024",
    type: "Fellowship",
    points: [
      "Mempelajari siklus hidup analisis data lengkap: Ask, Prepare, Process, Analyze, Share, dan Act.",
      "Menyelesaikan latihan teknis data cleaning spreadsheet, query SQL lanjutan, visualisasi Tableau/Power BI, dan dasar pemrograman Python."
    ]
  }
];

export const EDUCATION = {
  degree: "S1 Teknik Informatika",
  university: "STMIK Widya Cipta Dharma",
  location: "Samarinda, Kalimantan Timur",
  period: "2021 - Sekarang (Aktif)",
  gpa: "3.75 / 4.00",
  highlights: [
    "Fokus studi: Analisis Data, Manajemen Basis Data (DBMS), Algoritma & Pemrograman Python, serta Rekayasa Perangkat Lunak.",
    "Aktif dalam eksplorasi proyek data analytics terapan pada studi kasus UMKM dan ritel lokal di Samarinda."
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    year: "2024",
    credentialId: "GDA-AKR-94821X",
    url: "https://coursera.org/verify/professional-cert/google-data-analytics",
    skills: ["Data Cleaning", "Spreadsheets", "SQL", "Tableau", "Data Storytelling"]
  },
  {
    name: "Microsoft Power BI for Data Analysis",
    issuer: "Microsoft Learn / Dicoding",
    year: "2024",
    credentialId: "MS-PBI-77291-AKR",
    url: "https://learn.microsoft.com",
    skills: ["Power BI", "Data Modeling", "Interactive Dashboards", "KPI Cards"]
  },
  {
    name: "Dasar Pemrograman Python untuk Analisis Data",
    issuer: "Dicoding Indonesia",
    year: "2023",
    credentialId: "DICODING-PY-DATA-5521",
    url: "https://dicoding.com",
    skills: ["Python", "Pandas", "NumPy", "Data Wrangling", "Matplotlib"]
  },
  {
    name: "SQL Relational Database Management",
    issuer: "HackerRank & STMIK WiCiDa",
    year: "2023",
    credentialId: "HR-SQL-AKR-3310",
    url: "https://hackerrank.com",
    skills: ["SQL Queries", "Joins", "Grouping", "Database Normalization"]
  }
];
