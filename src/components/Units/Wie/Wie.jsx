import {React, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar';
import Header from './Header';
import Stats from './Stats';
import News from './News';
import About from './About';
import Goals from './Goals';
import WIETeam from './WIETeam'
import wie from '../../../assets/Logos/wie.png'

function Wie() {
  const location = useLocation();

  // Define the title and favicon for this page
  const pageTitle = "WIE ENSI AG";
  

  useEffect(() => {
    // Update the title of the page
    document.title = pageTitle;

    // Update the favicon
    const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = wie;
  } else {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = wie;
    newLink.id = 'dynamic-favicon';
    document.head.appendChild(newLink);
  }
  }, [location, pageTitle]);
  return (
 <div className="">
  
      <Navbar/>
      <Header/>
      <News/>
      <Stats/>
      <About/>
      <Goals/>
      <WIETeam/>
      <Footer/>
    </div>
  ) ;
}

export default Wie;