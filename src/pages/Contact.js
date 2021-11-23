// CSS
import '../css/Contact.css';
import { useState } from 'react';
import emailjs from "emailjs-com"
const Contact=()=> {
    const submitEmail = (e)=>{
        e.preventDefault()
        emailjs.sendForm("service_7vgyeck","portfolio_template",e.target,"user_t5aHTEklRsjY49eeezERy").then((result)=>{console.log(result.text)})
        e.target.reset()
    }
    return (
    <div className="Contact">
        <h1>Contact me</h1>
        <div className="form-wrapper">
            <form onSubmit={submitEmail}>
                <label>Name:</label><input type="text" name="name"/>
                <br/>
                <label>Message:</label>
                <br/>
                <textarea row="500" column="500" name="message"/>
                <br/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    </div>
  );
}

export default Contact;
