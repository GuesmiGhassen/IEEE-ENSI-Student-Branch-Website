import React from 'react';
import IAS from '../../../assets/Logos/ias.png'
import CIS from '../../../assets/Logos/cis.png'
import CS from '../../../assets/Logos/cs.png'
import WIE from '../../../assets/Logos/wie.png'
import { Link } from 'react-router-dom';
function Units() {
  return (
    <div className='bg-white md:mb-0 mb-10'>
      <div className=' bg-[#F2F2F2] top-10 relative '>
        <div className='Title pt-8 flex flex-col items-center justify-center'>
          <h1 class="main-title hidd md:text-3xl text-[22px] font-semibold text-center text-[#253C6A] capitalize">OUR CHAPTERS AND AFFINITY GROUP</h1>
          <div class="main-title hidd mx-auto custom-line md:mt-0 -mt-1 bg-red-800 w-28 md:h-1.5 h-[0.25rem] relative"></div>
        </div>
        <div className='grid cont hidd md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-14 items-center justify-center pt-28 pb-8 bg-cover md:ml-16' >
            <Link to='' onClick={() => window.location.href='/IAS'} className='lg:w-[11rem] lg:h-[11rem] md:w-[11rem] md:h-[9rem] w-[11rem] h-[9rem] hover:border hover:border-[#078107] items-center flex rounded-3xl gap-4 flex-col '>
              <img src={IAS} alt="IAS Logo" className='top-2 relative lg:w-[110px] md:w-[80px] w-[80px]'/>
              <span className='mx-3 top-2 relative md:mb-0 sm:mb-2'>Industry Applications Society</span>
            </Link>
            <Link to='' onClick={() => window.location.href='/CIS'} className='lg:w-[11rem] lg:h-[11rem] md:w-[11rem] md:h-[9rem] w-[11rem] h-[9rem] hover:border hover:border-[#4A8BD2] items-center flex rounded-3xl gap-4 flex-col'>
              <img src={CIS} alt="CIS Logo" className='top-2 relative lg:w-[160px] md:w-[120px] w-[120px]'/>
              <div className='flex items-center justify-center'>
              <span className='mx-3 top-[4px] relative'>Computational Intelligence Society</span>
              </div>
            </Link>
            <Link to='' onClick={() => window.location.href='/CS'} className='lg:w-[11rem] lg:h-[11rem] hover:border md:w-[11rem] md:h-[9rem] w-[11rem] h-[9rem] hover:border-[#FAA41A] items-center flex rounded-3xl gap-4 flex-col'>
              <img src={CS} alt="CS Logo" className='top-[2rem] relative lg:w-[140px] md:w-[120px] w-[90px]'/>
              <div className='flex items-center justify-center'>
                <span className='mx-3 lg:top-[2.5rem] md:top-[3.4rem] top-[2.5rem] relative'>Computer Society</span>
              </div>
            </Link>
            <Link to='' onClick={() => window.location.href='/WIE'} className='lg:w-[11rem] lg:h-[11rem] md:w-[11rem] md:h-[9rem] w-[11rem] h-[9rem] hover:border hover:border-[#50103C] items-center flex rounded-3xl gap-4 flex-col'>
              <img src={WIE} alt="WIE Logo" className='top-2 relative lg:w-[75px] md:w-[80px] w-[60px]'/>
              <div className='flex items-center justify-center'>
                <span className='md:mx-0 top-2 relative justify-center'>Women In Engineering</span>
              </div>
            </Link>
        </div>
      </div>
    </div>
    
  )
}

export default Units