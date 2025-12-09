import { useState, useEffect, useRef } from 'react';
import './dropdownMenu.css'; // CSS separado

function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Alternar menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Cerrar menú al presionar Escape
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      
      // Enfocar primer enlace al abrir (para accesibilidad)
      const firstLink = dropdownRef.current?.querySelector('a');
      if (firstLink) {
        setTimeout(() => firstLink.focus(), 100);
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  // Enlaces del menú
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Proyectos' },
    { id: 'skills', label: 'Skills' },
    { id: 'cv', label: 'CV' },
    { id: 'studies', label: 'Estudios' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <div className="dropdown">
      <button
        ref={buttonRef}
        className={`dropdown__toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        aria-controls="dropdown-menu"
      >
        <div className="dropdown__icon">
          <span className="dropdown__line"></span>
          <span className="dropdown__line"></span>
          <span className="dropdown__line"></span>
        </div>
      </button>
      
      <nav
        ref={dropdownRef}
        id="dropdown-menu"
        className={`dropdown__menu ${isMenuOpen ? 'show' : 'hide'}`}
        aria-hidden={!isMenuOpen}
        role="menu"
      >
        <div className="dropdown__menu-content">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="dropdown__menu--link"
              onClick={handleLinkClick}
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      
      {/* Overlay para fondo oscuro */}
      {isMenuOpen && (
        <div 
          className="dropdown__overlay" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default DropdownMenu;