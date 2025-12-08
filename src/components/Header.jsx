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
        setTimeout(() => { ticking = false; }, 100); // Throttle
      }
    };
    
    // Inicializar
    updateActiveSection();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [updateActiveSection]);

  // Toggle tema oscuro/claro
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

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
      
      <button 
        className="header__icons theme-toggle"
        onClick={toggleTheme}
        aria-label="Cambiar entre modo claro y oscuro"
        title="Alternar tema"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true">
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
        </svg>
      </button>
    </header>
  );
}

export default Header;