import './hero.css';
import { CgScrollV } from "react-icons/cg";

function Hero() {
  return (
    <section className="hero" aria-label="Presentación principal">
      <div className="hero__content">
        <div className="hero__title">
          <div className="hero__title-line">
            <h1 className="hero__title-text">Digital</h1>
            <h1 className="hero__title-text">Product</h1>
          </div>
          <h1 className="hero__title-text hero__title-accent">Designer</h1>
        </div>
        
        <div className="hero__scroll-indicator" aria-hidden="true">
          <CgScrollV 
            size={48}
            className="hero__scroll-icon"
            aria-label="Desplázate hacia abajo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;