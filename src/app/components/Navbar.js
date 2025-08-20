"use client";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react"; // ✅ Tambah icon
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // ... (scroll & esc handler tetap sama)

  const handleNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  // ✅ daftar menu dengan icon
  const menu = [
    { href: "/", en: "Home", idn: "Beranda", icon: <Home size={18} /> },
    { href: "/about", en: "About", idn: "Tentang", icon: <User size={18} /> },
    { href: "/portfolio", en: "Portfolio", idn: "Karya", icon: <Briefcase size={18} /> },
    { href: "/contact", en: "Contact", idn: "Kontak", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50 transition-all duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-opacity-95 backdrop-blur-sm" : "bg-opacity-100"}`}
      >
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Brand */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Radit<span className="text-gray-200">Portfolio</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8 text-white">
            {menu.map((item) => (
              <Link
                key={item.en}
                href={item.href}
                className="group flex items-center gap-2 hover:text-blue-400 transition-colors py-2"
              >
                {/* icon */}
                <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                  {item.icon}
                </span>
                {/* text */}
                <div>
                  <span className="block font-medium group-hover:translate-x-0.5 transition-transform">
                    {item.en}
                  </span>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.idn}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white p-1 rounded hover:bg-gray-700 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button 
            className="text-white p-1 rounded hover:bg-gray-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6 text-white">
          {menu.map((item) => (
            <Link
              key={item.en}
              href={item.href}
              onClick={handleNavClick}
              className="flex items-center gap-3 py-2 hover:text-blue-400 transition-colors group"
            >
              {/* icon */}
              <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                {item.icon}
              </span>
              {/* text */}
              <div>
                <span className="block font-medium text-lg">{item.en}</span>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.idn}
                </p>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
