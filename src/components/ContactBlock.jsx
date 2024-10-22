import './contact.css'

function ContactBlock() {
	return (
        <div className='contact'>
          <div className='contact__block'>
            <div className='contact__block--info'>
              <h2>¿Hablamos?</h2>
              <p>
                  En estos momentos el formulario no está en funcionamiento, te dejo
                  mis redes sociales más abajo en el footer.              
              </p>
              <form action="">
                <label htmlFor="text"></label>
                <input id='text' type="text" placeholder='Nombre' required/>
                
                <label htmlFor="asunto"></label>
                <input id='asunto' type="text" placeholder='Asunto' required/>
                
                <label htmlFor="email"></label>
                <input id='email' type="email" placeholder='Email' required/>

                <label htmlFor="mensaje" ></label>
                <input id='mensaje' type="text" placeholder='Mensaje' required/>
                
                <button type='submit' aria-label='Enviar formulario'>Enviar</button>
              </form>
            </div>
          </div>
          
        </div>
    )}    

export default ContactBlock