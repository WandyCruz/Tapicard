import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Nav from "@/componentes/menu";
import Hero from "@/componentes/hero";
import About from "@/componentes/nosotros";
import Servicios from "@/componentes/servicios";
import Galeria from "@/componentes/galeria";
import Image from "next/image";
// import Testimonios from "@/componentes/testimonios";
import Btn from "@/componentes/btnWassap";
import Contacto from "@/componentes/contacto";
export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="inicio" className="relative min-h-screen ">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(239,68,68,0.08),transparent_50%)]" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-red-500/10 to-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-red-600/8 to-pink-500/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <Nav />
        <Hero />
        <About />
        <Servicios />
        <Galeria />
        {/* <Testimonios /> */}
        <Contacto />
      </section>
      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
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
              <p className="text-gray-400 leading-relaxed">
                Especialistas en tapizado automotriz con la más alta calidad y
                atención personalizada.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 p-2 rounded-lg transition-colors"
                >
                  <i className="fab fa-facebook-f w-5 h-5 text-center"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 p-2 rounded-lg transition-colors"
                >
                  <i className="fab fa-instagram w-5 h-5 text-center"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 p-2 rounded-lg transition-colors"
                >
                  <i className="fab fa-whatsapp w-5 h-5 text-center"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">
                Servicios
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-white transition-colors"
                  >
                    Tapizado de Asientos
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-white transition-colors"
                  >
                    Restauración Completa
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-white transition-colors"
                  >
                    Personalización Premium
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-white transition-colors"
                  >
                    Revestimiento Integral
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">
                Enlaces
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-white transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-white transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#galería"
                    className="hover:text-white transition-colors"
                  >
                    Galería
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-400">
                Contacto
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>+1 (809) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>info@tapizadoseldetalle.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>San Francisco de Macorís, Duarte</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Tapicar. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      <Btn />
    </div>
  );
}
