import { Brain, Cpu, Heart, Users, Cog } from 'lucide-react';

const units = [
  {
    icon: Brain,
    name: 'Corporación CIIDE®',
    description: 'Investigación e innovación emocional aplicada',
    gradient: 'from-[#006D77] to-[#83C5BE]',
  },
  {
    icon: Cpu,
    name: 'Corporación MINDTECH®',
    description: 'Tecnología ética e inteligencia organizacional',
    gradient: 'from-[#83C5BE] to-[#A4C3B2]',
  },
  {
    icon: Heart,
    name: 'Centro Clínico Equilibrar®',
    description: 'Salud mental y bienestar integral',
    gradient: 'from-[#E9C46A] to-[#F4A261]',
  },
  {
    icon: Users,
    name: 'PRACSIS®',
    description: 'Bienestar organizacional y liderazgo humano',
    gradient: 'from-[#F4A261] to-[#E76F51]',
  },
  {
    icon: Cog,
    name: 'IPA Ingeniería®',
    description: 'Ingeniería aplicada y eficiencia técnica',
    gradient: 'from-[#006D77] to-[#004D54]',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosistema" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F7F7] to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
            Ecosistema CIIDE–MINDTECH®
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una red integrada de corporaciones especializadas que convergen para ofrecer soluciones holísticas basadas en ciencia, tecnología y humanidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, index) => {
            const Icon = unit.icon;
            return (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 animate-fade-in-up hover:border-[#83C5BE]/50"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${unit.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">
                  {unit.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {unit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('servicios');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#006D77] to-[#83C5BE] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Descubre la Integración del Ecosistema
          </button>
        </div>
      </div>
    </section>
  );
}
