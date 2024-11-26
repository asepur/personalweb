import { useState } from 'react';

import projectsData from '../data/projectsData';
import ProjectItem from './ProjectItem';
import './gallery.css';

function Gallery() {
  const categories = ['Todo', 'React', 'Figma', 'Photoshop', 'Illustrator', 'UX/UI'];
  const [selectedCategory, setSelectedCategory] = useState('Todo');

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
          .filter((project) => selectedCategory === 'Todo' || project.tags.includes(selectedCategory))
          .map((project) => (
            <ProjectItem
              key={project.id}
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
