import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ScrollFloat from '../atoms/ScrollFloat';
import './Studies.css';

function Studies() {
  const [expandedPlanet, setExpandedPlanet] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [planetAngles, setPlanetAngles] = useState({});
  const modalRef = useRef(null);

  // Datos de las categorías/planetas con useMemo
  const planets = useMemo(() => [
    {
      id: 'uxui',
      name: 'UX/UI',
      icon: '🎨',
      courses: [
        { title: 'UX/UI Avanzado', platform: 'Udemy', year: '2025', hours: '20h' },
        { title: 'UX y User Research', platform: 'Platzi', year: '2024', hours: '15h' },
        { title: 'Design System con Figma', platform: 'Codely.tv', year: '2023', hours: '12h' },
        { title: 'Figma Avanzado', platform: 'Platzi', year: '2023', hours: '10h' },
        { title: 'Diseño Digital con Lean y UX', platform: 'Domestika', year: '2021', hours: '8h' }
      ],
      description: 'Diseño centrado en usuario y experiencias digitales'
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '⚡',
      courses: [
        { title: 'Curso Práctico React', platform: 'midu.dev', year: '2024', hours: '25h' },
        { title: 'Flexbox y CSS Grid', platform: 'midu.dev', year: '2024', hours: '8h' },
        { title: 'Curso Práctico Javascript', platform: 'midu.dev', year: '2023', hours: '20h' },
        { title: 'Curso Javascript', platform: 'Platzi', year: '2023', hours: '18h' },
        { title: 'Curso Práctico FrontEnd', platform: 'Platzi', year: '2022', hours: '23h' },
        { title: 'Buenas prácticas CSS', platform: 'Codely.tv', year: '2021', hours: '10h' }
      ],
      description: 'Desarrollo web moderno y responsive'
    },
    {
      id: 'design',
      name: 'Diseño',
      icon: '✨',
      courses: [
        { title: 'Grado de Diseño Gráfico', platform: 'EASD València', year: '2014-2018', hours: '1200h' },
        { title: 'Midjourney: Images by IA', platform: 'Santiago Fernández', year: '2023', hours: '5h' }
      ],
      description: 'Fundamentos gráficos y creatividad'
    },
    {
      id: 'tools',
      name: 'Herramientas',
      icon: '🛠️',
      courses: [
        { title: 'HTML/CSS Avanzado', platform: 'Varios', year: '2021-2024', hours: '40h' }
      ],
      description: 'Tecnologías y software especializado'
    }
  ], []); // Array vacío como dependencia = nunca cambia

  // Estadísticas con useMemo
  const stats = useMemo(() => ({
    totalCourses: planets.reduce((acc, planet) => acc + planet.courses.length, 0),
    totalHours: planets.reduce((acc, planet) => {
      const planetHours = planet.courses.reduce((sum, course) => {
        const hours = parseInt(course.hours) || 0;
        return sum + hours;
      }, 0);
      return acc + planetHours;
    }, 0),
    years: 5 // 2021-2025
  }), [planets]);

  // Detectar si es mobile para cambiar interactividad
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Función para manejar click en planetas
  const handlePlanetClick = useCallback((planetId, initialAngle) => {
    if (expandedPlanet === planetId) {
      // Al cerrar: ya tenemos el ángulo guardado, solo cerrar
      setExpandedPlanet(null);
    } else {
      // Al abrir: guardar el ángulo inicial actual
      // Para desktop, calculamos un ángulo basado en el tiempo
      if (!isMobile) {
        const now = Date.now();
        const timeOffset = (now % 40000) / 40000; // 40s ciclo
        const currentAngle = (initialAngle + (timeOffset * 360)) % 360;
        setPlanetAngles(prev => ({
          ...prev,
          [planetId]: currentAngle
        }));
      }
      setExpandedPlanet(planetId);
    }
  }, [expandedPlanet, isMobile, setPlanetAngles]);

  // Detectar click fuera del modal para cerrarlo (solo desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Solo en desktop y si hay un modal abierto
      if (!isMobile && expandedPlanet && modalRef.current) {
        // Verificar si el click fue fuera del modal
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          // Encontrar el planeta que está expandido
          const expandedPlanetData = planets.find(p => p.id === expandedPlanet);
          if (expandedPlanetData) {
            const planetIndex = planets.indexOf(expandedPlanetData);
            const initialAngle = (planetIndex / planets.length) * 360;
            handlePlanetClick(expandedPlanet, initialAngle);
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedPlanet, isMobile, handlePlanetClick, planets]);

  // Obtener el ángulo actual para un planeta
  const getCurrentAngle = useCallback((planetId, index) => {
    if (isMobile) return (index / planets.length) * 360;
    
    // Si tenemos un ángulo guardado, usarlo
    if (planetAngles[planetId] !== undefined) {
      return planetAngles[planetId];
    }
    
    // Si no, calcular posición inicial
    return (index / planets.length) * 360;
  }, [isMobile, planetAngles, planets]);

  return (
    <section className="studies" id="studies">
      <header className="studies-header">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Estudios
        </ScrollFloat>
        <p className="studies-subtitle">
          <span className="stats-highlight">{stats.totalCourses} cursos</span> 
          {' • '}
          <span className="stats-highlight">{stats.totalHours}+ horas</span>
          {' • '}
          <span className="stats-highlight">{stats.years} años</span>
          {' de formación continua'}
        </p>
        
        <div className="studies-instructions">
          <p className="instructions-text">
            {isMobile ? (
              '👇 Toca una categoría para ver sus cursos'
            ) : (
              '👇 Haz click en un planeta para ver sus cursos'
            )}
          </p>
        </div>
      </header>

      <div className={`studies-content ${expandedPlanet ? 'has-expanded' : ''}`}>
        {planets.map((planet, index) => {
          const isExpanded = expandedPlanet === planet.id;
          const currentAngle = getCurrentAngle(planet.id, index);
          const initialAngle = (index / planets.length) * 360;
          
          return (
            <div
              key={planet.id}
              className={`study-element ${isExpanded ? 'expanded' : ''}`}
              style={{
                '--orbit-angle': `${currentAngle}deg`,
                '--element-index': index
              }}
              onClick={(e) => {
                // Solo manejar clicks directos en el planeta (no en el modal)
                if (!isExpanded || e.target.closest('.close-details')) {
                  handlePlanetClick(planet.id, initialAngle);
                }
              }}
              aria-expanded={isExpanded}
              aria-label={`${planet.name}: ${planet.courses.length} cursos. ${isExpanded ? 'Mostrando detalles' : 'Click para expandir'}`}
              tabIndex="0"
              role="button"
            >
              <div className="element-header">
                <span className="element-icon">{planet.icon}</span>
                <span className="element-name">{planet.name}</span>
                {!isExpanded && (
                  <span className="element-count">{planet.courses.length}</span>
                )}
              </div>

              {isExpanded && (
                <div 
                  className="element-details" 
                  aria-live="polite"
                  ref={modalRef}
                  onClick={(e) => e.stopPropagation()} // Prevenir cierre al hacer click dentro
                >
                  <div className="details-header">
                    <h3 className="details-title">{planet.name}</h3>
                    <p className="details-description">{planet.description}</p>
                  </div>
                  
                  <ul className="courses-list">
                    {planet.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="course-item">
                        <div className="course-main">
                          <h4 className="course-title">{course.title}</h4>
                          <span className="course-hours">{course.hours}</span>
                        </div>
                        <div className="course-meta">
                          <span className="course-platform">{course.platform}</span>
                          <span className="course-year">{course.year}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="close-details"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlanetClick(planet.id, initialAngle);
                    }}
                    aria-label="Cerrar detalles"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Studies;