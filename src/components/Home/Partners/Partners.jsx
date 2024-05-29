import React from 'react'
import './index.css'
import Slider from 'react-infinite-logo-slider'
import { DAI, WEE, Smart } from '../../../constantes/index'
function Partners() {
  return (
    <div className='bg-[#0C0D26] relative top-[-13px] pb-8 rounded-bl-[8rem]'>
        <div className='mx-20 pt-10'>
            <div className='horizontal-line mb-12 text-white flex justify-center main-title hidd'>
                <h1 className='lg:text-2xl md:text-xl text-3xl text-gray-100'>OUR PARTNERS</h1>
            </div>
            <div className='Slide relative mx-[-30px]'>
                <Slider
                    width="250px"
                    duration={10}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBoderColor={'#0C0D26'}
                >
                    {/* <Slider.Slide>
                        <img src={IO} alt="io" className='w-36 grayscale-image' />
                    </Slider.Slide> */}
                    {/* <Slider.Slide>
                        <img src={VEN} alt="venari" className='w-40 grayscale-image' />
                    </Slider.Slide> */}
                    <Slider.Slide>
                        <img src={DAI} alt="dailyn" className='w-36 grayscale-image' />
                    </Slider.Slide>
                    {/* <Slider.Slide>
                        <img src={MIN} alt="minotore" className='w-36 grayscale-image' />
                    </Slider.Slide> */}
                    <Slider.Slide>
                        <img src={WEE} alt="wee learn" className='w-44 grayscale-image' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src={Smart} alt="smart ensi" className='w-32 grayscale-image' />
                    </Slider.Slide>
                </Slider>
            </div>
            
        </div>
    </div>
  )
}

export default Partners