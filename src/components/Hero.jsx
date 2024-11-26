
import './hero.css'


function Hero() {
	return (

        <section className="hero__container">
          <img src="../public/img/silhouette.png" alt="hero-img" className='hero__container--img'/>

          <div className='hero__container--name'>
            <span>Andrés</span>
            <span>Sepúlveda</span>
            <span>Ruiz</span>
          </div>
      </section>
    );
  };

export default Hero;