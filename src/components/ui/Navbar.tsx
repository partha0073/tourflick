"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Home, Globe, Info, Mail, Search, Edit3, PlaneIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Image src="/tourflick.jpg" alt="Logo" width={50} height={50} className="rounded-full" />
          <Link href="/" className="text-blue-500">
            TourFlick
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/international" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors">
            <Globe className="w-5 h-5" />
            <span>International</span>
          </Link>
          <Link href="/domestic" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors">
            <PlaneIcon className="w-5 h-5" />
            <span>Domestic</span>
          </Link>
          <Link href="/blog" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors">
            <Edit3 className="w-5 h-5" />
            <span>Blog</span>
          </Link>
          <Link href="/about" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors">
            <Info className="w-5 h-5" />
            <span>About Us</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors">
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
              placeholder="Search..."
            />
            <Search className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col space-y-4 px-4 pb-4">
          <Link href="/international" className="text-gray-700 hover:text-blue-500 transition-colors">
            International
          </Link>
          <Link href="/domestic" className="text-gray-700 hover:text-blue-500 transition-colors">
            Domestic
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-500 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
