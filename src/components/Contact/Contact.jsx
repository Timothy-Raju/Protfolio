import React from 'react'
import './Contact.css';
import mail from '../../assets/mail.png';
import call_icon from '../../assets/call_icon.jpg';
import location_icon from '../../assets/location_icon.png'

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "05d10a18-fb15-46b8-b87f-dfcdecd13362");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currenty available to take on new projects, so feal free to reach me out</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail} alt="" className='icons' /> <p>rajupalanki1037@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" className='icons' /> <p>741 619 9466</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" className='icons' /> <p>Palakol, Andhra Pradesh</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter yout email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
        
      </div>
    </div>
  )
}

export default Contact
