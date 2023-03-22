import '../CSS/App.css';
import { useState,useEffect } from 'react';
import {GlitchText} from 'glitch-text'
function Aboutme() {
  const tools = ["HTML","CSS","Javascript","PHP","Python","Azure","Git","Xamarin","C#","Java","SQL","Reactjs","JQuery","Django","Docker","Apache"];
  const phrases = ["Competitive Thinker","Ambitious","Hard-working","Think out of the Box","Creative","Quick leaner"];
  const [current_tool,setTool] = useState(0);
  const [current_phrase,setPhrase] = useState(0);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(current_tool+1 > tools.length-1){
        setTool(0)
      }
      else{
        setTool(current_tool+1)
      }
    },1000);
    return () => clearTimeout(timer);

  },[current_tool,tools.length])

  useEffect(()=>{
    const timer_ = setTimeout(()=>{
      if(current_phrase+1 > phrases.length-1){
        setPhrase(0)
      }
      else{
        setPhrase(current_phrase+1)
      }
    },1400);
    return () => clearTimeout(timer_);

  },[current_phrase,phrases.length])

  return (
    <div id="Aboutme" className='Tab'>
      <p id='about-me-header'>About Me</p>
      <p id='about-me-sub-header'>Eternal love for Web development & Soft-Eng</p>
      <p>
      <p id='about-me-text-1'>UCL Master Graduate</p><p id='about-me-text-2'><GlitchText theme='white' text={phrases[current_phrase]}/></p>
      </p>
      <p id='about-me-text-3'>
        I was born in Vietnam and moved to London to study abroad in 2017. I studied at Queen Mary University of London  and graduated UCL Soft-Eng Master course in 2022.
        <br/>
        I am looking forward to working as a Software Engineer in a competitive environment with high pressure and hoping to make breakthroughs in the industry. 
      </p>
      <p id='tools'><GlitchText theme='white' text={tools[current_tool]}/></p>
    </div>
  );
}

export default Aboutme;
