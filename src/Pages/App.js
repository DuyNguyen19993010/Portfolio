import '../CSS/App.css';
import Home from './Home'
import Aboutme from './Aboutme'
import Project from './Project'
import { useState } from 'react';
import {useTransition, animated} from 'react-spring'
import {X} from 'react-bootstrap-icons';
import {Routes,Route, NavLink} from 'react-router-dom'
import intro_background from "../Videos/Intro_background.mp4"
function App() {

  // Nav display flag
  const [nav,setNav] = useState(false);

  // Menu animation
  const menu_animation = useTransition(nav,
    {
      from:{
        x: -1000,
        y:0,
        opacity:0
      },
      enter:{
        x: 0,
        y:0,
        opacity:1
      },
      leave:{
        x: -100,
        y:0,
        opacity:0
      }
    })
  return (
    <div className="App">
      <video autoPlay loop muted playsInline id="intro-vid">
        <source src={intro_background} type='video/mp4'/>
      </video>
      <div id="nav-button" onClick={()=>{setNav(!nav)}}>
        <div className='nav-line'/>
        <div className='nav-line'/>
        <div className='nav-line'/>
      </div>
      {menu_animation((style,item)=>item? (
      <animated.div style={style} id="nav-menu">
        <X id="close-button" onClick={()=>{setNav(!nav)}}>Close</X>
        <NavLink to='/' className={({isActive})=>!isActive?("nav-options"):("active-nav-options")} onClick={()=>{setNav(false)}}>#Home.</NavLink>
        <NavLink to='/Aboutme/' className={({isActive})=>!isActive?("nav-options"):("active-nav-options")} onClick={()=>{setNav(false)}}>#About.Me.</NavLink>
        <NavLink to='/Project/' className={({isActive})=>!isActive?("nav-options"):("active-nav-options")} onClick={()=>{setNav(false)}}>#Project.</NavLink>
        <NavLink to='/Resume/' className={({isActive})=>!isActive?("nav-options"):("active-nav-options")} onClick={()=>{setNav(false)}}>#Resume.</NavLink>
      </animated.div>) : ('')
      )}
      <Routes>
        <Route path='/Aboutme/' element={<Aboutme/>}/>
        <Route path='/Project/' element={<Project/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
