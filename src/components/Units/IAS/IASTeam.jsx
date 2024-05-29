import React from 'react'
import eya from '../../../assets/Bureau/IAS/eya.png'
import nesrine from '../../../assets/Bureau/IAS/nesrine.png'
import sahar from '../../../assets/Bureau/IAS/sahar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'


function IASTeam() {
  return (
    <div className="bg-[#F0F1F2] md:h-screen pt-16" id='Team'>
        <div className="px-6 py-10 mx-auto about-title hidd ">
          <h1 className="font-bold text-center text-[#595959] capitalize md:text-3xl text-[22px] tracking-widest">MEET OUR TEAM</h1>
          <h2 className="text-center text-[#078107] font-bold text-base pt-2">A Quality And Motivated Board</h2>
          <div className="flex justify-center mx-auto">
                <span className="inline-block w-44 h-[2.5px] bg-[#078107] rounded-full opacity-50"></span>
                <span className="inline-block w-4 h-[2.5px] mx-1 bg-[#078107] rounded-full opacity-50"></span>
                <span className="inline-block w-2 h-[2.5px] bg-[#078107] rounded-full opacity-50"></span>
            </div>
        </div>
        <div className='cont hidd grid md:grid-cols-3 grid-cols-2 pb-10'>
        <div className='flex justify-center items-center flex-col '>
            <div className='flex items-center'>
              <img src={eya} alt="" className='md:w-[250px] w-[180px] flex justify-center'/>
            </div>
            <div className='text-[#595959] pt-2'>
              <div className='flex justify-center'>
                <h1 className='font-semibold md:text-xl text-lg'>Eya MAJBRI</h1>
              </div>
              <div className='flex justify-center md:pt-1 md:pb-1'>
                <h2 className='text-[#078107] font-semibold text-lg'>CHAIR</h2>
              </div>
              <div className='flex justify-center gap-5 text-2xl md:pt-0 pt-1 md:pb-0 pb-4'>
                <a href="https://www.facebook.com/eyamajbri"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#595959",}} /></a>
                <a href="https://www.instagram.com/eyamajbri/"><FontAwesomeIcon icon={faInstagram} style={{color: "#595959",}} /></a>
                <a href="https://www.linkedin.com/in/eyamajbri/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#595959",}} /></a>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col '>
            <div className='flex items-center'>
              <img src={nesrine} alt="" className='md:w-[250px] w-[180px] flex justify-center'/>
            </div>
            <div className='text-[#595959] pt-2'>
              <div className='flex justify-center'>
                <h1 className='font-semibold md:text-xl text-lg'>Nesrine SOUISSI</h1>
              </div>
              <div className='flex justify-center md:pt-1 md:pb-1'>
                <h2 className='text-[#078107] font-semibold text-lg'>VICE-CHAIR</h2>
              </div>
              <div className='flex justify-center gap-5 text-2xl md:pt-0 pt-1 md:pb-0 pb-4'>
                <a href="https://www.facebook.com/nesrine.soussi346"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#595959",}} /></a>
                <a href="https://www.instagram.com/nesrine_souissi_/"><FontAwesomeIcon icon={faInstagram} style={{color: "#595959",}} /></a>
                <a href="https://www.linkedin.com/in/nesrine-souissi-8aa79a259/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#595959",}} /></a>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col '>
            <div className='flex items-center'>
              <img src={sahar} alt="" className='md:w-[250px] w-[180px] flex justify-center'/>
            </div>
            <div className='text-[#595959] pt-2'>
              <div className='flex justify-center'>
                <h1 className='font-semibold md:text-xl text-lg'>Sahar HENI</h1>
              </div>
              <div className='flex justify-center md:pt-1 md:pb-1'>
                <h2 className='text-[#078107] font-semibold text-lg'>GENERAL SECRETARY</h2>
              </div>
              <div className='flex justify-center gap-5 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/profile.php?id=100009333310363"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#595959",}} /></a>
                <a href="https://www.instagram.com/saharheni/"><FontAwesomeIcon icon={faInstagram} style={{color: "#595959",}} /></a>
                <a href="https://www.linkedin.com/in/sahar-heni-077163254/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#595959",}} /></a>
              </div>
            </div>
          </div>
          {/* <div className='flex justify-center items-center flex-col '>
            <div className='flex items-center'>
              <img src={mouadh} alt="" className='md:w-[250px] w-[180px] flex justify-center'/>
            </div>
            <div className='text-[#595959] pt-2'>
              <div className='flex justify-center md:pt-1 md:pb-1'>
                <h1 className='font-semibold md:text-xl text-lg'>Mouadh FRAJ</h1>
              </div>
              <div className='flex justify-center'>
                <h2 className='text-[#078107] font-semibold text-lg'>MEDIA MANAGER</h2>
              </div>
              <div className='flex justify-center gap-5 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/mouad.fraj"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#595959",}} /></a>
                <a href="https://www.instagram.com/mouadh_fraj/"><FontAwesomeIcon icon={faInstagram} style={{color: "#595959",}} /></a>
                <a href="https://www.linkedin.com/in/mouadh-fraj-0ab41424b/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#595959",}} /></a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
  )
}

export default IASTeam