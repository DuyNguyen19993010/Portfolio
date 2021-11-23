// CSS
import '../css/project.css';
//Skillmeter
import SkillsMeter from "./skillsMeter"
//project card
import ProjectCard from "./project_card"
//Project poster
import artist from '../resources/projects thumbnails/artist.jpg'
import climate from '../resources/projects thumbnails/climate.jpeg'
import fakenews from '../resources/projects thumbnails/fakenews.jpg'
const Project=()=> {

    const skills =[{name:"HTML",percentage:80},{name:"CSS",percentage:70},{name:"JavaScript",percentage:80},{name:"Reactjs",percentage:70},{name:"Django",percentage:70},{name:"PHP",percentage:60},{name:"MySql",percentage:70}]
    const projects =[{name:"Artnote",Description:"Live drawing and sharing platform for artist"},{name:"Climate",Description:"Weather app for teen and children"},{name:"FakeNews",Description:"A web application for viewing news and articles"}]
    const project_covers = [artist,climate,fakenews]
    const project_link =["https://www.youtube.com/watch?v=18EhOSvsyO4","https://github.research.its.qmul.ac.uk/ec18270/climate","https://github.com/tobywynne-mellor/newspaper-app"]
    return (
    <div className="Project">
       <div className="content">
           <div className="skills">
               <h1 className="skill-logo">Skills</h1>
                <div className="skill-listing">
                    {skills.map((skill,key)=>{
                        return(<SkillsMeter name={skill.name} percentage={skill.percentage}/>)
                    })}
                </div>
           </div>
           <div className="projects">
                <h1 className="project-logo">Projects</h1>
                <div className="projects-listing">
                    {
                        projects.map((project,key)=>{
                            return(<div className="project">
                                <ProjectCard link={project_link[key]} cover = {project_covers[key]}/>
                                <div className="info">
                                    <h3>{project.name}</h3>
                                    <p>{project.Description}</p>

                                </div>

                            </div>)
                        })
                    }

                </div>
           </div>

       </div>
    </div>
  );
}

export default Project;
