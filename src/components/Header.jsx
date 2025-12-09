import { useState, useEffect, useRef, useCallback } from 'react';
import './header.css';
import DropdownMenu from './DropdownMenu.jsx';

function Header() {
  const [selectedLink, setSelectedLink] = useState('home');
  const timeoutRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Secciones disponibles (coincide con App.jsx)
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Proyectos' },
    { id: 'skills', label: 'Skills' },
    { id: 'cv', label: 'CV' },
    { id: 'studies', label: 'Estudios' },
    { id: 'contact', label: 'Contacto' }
  ];

  // Función optimizada para manejar clicks
  const handleLinkClick = useCallback((linkId) => {
    setSelectedLink(linkId);
    
    // Limpiar timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Actualizar después de la navegación
    timeoutRef.current = setTimeout(() => {
      updateActiveSection();
    }, 300);
  }, []);

  // Detectar sección activa optimizada
  const updateActiveSection = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setSelectedLink(section.id);
            break;
          }
        }
      }
    });
  }, [sections]);

  // Configurar scroll listener optimizado
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        updateActiveSection();
        setTimeout(() => { ticking = false; }, 100);
      }
    };
    
    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [updateActiveSection]);

  return (
    <header className="header">
      <DropdownMenu />
      
      <nav className="header__nav" aria-label="Navegación principal">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`header__nav--link ${selectedLink === section.id ? 'selected' : ''}`}
            onClick={() => handleLinkClick(section.id)}
            aria-current={selectedLink === section.id ? 'page' : undefined}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;