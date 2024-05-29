import React from 'react'
import {WIE} from '../../../constantes/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="relative bg-white">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 row-gap-5 pb-4">
            <div className='md:w-[80%] about-title hidd pt-5'>
              <img src={WIE} alt="" width={70}/>
              <p className='text-justify text-justify-last pt-2'>   
              IEEE WIE ENSI AG was created in October 2017 by female engineering students from the national 
              school of computer science, given the internationalization of this institute and the necessity 
              that we have touched to integrate our school in such a movement that takes care of the improvement of the Engineering, 
              humans around the world.
              </p>
              <div className='flex gap-4 justify-center pt-5 md:mb-0 mb-[-40px]'>
                  <a href='https://www.facebook.com/wieensi' className="text-[#0C0D26] text-4xl" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </a>
                  <a href='https://www.instagram.com/ieee_ensi_wie/' className="text-[#0C0D26] text-4xl" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </a>
                </div>
            </div>
            
            <div className='grid grid-cols-2 about-title hidd'>
              <div className='flex flex-col justify-center md:mt-4'>
                <h1 class=" text-lg font-bold text-center text-[#595959]">Useful Links</h1>
                <div class="mx-auto custom-line bg-[#A64D79] w-10 h-1">
                </div>
                <div className='grid justify-center mt-4 gap-1'>
                  <Link to="" onClick={() => window.location.href='/IAS'} className='hover:text-[#C27BA0] flex items-center gap-1'><FontAwesomeIcon icon={faAngleRight} /> IAS Chapter</Link>
                  <Link to="" onClick={() => window.location.href='/CIS'} className='hover:text-[#C27BA0] flex items-center gap-1'><FontAwesomeIcon icon={faAngleRight} /> CIS Chapter</Link>
                  <Link to=""  onClick={() => window.location.href='/CS'} className='hover:text-[#C27BA0] flex items-center gap-1'><FontAwesomeIcon icon={faAngleRight} /> CS Chapter</Link>
                  <Link to="" onClick={() => window.location.href='/WIE'} className='hover:text-[#C27BA0] flex items-center gap-1'><FontAwesomeIcon icon={faAngleRight} /> WIE Affinity Group</Link>
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <h1 class=" text-lg font-bold text-center text-[#595959]">Contact Us</h1>
                <div class="mx-auto custom-line bg-[#A64D79] w-10 h-1">
                </div>
                <div className='grid justify-center mt-4 gap-1'>
                  <div className='flex items-center gap-[11px] mb-1'>
                    <FontAwesomeIcon icon={faLocationDot}/> <span> ENSI, Manouba</span>
                  </div>
                  <div className='flex items-center gap-2 mb-1'>
                    <FontAwesomeIcon icon={faPhone}/> <span>+216 93 179 760</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faPaperPlane}/> <span>ieee.wie@ensi-uma.tn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pb-6 pt-3 border-t border-gray-400 flex-col-reverse md:flex-row">
            <p className="md:text-sm text-[13px] about-title hidd">
              © Copyright 2023 IEEE ENSI SB. All rights reserved.
            </p>
            <div className='flex justify-center gap-3 md:text-[16px] text-[17px] md:mb-0 mb-5 about-title hidd'>
              <Link to="" onClick={() => window.location.href='/'} className='hover:text-[#C27BA0]'>Home</Link>
              <Link to="" onClick={() => window.location.href='/About'} className='hover:text-[#C27BA0]'>About</Link>
              <Link to="" onClick={() => window.location.href='/Events'} className='hover:text-[#C27BA0]'>Events</Link>
              <Link to="" onClick={() => window.location.href='/Contact'} className='hover:text-[#C27BA0]'>Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer