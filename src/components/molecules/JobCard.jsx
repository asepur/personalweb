
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

          <h4>Principales responsabilidades</h4>
          <ul className="cv__responsibilities">
            <li>
              <p><strong>Diseño Gráfico</strong><br />
                Diseño y creación de contenido web y mockups para e-commerce, <strong>aumentando la producción diaria en un 87%</strong>. Desarrollo de materiales de branding para fortalecer la identidad visual de la marca.
              </p>
            </li>
            <li>
              <p><strong>UX</strong><br />
                Screen records, heatmaps, shadowing o entrevistas para evaluar mejoras en la web. Análisis de datos y creación de métricas permanencia y conversión.
              </p>
            </li>
            <li>
              <p><strong>UI</strong><br />
                Diseño y rediseño de interfaces: wireframes, prototipos interactivos y MVP para nuevas funcionalidades.
              </p>
            </li>
            <li>
              <p><strong>Liderazgo y estructura de equipo</strong><br />
                Redefinición del rol del área de diseño. Implementé procesos, documentación y KPIs, duplicando la productividad y ampliando responsabilidades estratégicas.
              </p>
            </li>
            <li>
              <p><strong>Colaboración interdepartamental</strong><br />
                Con desarrollo para la implementación de mejoras en la web y con marketing en el diseño de campañas visuales, asegurando una comunicación fluida entre equipos y una ejecución eficiente de los proyectos.
              </p>
            </li>
            <li>
              <p><strong>Project Management</strong><br />
                Coordinación del equipo de diseño, formación de becarios y gestión de tareas diarias.
              </p>
            </li>
          </ul>
      </article>
  );
};


export default JobCard;
