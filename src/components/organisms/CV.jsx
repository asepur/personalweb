import './cv.css'


function Cv() {
	return (
        <div className='cv' >
          <h2>Experiencia Laboral</h2>

          <div className='cv__cargo'>
            <h3>Diseñador Gráfico Senior - 360</h3>

            <div className='cv__cargo--info'>
              <div className='cv__cargo--resume'>
                <span>RegalosPublicitarios.com</span>
                <span>Promotionice.com</span>
              </div>

              <div className='cv__cargo--resume'>
                  <span>2018 - Actualmente</span>
              </div>

            </div>
            
            <div>
              <h4>Habilidades requeridas</h4>
              <div className='cv__cargo--skills'>
                <span>Liderazgo de equipo</span>
                <span>Photoshop</span>
                <span>Illustrator</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
                <span>Figma</span>
                <span>Microsoft Clarity</span>
                <span>GA 4</span>
                <span>Elementor</span>
              </div>
              
            </div>
            <div>
              <h4>Principales responsabilidades</h4>
              
              <ul>
                <li>
                  <p><strong>Diseño Gráfico</strong><br/> Diseño de mockups y piezas visuales para e-commerce, <strong>aumentando la producción diaria en un 87%.</strong> Desarrollo de materiales de branding para fortalecer la identidad visual de la marca.
                  </p>
                </li>
                <li>
                  <p><strong>UX</strong><br/> 
                  Análisis de comportamiento del usuario con Clarity para evaluar mejoras en la web. Enfoque en métricas como permanencia y conversión.
                  </p>
                </li>
                <li>
                  <p><strong>UI</strong><br/>
                  Diseño y rediseño de interfaces: wireframes, prototipos interactivos y MVP para nuevas funcionalidades.                  </p>
                </li>
                <li>
                  <p><strong>Liderazgo y estructura de equipo</strong><br/> 
                  Redefinición del rol del área de diseño. Implementé procesos, documentación y KPIs, duplicando la productividad y ampliando responsabilidades estratégicas.
                  </p>
                </li>
                <li>
                  <p>
                  <strong>Colaboración interdepartamental</strong><br/>
                  con desarrollo para la implementación de mejoras en la web 
                  y con marketing en el diseño de campañas visuales, asegurando una comunicación fluida entre equipos 
                  y una ejecución eficiente de los proyectos.
                  </p>
                </li>
                <li>
                  <p>
                  <strong>Project Management</strong><br/>
                  Coordinación del equipo de diseño, formación de becarios y gestión de tareas diarias.
                  </p>
                </li>
                
              </ul>
            </div>
            
          </div>
          <br />
          <br />
          <div className='cv__cargo'>
            <h3>Diseñador Gráfico Freelance</h3>
            <div className='cv__work--case'>
              <div className='cv__cargo--resume'>
                <h4>Logo Filada Ramón Muntaner</h4>
                <p>2025</p>
              </div>
              <div className='cv__cargo--skills'>
                <span>Illustrator</span>
              </div>
            </div>
           
            <div className='cv__work--case'>
              <div className='cv__cargo--resume'>
                <h4>Invitaciones de Boda Calas de Alicante</h4>
                <p>2024</p>
              </div>
              <div className='cv__cargo--skills'>
                <span>InDesign</span>
                <span>Photoshop</span>
                <span>Illustrator</span>
                <span>Impresión Offset</span>
              </div>
            </div>

            <div className='cv__work--case'>
              <div className='cv__cargo--resume'>
                <h4>Invitaciones de Boda Harry Potter</h4>
                <p>2023</p>
              </div>
              <div className='cv__cargo--skills'>
                <span>InDesign</span>
                <span>Photoshop</span>
                <span>Illustrator</span>
                <span>Impresion Offset</span>
              </div>
            </div>

            <div className='cv__work--case'>
              <div className='cv__cargo--resume'>
                <h4>Logotipo La Tintas Tattoo</h4>
                <p>2023</p>
              </div>
                <div className='cv__cargo--skills'>
                    <span>Illustrator</span>
                    <span>Procreate</span>
                </div>
            </div>

            <div className='cv__work--case'>
                <div className='cv__cargo--resume'>
                    <h4>Tarjetas de visita - COVEN Restaurant</h4>
                    <p>2019</p>
                </div>
                <div className='cv__cargo--skills'>
                    <span>Illustrator</span>
                    <span>Impresion Offset</span>
                </div>
            </div>

          </div>

          <div>

            
          </div>

        </div>
    )
}    

export default Cv