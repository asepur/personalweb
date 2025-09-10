
import "../organisms/cv.css";

const JobCard = () => {


  return (
    <article className="cv__job">
        
        <h3>Senior Graphic Designer</h3>
        <div className="cv__job--meta">
            <span>RegalosPublicitarios.com | Promotionice.com</span>
            <span> - </span>
            <span>2018 - Actual</span>
        </div>

          <h4>Skills</h4>
          <div className="cv__tags">
            <span>Liderazgo de equipo</span>
            <span>Creación de contenido</span>
            <span>Formación de becarios</span>
            <span>Figma</span>
            <span>Microsoft Clarity</span>
            <span>User Research</span>
            <span>Screen Record</span>
            <span>GA 4</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>CMS</span>
            <span>Heat Maps</span>
            <span>Photoshop</span>
            <span>CorelDraw</span>
          </div>

          <h4>Principales hitos conseguidos</h4>
          <ul className="cv__responsibilities">
            <li>
              <p><strong>Rediseño secciones web</strong></p>
              <p>Teniendo como objetivo reducir el CLS de las páginas principales, se analizaron y rediseñaron bloques problematicos</p>
              <p><strong>Impacto:</strong> Reducción de un 27% de media del CLS en las páginas afectadas, haciéndolas más estables y mejorando la UX.</p>
            </li>
            <li>
              <p><strong>Estructura y protocolos del departamento</strong></p>
              <p>Se definieron flujos de trabajo claros, responsabilidades y procedimientos estandarizados.</p>
              <p><strong>Impacto:</strong> mejor coordinación interna, menos ambigüedad y mayor autonomía del equipo.</p>
            </li>
            <li>
              <p><strong>Medición de productividad del departamento</strong></p>
              <p>Implementación de sistemas para monitorizar carga de trabajo, tiempos de entrega y eficiencia.</p>
              <p><strong>Impacto: </strong> visibilidad real del rendimiento y capacidad de detectar cuellos de botella.</p>
            </li>
            <li>
              <p><strong>Optimización de procesos internos</strong></p>
              <p>Revisión de flujos de trabajo para eliminar pasos redundantes, simplificar registros y priorizar lo realmente importante.</p>
              <p><strong>Impacto: </strong> menos tareas mecánicas y más foco creativo de los diseñadores.</p>
            </li>
            <li>
              <p><strong>Automatización de procesos</strong></p>
              <p>Introducción de automatizaciones en procesos clave con IA que antes requería intervención manual.</p>
              <p><strong>Impacto: </strong> ahorro significativo de tiempo, reducción de errores técnicos y aumento de la productividad y capacidad de respuesta.</p>
            </li>
            <li>
              <p><strong>Optimización de documentos entregables al cliente</strong></p>
              <p>Estandarización y mejora de plantillas y presentaciones entregadas.</p>
              <p><strong>Impacto: </strong> imagen más profesional frente al cliente, reducción de errores, mayor agilidad.</p>
            </li>
          </ul>
      </article>
  );
};


export default JobCard;
