import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/dhruv_img.svg.jpg';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Dhruv Bairagi,</span> Full-Stack Developer (MERN) & Cloud Solutions Engineer (AWS)</h1>
        <p>I'm a Full Stack Developer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills.</p>

        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            {/* <div className="hero-resume">My Resume</div> */}
            <a 
           className="hero-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>

    </div>
  )
}

export default Hero