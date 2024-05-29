import React from 'react'
import {Startech} from '../../../constantes/index'
import '../../Home/News/style.css'


function News() {
return (
    <div id='Activities'>
        <div className=' relative pb-10 pt-10'>
            <div className='flex flex-col items-center relative top-10 md:pb-0 pb-5'>
                <h1 class="about-title hidd md:text-3xl text-[22px] font-bold text-center text-[#595959] capitalize ">UPCOMING EVENT</h1>
                <div class="about-title hidd mx-auto bg-[#078107] custom-line md:mt-0 -mt-1 w-28 md:h-1.5 h-[0.25rem] relative"></div>
            </div>
            <div className='Cards flex items-center justify-center mt-20 md:pr-0 pb-20'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                    <div className='flex items-center justify-center md:px-0 px-5 md:left-32 relative'>
                        <img src={Startech} alt="" className='cont imgxtreme hidd rounded-3xl' width={400}/>
                    </div>
                    <div className='cont hidd z-10 md:text-lg description flex items-center md:mt-0 md:pt-3 pt-5 relative md:px-0 px-10 md:pr-20 text-justify text-justify-last text-black'>
                        Get ready to chart a course through uncharted waters! 🔥🔥 <br />
                        Our inaugural event, ✨STARTech: The Pilot✨ is your compass 🧭 for an exciting journey into the world of IT. <br />
                        We'll provide you with essential roadmaps 🗺️, inspiring ideas 💡, best practices 🏆, and career path insights 🚀, 
                        all designed to help you navigate through four key domains in the ever-evolving realm of computing. <br />
                    </div>
                </div>          
            </div>
        </div>
    </div>
);
}

export default News;