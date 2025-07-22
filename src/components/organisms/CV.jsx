import './cv.css'
import ScrollFloat from '../atoms/ScrollFloat';
import JobCard from '../molecules/JobCard';

function Cv() {
  return (
    <section className="cv">
      <h2><ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            Currículum Vitae
          </ScrollFloat></h2>

        <JobCard />

        <div className="cv__job">
            <h3>Diseño de logotipo</h3>
            <div className="cv__job--meta">
              <span>Filada Ramón Muntaner</span>
              <span> - </span>
              <span>2024</span>
            </div>

            <h4>Skills</h4>
            <div className="cv__tags">
              <span>Benchmarking</span>
              <span>Illustrator</span>
              <span>Impresión DTF</span>
            </div>

            <h4>Encargo</h4>
            <div className="cv__responsibilities">
              <p>Diseño de logotipo e impresión DTF en camisetas personalizadas.</p>
            </div>
        </div>


        <div className="cv__job">
            <h3>Invitaciones de Boda Calas de Alicante</h3>
            <div className="cv__job--meta">
              <span>Particulares</span>
              <span> - </span>
              <span>2023</span>
          </div>
            <h4>Skills</h4>
            <div className="cv__tags">
              <span>InDesign</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Impresión Offset</span>
              <span>Impresión DTF</span>
              <span>Ilustración digital</span>
            </div>
            <h4>Encargo</h4>
            <div className="cv__responsibilities">
           
                <p>Diseño de las invitaciones de boda, sitting plan, save the date, regalos personaalizados e ilustraciones de regalo.
                </p>
            </div>
          
        </div>

        <div className="cv__job">
          
            <h3>Invitaciones de Boda Harry Potter</h3>
            <div className="cv__job--meta">
              <span>Particulares</span>
              <span> - </span>
              <span>2022</span>
          </div>
            <h4>Skills</h4>
            <div className="cv__tags">
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Impresión Offset</span>
            </div>
            <h4>Encargo</h4>
            <div className="cv__responsibilities">
                <p>Diseño de las invitaciones de boda inspirado en Harry Potter con ilustración personalizada.
                </p>
            </div>
        </div>


        <div className="cv__job">
            <h3>Diseño de Logotipo</h3>
            <div className="cv__job--meta">
              <span>LaTintas Tattoo</span>
              <span> - </span>
              <span>2022</span>
          </div>
            <h4>Skills</h4>
            <div className="cv__tags">
              <span>Illustrator</span>
              <span>Procreate</span>
            </div>
            <h4>Encargo</h4>
            <div className="cv__responsibilities">
                <p>Diseño de logotipo e identidad visual para el perfil digital de la artista de tatuaje LaTintas Tattoo.
                </p>
            </div>
        </div>


        <div className="cv__job">
            <h3>Diseño de logotipo</h3>
            <div className="cv__job--meta">
              <span>Coven Restaurant</span>
              <span> - </span>
              <span>2022</span>
          </div>
            <h4>Skills</h4>
            <div className="cv__tags">
              <span>Illustrator</span>
              <span>Impresión Offset</span>
            </div>
            <h4>Encargo</h4>
            <div className="cv__responsibilities">
                <p>Diseño del logotipo y tarjetas de visita para el restaurante Coven en Sagunto.
                </p>
            </div>
        </div>

    </section>
  )
}

export default Cv
