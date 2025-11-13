import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#006D77] to-[#83C5BE] bg-clip-text text-transparent">
              Crisálida Consultores
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            <button onClick={() => scrollToSection('inicio')} className="text-[#333333] hover:text-[#006D77] transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('ecosistema')} className="text-[#333333] hover:text-[#006D77] transition-colors">
              Ecosistema CIIDE–MINDTECH®
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-[#333333] hover:text-[#006D77] transition-colors">
              Servicios Integrados
            </button>
            <button onClick={() => scrollToSection('metodologia')} className="text-[#333333] hover:text-[#006D77] transition-colors">
              Metodología
            </button>
            <button onClick={() => scrollToSection('clientes')} className="text-[#333333] hover:text-[#006D77] transition-colors">
              Clientes
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-[#333333] hover:text-[#006D77] transition-colors">
              Contacto
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#333333] hover:text-[#006D77] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 text-[#333333] hover:text-[#006D77] transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('ecosistema')} className="block w-full text-left py-2 text-[#333333] hover:text-[#006D77] transition-colors">
              Ecosistema CIIDE–MINDTECH®
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left py-2 text-[#333333] hover:text-[#006D77] transition-colors">
              Servicios Integrados
            </button>
            <button onClick={() => scrollToSection('metodologia')} className="block w-full text-left py-2 text-[#333333] hover:text-[#006D77] transition-colors">
              Metodología
            </button>
            <button onClick={() => scrollToSection('clientes')} className="block w-full text-left py-2 text-[#333333] hover:text-[#006D77] transition-colors">
              Clientes
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left py-2 text-[#333333] hover:text-[#006D77] transition-colors">
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
