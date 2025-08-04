import { Send, MessageCircle, Star } from "lucide-react";
import { contactInfo,benefits } from "@/app/informacion/contactInfo";
import Link from "next/link";
export default function Contacto() {
  return (
    <>
      {/* Contact Section */}
      <section id="contacto" className="relative py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-red-500/10 text-red-400 text-sm font-semibold rounded-full border border-red-500/20 backdrop-blur-sm">
                CONTÁCTANOS AHORA
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Hablemos
              </span>{" "}
              de tu Proyecto
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ¡Transforma tu vehículo hoy! Contáctanos para una cotización
              personalizada y descubre cómo podemos hacer realidad tu visión
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group relative">
                    {/* Background Effects */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-700/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                      {/* Content */}
                      <div className="flex items-center space-x-4">
                        {/* Icon */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-red-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                          <div className="relative bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                            {contact.title}
                          </h3>
                          <p className="text-gray-300 font-medium">
                            {contact.info}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {contact.subInfo}
                          </p>
                        </div>

                        {/* Action Button */}
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                          <div className="bg-red-500/20 backdrop-blur-sm p-2 rounded-full border border-red-500/30">
                            <MessageCircle className="w-4 h-4 text-red-400" />
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-4 w-full bg-gray-700/30 rounded-full h-1">
                        <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full w-0 group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits Section */}
              <div className="relative">
                {/* Background Card */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 shadow-xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¿Por qué Elegirnos?
                    </h3>
                    <p className="text-gray-300">
                      Beneficios que obtienes al trabajar con nosotros
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-red-500/10 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative group">
              {/* Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-700/20 rounded-3xl blur-xl opacity-50" />

              {/* Main Form Card */}
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-700/50">
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-2xl" />
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-red-600/15 to-orange-500/10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl">
                        <Send className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Solicita tu Cotización
                    </h3>
                    <p className="text-gray-300">
                      Completa el formulario y te contactaremos pronto
                    </p>
                  </div>

                  {/* Form */}
                  <form
                    className="space-y-6"
                    action="https://formsubmit.co/Tapicar86@gimali.com"
                    method="POST"
                  >
                    {/* Name Input */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-red-400 transition-colors duration-300">
                        Nombre Completo *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full px-4 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder:text-gray-400 hover:bg-gray-700/70"
                          placeholder="Ingresa tu nombre completo"
                          name="nombre"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-red-400 transition-colors duration-300">
                        Teléfono / WhatsApp *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          className="w-full px-4 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder:text-gray-400 hover:bg-gray-700/70"
                          placeholder="+1 (809) 000-0000"
                          name="telefono"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    {/* Vehicle Type */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-red-400 transition-colors duration-300">
                        Tipo de Vehículo
                      </label>
                      <div className="relative">
                        <select
                          name="vehiculo"
                          className="w-full px-4 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white hover:bg-gray-700/70"
                        >
                          <option value="">Selecciona tu vehículo</option>
                          <option value="automovil">Automóvil</option>
                          <option value="suv">SUV</option>
                          <option value="camioneta">Camioneta</option>
                          <option value="motocicleta">Motocicleta</option>
                          <option value="comercial">Vehículo Comercial</option>
                        </select>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-red-400 transition-colors duration-300">
                        Servicio de Interés
                      </label>
                      <div className="relative">
                        <select
                          name="servicio"
                          className="w-full px-4 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white hover:bg-gray-700/70"
                        >
                          <option value="">Selecciona el servicio</option>
                          <option value="asientos">Tapizado de Asientos</option>
                          <option value="restauracion">
                            Restauración Completa
                          </option>
                          <option value="personalizacion">
                            Personalización Premium
                          </option>
                          <option value="revestimiento">
                            Revestimiento Integral
                          </option>
                        </select>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-red-400 transition-colors duration-300">
                        Mensaje
                      </label>
                      <div className="relative">
                        <textarea
                          rows={4}
                          className="w-full px-4 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder:text-gray-400 hover:bg-gray-700/70 resize-none"
                          placeholder="Cuéntanos más detalles sobre tu proyecto, presupuesto estimado, fechas preferidas, etc."
                          name="mensaje"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/25 text-white overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Enviar Solicitud
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </button>

                    {/* Form Footer */}
                    <div className="text-center pt-4">
                      <p className="text-gray-400 text-sm flex items-center justify-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        Respuesta garantizada en menos de 24 horas
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Prefieres Hablar Directamente?
              </h3>
              <p className="text-gray-300 mb-6">
                Llámanos o envíanos un WhatsApp para una atención inmediata
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/+18098678800"
                  className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:bounce transition-transform duration-300" />
                  WhatsApp
                </Link>
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
