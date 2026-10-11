import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-50">
      
      <section className="relative w-full h-64 md:h-96 bg-blue-900 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-md">
          Selamat Datang di SMAS YADIKA 11
        </h1>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Fasilitas<br/>Istimewa</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-600 leading-relaxed text-justify">
              Sarana Dan Prasarana Yang Disediakan Oleh Lembaga Pendidikan Untuk Mendukung Proses Belajar Mengajar. Fasilitas Ini Mencakup Berbagai Aspek, Mulai Dari Ruang Kelas Yang Nyaman, Laboratorium, Perpustakaan, Hingga Fasilitas Olahraga Dan Teknologi. Tujuan Utama Fasilitas Pendidikan Adalah Menciptakan Lingkungan Belajar Yang Kondusif, Mendukung Perkembangan Siswa Secara Holistik, Dan Meningkatkan Kualitas Pendidikan.[cite: 13]
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Ruang Kelas", desc: "Ruang kelas yang luas dan nyaman dilengkapi dengan AC dan layar proyektor", img: "/kelas.jpg" },
            { title: "Lab Komputer", desc: "Ruang Lab Komputer yang nyaman dengan teknologi terupdate dan dilengkapi dengan AC dan layar proyektor", img: "/komputer.jpg" },
            { title: "Ruang Perpustakaan", desc: "Tersedia Banyak buku - buku yang dapat dijadikan bahan bacaan siswa.", img: "/perpus.jpg" },
            { title: "Lab Bahasa", desc: "Ruang Lab Bahasa Inggris dan Jepang dan ber AC untuk melatih kemampuan listening, speaking, reading, dan writing", img: "/bahasa.jpg" },
            { title: "Lab Fisika", desc: "Ruang Lab Fisika yang memadai", img: "/fisika.jpg" },
            { title: "Lab Biologi", desc: "Ruang Lab Biologi dengan Alat Praktikum yang lengkap.", img: "/biologi.jpg" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover bg-gray-200" />
              <div className="p-5">
                <h3 className="font-bold text-xl text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Ekstrakurikuler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "Tari Tradisional", img: "/ekskul0.jpg" },
              { title: "Pramuka", img: "/ekskul1.jpg" },
              { title: "Paskibra", img: "/ekskul2.jpg" },
              { title: "Team Futsal", img: "/ekskul3.jpg" },
              { title: "Basket Putri", img: "/ekskul4.jpg" },
              { title: "Basket Putra", img: "/ekskul5.jpg" },
              { title: "Taekwondo", img: "/ekskul6.jpg" },
              { title: "Badminton", img: "/ekskul7.jpg" },
              { title: "Volly", img: "/ekskul8.jpg" }
            ].map((ekskul, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 text-center pb-4 flex flex-col h-full">
                <img 
                  src={ekskul.img} 
                  alt={ekskul.title} 
                  className="w-full h-48 object-cover bg-gray-200 mb-4" 
                />
                <h3 className="font-medium text-gray-800 mt-auto">{ekskul.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <img src="/kelulusan.jpg" alt="Selamat & Sukses Siswa/i SMA Yadika 11 Lulus PTN" className="w-full h-auto rounded-lg shadow-md" />
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Apa Kata Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                "Saat ini saya menempuh pendidikan saya di Universitas Airlangga di Jurusan Teknik Industri. Berkat bimbingan dari guru-guru sekalian, fasilitas yang mendukung dan juga lingkungan yang sangat positif dan suportif saya mampu membawa diri saya ke titik ini..."
              </p>
              <img src="/alumni1.jpg" alt="Darryl" className="w-24 h-32 object-cover rounded-full mb-4 border-4 border-blue-100" />
              <h4 className="font-bold text-gray-900">Darryl Pangihutan Nehemia Munthe</h4>
              <p className="text-xs text-blue-600">Alumni 2025</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                "Saya alumni SMA Yadika 11. Alhamdulillah saya diterima di UNSOED di Jurusan pendidikan dokter lewat jalur SNBP. Terimakasih guru-guru SMA Yadika 11 yang telah mendukung"
              </p>
              <img src="/alumni2.jpg" alt="Natasya" className="w-24 h-32 object-cover rounded-full mb-4 border-4 border-blue-100" />
              <h4 className="font-bold text-gray-900">Natasya Putri Azalia</h4>
              <p className="text-xs text-blue-600">Alumni 2025</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                "Saya bangga keterima di Universitas Brawijaya di fakultas pertanian. Berkat dedikasi guru-guru dan juga fasilitas yang mendukung kami siap bersaing. SMA Yadika 11 membentuk saya menjadi pribadi yang disiplin dan berprestasi. Terimakasih Yadika."
              </p>
              <img src="/alumni3.jpg" alt="Cicillia" className="w-24 h-32 object-cover rounded-full mb-4 border-4 border-blue-100" />
              <h4 className="font-bold text-gray-900">Cicillia Lintang Cahyani</h4>
              <p className="text-xs text-blue-600">Alumni 2025</p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="bg-blue-600 py-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Hubungi Panitia PPDB</h2>
          <p className="text-4xl font-bold">08118208121</p>
        </div>
        
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h3 className="text-2xl font-bold text-blue-900 mb-8">2 thoughts on "Home"</h3>
          
          <div className="space-y-6 border-b pb-8 mb-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Ilyas</h4>
                <p className="text-xs text-gray-500 mb-2">Juni 10, 2026 pukul 9:42 am</p>
                <p className="text-gray-700 text-sm mb-2">Boleh dibantu perincian biaya PPDB</p>
                <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded">Balas</button>
              </div>
            </div>
            
            <div className="flex gap-4 ml-12">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Citra Dewi Arum</h4>
                <p className="text-xs text-gray-500 mb-2">Juni 24, 2026 pukul 12:18 pm</p>
                <p className="text-gray-700 text-sm mb-2">boleh dibantu kirim nomer wa nya bapak/ibu supaya dikirim perinciannya atau bisa langsung datang ke seklah pak/bu</p>
                <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded">Balas</button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tinggalkan Balasan</h3>
            <p className="text-sm text-gray-500 mb-6">Alamat email Anda tidak akan dipublikasikan. Ruas yang wajib ditandai *</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">KOMENTAR *</label>
                <textarea className="w-full border border-gray-300 rounded p-2 h-32" required></textarea>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">NAMA *</label>
                <input type="text" className="w-full md:w-1/2 border border-gray-300 rounded p-2" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">EMAIL *</label>
                <input type="email" className="w-full md:w-1/2 border border-gray-300 rounded p-2" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">SITUS WEB</label>
                <input type="url" className="w-full md:w-1/2 border border-gray-300 rounded p-2" />
              </div>
              <div className="flex items-start gap-2 mt-4">
                <input type="checkbox" id="save-info" className="mt-1" />
                <label htmlFor="save-info" className="text-xs text-gray-600 uppercase">
                  SIMPAN NAMA, EMAIL, DAN SITUS WEB SAYA PADA PERAMBAN INI UNTUK KOMENTAR SAYA BERIKUTNYA.
                </label>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium mt-4">
                Kirim Komentar
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}