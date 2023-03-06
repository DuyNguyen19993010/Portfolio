import '../CSS/App.css';
import NavBar from '../Components/NavBar';
import UCLBanner from '../SVG/UCLBanner.svg'
import QueenMaryBanner from '../SVG/QueenMaryBanner.svg'
import LanguageIcon from '../SVG/35-capsule.svg'
import FrontEndIcon from '../SVG/45-astronaut.svg'
import BackEndIcon from '../SVG/23-sputnik.svg'
import spaceship from "../SVG/toy-space-ship-svgrepo-com.svg"
import { useState } from 'react';
import Skillbox from "../Components/SkillBox"
import projects from "../Information source/Projects"
function App() {
  const [language,setLanguage] = useState(["HTML","CSS","Javascript","PHP","Python","C#","Java","SQL"]);
  const [FEFramework,setFEFramework] = useState(["Reactjs","JQuery"]);
  const [BEFramework,setBEFramework] = useState(["Django","Docker","Apache"]);
  return (
    <div className="App">
      <NavBar/>
      <div className='tabs' id='Home'>
        {/* Logo image */}
        <img id="logo-image" src = "/Resources/Images/Logo.png" alt="Could not load Logo" />
        
        {/* Profile wrapper */}
        <div id="profile-wrapper">
          <div id="border-1"></div>
          <div id="border-2"></div>
          <div id="profile"></div>
        </div>

        {/* Intro wrapper */}
        <div id="intro-wrapper">
          <h1 id='intro-1'>
          TAKE A LOOK AROUND
          </h1>
          <h1 id='intro-2'>
          ENJOY THE RIDE
          </h1>
          <div id="divider-2">

          </div>
        </div>

        {/* Background image */}
        <img id="background-image" src="/Resources/Images/FirstPageBG.jpg" alt="Could not load background"/>

      </div>
      
      {/* Tab 2 */}
      <div className='tabs' id='Tab2'>
        <div id="intro-text-wrapper">
            {/* Achievement wrapper */}
            <div id="achievement-heading-wrapper">
              <h2 id='Achievement'>1.Achievement</h2>
              <div id="achievement-dividor"></div>
            </div>
            <h3>
            I am a passionate & hard-working student, who is interested and have experience in 
            web development and software engineering both in the front-end and back-end. 
            <br/>
            <br/>
            Graduated from a UCL Master Course, I have done a variety of projects some of which 
            involved helping Microsoft develop applications for the Disabled and Universities.
            <br/>
            <br/>
            I have built many Web applications using popular tools such as: Reactjs, Django, Docker, 
            Azure Active Directory, etc, and can setup different database for the back-end such as 
            SQLite, MySQL.
            <br/>
            <br/>
            Furthermore, I also have experience in automated testing complicated web application
            using Selenium, which I have used to test mobile application, cloud application, 
            Web-socket application.
            </h3>

          {/* Profile wrapper */}
          <div id="profile-wrapper-2">
            <div id="border-1-2"></div>
            <div id="border-2-2"></div>
            <div id="profile-2"></div>
          </div>
  
        </div>

        <div id='UCL-wrapper'>
          <div className='uni-img'>
            <h1>University College London</h1>
            <img className='uni-images' src={UCLBanner} alt="Could not load UCL banner"/>
          </div>
          <div className='uni-text'>
            <h4>
              Completed MSc Degree at University College London
            </h4>
          </div>

        </div>

        <div id='QMUL-wrapper'>
          <div className='uni-text'>
            <h4>
              Completed BSc Degree at Queen Mary University of London.
            </h4>
          </div>
          <div className='uni-img'>
            <h1>University College London</h1>
            <img className='uni-images' src={QueenMaryBanner} alt="Could not load Queen Mary banner"/>
          </div>
        </div>

      </div>

      {/* Tab 3 */}
      <div className='tabs' id="Tab3">
          <div id="Skills">
            <div id="skill-dividor1"></div>
            <h2 id='Skill-text'>2.Skills</h2>
            <div id="skill-dividor2"></div>
          </div>
          <div id="skill-boxes">
            <Skillbox list = {language} svg = {LanguageIcon} title="Languages"/>
            <Skillbox list = {FEFramework} svg = {FrontEndIcon} title="Front-end Tools"/>
            <Skillbox list = {BEFramework} svg = {BackEndIcon} title="Back-end Tools"/>
          </div>
      </div>
      
      {/* Tab 4 */}
      <div className='tabs' id="Tab4">
        <div id="project-splash">
          <h1 id='Project-text'>PROJECTS</h1>
        </div>
        <div id='project-box'>
          {projects.map((project,key)=>{
            if((key%2) == 0){
              return (
                <div className='project left-project'>
                  {/* <img src={spaceship} alt="Value not found"/> */}
                </div>
              )
            }
            else{
              return (
                <div className='project right-project'>
                  {/* <img src={spaceship} alt="Value not found"/> */}
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
