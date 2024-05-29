import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './index.css'
import News from './News'
import About from './About'
import Goals from './Goals'
import Footer from './Footer'
import cs from '../../../assets/Logos/cs.png'
import CSTeam from './CSTeam';
import Navbar from './Navbar';
import Header from './Header'


function CS() {
  const location = useLocation();

  // Define the title and favicon for this page
  const pageTitle = "CS ENSI SBC";
  const newFavicon = cs;

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
  }, [location, pageTitle]);
  return (
    <div>
      <Navbar/>
      <Header/>
      <News/>
      <About />
      <Goals/>
      <CSTeam/>
      <Footer/>
    </div>
  ) ;
}

export default CS;