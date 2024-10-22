import PropTypes from 'prop-types';

const ProjectItem = ({ title, tags, image }) => {

    return (
        <article className='gallery__item' style={{backgroundImage: `url(${image})`}}>
            <h4>{title}</h4>
            <div className='item__tags'>
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
          </article>
    );

};

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired, // 'title' debe ser una cadena y es obligatorio
    tags: PropTypes.arrayOf(PropTypes.string).isRequired, // 'tags' debe ser un array de strings y es obligatorio
    image: PropTypes.string.isRequired // 'image' debe ser una cadena (URL) y es obligatorio
  };

export default ProjectItem;