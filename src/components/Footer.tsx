import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#333333] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#83C5BE] to-[#E9C46A] bg-clip-text text-transparent mb-4">
              Crisálida Consultores SpA
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Plataforma Comercial del Bienestar Humano y la Innovación Sostenible
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contacto@crisalida.cl"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-[#E9C46A] transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ecosistema')}
                  className="text-gray-300 hover:text-[#E9C46A] transition-colors"
                >
                  Ecosistema
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-[#E9C46A] transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('metodologia')}
                  className="text-gray-300 hover:text-[#E9C46A] transition-colors"
                >
                  Metodología
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Ecosistema</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Corporación CIIDE®</li>
              <li className="text-gray-300">Corporación MINDTECH®</li>
              <li className="text-gray-300">Centro Clínico Equilibrar®</li>
              <li className="text-gray-300">PRACSIS®</li>
              <li className="text-gray-300">IPA Ingeniería®</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Crisálida Consultores SpA. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#E9C46A] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E9C46A] transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm italic">
              "Crisálida Consultores SpA – Plataforma Comercial del Bienestar Humano y la Innovación Sostenible."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
