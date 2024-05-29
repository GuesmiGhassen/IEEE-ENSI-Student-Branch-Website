import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonGradient from "./assets/svg/ButtonGradient";
import AboutEvent from "./components/AboutEvent";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from './components/Partners'
// import Workshops from "./components/Workshops";
// import Timeline from "./components/Timeline";
import ContactUs from "./components/ContactUs"
import News from "./components/News"
const App = () => {
  const location = useLocation();

  // Define the title and favicon for this page
  const pageTitle = "GAME CRAFT 1.0";

  useEffect(() => {
    // Update the title of the page
    document.title = pageTitle;
  }, [location, pageTitle]);
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden font-sans bg-n-8 text-n-1 text-base">
        <Header />
        <Hero />
        <Partners/>
        <AboutEvent />
        <News/>
        {/* <Timeline />   
        <Workshops />      */}
        <AboutUs />
        <ContactUs/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
