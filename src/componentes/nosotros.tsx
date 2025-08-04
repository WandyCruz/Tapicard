import { values, stats } from "@/app/informacion/nosotros";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="nosotros" className="relative py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-red-500/10 text-red-600 text-sm font-semibold rounded-full border border-red-500/20">
                CONOCE NUESTRO EQUIPO
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Quiénes Somos
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Especialistas en tapizado automotriz con años de experiencia
              transformando interiores de vehículos con la más alta calidad y
              dedicación
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-400 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-4 " />
                  Nuestra Historia
                </h3>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Todo comenzó en un país vecino: Panamá. Allí nació un
                    pequeño sueño bajo el nombre de Chico Mueblería en Casa, una
                    modesta mueblería que inició en el interior de una vivienda,
                    con mucho esfuerzo y una gran ilusión de salir adelante. Sin
                    contar con muchos recursos, pero con el deseo inmenso de
                    emprender, dimos los primeros pasos adquiriendo utensilios y
                    herramientas poco a poco, haciendo nuestras primeras compras
                    con una simple tarjeta de crédito.{" "}
                  </p>
                  <p>
                    Con el paso del tiempo y gracias a la dedicación constante,
                    este pequeño negocio fue tomando forma. El esfuerzo, la
                    atención al detalle y el trato cercano con cada cliente nos
                    permitió crecer. Fue entonces cuando dimos el siguiente gran
                    paso: alquilamos nuestro primer local. Desde cero,
                    comenzamos a construir algo más sólido y profesional,
                    manteniendo siempre nuestra esencia y valores.
                  </p>
                  <p>
                    Con la experiencia adquirida, tanto en la atención al
                    cliente como en el conocimiento del trabajo artesanal, mi
                    compañera de trabajo y yo tomamos una decisión importante:
                    regresar a nuestro país de origen. Sentíamos que era momento
                    de compartir lo aprendido, y ofrecer un servicio diferente,
                    marcado por la calidad y el compromiso.
                  </p>
                  <p>Así nació TAPICAR.</p>
                  <p>
                    Al principio, comenzamos con los servicios de tapicería de
                    autos y detailing automotriz, incorporando nuevas ideas,
                    tecnologías y una visión fresca del negocio. Inspirado por
                    las tendencias actuales y guiado por una pasión auténtica
                    por el trabajo bien hecho, decidí seguir formándome y
                    aprendiendo más sobre carrocería automotriz, buscando
                    siempre ofrecer lo mejor. Esta nueva etapa me permitió
                    combinar lo nuevo con lo aprendido durante años, mezclando
                    la tradición de la tapicería con técnicas modernas y
                    personalizadas.
                  </p>
                  <p>
                    Hoy, TAPICAR no solo representa un negocio, sino el reflejo
                    de una historia de sacrificios, aprendizajes y sueños
                    compartidos. Seguimos trabajando con el mismo compromiso del
                    primer día, enfocados en brindar calidad, confianza y una
                    experiencia única a cada uno de nuestros clientes.
                  </p>
                </div>
              </div>

              {/* Values Section */}
              <div className="space-y-15">
                <h4 className="text-2xl font-bold text-gray-400">
                  Nuestros Valores
                </h4>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="group flex items-start space-x-4  rounded-xl hover:bg-red-50/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-400 mb-1">
                          {value.title}
                        </h5>
                        <p className="text-gray-400 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Vision Card */}
            <div className="relative group">
              {/* Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-700/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 to-red-600/20 rounded-2xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-10 shadow-2xl border border-gray-700/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-2xl" />
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-red-600/15 to-orange-500/10 rounded-full blur-2xl" />

                <div className="relative z-10 text-center space-y-8">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
                      <div>
                        <div className="flex items-center space-x-3">
                          <div>
                            <Image
                              src="/logo/TapisZen.png"
                              height={150}
                              width={150}
                              alt="logo"
                              className="rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white">
                    Nuestra Visión
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Brindar un servicio de tapizado automotriz que combine
                    calidad, durabilidad y estética para elevar la experiencia
                    de conducción de cada cliente.
                  </p>

                  {/* Quote */}
                  <div className="border-l-4 border-red-500 pl-6 mt-8">
                    <p className="text-red-400 italic">
                      La excelencia no es un acto, sino un hábito
                    </p>
                    <p className="text-gray-400 text-sm mt-2">- Nuestro Lema</p>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-300 mb-4">
                Números que Hablan por Nosotros
              </h3>
              <p className="text-gray-300">
                La confianza de nuestros clientes es nuestro mayor logro
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  {/* Background Effects */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-red-500/10 via-red-600/5 to-red-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                        <div className="relative bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <stat.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Number */}
                    <h4 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </h4>

                    {/* Label */}
                    <p className="font-semibold text-gray-900 mb-2">
                      {stat.label}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 text-sm">{stat.description}</p>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-1000 group-hover:w-full"
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div
                    className={`absolute -top-2 -right-2 w-3 h-3 bg-red-400/60 rounded-full animate-bounce [animation-duration:3s] [animation-delay:${
                      index * 0.5
                    }s]`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      </section>
    </>
  );
}
