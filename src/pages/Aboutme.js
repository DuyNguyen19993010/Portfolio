
import '../css/aboutMe.css';
import { Route, Switch, NavLink } from "react-router-dom";
import profile_pic from '../resources/projects thumbnails/profile_pic.png'
const AboutMe=()=> {
  return (
    <div className="AboutMe">
      <div className="greetings">
        <h1 className="hello">HELLO</h1>
        <h1 className="name">I'M DUY</h1>
        <p className="info">I am a student graduated from Queen Mary University of London. I have a passion in developing interfaces and designs for web applications.</p>
      </div>
      <div className="profile_pic">
        <img src={profile_pic}/>
      </div>
    
    </div>
  );
}

export default AboutMe;
