import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import Header from './Header'
import Goals from './Goals'
import Stats from './Stats'
import About from './About'
import IASTeam from './IASTeam'
import Footer from './Footer'
import News from './News'
import ias from '../../../assets/Logos/ias.png'

function IAS() {
  const location = useLocation();

  // Define the title and favicon for this page
  const pageTitle = "IAS ENSI SBC";
  const newFavicon = ias;

  useEffect(() => {
    // Update the title of the page
    document.title = pageTitle;

    // Update the favicon
    const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = newFavicon;
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = newFavicon;
    newLink.id = 'dynamic-favicon';
    document.head.appendChild(newLink);
  }
  }, [location, pageTitle, newFavicon]);
  return (
    <div>
        <Navbar/>
        <Header/>
        <Stats/>
        <News/>
        <About/>
        <Goals/>
        <IASTeam/>
        <Footer/>
    </div>
  )
}

export default IAS