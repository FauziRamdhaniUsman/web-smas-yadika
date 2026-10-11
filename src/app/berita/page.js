import BeritaCard from '@/components/BeritaCard';
import { dataBerita } from '@/data/berita';

export default function Berita() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Berita & Kegiatan Sekolah</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataBerita.map((berita) => (
          <BeritaCard key={berita.id} {...berita} />
        ))}
      </div>
    </div>
  );
}