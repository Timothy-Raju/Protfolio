import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.jpg';
import mylogo from '../../assets/mylogo.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={mylogo} alt="" className='mylogo' />
            <p>I'm a frontend developer from India with 2 years of practice in frontend coding.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" className='user-icon-image'/>
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2025 Thimothi Raju. All rights are reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
