import { dataBerita } from '@/data/berita';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Menghasilkan daftar ID berita secara statis saat proses build
export async function generateStaticParams() {
  return dataBerita.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function DetailBerita({ params }) {
  const { id } = await params;
  const berita = dataBerita.find((item) => item.id.toString() === id);

  if (!berita) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/berita" className="text-blue-600 hover:underline mb-6 inline-block font-medium">
        &larr; Kembali ke Berita
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{berita.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{berita.date}</p>
      <img 
        src={berita.image} 
        alt={berita.title} 
        className="w-full h-80 object-cover rounded-lg mb-6 shadow-sm" 
      />
      <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
        <p>{berita.content || berita.summary}</p>
      </div>
    </div>
  );
}