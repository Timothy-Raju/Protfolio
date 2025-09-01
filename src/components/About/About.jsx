import React from 'react';
import user_icon from '../../assets/user_icon.jpg';

import './About.css'
function About() {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={user_icon} alt="" className='user-icon'/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hi, I’m Thimothi Raju, a passionate Computer Science Engineering student with a strong interest in full-stack development, cloud technologies, and problem solving. I enjoy building projects that combine creativity and technology, from web applications to IoT-based solutions.</p>
                <p>My current focus is on learning the MERN stack, working on projects that showcase my skills in React, Node.js, Express, and MongoDB. I’m also exploring cloud computing (AWS, OCI, multi-cloud concepts) and AI/ML basics to broaden my technical expertise.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>100+</h1>
            <p>Leetcode problems solved</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Projects completed(Incuding small)</p>
        </div>
      </div>
    </div>
  )
}

export default About
