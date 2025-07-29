import React from 'react'
import './Hero.css';
import profile_img from '../../assets/user_icon.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='my-profile'/>
      <h1><span>I'm Thimothi Raju,</span> frontend developer based in India.</h1>
      <p>I am an engineering student currently pursuing Btech CSE at VIT-AP University. My hobbies are gardening, horse-riding, reading books.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
