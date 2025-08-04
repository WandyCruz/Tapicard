"use client";
import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Video de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://cdn.pixabay.com/video/2022/10/05/133699-757782422_large.mp4"
              type="video/mp4"
            />
            {/* Fallback para navegadores que no soporten el video */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          </video>
          {/* Overlay para oscurecer el video y mejorar la legibilidad */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10" />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                Tu Auto,{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Como Nuevo
                </span>{" "}
                Por Dentro
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-md">
                Transformamos el interior de tu vehículo con tapizados de alta
                calidad, materiales premium y acabados profesionales que superan
                tus expectativas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contacto"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-red-500/25 text-white"
                >
                  <Phone className="inline w-5 h-5 mr-2" />
                  Cotizar Ahora
                </Link>
                <a
                  href="#servicios"
                  className="border-2 border-gray-300 hover:border-red-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center hover:bg-red-500/10 text-white backdrop-blur-sm"
                >
                  Ver Servicios
                </a>
              </div>
            </div>

            <div className="relative group">
              {/* Tarjeta principal */}
              <div className="relative z-10 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-600/40 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-3xl">
                {/* Contenedor de imagen con efectos */}
                <div className="aspect-video bg-gradient-to-br from-gray-700/60 to-gray-800/60 rounded-2xl overflow-hidden relative group/image">
                  <Image
                    src="/imagenes/bolante/WhatsApp Image 2025-08-02 at 4.40.59 PM (2).jpeg"
                    alt="Auto tapizado profesional"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover/image:scale-110"
                    priority
                  />

                  {/* Efecto de brillo deslizante */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Contenido de texto */}
                <div className="mt-8 text-center">
                  {/* Título con gradiente */}
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Trabajo Profesional
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Más de 10 años de experiencia en tapizado automotriz
                  </p>

                  {/* Indicadores de calidad */}
                  <div className="flex justify-center space-x-6 text-xs text-gray-500 mb-6">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                      Garantía
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse [animation-delay:0.5s]" />
                      Calidad
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse [animation-delay:1s]" />
                      Rapidez
                    </div>
                  </div>
                </div>

                {/* Brillo sutil en el borde */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Partículas flotantes decorativas */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-red-400/60 rounded-full animate-bounce [animation-duration:3s]" />
              <div className="absolute top-20 right-16 w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-duration:4s] [animation-delay:2s]" />
              <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-red-300/50 rounded-full animate-bounce [animation-duration:5s] [animation-delay:4s]" />
            </div>
          </div>
        </div>

        {/* Flecha animada para scroll down */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>
    </>
  );
}
