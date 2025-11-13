import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#006D77]/5 via-[#83C5BE]/10 to-[#E9C46A]/5"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#83C5BE] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#E9C46A] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#006D77] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0" style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.03
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#83C5BE]/30 mb-6 animate-fade-in-down">
            <Sparkles className="text-[#E9C46A]" size={20} />
            <span className="text-sm font-semibold text-[#006D77]">Ecosistema CIIDE–MINDTECH®</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] mb-6 leading-tight animate-fade-in-up">
            Transformamos Ciencia, Ingeniería y Humanidad en{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#006D77] to-[#83C5BE] bg-clip-text text-transparent">
                Bienestar Sostenible
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] rounded-full animate-scale-in"></span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            A través del <strong>Ecosistema CIIDE–MINDTECH®</strong>, integramos salud mental, eficiencia técnica y transformación digital ética para fortalecer personas, organizaciones y comunidades.
          </p>

          <button
            onClick={() => scrollToSection('ecosistema')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] text-white rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in hover:from-[#F4A261] hover:to-[#E76F51]"
            style={{animationDelay: '0.4s'}}
          >
            Explora el Ecosistema CIIDE–MINDTECH®
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
