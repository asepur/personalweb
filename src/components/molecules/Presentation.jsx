import './Presentation.css';
import MagneticButton from '../atoms/MagneticButton.jsx';

const Presentation = () => {
  return (
    <section className="presentation" aria-labelledby="presentation-title">
      <div className="presentation__container box__container">
        <div className="presentation__content box__container--content">
          <h3 id="presentation-title" className="presentation__title">
            ¡Bienvenid@s!
          </h3>
          
          <div className="presentation__text">
            <p>
              Soy <strong>Asepur</strong> (Andrés para los amigos), un diseñador gráfico 
              especializado en crear experiencias de usuario memorables para productos digitales. 
              Mi enfoque combina estética visual con funcionalidad intuitiva.
            </p>
            
            <p>
              En este espacio comparto mi trayectoria, proyectos destacados y aprendizajes 
              continuos. Cada diseño es una oportunidad para innovar y perfeccionar 
              mis habilidades.
            </p>
          </div>
        </div>

        <div className="presentation__cta box__container--content">
          <p className="presentation__cta-text">
            <strong>
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </strong>
          </p>
          <p className="presentation__cta-subtext">
            Estoy siempre abierto a colaboraciones y nuevos desafíos creativos.
          </p>
          <div className="presentation__button">
            <MagneticButton 
              text="Contactar"
              className="presentation__magnetic-btn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;