import React, { useState, useEffect } from "react";
import recommendationsData from "../data/recommendations.json";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [newRecommendation, setNewRecommendation] = useState({
    author: "",
    position: "",
    company: "",
    text: "",
  });

  useEffect(() => {
    // Load recommendations data
    setRecommendations(recommendationsData);
    setLoading(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecommendation({
      ...newRecommendation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmSubmit = () => {
    const recommendation = {
      id: recommendations.length + 1,
      ...newRecommendation,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`,
    };
    setRecommendations([...recommendations, recommendation]);
    setNewRecommendation({
      author: "",
      position: "",
      company: "",
      text: "",
    });
    setShowForm(false);
    setShowConfirmation(false);
    alert("¡Recomendación agregada exitosamente!");
  };

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">
        Cargando recomendaciones...
      </div>
    );
  }

  return (
    <section id="recommendations" className="bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Recomendaciones
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lo que otros profesionales dicen sobre mi trabajo y colaboración.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="glass-card p-6 rounded-lg hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <img
                  src={rec.avatar}
                  alt={rec.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{rec.author}</h3>
                  <p className="text-sm text-gray-600">
                    {rec.position} at {rec.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{rec.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            {showForm ? "Cancelar" : "Agregar Recomendación"}
          </button>
        </div>

        {showForm && (
          <div className="max-w-2xl mx-auto glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Nueva Recomendación</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="author"
                placeholder="Tu nombre completo"
                value={newRecommendation.author}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="text"
                name="position"
                placeholder="Tu posición/cargo"
                value={newRecommendation.position}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="text"
                name="company"
                placeholder="Tu empresa"
                value={newRecommendation.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <textarea
                name="text"
                placeholder="Tu recomendación"
                value={newRecommendation.text}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 rounded-lg hover:bg-secondary/90 transition-colors font-semibold"
              >
                Enviar Recomendación
              </button>
            </form>
          </div>
        )}

        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md shadow-xl">
              <h3 className="text-xl font-bold mb-4">
                Confirmar Recomendación
              </h3>
              <p className="text-gray-700 mb-6">
                ¿Estás seguro de que deseas enviar esta recomendación?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmSubmit}
                  className="flex-1 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors font-semibold"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Recommendations;
