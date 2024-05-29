import React from 'react'
import {Pinkit} from '../../../constantes/index'
import '../../Home/News/style.css'

function News() {
return (
    <div id='Activities'>
        <div className=' relative pt-10'>
            <div className='flex flex-col items-center relative top-10'>
                <h1 class="about-title hidd md:text-3xl text-[22px] font-bold text-center text-[#595959] capitalize ">UPCOMING EVENT</h1>
                <div class="about-title hidd mx-auto bg-[rgba(255,190,207,.9)] custom-line md:mt-0 -mt-1 w-28 md:h-1.5 h-[0.25rem] relative"></div>
            </div>
            <div className='Cards flex items-center justify-center mt-20 md:pr-0 pb-20'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                    <div className='flex items-center justify-center md:px-0 px-5 md:left-32 relative'>
                        <img src={Pinkit} alt="" className='cont imgxtreme hidd rounded-3xl' width={400}/>
                    </div>
                    <div className='cont hidd z-10 md:text-lg description flex items-center md:mt-0 md:pt-3 pt-5 relative md:px-0 px-10 md:pr-20 text-justify text-justify-last text-black'>
                        🌸 Join us in the fight against breast cancer! 🎗️ <br />
                        💕 Our mission is to raise awareness, foster dialogue, and take action. 🗣️ <br />
                        💪 We're here to empower women to take control of their health. Don't wait! Schedule a consultation and get screened. 🩺 Early detection saves lives! <br />
                        #BreastCancerAwareness
                    </div>
                    <img src="https://www.nationalbreastcancer.org/wp-content/uploads/help-icon.svg" className='w-[250px] !opacity-10 absolute md:right-10 right-0 md:mt-0 mt-52 justify-center cont hidd' alt="" />
                </div>   
            </div>
        </div>
    </div>
);
}

export default News;