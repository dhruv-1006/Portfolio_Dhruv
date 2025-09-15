import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/dhruv_img.svg.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=" " />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a passionate MERN Stack Developer skilled in building scalable web applications with MongoDB, Express, React, and Node.js. I love solving real-world problems using clean code and modern technologies.</p>
                    <p>Currently, I am exploring AWS Cloud to integrate secure, scalable, and efficient deployment solutions. I aim to combine full-stack development with cloud expertise to create impactful digital products.</p>

                    

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React.js</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Node.js</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Express.js</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}
export default About