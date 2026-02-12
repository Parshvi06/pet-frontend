'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png'; // Make sure your logo is in the public folder

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-lime-500 shadow-md">
      
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={120}    // adjust width as needed
            height={50}    // adjust height as needed
            priority       // loads the logo immediately
          />
        </Link>
      </div>

      {/* Menu Links */}
      <div className="flex gap-6 items-center text-white font-semibold">
        <Link href="/">Home</Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/explorePets">Explore Pets</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login" className="bg-white text-lime-500 px-3 py-1 rounded hover:bg-gray-100">
          Login
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
