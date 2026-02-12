'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const path = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Get user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 bg-white">
      <nav className="relative w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-2 md:px-2 lg:px-4 mx-auto">

        {/* Logo */}
        <div className="md:col-span-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://i.pinimg.com/564x/fd/31/cd/fd31cd6b88cde40f062e890ea889d571.jpg"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-xl"
            />
            <span className="text-2xl font-bold text-lime-500">
              WaggingTails Hub
            </span>
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex md:items-center md:col-span-5">
          <ul className="flex space-x-8 text-center">
            <li><Link href="/explorePets" className="text-black text-xl font-bold">Pet Catalog</Link></li>
            <li><Link href="/addPet" className="text-black text-xl font-bold">Pet Addition</Link></li>
            <li><Link href="/" className="text-black text-xl font-bold">Home</Link></li>
            <li><Link href="/aboutUs" className="text-black text-xl font-bold">About Us</Link></li>
            <li><Link href="/contact" className="text-black text-xl font-bold">Contact</Link></li>
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-x-3 ml-auto md:col-span-3">
          {user ? (
            <>
              <span className="text-black font-semibold text-lg">Hello, {user.name}</span>
              <button
                onClick={handleLogout}
                className="py-2 px-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signup"
                className="py-2 px-3 font-medium rounded-xl bg-black text-lime-400 hover:bg-lime-500 hover:text-white transition"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="py-2 px-3 font-medium rounded-xl bg-lime-400 text-black hover:bg-lime-500 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
