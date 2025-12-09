import './cv.css';
import ScrollFloat from '../atoms/ScrollFloat';
import JobCard from '../molecules/JobCard';

function Cv() {
  // Datos de proyectos freelance
  const featuredProjects = [
    {
      id: 1,
      title: "Rediseño Web",
      subtitle: "Voluntarios por el Patrimonio de Sagunto",
      client: "Asociación Cultural Voluntarios por el Patrimonio",
      year: "2025",
      icon: "🏛️",
      category: "Diseño Web • UX/UI • Voluntariado",
      description: "Rediseño completo de la web para la asociación. Interfaz moderna y accesible que facilita la participación.",
      skills: ["Diseño UI/UX, Desarrollo Web, Accesibilidad", "WordPress", "Diseño Responsive", "Investigación de usuarios"],
      metrics: ["Incremento del 25% en nuevos voluntarios registrados"]
    },
    {
      id: 2,
      title: "Identidad Visual",
      subtitle: "LaTintas Tattoo",
      client: "Artista independiente",
      year: "2022",
      icon: "🎨",
      category: "Branding",
      description: "Desarrollo de identidad visual completa para artista de tatuaje, incluyendo logotipo adaptable y sistema de aplicación digital. Aplicación para RRSS y merchandising.",
      skills: ["Illustrator", "Procreate", "Brand Strategy"],
      metrics: "Consistencia de marca en todos los canales"
    }
  ];

  const otherProjects = [
    { id: 3, title: "Invitaciones Boda Calas", client: "Particulares", year: "2023", category: "Event Design" },
    { id: 4, title: "Branding - Coven Restaurant", client: "Restaurante", year: "2022", category: "Branding" },
    { id: 5, title: "Invitaciones Boda Harry Potter", client: "Particulares", year: "2022", category: "Event Design" },
    { id: 6, title: "Logotipo - Filada Ramón", client: "Local comercial", year: "2024", category: "Branding" }
  ];

  return (
    <section className="cv" id="cv">
      <h2>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Experiencia
        </ScrollFloat>
      </h2>

      {/* EXPERIENCIA PRINCIPAL */}
      <JobCard />

      {/* PROYECTOS DESTACADOS */}
      <section className="cv__featured">

        <div className="cv__featured-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="cv__project-card">
              <div className="project-card__header">
                <div className="project-card__icon">{project.icon}</div>
                <div className="project-card__title-group">
                  <h4 className="project-card__title">{project.title}</h4>
                  <h6 className="project-card__title">{project.subtitle}</h6>
                  <div className="project-card__meta">
                    <span className="project-card__client">{project.client}</span>
                    <span className="project-card__separator">•</span>
                    <span className="project-card__year">{project.year}</span>
                    <span className="project-card__category">{project.category}</span>
                  </div>
                </div>
              </div>

              <p className="project-card__description">{project.description}</p>

              {project.metrics && (
                <div className="project-card__metrics">
                  <span className="metrics-badge">
                    <span className="metrics-icon">📈</span>
                    {project.metrics}
                  </span>
                </div>
              )}

              <div className="project-card__skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OTROS PROYECTOS */}
      <section className="cv__other-projects">

        <div className="cv__projects-grid">
          {otherProjects.map((project) => (
            <div key={project.id} className="cv__mini-project">
              <div className="mini-project__content">
                <h4 className="mini-project__title">{project.title}</h4>
                <div className="mini-project__meta">
                  <span>{project.client}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <span className="mini-project__category">{project.category}</span>
              </div>
              <button className="mini-project__view-btn" aria-label={`Ver detalles de ${project.title}`}>
                →
              </button>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Cv;