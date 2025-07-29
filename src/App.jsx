import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero';
import About from './components/About/About.jsx';
//import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
