'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const path = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // 🔥 Get user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔥 Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 bg-white">
        <nav className="relative w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-2 md:px-2 lg:px-4 mx-auto">
          
          {/* Logo */}
          <div className="md:col-span-4">
            <Link href="/" className="flex-none rounded-xl text-xl inline-block font-semibold">
              <div className='flex justify-align'>
                <img
                  src="https://i.pinimg.com/564x/fd/31/cd/fd31cd6b88cde40f062e890ea889d571.jpg"
                  alt="Logo"
                  className="h-[15vh] w-[15vh] mr-2"
                />
                <span className="text-2xl font-bold text-lime-500 my-8">
                  WaggingTails Hub
                </span>
              </div>
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex md:items-center md:col-span-5">
            <ul className="flex space-x-8 text-center">
              <li><Link href="/explorePets" className="text-black text-xl font-bold">Pet Catalog</Link></li>
              <li><Link href="/addPet" className="text-black font-bold text-xl">Pet Addition</Link></li>
              <li><Link href="/" className="text-black font-bold text-xl">Home</Link></li>
              <li><Link href="/aboutUs" className="text-black font-bold text-xl">About Us</Link></li>
              <li><Link href="/contact" className="text-black font-bold text-xl">Contact</Link></li>
            </ul>
          </div>

          {/* 🔥 RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-x-3 ms-auto md:col-span-3">

            {user ? (
              <>
                {/* 👤 Show Username */}
                <span className="text-black font-semibold text-lg">
                  Hello, {user.name}
                </span>

                {/* 🚪 Logout */}
                <button
                  onClick={handleLogout}
                  className="py-2 px-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Show only if NOT logged in */}
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
    </>
  );
};

export default Navbar;
