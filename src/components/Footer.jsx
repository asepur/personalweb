import './footer.css'

function Footer() {
	return (

        <footer>
          <h2>¿Tienes una idea? <br/>Compártela conmigo</h2>
          
          <div className='footer__columns'>
            <div className='footer__content'>
              
              <p>Hola!</p>
              
              <div className='footer__links'>

                <a href="mailto:asepur94@gmail.com" target='_blank'>
                  <div className='footer__links--icons light-mode'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#fefefe" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                    </svg>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/andres-sepulved-ruiz-graphic-designer-and-digital-artist/" target='_blank' className='footer__contact--social'>
                  <div className='footer__links--icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="#fefefe" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                    </svg>
                  </div>
                </a>
            
              </div>

            </div>

            <div className='footer__content'>
              <p>
                ¿Impaciente por empezar un nuevo proyecto o necesitas mejorar lo que ya tienes? 
                ¡Escríbeme con tu propuesta para que colaboremos! 
              </p>

            </div>
          </div>
        
      </footer>
    );
  }    

export default Footer