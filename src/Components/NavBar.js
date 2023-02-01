import '../CSS/navbar.css';
import React, { useState } from "react";

const NavBar = (props) =>{
    const [options,setTab] = useState([{name:"Resume",selected:false}, {name:"Projects",selected:false}, {name:"Skills",selected:false}, {name:"Achievement",selected:false}, {name:"Home",selected:true}])
    const selectOption = (selectedIndex)=>{
        let new_options = [];
        options.forEach(element => {
            new_options.push(element)
        });
        new_options.forEach(value => {
            value.selected = false;
        });
        new_options[selectedIndex].selected = true;
        setTab(new_options);
    }

    return (
        <div id = "navbar-wrapper">
            {options.map((value,index)=>{
                return(<a href={"/#"+value.name} onClick={()=>{selectOption(index)}} className = { value.selected? ("nav-option selected"):("nav-option")}> {value.name} </a>)
            })}
        </div>
    );
}
export default NavBar;