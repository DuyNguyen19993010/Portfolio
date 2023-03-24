import '../CSS/App.css';
import {useState} from 'react';
import projects from '../Information source/Projects';
function Project() {
  const project_height = Math.floor(100/projects.length);
  const project_height_style = project_height+'%';
  const [selectedProject,selectProject] = useState(0);

  const nextProject = ()=>{
    if(selectedProject+1 > projects.length - 1)
    {
      selectProject(0);
    }
    else
    {
      selectProject(selectedProject+1);
    }
  }
  return (
    <div id="Project" className='Tab'>
      <p id='project-header'>.Projects</p>
      <div id='project-wrapper'>
        <div id='project-info'>
          <p id='project-name'>{projects[selectedProject].name}</p>
          <p id='project-sub-info'>{projects[selectedProject].time} / {projects[selectedProject].member!=="Individual"? (projects[selectedProject].member +' members'):('Individual') }</p>
          <p id='project-des'>{projects[selectedProject].summary}</p>
          <div id='project-tools'>
            {projects[selectedProject].tools.map((tool,key)=>{
              return <p className='project-tool' style = {{color:tool.color}}id='project-tool'>{tool.name}</p> 
            })}
          </div>
        </div>
        <div id='project-screenshot'>

        </div>
      </div>
      <div id='interaction-wrapper'>
        <button><a href={projects[selectedProject].git}>VIEW.</a></button>
        <button onClick={()=>nextProject()}>NEXT</button>
      </div>
      <div id='project-counter-wrapper'>
        {projects.map((project,key)=>{
          if(key === selectedProject)
          {
            return <div key = {key} onClick={()=>{selectProject(key)}} style={{height:project_height_style}} className='project-counter-section-selected'></div>
          }
          else
          {
            return <div key = {key} onClick={()=>{selectProject(key)}} style={{height:project_height_style}} className='project-counter-section'></div>
          }
        })}
      </div>
    </div>
  );
}

export default Project;
