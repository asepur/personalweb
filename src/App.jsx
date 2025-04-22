import './App.css'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ReactBanner from './components/ReactBanner.jsx'
import Gallery from './components/Gallery.jsx'
import CV from './components/CV.jsx'
import Footer from './components/Footer.jsx'


import { useEffect} from 'react';
import { handleScroll } from './logic/menu.js';


function App() {

  useEffect(() => {

    handleScroll();  // Ejecutamos la función para manejar el scroll
  }, []);




  return (
    <>
      <Header/>

      <section className='content__container'>
        <div id='home'></div>
          <Hero/>

          <div className='presentation__container'>
            <div className='box__container'>
              <div>
              <h3>¿Quién soy?</h3>
                <p>El nombre artístico de ASEPUR es un acrónimo de mi nombre, Andrés Sepúlveda Ruiz. 
                </p>
                <p> Soy un diseñador 
                  gráfico enfocado en la creación de experiencias 
                  de usuario para productos digitales. </p>
                  
                <p>En esta web, quiero compartir mis proyectos y todo 
                  lo que voy aprendiendo para seguir perfeccionando 
                  mis habilidades.
                </p>
                <p><b>¡No dudes en ponerte en contacto 
                  conmigo para lo que necesites!</b></p>
              </div>
              <div>
                <h3>¿Y qué ofrezco?</h3>

                <div className='services__container'>
                  
                  <div className='services__box'>
                    Diseño UX & UI</div>
                  <div className='services__box'>Análisis UX</div>
                  <div className='services__box'>                   
                    Diseño Gráfico
                  </div>
                  <div className='services__box'>Diseños personalizados</div>
                </div>
              </div>
            </div>
          </div>
        <div id='gallery'></div>
          <Gallery />
          <ReactBanner />
        <div id='cv'></div>
          <CV />
      </section>
      <div id='contact'></div>
      {/*
     <ContactBlock />
      */}
      <Footer />

    </>
  )
}

export default App
