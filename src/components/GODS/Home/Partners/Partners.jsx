import React from 'react'
import './index.css'
import Slider from 'react-infinite-logo-slider'
import CISTS from './CISTS.png'
import Thinkit from '../../../../assets/Partners/Thinkit.png'
import Zerda from './zerda-tech-logo.svg'
import CIT from './conformit_logo.png.webp'
function Partners() {
  return (
    <div className='pb-10 bg-[#f2f2f2] top-[-15px] lg:top-0 relative' >
        <div className='lg:mx-10'>
            <div className='horizontal-line mb-12 text-red-800 flex justify-center'>
                <h1 className='lg:text-2xl text-xl font-semibold text-[#1D202B] flex justify-center items-center'>MEET OUR SPONSORS AND PARTNERS</h1>
            </div>
            <div className='Slide relative lg:mx-[-30px]'>
                <Slider
                    width="250px"
                    duration={30}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBoderColor={'#0C0D26'}
                >
                    <Slider.Slide>
                        <img src={CISTS} alt="CIS" className='w-36 cursor-pointer lg:ml-10' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={Thinkit} alt="THINKIT" className='w-44 cursor-pointer' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={Zerda} alt="ZERDA" className='w-48 cursor-pointer' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={CIT} alt="CONFORMIT" className='w-48 cursor-pointer lg:ml-2' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={CISTS} alt="CIS" className='w-36 cursor-pointer lg:ml-10' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={Thinkit} alt="THINKIT" className='w-44 cursor-pointer' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={Zerda} alt="ZERDA" className='w-48 cursor-pointer' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={CIT} alt="CONFORMIT" className='w-48 cursor-pointer lg:ml-2' />
                    </Slider.Slide>
                </Slider>
            </div>
            
        </div>
    </div>
  )
}

export default Partners