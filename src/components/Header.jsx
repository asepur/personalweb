import { useState, useEffect } from 'react';

import './header.css';
import DropdownMenu from './DropdownMenu.jsx';

function Header() {
  

  // Estado para el enlace seleccionado
  const [selectedLink, setSelectedLink] = useState('home');

  // Función para manejar el click en los enlaces
  const handleLinkClick = (link) => {
    setSelectedLink(link);

    // Agregar un pequeño delay para permitir que la navegación por scroll no sobrescriba inmediatamente el estado
    setTimeout(() => {
      handleScroll(); // Recalcula la posición después de la navegación
    }, 300);
  };

  // Controlamos el estado del scroll
  const handleScroll = () => {
    const homeSection = document.getElementById('home');
    const gallerySection = document.getElementById('gallery');
    const cvSection = document.getElementById('cv');
    const contactSection = document.getElementById('contact');

    if (homeSection && gallerySection && cvSection && contactSection) {
      const sections = [
        { id: 'home', offsetTop: homeSection.getBoundingClientRect().top },
        { id: 'gallery', offsetTop: gallerySection.getBoundingClientRect().top },
        { id: 'cv', offsetTop: cvSection.getBoundingClientRect().top },
        { id: 'contact', offsetTop: contactSection.getBoundingClientRect().top },
      ];

      // Recorremos las secciones y establecemos el link activo
      sections.forEach((section) => {
        if (section.offsetTop >= 0 && section.offsetTop < window.innerHeight / 2) {
          setSelectedLink(section.id);
        }
      });
    }
  };

  // Hook para escuchar el scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <DropdownMenu />
      <nav className="header__nav">
        <a 
          href="#home" 
          className={`header__nav--link ${selectedLink === 'home' ? 'selected' : ''}`}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </a>
        <a 
          href="#gallery" 
          className={`header__nav--link ${selectedLink === 'gallery' ? 'selected' : ''}`}
          onClick={() => handleLinkClick('gallery')}
        >
          Proyectos
        </a>
        <a 
          href="#cv" 
          className={`header__nav--link ${selectedLink === 'cv' ? 'selected' : ''}`}
          onClick={() => handleLinkClick('cv')}
        >
          CV
        </a>
        <a 
          href="#contact" 
          className={`header__nav--link ${selectedLink === 'contact' ? 'selected' : ''}`}
          onClick={() => handleLinkClick('contact')}
        >
          Contacto
        </a>
      </nav>
      <button 
        className='header__icons dark--mode'
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path  d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
        </svg>
      </button>
    </header>
  );
}

export default Header;
