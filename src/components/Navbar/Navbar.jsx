import React, { useRef, useState } from 'react'
import './Navbar.css';
import Logo from '../../assets/mylogo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import hamburger_menu from '../../assets/hamburger_menu5.jpg';
import close_icon from '../../assets/close_icon2.jpg';


function Navbar() {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right   = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right   = "-300px";
  }

  return (
    <div className='navbar'>
        <img src={Logo} alt="Logo" className='my-logo'/>
        <img  src={hamburger_menu} onClick={openMenu} alt="" className='icons nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={close_icon} onClick={closeMenu} alt="" className='icons nav-mob-close'/>
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==='home'?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about me")}>About me</p></AnchorLink>{menu==='about me'?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==='services'?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==='portfolio'?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
    </div>
  )
}

export default Navbar
