import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9c5c7487-b732-497a-a2df-0439ec7ee006");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          alert("Thank you ..!! Your message has been sent successfully.");
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis sequi aut, odit animi necessitatibus mollitia vel dignissimos laborum rerum.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>dhruvbairagi123@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>1234567890</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Jaipur (R.J.)</p>
                    </div>
                </div>
            </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required />
            <label htmlFor="">Write your msg here</label>
            <textarea name="message" rows="4" placeholder='Enter your msg' required></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
            <span className="form-result">{result}</span>
        </form>
        </div>
    </div>
  )
}

export default Contact