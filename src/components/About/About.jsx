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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorum velit, quis ex facere, quasi ipsa sunt fugiat enim suscipit ab ipsam! Molestias, neque esse fugit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro officia qui vitae laudantium alias eius amet commodi.</p>
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
            <p>Projects completed</p>
        </div>
      </div>
    </div>
  )
}

export default About
