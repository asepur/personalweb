import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Componentes
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Presentation from './components/molecules/Presentation.jsx';
import ReactBanner from './components/ReactBanner.jsx';
import Gallery from './components/organisms/Gallery.jsx';
import Skills from './components/organisms/Skills.jsx';
import CV from './components/organisms/CV.jsx';
import Studies from './components/organisms/Studies.jsx';
import Footer from './components/Footer.jsx';

// Estilos
import './App.css';

function App() {
  useEffect(() => {
    // Inicializar AOS con configuración mobile-friendly
    AOS.init({
      duration: 600, // Más rápido en mobile
      once: true,
      offset: 50, // Menos offset para mobile
      delay: 50, // Delay mínimo
      easing: 'ease-out',
      disable: window.innerWidth < 768, // Desactivar en mobile si prefieres
    });

    // Re-inicializar AOS en resize
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      AOS.refreshHard(); // Cleanup completo
    };
  }, []);

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        {/* Sección Hero/Inicio */}
        <section id="home" className="section">
          <Hero />
        </section>
        
        {/* Sección Presentación */}
        <section className="section">
          <Presentation />
        </section>
        
        {/* Sección Proyectos */}
        <section id="gallery" className="section">
          <Gallery />
        </section>
        
        {/* Sección Skills */}
        <section id="skills" className="section"> {/* Cambiado de stack a skills */}
          <Skills />
        </section>
        
        {/* Banner React */}
        <section className="section">
          <ReactBanner />
        </section>
        
        {/* Sección CV/Experiencia */}
        <section id="cv" className="section">
          <CV />
        </section>
        
        {/* Sección Estudios */}
        <section id="studies" className="section">
          <Studies />
        </section>
      </main>
      
      {/* Footer/Contacto */}
      <footer id="contact" className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;