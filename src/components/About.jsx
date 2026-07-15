import React, { useState, useEffect } from "react";
import personalData from "../data/personal.json";

const About = () => {
  const [personal, setPersonal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load personal data
    setPersonal(personalData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">Cargando...</div>
    );
  }

  // Split the paragraphs based on new lines
  const bioParagraphs = personal.fullBio.split("\n\n");

  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre Mí</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4 animate-slide-in">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center glass-card p-4">
                <div className="text-3xl text-secondary font-bold">1+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-3xl text-secondary font-bold">3+</div>
                <div className="text-gray-600">Proyectos Completados</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-3xl text-secondary font-bold">10+</div>
                <div className="text-gray-600">Tecnologías</div>
              </div>
              <div className="text-center glass-card p-4">
                <div className="text-3xl text-secondary font-bold">3+</div>
                <div className="text-gray-600">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
