import Image from "next/image";
import { galleryItems } from "@/app/informacion/galeriaImagenes";

export default function Galeria() {
  return (
    <>
      {/* Gallery Section */}
      <section id="galería" className="relative py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-red-500/10 text-red-400 text-sm font-semibold rounded-full border border-red-500/20 backdrop-blur-sm">
                NUESTROS TRABAJOS
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
              Galería de{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Transformaciones
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cada proyecto cuenta una historia de transformación. Descubre cómo
              convertimos vehículos ordinarios en obras maestras del tapizado
              automotriz.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative">
                {/* Animated Background Effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-700/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 to-red-600/20 rounded-2xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105">
                  {/* Before/After Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    {/* Before Image */}
                    <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110">
                      <Image
                        src={item.beforeImage}
                        alt={item.before}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* After Image - Shows on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                      <Image
                        src={item.afterImage}
                        alt={item.after}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Sliding Reveal Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    {/* Category Badge */}
                    <div className="flex justify-between items-start">
                      <span className="bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold border border-red-500/30 ">
                        {item.category}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold">
                          DESPUÉS
                        </div>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="space-y-6">
                      {/* Before/After Text */}
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <p className="text-gray-300 text-sm opacity-80 group-hover:opacity-0 transition-opacity duration-300">
                          {item.before}
                        </p>
                        <h4 className="text-gray-300 text-sm  opacity-0 group-hover:opacity-100 transition-all duration-300 absolute">
                          {item.after}
                        </h4>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700/50 rounded-full h-1 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full w-0 group-hover:w-full transition-all duration-1000 [transition-delay:0.3s]" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400/60 rounded-full animate-bounce [animation-duration:3s] [animation-delay:${index * 0.5}s]" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/40 rounded-full animate-bounce [animation-duration:4s] [animation-delay:${(index + 1) * 0.7}s]" />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center relative">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent rounded-3xl" />

            <div className="relative space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                ¿Listo para Transformar tu Vehículo?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete a cientos de clientes satisfechos que han confiado en
                nosotros para dar vida nueva a sus vehículos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contacto"
                  className="border-2 border-gray-600 hover:border-red-500 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-red-500/10 backdrop-blur-sm"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      </section>
    </>
  );
}
