import React from 'react'
import salma from '../../../assets/Bureau/CS/salma.png'
import abir from '../../../assets/Bureau/CS/abir.png'
import amal from '../../../assets/Bureau/CS/amal.png'
import imen from '../../../assets/Bureau/CS/imen.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
function CSTeam() {
  return (
    <div className="bg-[#141D26] pt-12" id='Team'>
        <div className="px-6 py-10 mx-auto about-title hidd">
          <h1 className="HP font-bold text-center text-[#FAA41A] capitalize text-4xl tracking-widest">MEET OUR TEAM</h1>
          <h2 className="text-center text-gray-500 font-bold text-xl Owl pt-2">A Quality And Motivated Board</h2>
          <div className="flex justify-center mx-auto">
                <span className="inline-block w-44 h-[2.5px] bg-[#FAA41A] rounded-full opacity-50"></span>
                <span className="inline-block w-4 h-[2.5px] mx-1 bg-[#FAA41A] rounded-full opacity-50"></span>
                <span className="inline-block w-2 h-[2.5px] bg-[#FAA41A] rounded-full opacity-50"></span>
            </div>
        </div>
        <div className='cont hidd grid md:grid-cols-4 grid-cols-2 pb-10'>
          <div>
            <img src={salma} alt="" />
            <div className='text-white pt-2'>
              <div className='flex justify-center pl-10'>
                <h1 className=' font-semibold md:text-base text-base'>Salma BOUAZIZ</h1>
              </div>
              <div className='flex justify-center pl-10'>
                <h2 className='Owl text-[#FAA41A] opacity-70 text-lg'>CHAIR</h2>
              </div>
              <div className='flex justify-center gap-5 pl-10 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/salma.bouaziz.138"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} /></a>
                <a href="https://www.instagram.com/salmabouaziz320/"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href="https://www.linkedin.com/in/bouaziz-salma-2ba75b252/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
              </div>
            </div>
          </div>
          <div>
            <img src={amal} alt="" />
            <div className='text-white pt-2'>
              <div className='flex justify-center pl-10'>
                <h1 className=' font-semibold md:text-base text-base'>Amal TOUMI</h1>
              </div>
              <div className='flex justify-center pl-10'>
                <h2 className='Owl text-[#FAA41A] opacity-70 text-lg'>VICE-CHAIR</h2>
              </div>
              <div className='flex justify-center gap-5 pl-10 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/amal.toumi.3139"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} /></a>
                <a href="https://www.instagram.com/amal___toumi/"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href="https://www.linkedin.com/in/amal-toumi-1890b3285/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
              </div>
            </div>
          </div>
          <div>
            <img src={abir} alt="" />
            <div className='text-white pt-2'>
              <div className='flex justify-center pl-10'>
                <h1 className=' font-semibold md:text-base text-base'>Abir AFFES</h1>
              </div>
              <div className='flex justify-center pl-10'>
                <h2 className='Owl text-[#FAA41A] opacity-70 text-lg'>GENERAL SECRETARY</h2>
              </div>
              <div className='flex justify-center gap-5 pl-10 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/abir.affes.10"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} /></a>
                <a href="https://www.instagram.com/abir_affes/"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href="https://www.linkedin.com/in/abir-affes-861762252/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
              </div>
            </div>
          </div>
          <div>
            <img src={imen} alt="" />
            <div className='text-white pt-2'>
              <div className='flex justify-center pl-10'>
                <h1 className=' font-semibold md:text-base text-base'>Imen LAKHAL</h1>
              </div>
              <div className='flex justify-center pl-10'>
                <h2 className='Owl text-[#FAA41A] opacity-70 text-lg'>MEDIA MANAGER</h2>
              </div>
              <div className='flex justify-center gap-5 pl-10 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/imene.lakhal.988"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} /></a>
                <a href="https://www.instagram.com/imene_lakhal/"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href="https://www.linkedin.com/in/imen-lakhal-2406a6258/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CSTeam