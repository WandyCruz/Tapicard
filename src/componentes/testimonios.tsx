"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function Testimonios() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Carlos Mendoza",
      rating: 5,
      comment:
        "Excelente trabajo, mi BMW quedó como nuevo. La calidad del cuero es impresionante y la atención al detalle es perfecta.",
    },
    {
      name: "María González",
      rating: 5,
      comment:
        "Superaron mis expectativas. El tapizado de mi camioneta quedó hermoso y el servicio fue muy profesional.",
    },
    {
      name: "Roberto Silva",
      rating: 5,
      comment:
        "Trabajo impecable en mi taxi. Materiales resistentes y acabados de primera. Totalmente recomendado.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* Testimonials Section */}
      <section id="testimonios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Testimonios de{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Clientes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de
              presentación
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-500 fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                  {testimonials[activeTestimonial].comment}
                </blockquote>
                <cite className="text-red-400 font-semibold text-lg">
                  — {testimonials[activeTestimonial].name}
                </cite>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-red-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
