export default function About() {
  return (
    <div className="bg-white">
      
      <section className="w-full h-64 md:h-96 relative bg-gray-200">
        <img 
          src="/gedung.jpg" 
          alt="Gedung SMAS YADIKA 11" 
          className="w-full h-full object-cover"
        />
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          <div className="md:w-2/3">
            <p className="text-blue-700 font-semibold mb-2">Sekolah Pencetak Siswa Berprestasi</p>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Sambutan Kepala Sekolah</h1>
            
            <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
              <p>Assalamu'alaikum wr. wb.</p>
              <p className="font-semibold text-gray-900">Salam Sejahtera Untuk Kita Semua,</p>
              <p>
                Puji syukur kepada Tuhan Yang Maha Esa yang telah memberikan rahmat dan anugerah-Nya sehingga website SMA Yadika 11 ini dapat terbit. Salah satu tujuan dari website ini adalah untuk menjawab akan setiap kebutuhan informasi dengan memanfaatkan sarana teknologi informasi yang ada.
              </p>
              <p>
                Kami sadar sepenuhnya dalam rangka memajukan pendidikan di era berkembangnya Teknologi Informasi yang begitu pesat, sangat diperlukan berbagai sarana prasarana yang kondusif, kebutuhan berbagai informasi siswa, guru, orangtua maupun masyarakat, sehingga kami berusaha mewujudkan hal tersebut semaksimal mungkin.
              </p>
              <p>
                Besar harapan kami, sarana ini dapat memberi manfaat bagi semua pihak yang ada dilingkup pendidikan dan pemerhati pendidikan secara khusus bagi SMA Yadika 11 Kota Bekasi. Akhirnya kami mengharapkan masukan dari berbagai pihak untuk website ini agar kami terus belajar dan meng-update diri.
              </p>
              <p>
                Wassalamu'alaikum wr. wb.<br />
                Hormat kami,<br />
                Kepala SMA Yadika 11 Kota Bekasi.
              </p>
              <p className="mt-8 text-blue-900 font-bold">
                ttd.<br /><br />
                Hotmien Sagala, S.Pd
              </p>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img 
              src="/kepsek.jpg" 
              alt="Kepala Sekolah SMAS YADIKA 11" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-100 shadow-xl"
            />
          </div>

        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          
          <div className="mb-10">
            <span className="border border-gray-400 text-gray-600 px-4 py-1 rounded-full text-xs font-medium mb-4 inline-block uppercase tracking-wider">
              Testimoni
            </span>
            <h2 className="text-3xl font-bold text-blue-900">Apa Kata Murid Kami</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 italic mb-6">
                "Guru-guru di sekolah ini selalu memberikan metode ajar yang menyenangkan. Fasilitasnya sangat baik dan mendukung."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/murid1.jpg" alt="Mahardika" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Mahardika</h4>
                  <p className="text-sm text-gray-500">Kelas 12</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 italic mb-6">
                "Setiap peritil kecil sangat menyenangkan di sekolah ini"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/murid1.jpg" alt="Abhiseva" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Abhiseva</h4>
                  <p className="text-sm text-gray-500">Kelas 11</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 italic mb-6">
                "Para pengajarnya sangat sabar, asik, dan seru. Saya belum pernah merasa jenuh selama di kelas atau dalam kegiatan sekolah."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/murid1.jpg" alt="Eka Putri" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Eka Putri</h4>
                  <p className="text-sm text-gray-500">Kelas 10</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}