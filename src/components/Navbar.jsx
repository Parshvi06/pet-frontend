'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // ✅ Next.js Image component

const Navbar = () => {
  const path = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <>
    <header className="w-full py-4 bg-white shadow-md">
  <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">

    {/* Logo */}
    <Link href="/" className="flex items-center gap-2">
      <img src="/logo.png" alt="Logo" className="h-8 md:h-10 w-auto" />
      <span className="text-lg md:text-2xl font-bold text-lime-500">
        WaggingTails Hub
      </span>
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-8">
      <Link href="/explorePets" className="font-bold">Pet Catalog</Link>
      <Link href="/addPet" className="font-bold">Pet Addition</Link>
      <Link href="/" className="font-bold">Home</Link>
      <Link href="/aboutUs" className="font-bold">About Us</Link>
      <Link href="/contact" className="font-bold">Contact</Link>
    </div>

    {/* Right Buttons */}
    <div className="hidden md:flex items-center gap-3">
      {user ? (
        <>
          <span className="font-semibold">Hello, {user.name}</span>
          <button
            onClick={handleLogout}
            className="py-2 px-3 rounded-xl bg-red-500 text-white"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/signup" className="py-2 px-3 rounded-xl bg-black text-lime-400">
            Sign Up
          </Link>
          <Link href="/login" className="py-2 px-3 rounded-xl bg-lime-400">
            Login
          </Link>
        </>
      )}
    </div>

    {/* Mobile Hamburger */}
    <button
      className="md:hidden text-2xl"
      onClick={() => setIsOpen(!isOpen)}
    >
      ☰
    </button>
  </nav>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white shadow-md">
      <Link href="/explorePets">Pet Catalog</Link>
      <Link href="/addPet">Pet Addition</Link>
      <Link href="/">Home</Link>
      <Link href="/aboutUs">About Us</Link>
      <Link href="/contact">Contact</Link>

      {user ? (
        <>
          <span>Hello, {user.name}</span>
          <button
            onClick={handleLogout}
            className="py-2 px-3 rounded-xl bg-red-500 text-white"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/signup">Sign Up</Link>
          <Link href="/login">Login</Link>
        </>
      )}
    </div>
  )}
</header>

    </>
  );
};

export default Navbar;
