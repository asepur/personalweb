import './App.css'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ReactBanner from './components/ReactBanner.jsx'
import Gallery from './components/Gallery.jsx'
import CV from './components/CV.jsx'
{/*import ContactBlock from './components/ContactBlock.jsx'*/}
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
          <ReactBanner />
        <div id='gallery'></div>
          <Gallery />
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
