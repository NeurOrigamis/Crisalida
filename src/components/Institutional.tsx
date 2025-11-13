import { Target, Lightbulb, Shield } from 'lucide-react';

export default function Institutional() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
            Visión y Propósito
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            <strong>Crisálida Consultores SpA</strong> es la empresa matriz del <strong>Ecosistema CIIDE–MINDTECH®</strong> que articula y lleva al mercado soluciones integrales provenientes de sus corporaciones asociadas. Actúa como plataforma de integración, empaquetamiento de productos/servicios y gestión de contratos, asegurando coherencia metodológica, calidad certificada y trazabilidad técnica y emocional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#F7F7F7] to-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#006D77] to-[#83C5BE] rounded-lg flex items-center justify-center mb-4">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-[#333333] mb-3">Plataforma Integradora</h3>
            <p className="text-gray-600 leading-relaxed">
              Articulamos las capacidades del ecosistema para ofrecer soluciones completas que combinan ciencia, tecnología y bienestar humano.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F7F7F7] to-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#E9C46A] to-[#F4A261] rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-[#333333] mb-3">Coherencia Metodológica</h3>
            <p className="text-gray-600 leading-relaxed">
              Garantizamos la integración sistemática de metodologías validadas científicamente bajo los sellos CIIDE® y MINDTECH®.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F7F7F7] to-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#83C5BE] to-[#A4C3B2] rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-[#333333] mb-3">Calidad Certificada</h3>
            <p className="text-gray-600 leading-relaxed">
              Cada intervención cuenta con trazabilidad técnica y emocional, respaldada por evidencia y resultados medibles.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('ecosistema');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#006D77] to-[#83C5BE] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Conoce Nuestra Misión
          </button>
        </div>
      </div>
    </section>
  );
}
