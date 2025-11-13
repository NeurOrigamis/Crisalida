import { Brain, Database, Repeat } from 'lucide-react';

const axes = [
  {
    title: 'CIIDE®',
    subtitle: 'Eje Emocional-Humano',
    items: ['Mente', 'Cuerpo', 'Entorno'],
    gradient: 'from-[#006D77] to-[#83C5BE]',
    icon: Brain,
  },
  {
    title: 'MINDTECH®',
    subtitle: 'Eje Tecnológico-Digital',
    items: ['Datos', 'Procesos', 'Personas'],
    gradient: 'from-[#83C5BE] to-[#A4C3B2]',
    icon: Database,
  },
];

const methodologies = [
  'Lean Humanizado',
  'Kaizen Emocional',
  'PDCA de Bienestar®',
  'Ingeniería Emocional Aplicada',
  'Six Sigma Tecnológico',
  'VSM Emocional y Digital',
];

export default function Methodology() {
  return (
    <section id="metodologia" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F7F7] to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
            Metodología CIIDE–MINDTECH®
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un enfoque integrado que articula lo emocional-humano con lo tecnológico-digital para generar transformación sostenible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {axes.map((axis, index) => {
            const Icon = axis.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-slide-in-left hover:border-[#83C5BE]/50 transform hover:-translate-y-2"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${axis.gradient} rounded-xl flex items-center justify-center mb-6 animate-float`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#333333] mb-2">
                  {axis.title}
                </h3>
                <p className="text-[#006D77] font-semibold mb-4">{axis.subtitle}</p>
                <div className="flex flex-wrap gap-3">
                  {axis.items.map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${axis.gradient} text-white rounded-full text-sm font-medium`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E9C46A] to-[#F4A261] rounded-lg flex items-center justify-center">
              <Repeat className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#333333]">
              Metodologías Integradas
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gradient-to-br from-[#F7F7F7] to-white rounded-lg border border-gray-100 hover:shadow-md hover:border-[#E9C46A]/50 transition-all duration-300 animate-fade-in transform hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-2 h-2 bg-[#006D77] rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">{method}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#006D77] to-[#83C5BE] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Conoce Nuestra Metodología
          </button>
        </div>
      </div>
    </section>
  );
}
