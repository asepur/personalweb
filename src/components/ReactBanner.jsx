import './reactBanner.css';

function ReactBanner() {
  
  return (
    <section className='react-banner' id="github">
      
      <div className='react-banner__content'>
        
        {/* Ilustración */}
        <div className='react-banner__visual'>
          <img 
            className='react-banner__img' 
            src="https://i.ibb.co/dJcY0gbN/react-img-1.png" 
            alt="Ilustración de un diseñador-desarrollador flotando entre pantallas de código, representando la fusión entre diseño y desarrollo" 
            loading="lazy"
          />
          <div className='react-banner__visual-decoration'></div>
        </div>

        {/* Contenido */}
        <div className='react-banner__info'>
          <div className='react-banner__header'>
            <span className='react-banner__tag'>Proyecto Open Source</span>
            <h2 className='react-banner__title'>Diseño + Código en armonía</h2>
          </div>
          
          <div className='react-banner__description'>
            <p className='react-banner__text'>
              <strong>Esta web es mi laboratorio de producto digital:</strong> un proyecto 
              construido desde cero con <strong>React</strong> donde cada componente 
              representa la unión entre diseño intencional y código eficiente.
            </p>
            
            <p className='react-banner__text'>
              <strong>Como Product Designer que codea:</strong> implemento sistemas de 
              diseño reutilizables, gestiono estado con hooks avanzados, y optimizo 
              performance manteniendo la excelencia UX. Cada línea de código tiene 
              propósito de diseño.
            </p>
            
            <p className='react-banner__text'>
              <strong>Transparencia técnica:</strong> Creo en compartir el proceso. 
              El repositorio documenta decisiones arquitectónicas, iteraciones de 
              componentes, y cómo resuelvo problemas reales de frontend moderno.
            </p>
          </div>

          {/* CTA Mejorado */}
          <a 
            className='react-banner__btn'
            href='https://github.com/asepur/personalweb'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Ver código fuente en GitHub (se abre en nueva pestaña)'
          >
            <span className='react-banner__btn-icon'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  fill='currentColor' 
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                />
              </svg>
            </span>
            <span className='react-banner__btn-text'>
              <span className='react-banner__btn-label'>Explorar el código</span>
              <span className='react-banner__btn-sub'>Ver en GitHub</span>
            </span>
            <span className='react-banner__btn-arrow' aria-hidden="true">→</span>
          </a>

          {/* Stats opcionales (si quieres añadir métricas) */}
          <div className='react-banner__stats'>
            <div className='react-banner__stat'>
              <span className='react-banner__stat-number'>100%</span>
              <span className='react-banner__stat-label'>Custom Components</span>
            </div>
            <div className='react-banner__stat'>
              <span className='react-banner__stat-number'>React</span>
              <span className='react-banner__stat-label'>Modern Stack</span>
            </div>
            <div className='react-banner__stat'>
              <span className='react-banner__stat-number'>Open</span>
              <span className='react-banner__stat-label'>Source</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ReactBanner;