import './Skills.css'


function Skills() {
	return (
        <section className="skills" id="skills">
            <h2>Skills</h2>

            <div className="skills__group">
                <h3>Diseño y Prototipado</h3>
                <ul className="skills__list">
                    <li className="skills__item">Figma</li>
                    <li className="skills__item">Framer</li>
                    <li className="skills__item">Photoshop</li>
                    <li className="skills__item">Photoshop</li>
                    <li className="skills__item">Midjourney</li>
                </ul>
            </div>

            <div className="skills__group">
                <h3 className="skills__subtitle">UX/UI</h3>
                <ul className="skills__list">
                    <li className="skills__item">Wireframing</li>
                    <li className="skills__item">User Flows</li>
                    <li className="skills__item">Design Systems</li>
                    <li className="skills__item">Heuristic Evaluation</li>
                    <li className="skills__item">Design Thinking</li>
                    <li className="skills__item">User Research</li>
                </ul>
            </div>

            <div className="skills__group">
                <h3>Frontend / Desarrollo</h3>
                <ul className="skills__list">
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">CSS / SASS</li>
                    <li className="skills__item">JavaScript</li>
                    <li className="skills__item">React</li>
                    <li className="skills__item">CMS</li>
                    <li className="skills__item">Git / GitHub</li>
                </ul>
            </div>

            <div className="skills__group">
                <h3>Herramientas y Gestión</h3>
                <ul className="skills__list">
                    <li className="skills__item">Notion</li>
                    <li className="skills__item">Microsoft Clarity</li>
                    <li className="skills__item">Google Analytics 4</li>
                    <li className="skills__item">Hotjar</li>
                    <li className="skills__item">Trello / Jira</li>
                </ul>
            </div>

            <div className="skills__group">
                <h3>Soft Skills</h3>
                <ul className="skills__list skills__list--soft">
                    <li className="skills__item">Pensamiento creativo</li>
                    <li className="skills__item">Empatía con el usuario</li>
                    <li className="skills__item">Comunicación visual efectiva</li>
                    <li className="skills__item">Resolución de problemas</li>
                    <li className="skills__item">Atención al detalle</li>
                    <li className="skills__item">Trabajo en equipo</li>
                    <li className="skills__item">Gestión del tiempo</li>
                    <li className="skills__item">Aprendizaje continuo</li>
                </ul>
            </div>
    </section>
  );
};  

export default Skills