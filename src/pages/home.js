// CSS
import '../css/Home.css';
//Router 
import { Route, Switch, NavLink } from "react-router-dom";
//Import pages
import AboutMe from "./Aboutme"
import Project from "./project"
import Resume from "./Resume"
import Contact from "./Contact"
const Home=()=> {
  return (
    <div className="Home">
       <Switch>
            <Route  path="/Contact">
                <div className="Contact">
                  <Contact/>
                </div>             
            </Route>
            <Route path="/Resume">
                <div className="resume">
                  <Resume/>
                </div>            
            </Route>
            <Route path="/Project">
                <div className="skills-projects">
                  <Project/>
                </div>    
            </Route>
            <Route path="/" >
              <div className="aboutMe">
                <AboutMe/> 
              </div>       
            </Route>
          </Switch>
      <div className="dividor"/>
      <ul className="nav-bar">
        <li><NavLink exact activeClassName="active-nav-option" className="nav-option" to="/">Home</NavLink></li>
        <li><NavLink exact activeClassName="active-nav-option" className="nav-option" to="/Project">Project</NavLink></li>
        <li><NavLink exact activeClassName="active-nav-option" className="nav-option" to="/Resume">Resume</NavLink></li>
        <li><NavLink exact activeClassName="active-nav-option" className="nav-option" to="/Contact">Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default Home;
