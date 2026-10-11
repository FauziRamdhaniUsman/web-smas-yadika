import { dataBerita } from '@/data/berita';
import Link from 'next/link';

export default async function DetailBerita({ params }) {
  const resolvedParams = await params;

  const berita = dataBerita.find((b) => b.id == resolvedParams.id);

  if (!berita) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">Berita tidak ditemukan!</h1>
        <Link href="/berita" className="text-blue-600 mt-4 inline-block hover:underline">Kembali ke daftar berita</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/berita" className="text-blue-600 font-medium mb-6 inline-block hover:underline">
        &larr; Kembali ke Berita
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{berita.title}</h1>
        <p className="text-gray-500 mb-6">{berita.date}</p>
        
        <img 
          src={berita.image} 
          alt={berita.title} 
          className="w-full h-auto max-h-[400px] object-cover rounded mb-8"
        />
        
        <div className="text-gray-700 leading-relaxed text-lg">
          {berita.content}
        </div>
      </div>
    </div>
  );
}