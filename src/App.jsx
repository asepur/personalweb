import './App.css'


import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Presentation from './components/molecules/Presentation.jsx'
import ReactBanner from './components/ReactBanner.jsx'
import Gallery from './components/organisms/Gallery.jsx'
import CV from './components/organisms/CV.jsx'
import Skills from './components/organisms/Skills.jsx'
import Studies from './components/organisms/Studies.jsx'
import Footer from './components/Footer.jsx'


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
        
        <Presentation />

          
        <div id='gallery'></div>
        <Gallery />
        
        <div id='stack'></div>
        <Skills />
        
        <ReactBanner />
        <div id='cv'></div>
        <CV />
        <div id='studies'></div>
        <Studies />
        

      </section>

      <div id='contact'></div>
      <Footer />

    </>
  )
}

export default App
