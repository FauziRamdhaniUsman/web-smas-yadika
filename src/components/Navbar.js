import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-wider flex items-center gap-3">
        <img 
        src="/logosma.jpg"
        alt="Logo SMAS YADIKA 11" 
        className="w-10 h-10 object-contain bg-white rounded-full p-1"/>
          SMAS YADIKA 11
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-yellow-300 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-300 transition">About</Link></li>
          <li><Link href="/berita" className="hover:text-yellow-300 transition">Berita</Link></li>
        </ul>
      </div>
    </nav>
  );
}