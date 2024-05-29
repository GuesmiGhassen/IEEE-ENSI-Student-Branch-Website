import React from 'react'
import { sarra, yosr, tasnim, islem, hafedh } from '../../../constantes/index' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'



function CISTeam() {
  return (
    <div className="bg-[#00040f] md:h-screen md:pt-16 pt-12" id='Team'>
        <div className="px-6 py-10 mx-auto about-title hidd ">
          <h1 className="font-bold text-center text-[#ffffffb3] capitalize text-4xl tracking-widest">MEET OUR TEAM</h1>
          <h2 className="text-center text-gradient font-bold text-lg pt-2">A Quality And Motivated Board</h2>
          <div className="flex justify-center mx-auto">
                <span className="inline-block w-44 h-[2.5px] bg-[#4A8BD2] rounded-full opacity-50"></span>
                <span className="inline-block w-4 h-[2.5px] mx-1 bg-[#4A8BD2] rounded-full opacity-50"></span>
                <span className="inline-block w-2 h-[2.5px] bg-[#4A8BD2] rounded-full opacity-50"></span>
            </div>
        </div>
        <div className='cont hidd grid md:grid-cols-5 grid-cols-2 pb-10'>
          <div>
            <img src={sarra} alt="" />
            <div className='text-white pt-2'>
              <div className='flex justify-center'>
                <h1 className=' font-semibold md:text-base text-lg'>Sarah BOUGHRIOU</h1>
              </div>
              <div className='flex justify-center'>
                <h2 className='text-gradient font-semibold text-sm'>CHAIR</h2>
              </div>
              <div className='flex justify-center gap-5 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/sarah.boughriou"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} /></a>
                <a href="https://www.instagram.com/sarah.boughriou/"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href="https://www.linkedin.com/in/sarah-boughriou/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
              </div>
            </div>
          </div>
          <div>
            <img src={yosr} alt="" />
            <div className='text-white pt-2'>
              <div className='flex justify-center'>
                <h1 className=' font-semibold md:text-base text-lg'>Yousr BOUCHAALA</h1>
              </div>
              <div className='flex justify-center'>
                <h2 className='text-gradient font-semibold text-sm'>VICE-CHAIR</h2>
              </div>
              <div className='flex justify-center gap-5 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/yousr.bouchaala.5"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} /></a>
                <a href="https://www.instagram.com/yousrbouchaala/"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href="https://www.linkedin.com/in/yousr-bouchaala-769245222/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
              </div>
            </div>
          </div>
          <div>
            <img src={tasnim} alt="" />
            <div className='text-white pt-2'>
              <div className='flex justify-center'>
                <h1 className=' font-semibold md:text-base text-lg'>Tasnim MAMI</h1>
              </div>
              <div className='flex justify-center'>
                <h2 className='text-gradient font-semibold text-sm'>GENERAL SECRETARY</h2>
              </div>
              <div className='flex justify-center gap-5 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/tasnim.mami.77"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} /></a>
                <a href="https://www.instagram.com/tasnim.mami.77/"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href="https://www.linkedin.com/in/tasnim-mami-541730223/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
              </div>
            </div>
          </div>
          <div>
            <img src={islem} alt="" />
            <div className='text-white pt-2'>
              <div className='flex justify-center'>
                <h1 className=' font-semibold md:text-base text-lg'>Islem MANSOUR</h1>
              </div>
              <div className='flex justify-center'>
                <h2 className='text-gradient font-semibold text-sm'>MEDIA MANAGER</h2>
              </div>
              <div className='flex justify-center gap-5 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/islem.mansour.71"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} /></a>
                <a href="https://www.instagram.com/islem_mansour/"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href="https://www.linkedin.com/in/islem-mansour/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={hafedh} alt="" />
            <div className='text-white pt-2'>
              <div className='flex justify-center'>
                <h1 className=' font-semibold md:text-base text-lg'>Hafedh BEN SLAMA</h1>
              </div>
              <div className='flex justify-center'>
                <h2 className='text-gradient font-semibold text-sm'>PROJECT MANAGER</h2>
              </div>
              <div className='flex justify-center gap-5 text-2xl md:pt-0 pt-1'>
                <a href="https://www.facebook.com/profile.php?id=100005555116957"><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#ffffff",}} /></a>
                <a href="https://www.instagram.com/hafedh.ben.slama/"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href="https://www.linkedin.com/in/benslamahafedh/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CISTeam