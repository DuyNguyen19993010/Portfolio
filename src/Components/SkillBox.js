import '../CSS/navbar.css';
import React from "react";

const SkillBox = (props) =>{

    return (
        <div className='skill-box'>
              <img src={props.svg} alt="Could not load skill set"/>
              <h1>{props.title}</h1>
              {
                props.list.map((value,key)=>{
                    return (<p>{value}</p>)
                })
              }
        </div>
    );
}
export default SkillBox;