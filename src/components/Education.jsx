import React from "react";
import educationData from "../data/education.json";

const Education = () => {
  const { studies, certifications } = educationData;

  return (
    <section id="education" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Educación y Certificaciones</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Formación Académica</h3>
            <div className="space-y-4">
              {studies.map((study) => (
                <div key={study.id} className="glass-card p-6">
                  <h4 className="text-lg font-bold">{study.title}</h4>
                  <p className="text-gray-600">{study.institution}</p>
                  <span className="text-sm text-secondary font-medium">
                    {study.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Certificaciones</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="glass-card p-4">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold">{cert.title}</h4>
                    <span className="text-sm text-secondary font-medium whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mt-1">{cert.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
