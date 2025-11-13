import { Building2, GraduationCap, Shield, Briefcase } from 'lucide-react';

const clients = [
  { name: 'ENAP Patagonia', category: 'Energía' },
  { name: 'UTFSM', category: 'Educación' },
  { name: 'Universidad Católica', category: 'Educación' },
  { name: 'ACHS', category: 'Salud' },
  { name: 'CORFO', category: 'Innovación' },
  { name: 'Subsecretaría de Innovación', category: 'Gobierno' },
];

const ecosystem = [
  {
    name: 'Corporación CIIDE®',
    icon: Building2,
    gradient: 'from-[#006D77] to-[#83C5BE]',
  },
  {
    name: 'Corporación MINDTECH®',
    icon: Shield,
    gradient: 'from-[#83C5BE] to-[#A4C3B2]',
  },
  {
    name: 'PRACSIS®',
    icon: Briefcase,
    gradient: 'from-[#E9C46A] to-[#F4A261]',
  },
  {
    name: 'IPA Ingeniería®',
    icon: Building2,
    gradient: 'from-[#F4A261] to-[#E76F51]',
  },
  {
    name: 'Centro Clínico Equilibrar®',
    icon: Shield,
    gradient: 'from-[#006D77] to-[#004D54]',
  },
];

export default function Clients() {
  return (
    <section id="clientes" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
            Clientes y Alianzas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabajamos con organizaciones líderes que confían en nuestro ecosistema integrado para transformar sus realidades.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#333333] mb-8 text-center">
            Clientes Destacados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#F7F7F7] to-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#006D77] to-[#83C5BE] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <p className="font-semibold text-[#333333] text-sm mb-1">
                  {client.name}
                </p>
                <p className="text-xs text-gray-500">{client.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#333333] mb-8 text-center">
            Ecosistema de Colaboración
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ecosystem.map((unit, index) => {
              const Icon = unit.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${unit.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <p className="font-semibold text-[#333333] text-sm">
                    {unit.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver Ecosistema de Colaboración
          </button>
        </div>
      </div>
    </section>
  );
}
