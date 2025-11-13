import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F7F7] to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comencemos a transformar tu organización. Agenda una reunión estratégica con nuestro equipo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">
                Datos de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#006D77] to-[#83C5BE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333] mb-1">Email</p>
                    <p className="text-gray-600">contacto@crisalida.cl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#83C5BE] to-[#A4C3B2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333] mb-1">Teléfono</p>
                    <p className="text-gray-600">+56 9 XXXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E9C46A] to-[#F4A261] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333333] mb-1">Dirección</p>
                    <p className="text-gray-600">Santiago, Chile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#006D77] to-[#83C5BE] rounded-xl p-8 text-white animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold mb-4">
                Plataforma Comercial del Ecosistema CIIDE–MINDTECH®
              </h3>
              <p className="leading-relaxed opacity-90">
                Integramos ciencia, ingeniería y humanidad para crear soluciones sostenibles que transforman organizaciones y fortalecen comunidades.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-slide-in-right">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#333333] mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#333333] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#333333] mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all"
                  placeholder="+56 9 XXXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#333333] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D77] transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#E9C46A] to-[#F4A261] text-white rounded-lg font-semibold hover:shadow-xl hover:from-[#F4A261] hover:to-[#E76F51] transition-all duration-500 transform hover:scale-105"
              >
                <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Agendar una Reunión con Crisálida Consultores SpA
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
