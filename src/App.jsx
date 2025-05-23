import './App.css'


import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ReactBanner from './components/ReactBanner.jsx'
import Gallery from './components/Gallery.jsx'
import CV from './components/CV.jsx'
import Footer from './components/Footer.jsx'
import MyStacks from './components/MyStacks.jsx'


import { useEffect} from 'react';
import { handleScroll } from './logic/menu.js';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  useEffect(() => {

    handleScroll();  // Ejecutamos la función para manejar el scroll
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // duración de animación en ms
      once: true,    // solo se anima una vez
      offset: 100,   // qué tan lejos antes de aparecer
    });
  }, []);




  return (
    <>
      <Header/>

      <section className='content__container'>
        <div id='home'></div>
          <Hero/>

          <div className='presentation__container'>
            <div className='box__container'>
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
              </div>
              
            </div>
          </div>
        <div id='gallery'></div>
          <Gallery />
        <div id='stack'></div>
          <MyStacks />
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
