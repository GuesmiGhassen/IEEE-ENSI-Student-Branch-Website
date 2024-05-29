import React from 'react'
import Xtreme from '../../../assets/images/Xtreme.jpg'
import '../../Home/News/style.css'
import H from '../../../assets/images/H.png'


function News() {
    return (
      <div id='Activities'>
        <div className=' bg-[#141D26] relative pt-10 pb-10'>
          <div className='flex flex-col items-center relative top-10 md:pb-0 pb-5'>
            <h1 className='about-title HP hidd text-4xl tracking-widest text-[#FAA41A] font-semibold items-center pb-5'>UPCOMING EVENT</h1>
          </div>
          <div className='Cards flex items-center justify-center mt-10 md:pr-0 pb-20'>
            <div className='grid md:grid-cols-1 sm:grid-cols-1 '>
                <div className='flex items-center justify-center md:px-0 px-5'>
                    <img src={Xtreme} alt="" className='cont imgxtreme hidd rounded-3xl' width={400}/>
                </div>
                <div className='cont hidd z-10 Owl text-lg description flex items-center md:mt-0 pt-5 relative lg:px-96 px-10 text-justify text-justify-last text-[#FFFFFF]'>
                  Are you in search of an exhilarating coding competition that stands out from the rest? 🤓 
                  Look no further than IEEEXtreme, where we've seamlessly combined the thrill of competition with the craft of coding 🫵🏼. 
                  In this 17th edition, prepare yourself for an adventure brimming with mysterious challenges that will constantly test 
                  your skills and keep you engaged 🔥.
                </div>
            </div>
            <img src={H} alt="" className='Himg cont hidd md:w-[200px] w-[270px] sm:block md:hidden lg:block md:bottom-24 bottom-32 right-28 absolute '/>
          </div>
        </div>
      </div>
    );
}

export default News;