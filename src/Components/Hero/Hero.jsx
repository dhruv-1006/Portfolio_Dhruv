import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/profile_img.svg';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Dhruv Bairagi,</span> MERN Stack Developer based in USA</h1>
        <p>I'm a Full Stack Developer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills.</p>

        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero