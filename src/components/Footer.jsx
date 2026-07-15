import React, { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-secondary/90 transition-all z-40 flex items-center justify-center"
          title="Volver al inicio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Portfolio</p>
            </div>

            <div className="text-sm text-gray-300">
              &copy; {currentYear} Todos los derechos reservados
            </div>

            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#home"
                    className="hover:text-secondary transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-secondary transition-colors"
                  >
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-secondary transition-colors"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-secondary transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
