import Link from 'next/link';

export default function BeritaCard({ id, title, date, summary, image }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-1">{date}</p>
        <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{summary}</p>
        <Link 
          href={`/berita/${id}`} 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
}