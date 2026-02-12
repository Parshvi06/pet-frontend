'use client';
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // ✅ Next.js image component use kiya

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <nav className="bg-lime-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png" // ✅ Public folder ke liye slash se start
            alt="Logo"
            width={40}   // width set karo
            height={40}  // height set karo
            className="mr-3"
          />
        </Link>
        <Link href="/" className="text-xl font-bold">
          Pet Adoption
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link href="/aboutUs" className="hover:underline">
          About Us
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <Link href="/explorePets" className="hover:underline">
          Explore Pets
        </Link>

        {user ? (
          <>
            <span className="font-semibold">{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-lime-500 px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-white text-lime-500 px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
