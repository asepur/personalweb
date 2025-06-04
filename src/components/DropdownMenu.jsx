
import { useState } from 'react';
import './header.css'

function DropdownMenu () {
    // Estado para controlar si el menú está abierto o no
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar la visibilidad del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='dropdown'>
            <button 
                className={`header__icons mv__menu ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                
            >  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>
            {/* Menú desplegable */}
            <nav 
                className={`dropdown__menu ${isMenuOpen ? 'show' : 'hide'}`}

            >
                <a href="#home" className='dropdown__menu--link'>Home</a>
                <a href="#gallery" className='dropdown__menu--link'>Proyectos</a>
                <a href="#cv" className='dropdown__menu--link'>CV</a>
                <a href="#skills" className='dropdown__menu--link'>Skills</a>
                <a href="#contact" className='dropdown__menu--link'>Contacto</a>
            </nav>
        </div>

    )
}

export default DropdownMenu;
