// app/page.tsx (Next.js 13+ dengan app router)
// atau pages/index.tsx kalau pake pages router

import { Metadata } from "next";
import DemoForm from './components/DemoForm';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: "Smart Lock Kost & Hotel – PIN Berkala | Luckey",
  description:
    "Luckey, smart lock kost & hotel dengan PIN berkala & tagihan otomatis. Opsi sewa atau beli.",
};

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[url('/smartlock.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/60 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Smart Lock untuk Kost & Hotel di Indonesia
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Atur akses dengan PIN berkala, tagih otomatis, siap sewa atau beli.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="https://wa.me/6289506645921?text=Halo%2C%20saya%20tertarik%20dengan%20Luckey%20Smart%20Lock.%20Boleh%20info%20lebih%20lanjut%3F"
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
          >
            Chat WhatsApp
          </a>
          <a
            href="#form"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Minta Demo
          </a>
        </div>
      </section>

      {/* Manfaat */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Mengapa Luckey?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-black">PIN Berkala</h3>
            <p className="text-gray-600 mt-2">
              Kode akses berganti otomatis setiap periode sewa.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-black">Tagihan Otomatis</h3>
            <p className="text-gray-600 mt-2">
              Kunci nonaktif otomatis saat melewati jatuh tempo pembayaran.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg  text-black">Opsi Sewa</h3>
            <p className="text-gray-600 mt-2">
              Mulai dengan biaya ringan tanpa modal besar.
            </p>
          </div>
        </div>
      </section>

      {/* Fitur */}
      <section id="features" className="py-16 px-6 bg-gray-50 text-center scroll-mt-16">
        <h2 className="text-3xl font-bold mb-8 text-black">Fitur Utama</h2>
        <p className="text-gray-600">
          PIN berkala, Penagihan Otomatis, Aplikasi Admin, dan Integrasi.
        </p>
      </section>

      {/* Produk */}
      <section id="products" className="py-16 px-6 max-w-5xl mx-auto scroll-mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Produk</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img 
                src="/door.png" 
                alt="Smart Lock dengan Handle" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-lg">Smart Lock dengan Handle</h3>
            <p className="text-gray-600">Akses via PIN, kartu, dan aplikasi.</p>
          </div>
          <div className="p-6 border rounded-xl overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img 
                src="/tanpa-handle.jpeg" 
                alt="Smart Lock tanpa Handle" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-lg">Smart Lock tanpa Handle</h3>
            <p className="text-gray-600">Cocok untuk pintu sliding atau existing handle.</p>
          </div>
          <div className="p-6 border rounded-xl overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img 
                src="/admin.png" 
                alt="Aplikasi Admin Dashboard" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-lg">Aplikasi Admin</h3>
            <p className="text-gray-600">Dashboard monitoring & manajemen akses.</p>
          </div>
        </div>
      </section>

      {/* Harga */}
      <section id="pricing" className="py-16 px-6 bg-gray-50 text-center scroll-mt-16">
        <h2 className="text-3xl font-bold mb-8 text-black">Harga</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-black">Sewa</h3>
            <p className="text-gray-600">Mulai Rp 600.000 / pintu / bulan</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-black">Beli</h3>
            <p className="text-gray-600">Mulai Rp 1.500.000 / unit</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 max-w-3xl mx-auto scroll-mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          <details className="p-4 border rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer">Apa itu PIN berkala?</summary>
            <p className="text-gray-600 mt-4 pl-4">
              PIN berkala adalah sistem kode akses yang berganti secara otomatis sesuai periode sewa. Misalnya, setiap bulan sistem akan generate PIN baru untuk penghuni yang sudah bayar sewa.
            </p>
          </details>
          <details className="p-4 border rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer">Bisa sewa sistemnya?</summary>
            <p className="text-gray-600 mt-4 pl-4">
              Ya, kami menyediakan opsi sewa dengan biaya bulanan yang terjangkau. Ini termasuk perangkat smart lock, maintenance, dan akses ke dashboard admin.
            </p>
          </details>
          <details className="p-4 border rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer">Apakah bisa nonaktif otomatis saat telat bayar?</summary>
            <p className="text-gray-600 mt-4 pl-4">
              Ya, sistem dapat diatur untuk menonaktifkan akses secara otomatis jika melewati tanggal jatuh tempo pembayaran. Fitur ini bisa dikustomisasi sesuai kebijakan properti Anda.
            </p>
          </details>
          <details className="p-4 border rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer">Kompatibel dengan apa saja?</summary>
            <p className="text-gray-600 mt-4 pl-4">
              Smart lock kami kompatibel dengan mayoritas pintu yang menggunakan kunci mekanik standar. Kami juga menyediakan layanan survey gratis untuk memastikan kompatibilitas.
            </p>
          </details>
          <details className="p-4 border rounded-xl hover:shadow-md transition-shadow">
            <summary className="font-semibold cursor-pointer">Ada garansi instalasi?</summary>
            <p className="text-gray-600 mt-4 pl-4">
              Ya, kami memberikan garansi instalasi dan perangkat selama masa sewa/pembelian. Tim teknisi kami siap membantu jika ada kendala teknis.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Akhir */}
      <section
        id="form"
        className="py-16 px-6 bg-indigo-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Siap Mencoba Luckey?</h2>
        <DemoForm />
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-xl text-white mb-4">Luckey</h3>
            <p className="text-sm leading-relaxed">
              Jl. Zeni Ad II A No.14, RT.6/RW.3, Rawajati, 
              <br />Kec. Pancoran, Kota Jakarta Selatan, 
              <br />DKI Jakarta 12750
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-white mb-4">Hubungi Kami</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/luckey.id" className="text-gray-300 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://wa.me/6289506645921" className="text-gray-300 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p>© {new Date().getFullYear()} Luckey. All rights reserved.</p>
        </div>
      </footer>

      {/* WA Floating */}
      <a
        href="https://wa.me/6289506645921?text=Halo%2C%20saya%20tertarik%20dengan%20Luckey%20Smart%20Lock.%20Boleh%20info%20lebih%20lanjut%3F"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}
