//components/Header.js
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './ui/Navbar';

export default function Header() {
  return (
    <header className="p-6 text-white flex container">
      <div className='flex-1 content-center'>
        <Link href="/" className='text-left'>
          <Image src="/logo.svg" alt="Logo" width={130} height={32} />
        </Link> 
      </div>
      <nav className="space-x-4">
        <Navbar />
      </nav>
    </header>
  )
}
