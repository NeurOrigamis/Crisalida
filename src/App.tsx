import Header from './components/Header';
import Hero from './components/Hero';
import Institutional from './components/Institutional';
import Ecosystem from './components/Ecosystem';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Institutional />
        <Ecosystem />
        <Services />
        <Methodology />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
