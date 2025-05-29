import './Presentation.css';
import MagneticButton from '../atoms/MagneticButton.jsx'


const Presentation = () => {
    return (
      <div className='presentation__container box__container'>
            
              <div className='box__container--content'>
                <h3>¡ Bienvenidxs a mi web !</h3>
                  <p> Soy Asepur (Andrés para los amigos), un diseñador 
                    gráfico enfocado en la creación de experiencias 
                    de usuario para productos digitales. </p>
                    
                  <p>En esta web, quiero compartir mis proyectos y todo 
                    lo que voy aprendiendo para seguir perfeccionando 
                    mis habilidades.
                  </p>
              </div>

              <div className='box__container--content'>
                <p><b>¡No dudes en ponerte en contacto 
                conmigo para lo que necesites!</b></p>
                <MagneticButton/>
              </div>
          </div>
    );
  };
  
  export default Presentation;