import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import Hero from './Hero'
import Stats from './Stats'
import About from './About'
import Goals from './Goals'
import CISTeam from './CISTeam'
import cis from '../../../assets/Logos/cis.png'
import Footer from './Footer'
function CIS() {
  const location = useLocation();

  // Define the title and favicon for this page
  const pageTitle = "CIS ENSI SBC";

  useEffect(() => {
    // Update the title of the page
    document.title = pageTitle;

    // Update the favicon
    const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = cis;
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = cis;
    newLink.id = 'dynamic-favicon';
    document.head.appendChild(newLink);
  }
  }, [location, pageTitle]);
  return (
    <div>
        <Navbar/>
        <Hero />
        <Stats/>
        <About/>
        <Goals/>
        <CISTeam/>
        <Footer/>
    </div>
)
}

export default CIS