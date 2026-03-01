import { useEffect, useRef, useState } from 'react';
import './JobCard.css';
import '../../styles/variables.css'

const JobCard = () => {
  const [visibleMetrics, setVisibleMetrics] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleMetrics(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article className="job-card" ref={cardRef} id="current-job">
      {/* HEADER CON TÍTULO Y EMPRESA */}
      <header className="job-card__header">
        <div className="job-card__badge">Experiencia Actual</div>
        <h2 className="job-card__title">
          <span className="job-card__role">Digital Product Designer</span>
          <span className="job-card__company">RegalosPublicitarios.com</span>
        </h2>
        <div className="job-card__period">
          <span className="job-card__years">2018 - Presente</span>
          <span className="job-card__duration">6+ años</span>
        </div>
      </header>

      {/* MÉTRICAS DE IMPACTO (VISUAL) */}
      <div className={`job-card__metrics ${visibleMetrics ? 'visible' : ''}`}>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value" data-value="-27">-27%</div>
            <div className="metric-label">Reducción CLS</div>
            <div className="metric-desc">Mejor experiencia de usuario</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-value" data-value="40">+40%</div>
            <div className="metric-label">Productividad</div>
            <div className="metric-desc">Equipo más eficiente</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-value" data-value="6">6</div>
            <div className="metric-label">Procesos</div>
            <div className="metric-desc">Rediseñados y optimizados</div>
          </div>
        </div>
      </div>

      {/* LOGROS PRINCIPALES */}
      <div className="job-card__achievements">
        <h3 className="achievements-title">
          <span className="achievements-icon">🏆</span>
          Logros Clave
        </h3>
        <ul className="achievements-list">
          <li className="achievement-item">
            <div className="achievement-icon">🚀</div>
            <div className="achievement-content">
              <h4>Rediseño de secciones web</h4>
              <p>Análisis y rediseño de bloques problemáticos, mejora de interfaz y experiencia de usuario.</p>
              <span className="achievement-impact">Impacto: -27% CLS, UX mejorada</span>
            </div>
          </li>
          
          <li className="achievement-item">
            <div className="achievement-icon">🤖</div>
            <div className="achievement-content">
              <h4>Automatización con IA</h4>
              <p>Implementación de automatizaciones en procesos clave</p>
              <span className="achievement-impact">Impacto: Ahorro tiempo, menos errores</span>
            </div>
          </li>
          
          <li className="achievement-item">
            <div className="achievement-icon">🏗️</div>
            <div className="achievement-content">
              <h4>Estructura de departamento</h4>
              <p>Definición de flujos de trabajo y procedimientos estandarizados</p>
              <span className="achievement-impact">Impacto: Mejor coordinación y autonomía</span>
            </div>
          </li>
        </ul>
      </div>

      {/* HABILIDADES ORGANIZADAS */}
      <div className="job-card__skills">
        <h3 className="skills-title">
          <span className="skills-icon">🛠️</span>
          Habilidades Desarrolladas
        </h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4 className="skill-category-title">Liderazgo & Gestión</h4>
            <div className="skill-tags">
              <span className="tag--default">Gestión de equipo</span>
              <span className="tag--default">Notion</span>
              <span className="tag--default">Looker</span>
              <span className="tag--default">Optimización procesos</span>
              <span className="tag--default">Estrategia departamental</span>
              
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="skill-category-title">UX/UI & Research</h4>
            <div className="skill-tags">
              <span className="tag--default">Figma</span>
              <span className="tag--default">User Research</span>
              <span className="tag--default">Heat Maps</span>
              <span className="tag--default">GA4</span>
              <span className="tag--default">PostHog</span>
              <span className="tag--default">Microsoft Clarity</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4 className="skill-category-title">Desarrollo & Tech</h4>
            <div className="skill-tags">
              <span className="tag--default">HTML/CSS</span>
              <span className="tag--default">JavaScript</span>
              <span className="tag--default">VisualCode</span>
              <span className="tag--default">CMS</span>
              <span className="tag--default">n8n</span>
              <span className="tag--default">OpenAI</span>
              <span className="tag--default">NanoBanana</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard;