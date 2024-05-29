import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../Contact/Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import videoBG from "../../../assets/contactusBG.mp4"
import { faHandsClapping, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function About() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mbp305m', 'template_3kdaa2r', form.current, 'lLbD50xtHft75vY3e')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent')
          setTimeout(() => {
            window.location.reload();
          }, 2000);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <Navbar/>
      
      <div id="AboutBox3" className='md:mb-8 mb-0'>
      
      <video src={videoBG} autoPlay loop muted className='md:h-auto h-screen'></video>

      <div id="containerform" className='relative mt-[-4rem]'>

        <div id="BoxHeaddding1">
          <h1>Get In Touch<FontAwesomeIcon id="BoxHeaddding1Icon" icon={faHandsClapping} /></h1>
          <p>"Let's connect the dots. Reach out and let's build something incredible !"</p>
        </div>

        <div id ="Abouticon_info">
        <div id="Abouticon">
          <div>
            <a class="AbouticonItem" href="https://www.facebook.com/IEEE.ENSI.SB" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareFacebook} /></a>
            <a class="AbouticonItem" id="icon2" href="https://www.instagram.com/ieee_ensi_sb/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a class="AbouticonItem" id="icon3" href="https://www.linkedin.com/company/ieee-ensi/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>

        <div id="Aboutinfo" class="drop-shadow-2xl md:container mt-[-1.5rem] rounded-xl">

          <div id="map">
            <div id="mapfils">
              <div></div>
            </div>
          </div>
          <div id="content" >
            <div id="content_fils">
              <h1 class="row-span-4">Send Us a Message</h1>
              <form ref={form} onSubmit={sendEmail}>
                <label class="block mb-3">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 ">
                    UserName
                  </span>
                  <input type="text" name="user_name" required class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full h-full rounded-md sm:text-sm focus:ring-1" placeholder="yourName" />
                </label>
                <label class="block mb-3">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input type="email" name="user_email" required class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full h-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
                <label class="block mb-3">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 ">
                    Comment
                  </span>
                  <input type="text" name="message" required class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full h-full rounded-md sm:text-sm focus:ring-1" placeholder="BeFree !" />
                </label>
                <button class="rounded-full submitform" type='submit'>Submit <FontAwesomeIcon icon={faPaperPlane} /></button>
              </form>
              <div id="contensIcons">
                <div class="AboutBoxinfo2Item flex items-center gap-2" >
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: "#e15519", }} />
                  <p>ENSI, Manouba</p>
                </div>
                <div class="AboutBoxinfo2Item flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} style={{ color: "#0061a7", }} />
                  <p>+216 93 179 760</p>
                </div>
                <div class="AboutBoxinfo2Item flex items-center gap-2">
                  <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#a7a6a7", }} />
                  <p>ieee.sb@ensi-uma.tn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    


  )
}

export default About