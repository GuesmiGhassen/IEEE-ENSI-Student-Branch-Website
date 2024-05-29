import {React, useEffect, useRef } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Events from './components/Events/Events'
import Contact from './components/Contact/Contact'
import WIE from './components/Units/Wie/Wie'
import CS from './components/Units/CS/CS'
import CIS from './components/Units/CIS/CIS'
import IAS from './components/Units/IAS/IAS'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeGods from './components/GODS/Home/Home'
import Program from './components/GODS/Program/Program'
import AboutUs from './components/GODS/About/AboutUs'
import ContactUs from './components/GODS/Contact/ContactUs'
import Gamecraft from './components/Gamecraft/App'
function App() {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidd');
    hiddenElements.forEach((el) => observer.current.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  return (
    <div>
        <script type="application/ld+json">
          {`
            {
              "@context" : "http://schema.org",
              "@type" : "Organization",  
              "name" : "IEEE ENSI SB",
              "url" : "https://ensi.ieee.tn/", 
              "logo": "./assets/Logos/Logo1.png"
            }
          `}
        </script>
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/About' exact element={<About />} />
                <Route path='/Events' exact element={<Events />} />
                <Route path='/Contact' exact element={<Contact />} />
                <Route path='/WIE' exact element={<WIE />} />
                <Route path='/CS' exact element={<CS />} />
                <Route path='/CIS' exact element={<CIS />} />
                <Route path='/IAS' exact element={<IAS />} />
                <Route path="/GODS" element={<HomeGods />} />
                <Route path='/GODS/Program' element={<Program />} />
                <Route path='/GODS/AboutUs' element={<AboutUs />} />
                <Route path='/GODS/ContactUs' element={<ContactUs />} />
                <Route path='/Gamecraft' element={<Gamecraft />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App