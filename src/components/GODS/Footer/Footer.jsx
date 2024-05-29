import React, { useState, useEffect } from 'react';
import Logo from './GODS 3.0 white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []);
    return (
      <footer className="relative bg-[#1d202b]">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 row-gap-5 pb-4">
            <div className='md:w-[80%] about-title hidd'>
              <img src={Logo} alt="" width={200}/>
              <p className='text-justify text-justify-last text-white'>   
                <span className='text-[#07AFF0]'>GODS3.0</span> is an eagerly anticipated event organized by the <span className='text-[#07AFF0]'>IEEE CIS ENSI Chapter</span>, now in its 3rd edition. 
                This gathering serves as a focal point for professionals, researchers, and enthusiasts in the field of <span className='text-[#07AFF0]'>Data Science</span>, 
                with a particular focus on <span className='text-[#07AFF0]'>Artificial Intelligence</span> and <span className='text-[#07AFF0]'>Machine Learning</span>. 
              </p>
            </div>
            
            <div className='grid grid-cols-2 about-title hidd'>
              <div className='flex flex-col justify-center'>
                <h1 class=" text-lg font-bold text-center text-[#07AFF0]">Useful Links</h1>
                <div className='grid justify-center mt-4 gap-1 text-white'>
                  <Link to="" onClick={() => window.location.href='/GODS'} className='hover:text-[#428bca] flex items-center gap-1'><FontAwesomeIcon icon={faAngleRight} /> Home</Link>
                  <Link to="" onClick={() => window.location.href='/GODS/Program'} className='hover:text-[#428bca] flex items-center gap-1'><FontAwesomeIcon icon={faAngleRight} /> Program</Link>
                  <Link to=""  onClick={() => window.location.href='/GODS/AboutUs'} className='hover:text-[#428bca] flex items-center gap-1'><FontAwesomeIcon icon={faAngleRight} /> About</Link>
                  <Link to="" onClick={() => window.location.href='/GODS/ContactUs'} className='hover:text-[#428bca] flex items-center gap-1'><FontAwesomeIcon icon={faAngleRight} /> Contact</Link>
                  <Link to="" onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSe3_DjM-lXMlI6aqRpDuod9F9BJvLOeYBZyj_AMpI6Hye6GnQ/viewform'} className='hover:text-[#428bca] flex items-center gap-1'><FontAwesomeIcon icon={faAngleRight} /> Registration</Link>
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <h1 class=" text-lg font-bold text-center text-[#07AFF0]">Contact Us</h1>
                <div className='grid justify-center mt-4 gap-1 text-white'>
                  <div className='flex items-center gap-[11px] mb-1'>
                    <FontAwesomeIcon icon={faLocationDot}/> <span> ENSI, Manouba</span>
                  </div>
                  <div className='flex items-center gap-2 mb-1'>
                    <FontAwesomeIcon icon={faPhone}/> <span>+216 93 179 760</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faPaperPlane}/> <span>ieee.sb@ensi-uma.tn</span>
                  </div>
                  <div className='flex items-center gap-2 justify-center top-4 relative'>
                    <a href='https://www.facebook.com/profile.php?id=61555870985449' className="text-4xl" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                  </div >
                  
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pb-6 pt-3 border-t border-gray-400 flex-col-reverse md:flex-row">
            <p className="md:text-sm text-[13px] about-title hidd text-[#07AFF0]">
              © Copyright {currentYear} IEEE ENSI SB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer