import './Skills.css'
import ScrollFloat from '../atoms/ScrollFloat';
import MyStacks from '../MyStacks.jsx'
import '../../styles/variables.css'


function Skills() {
	return (
        <section className="skills" id="skills">
            <h2><ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                  >
                    Skills
                  </ScrollFloat>
            </h2>
            <p>
                Un stack en constante evolución, enfocado en eficiencia, diseño intuitivo y desarrollo moderno.
            </p>

            <MyStacks />

            <div className="hard__skills">
                <div className='skills--title'>
                <img src="https://i.ibb.co/d4MNBxTP/intelligence-quotient-1.png" alt='soft skills icon'></img>
                <h3>Diseño y Prototipado</h3>
                </div>
                <ul className="skills__list">
                    <li className="tag--default">Figma</li>
                    <li className="tag--default">Framer</li>
                    <li className="tag--default">Photoshop</li>
                    <li className="tag--default">Photoshop</li>
                    <li className="tag--default">Midjourney</li>
                </ul>
            </div>

            <div className="hard__skills">
                <div className='skills--title'>
                <img src="https://i.ibb.co/d4MNBxTP/intelligence-quotient-1.png" alt='soft skills icon'></img>
                <h3>UX y UI</h3>
                </div>
                <ul className="skills__list">
                    <li className="tag--default">Wireframing</li>
                    <li className="tag--default">User Flows</li>
                    <li className="tag--default">User Behavior</li>
                    <li className="tag--default">Heuristic Evaluation</li>
                    <li className="tag--default">Testing A/B</li>
                    <li className="tag--default">User Research</li>
                </ul>
            </div>

            <div className="hard__skills">
                <div className='skills--title'>
                <img src="https://i.ibb.co/d4MNBxTP/intelligence-quotient-1.png" alt='soft skills icon'></img>
                <h3>FrontEnd y Code</h3>
                </div>
                <ul className="skills__list">
                    <li className="tag--default">HTML</li>
                    <li className="tag--default">CSS / SASS</li>
                    <li className="tag--default">JavaScript</li>
                    <li className="tag--default">React</li>
                    <li className="tag--default">CMS</li>
                    <li className="tag--default">Git / GitHub</li>
                </ul>
            </div>

            <div className="hard__skills">
                <div className='skills--title'>
                    <img src="https://i.ibb.co/d4MNBxTP/intelligence-quotient-1.png" alt='icon'></img>
                    <h3>Herramientas y Gestión</h3>
                </div>
                <ul className="skills__list">
                    <li className="tag--default">n8n</li>
                    <li className="tag--default">Notion</li>
                    <li className="tag--default">Microsoft Clarity</li>
                    <li className="tag--default">Google Analytics 4</li>
                    <li className="tag--default">Hotjar</li>
                    <li className="tag--default">Trello / Jira</li>
                </ul>
            </div>

            <div className="soft__skills">
                <div className='skills--title'>
                    <img src="https://i.ibb.co/d4MNBxTP/intelligence-quotient-1.png" alt='soft skills icon'></img>
                    <h3>Soft Skills</h3>
                </div>
                <ul className="skills__list">
                    <li className="tag--default">Pensamiento creativo</li>
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