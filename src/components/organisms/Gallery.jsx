import { useState } from 'react';

import projectsData from '../../data/projectsData.js';

import ProjectCard from '../molecules/ProjectCard.jsx'
import './gallery.css';

function Gallery() {
  const categories = ['Todos los filtros', 'React', 'Figma', 'Photoshop', 'Illustrator', 'UX/UI'];
  const [selectedCategory, setSelectedCategory] = useState('Todos los filtros');

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='gallery'>
      <h2>Proyectos</h2>

      <nav>
        <ul className="gallery__nav">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`gallery__nav--link ${selectedCategory === category ? 'link--selected' : ''}`}
                onClick={() => handleCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="gallery__container">
        {projectsData
          .filter((project) => selectedCategory === 'Todos los filtros' || project.tags.includes(selectedCategory))
          .map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              date={project.date}
              tags={project.tags}
              image={project.image}
              url={project.url}
            />
            
          ))}
      </section>

    </div>
  );
}

export default Gallery;
