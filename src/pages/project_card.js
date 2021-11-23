// CSS
import '../css/project_card.css';
//image
import artist from '../resources/projects thumbnails/artist.jpg'
const ProjectCard=(props)=> {
  return (
    <div className="Project_card">
      <a className="link-wrapper" href={props.link}>
        <div className="image">
            <img src={props.cover}/>   
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
