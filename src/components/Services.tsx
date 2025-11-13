import { TrendingUp, Users, Wrench, Zap, HeartPulse, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Consultoría Estratégica Integral',
    description: 'Diagnóstico y diseño de programas CIIDE–MINDTECH® personalizados para transformar organizaciones desde su núcleo.',
    gradient: 'from-[#006D77] to-[#83C5BE]',
  },
  {
    icon: Users,
    title: 'Gestión del Bienestar Organizacional',
    description: 'Programas PRACSIS® + CIIDE® que fortalecen la cohesión, el liderazgo humano y el clima laboral.',
    gradient: 'from-[#83C5BE] to-[#A4C3B2]',
  },
  {
    icon: Wrench,
    title: 'Optimización Técnica e Industrial',
    description: 'Soluciones IPA Ingeniería® que integran eficiencia técnica con enfoque humanizado y sostenible.',
    gradient: 'from-[#E9C46A] to-[#F4A261]',
  },
  {
    icon: Zap,
    title: 'Transformación Digital Ética',
    description: 'Implementación MINDTECH® con inteligencia artificial sostenible, respetando a las personas y datos.',
    gradient: 'from-[#F4A261] to-[#E76F51]',
  },
  {
    icon: HeartPulse,
    title: 'Salud Mental y Acompañamiento Clínico',
    description: 'Intervenciones especializadas del Centro Clínico Equilibrar® para bienestar integral.',
    gradient: 'from-[#006D77] to-[#004D54]',
  },
  {
    icon: GraduationCap,
    title: 'Formación, Diplomados y Certificaciones',
    description: 'Programas formativos del ecosistema CIIDE–MINDTECH® con certificación internacional.',
    gradient: 'from-[#83C5BE] to-[#006D77]',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
            Servicios Integrados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones completas que combinan experticia técnica, bienestar humano y transformación digital bajo la metodología CIIDE–MINDTECH®.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-b from-[#F7F7F7] to-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-fade-in hover:border-[#E9C46A]/50 transform hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Solicita una Consultoría Integral
          </button>
        </div>
      </div>
    </section>
  );
}
