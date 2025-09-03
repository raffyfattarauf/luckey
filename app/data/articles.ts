export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Keunggulan Smart Lock untuk Bisnis Kost Modern",
    excerpt: "Pelajari bagaimana smart lock dapat meningkatkan efisiensi dan keamanan properti kost Anda.",
    content: `
# Keunggulan Smart Lock untuk Bisnis Kost Modern

Smart lock telah menjadi inovasi yang mengubah cara pengelolaan properti kost modern. Dengan teknologi yang semakin berkembang, sistem kunci pintar ini menawarkan berbagai keunggulan yang signifikan bagi pemilik dan penghuni kost.

## 1. Manajemen Akses yang Fleksibel

Salah satu keunggulan utama smart lock adalah kemampuannya dalam memberikan akses yang fleksibel. Pemilik kost dapat:
- Mengatur PIN yang berbeda untuk setiap penghuni
- Memberikan akses sementara untuk tamu
- Mengubah atau menghapus akses dari jarak jauh

## 2. Peningkatan Keamanan

Sistem smart lock modern dilengkapi dengan fitur keamanan canggih:
- Log akses real-time
- Notifikasi aktivitas mencurigakan
- Enkripsi data tingkat tinggi
- Backup sistem untuk situasi darurat

## 3. Efisiensi Operasional

Penggunaan smart lock dapat meningkatkan efisiensi operasional:
- Mengurangi kebutuhan manajemen kunci fisik
- Otomatisasi proses check-in dan check-out
- Monitoring penggunaan fasilitas
- Integrasi dengan sistem pembayaran

## 4. Pengalaman Penghuni yang Lebih Baik

Smart lock memberikan pengalaman yang lebih baik bagi penghuni:
- Tidak perlu membawa kunci fisik
- Akses mudah ke fasilitas umum
- Keamanan yang lebih terjamin
- Kemudahan dalam berbagi akses dengan tamu

## Kesimpulan

Implementasi smart lock dalam bisnis kost modern bukan lagi sekadar pilihan, tetapi kebutuhan yang dapat meningkatkan nilai properti dan efisiensi operasional secara signifikan.
    `,
    date: "1 September 2025",
    readTime: "5 min read",
    imageUrl: "/smartlock.jpg",
    category: "Smart Lock",
    author: {
      name: "Ahmad Syaifullah",
      avatar: "/admin.png"
    }
  },
  {
    id: 2,
    title: "Tips Memilih Smart Lock yang Tepat untuk Hotel",
    excerpt: "Panduan lengkap dalam memilih sistem smart lock yang sesuai dengan kebutuhan hotel Anda.",
    content: `
# Tips Memilih Smart Lock yang Tepat untuk Hotel

Pemilihan sistem smart lock yang tepat merupakan keputusan penting bagi pengelola hotel. Artikel ini akan membahas berbagai faktor yang perlu dipertimbangkan dalam memilih smart lock.

## 1. Pertimbangan Utama

Beberapa hal yang perlu diperhatikan:
- Kompatibilitas dengan pintu yang ada
- Kapasitas sistem
- Fitur keamanan
- Kemudahan penggunaan

## 2. Fitur Penting

Smart lock untuk hotel sebaiknya memiliki:
- Manajemen akses terpusat
- Integrasi dengan PMS
- Backup sistem
- Remote monitoring

## 3. Aspek Keamanan

Keamanan menjadi prioritas utama:
- Enkripsi data
- Proteksi fisik
- Audit trail
- Sistem alarm

## 4. Biaya dan Nilai

Pertimbangkan aspek finansial:
- Biaya awal
- Biaya maintenance
- ROI jangka panjang
- Garansi dan dukungan

## Kesimpulan

Pilihan smart lock yang tepat dapat meningkatkan efisiensi operasional hotel dan kepuasan tamu secara signifikan.
    `,
    date: "28 Agustus 2025",
    readTime: "7 min read",
    imageUrl: "/door.png",
    category: "Guide",
    author: {
      name: "Budi Santoso",
      avatar: "/admin.png"
    }
  },
  {
    id: 3,
    title: "Mengoptimalkan Pengelolaan Kost dengan Teknologi",
    excerpt: "Berbagai teknologi modern yang dapat membantu mengoptimalkan bisnis kost Anda.",
    content: `
# Mengoptimalkan Pengelolaan Kost dengan Teknologi

Teknologi modern telah membuka berbagai peluang untuk mengoptimalkan pengelolaan properti kost. Mari kita bahas bagaimana teknologi dapat meningkatkan efisiensi operasional.

## 1. Sistem Manajemen Properti

Implementasi sistem manajemen properti modern:
- Pencatatan otomatis
- Manajemen pembayaran
- Tracking maintenance
- Komunikasi dengan penghuni

## 2. Otomatisasi

Berbagai aspek yang dapat diotomatisasi:
- Sistem akses
- Pembayaran tagihan
- Reminder maintenance
- Notifikasi

## 3. Monitoring

Sistem monitoring modern meliputi:
- Keamanan 24/7
- Penggunaan listrik
- Kondisi fasilitas
- Aktivitas umum

## 4. Integrasi Sistem

Pentingnya integrasi antar sistem:
- Smart lock
- Pembayaran
- Monitoring
- Komunikasi

## Kesimpulan

Adopsi teknologi yang tepat dapat meningkatkan efisiensi dan profitabilitas bisnis kost secara signifikan.
    `,
    date: "25 Agustus 2025",
    readTime: "6 min read",
    imageUrl: "/admin.png",
    category: "Technology",
    author: {
      name: "Dewi Putri",
      avatar: "/admin.png"
    }
  },
  {
    id: 4,
    title: "Keamanan Digital: Perlindungan Smart Lock",
    excerpt: "Memahami aspek keamanan digital dalam penggunaan smart lock untuk properti Anda.",
    content: `
# Keamanan Digital: Perlindungan Smart Lock

Keamanan digital menjadi aspek crucial dalam implementasi sistem smart lock. Mari kita bahas bagaimana memastikan keamanan sistem Anda.

## 1. Enkripsi Data

Pentingnya enkripsi dalam sistem smart lock:
- End-to-end encryption
- Secure key management
- Data protection
- Privacy measures

## 2. Protokol Keamanan

Protokol yang perlu diterapkan:
- Multi-factor authentication
- Regular security updates
- Access monitoring
- Incident response

## 3. Backup Systems

Sistem backup yang diperlukan:
- Offline access options
- Power backup
- Data backup
- Emergency protocols

## 4. Best Practices

Praktik terbaik untuk keamanan:
- Regular audits
- Staff training
- Update policies
- Monitoring systems

## Kesimpulan

Keamanan digital merupakan investasi penting dalam implementasi sistem smart lock yang efektif.
    `,
    date: "20 Agustus 2025",
    readTime: "8 min read",
    imageUrl: "/tanpa-handle.jpeg",
    category: "Security",
    author: {
      name: "Rudi Hartono",
      avatar: "/admin.png"
    }
  }
];
