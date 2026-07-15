import React, { useState, useEffect } from "react";
import skillsData from "../data/skills.json";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load skills data
    setSkills(skillsData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">
        Cargando habilidades...
      </div>
    );
  }

  return (
    <section id="skills" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Mis Habilidades</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tecnologías y herramientas en las que tengo experiencia profesional.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center p-6 glass-card rounded-lg hover:shadow-lg transition-all hover:scale-110 group"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-4 group-hover:transform group-hover:scale-125 transition-transform"
              />
              <h3 className="text-center font-semibold text-gray-800">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
