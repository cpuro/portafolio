import React, { useState, useEffect } from "react";
import personalData from "../data/personal.json";

const Hero = () => {
  const [personal, setPersonal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load personal data
    setPersonal(personalData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gradient-to-b from-background to-muted pt-4 md:pt-8"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left animate-fade-in">
          <p className="text-secondary text-lg mb-2">Hola, soy</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            {personal.profession}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
            {personal.shortBio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-block bg-secondary hover:bg-secondary/90 text-white py-3 px-8 rounded-lg shadow-lg transition-colors"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-gray-100 text-primary py-3 px-8 rounded-lg shadow-lg border border-gray-200 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in">
            <img
              src={personal.avatarUrl}
              alt={personal.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
