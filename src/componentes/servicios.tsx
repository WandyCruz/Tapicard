import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services , additionalServices } from "@/app/informacion/servicios";

export default function Servicios() {
  return (
    <>
      {/* Services Section */}
      <section id="servicios" className="relative py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-red-500/10 text-red-400 text-sm font-semibold rounded-full border border-red-500/20 backdrop-blur-sm">
                LO QUE OFRECEMOS
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos una gama completa de servicios de tapizado automotriz
              con los más altos estándares de calidad y técnicas innovadoras
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                {/* Background Effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-700/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 to-red-600/20 rounded-2xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-red-600/15 to-orange-500/10 rounded-full blur-2xl" />

                  {/* Content */}
                  <div className="relative z-10 text-center space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                        <div className="relative bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center text-xs text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
                </div>

                {/* Floating Elements */}
                <div
                  className={`absolute -top-2 -right-2 w-3 h-3 bg-red-400/60 rounded-full animate-bounce [animation-duration:3s] [animation-delay:${
                    index * 0.5
                  }s]`}
                />
                <div
                  className={`absolute -bottom-2 -left-2 w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-duration:4s] [animation-delay:${
                    (index + 1) * 0.7
                  }s]`}
                />
              </div>
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="relative">
            {/* Background Card */}
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/30 shadow-2xl overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-600/5" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-red-500/10 to-red-600/5 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Servicios Adicionales
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Complementa tu experiencia con nuestros servicios
                    especializados
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="group text-center">
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                          <div className="relative bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-6 h-6 text-red-400" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center justify-center space-x-2 text-white font-semibold">
                        <span className="text-sm">{service.price}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                      </div>

                      {/* Divider */}
                      <div className="mt-4 w-full bg-gray-700/30 rounded-full h-px">
                        <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full w-0 group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12 pt-8 border-t border-gray-700/30">
                  <p className="text-gray-300 mb-6">
                    ¿Necesitas algo específico? Consultanos sobre servicios
                    personalizados
                  </p>
                  <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/25">
                    <Link href="#contacto">
                      Solicitar Cotización Personalizada
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </section>
    </>
  );
}
