import { en } from "./en";

export type TranslationSchema = {
  [K: string]: string | TranslationSchema;
};

export const id: TranslationSchema = {
  nav: {
    home: "Beranda",
    services: "Layanan",
    products: "Produk",
    company: "Perusahaan",
    contact: "Hubungi Kami",
  },
  hero: {
    tagline: "Teknologi Siap Masa Depan",
    heading: "Wujudkan",
    headingHighlight: "Ide",
    headingEnd: "menjadi Kenyataan",
    subtitle: "Memberdayakan inovasi melalui solusi teknologi cerdas",
    cta: "Jelajahi Solusi Kami",
    learnMore: "Pelajari Lebih Lanjut",
    stats: {
      iot: "Sistem IoT",
      cloud: "Infrastruktur Cloud",
      security: "Keamanan Siber",
      transformation: "Transformasi Digital",
    },
  },
  services: {
    title: "Layanan Kami",
    subtitle: "Solusi Teknologi Komprehensif",
    cta: "Jelajahi Semua Layanan",
  },
  solutions: {
    tagline: "Solusi Industri",
    heading: "Teknologi yang Disesuaikan untuk Setiap",
    headingHighlight: "Sektor",
    description: "Kami menjembatani kesenjangan antara teknologi kompleks dan tantangan bisnis nyata.",
  },
  testimonials: {
    tagline: "Testimoni",
    heading: "Dipercaya oleh",
    headingHighlight: "Pemimpin Industri",
  },
  about: {
    tagline: "Tentang Kami",
    heading: "Menginovasi Masa Depan",
    headingHighlight: "Teknologi",
    description: "PT AFTECH DAYA SOLUSINDO adalah perusahaan teknologi terkemuka yang berbasis di Cilacap, Jawa Tengah, dengan cabang di Jakarta. Kami berspesialisasi dalam transformasi digital, IoT, AI/ML, keamanan siber, dan integrasi sistem enterprise.",
    stats: {
      years: "Tahun Pengalaman",
      clients: "Klien Dilayani",
      engineers: "Insinyur Ahli",
      uptime: "Uptime Sistem",
    },
    cta: "Pelajari Tentang Kami",
  },
  footer: {
    tagline: "Wujudkan Ide Anda menjadi Kenyataan dengan AI & Internet of Things.",
    headquarters: "KANTOR PUSAT",
    jakarta: "CABANG JAKARTA",
    services: "Layanan",
    products: "Produk",
    company: "Perusahaan",
    blog: "Artikel & Blog",
    copyright: "Hak cipta dilindungi.",
  },
  contact: {
    title: "Hubungi",
    titleHighlight: "Kami",
    description: "Punya proyek atau butuh konsultasi teknis? Tim ahli kami siap membantu Anda.",
    form: {
      name: "Nama Lengkap",
      email: "Alamat Email",
      company: "Perusahaan",
      phone: "Telepon",
      message: "Pesan",
      send: "Kirim Pertanyaan",
      or: "ATAU",
      whatsapp: "Chat via WhatsApp",
      sent: "Pesan Terkirim!",
      sentDesc: "Terima kasih telah menghubungi kami. Kami akan merespons dalam 24 jam.",
    },
  },
  ai: {
    online: "Online",
    typing: "Mengetik...",
    placeholder: "Tanya AFTECH AI...",
    newChat: "Chat Baru",
    error: "Maaf, terjadi kesalahan. Silakan coba lagi.",
  },
  blog: {
    title: "Artikel &",
    titleHighlight: "Pembaruan",
    description: "Panduan, tren industri, dan pembaruan perusahaan dari tim AFTECH.",
    back: "Kembali ke Blog",
    readMore: "Baca Selengkapnya",
  },
  careers: {
    title: "Bergabung dengan",
    titleHighlight: "Tim Kami",
    description: "Bentuk masa depan teknologi enterprise bersama AFTECH.",
    positions: "Posisi Tersedia",
    apply: "Lamar Sekarang",
  },
};
