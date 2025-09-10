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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, temporibus in aspernatur maiores veritatis est! Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus aperiam voluptatum vitae recusandae debitis doloribus? Lorem ipsum dolor sit amet.</p>
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