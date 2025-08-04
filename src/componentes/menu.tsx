"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isNavScrolled
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div>
                <Image
                  src="/logo/TapisZen.png"
                  height={60}
                  width={60}
                  alt="logo"
                  className="rounded-full"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Tapicar
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "Inicio",
                "Nosotros",
                "Servicios",
                "Galería",
                "Testimonios",
                "Contacto",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-red-400 transition-colors duration-300 font-medium hover:border-b-2 h-7"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-full h-0.5 bg-white transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <div
                  className={`w-full h-0.5 bg-white transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`w-full h-0.5 bg-white transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gray-900/98 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-4 py-2 space-y-2">
            {[
              "Inicio",
              "Nosotros",
              "Servicios",
              "Galería",
              "Testimonios",
              "Contacto",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white block py-3 hover:text-red-400 transition-colors font-medium border-b border-gray-800 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
