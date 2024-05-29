import React from 'react'
import thunder from '../../../assets/images/Thunder.png'
import thunder1 from '../../../assets/images/thunder1.png'
function Header() {
  return (
    <div>
        <div className="relative h-screen isolate px-6 pt-2 lg:px-8 header-image" id='Home'>
            <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
            >
            </div>
            <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <div className='flex items-center justify-center gap-2 md:pt-0 pt-40'>
                        <div>
                            <img src={thunder1} alt="" width={45} className=' opacity-70 Cs-image'/>
                        </div>  
                        <h1 className="cstitle HP text-[#FAA41A] tracking-wider font-bold sm:text-5xl Cs-image">
                            Welcome to CS Chapter
                        </h1>
                        <div>
                            <img src={thunder} alt="" width={45} className=' opacity-70 Cs-image'/>
                        </div>
                    </div>
                </div>
            </div>
            <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
            >
            </div>
        </div>
    </div>
    
  )
}

export default Header