import PropTypes from 'prop-types';

const ProjectItem = ({ tags, image, url }) => {

    return (
        <a href={url} target='_blank' rel='noopener noreferrer' className='gallery__item' style={{backgroundImage: `url(${image})`}}>
            <div className='item__tags'>
                <h4>Título del proyecto</h4>
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
                
            </div>
            
        </a>
        
    );

};

ProjectItem.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired, // 'tags' debe ser un array de strings y es obligatorio
    image: PropTypes.string.isRequired, // 'image' debe ser una cadena (URL) y es obligatorio
    url: PropTypes.string.isRequired
  };

export default ProjectItem;