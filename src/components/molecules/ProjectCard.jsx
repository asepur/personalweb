import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({ title, date, tags, image, url }) => {
  return (
    <a 
        data-aos="fade-up"
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project__card">
      <div className="project__card--image" style={{ backgroundImage: `url(${image})` }} />
      
      <div className="project__card--content">
        <h3 className="project__card--title">{title}</h3>
        <p className="project__card--date">{date}</p>

        <div className="project__card--tags">
          {tags.map((tag, index) => (
            <span key={index} className="project__card--tag">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ProjectCard;
