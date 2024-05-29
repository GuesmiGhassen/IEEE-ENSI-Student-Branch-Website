import React from 'react'

function Goals() {
  return (
    <div class="bg-white md:mt-20 md:pt-10 pt-16 pb-20" id='Goals'>
        <div class="px-6 py-10 mx-auto">
        <h1 class="about-title hidd md:text-3xl text-[22px] font-bold text-center text-[#595959] capitalize ">OUR MAIN GOALS</h1>
          <div class="about-title hidd mx-auto bg-[rgba(255,190,207,.9)] custom-line md:mt-0 -mt-1 w-28 md:h-1.5 h-[0.25rem] relative"></div>
          <div class="cont hidd grid grid-cols-1 gap-10 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3" >

            <div class="flex flex-col items-center p-8 transition-colors feature-service duration-200 transform cursor-pointer group">
              <div className='bg-[rgba(255,190,207,.1)] relative w-[215px] h-[215px] rounded-full flex md:items-start items-center md:justify-normal justify-center md:pl-12'>
                <img width="52" height="50" decoding="async" className='relative md:pt-14 mt-[-20px]' src="https://www.nationalbreastcancer.org/wp-content/uploads/answer-icon.svg" alt="answer-icon"/>
              </div>
              <h1 class="md:-top-24 -top-20 relative pb-1 md:pl-32 text-2xl font-bold text-[#A64D79] capitalize">Technical Workshops</h1>
              <p class="md:-top-24 -top-20 md:ml-32 md:pl-2 md:text-left text-center relative text-lg text-gray-700">Promote engineering field in relation with humanitarian projects.</p>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors feature-service duration-200 transform cursor-pointer group">
              <div className='bg-[rgba(255,190,207,.1)] relative w-[215px] h-[215px] rounded-full flex md:items-start items-center md:justify-normal justify-center md:pl-12'>
                <img width="52" height="50" decoding="async" className='relative md:pt-14 mt-[-20px]' src="https://www.nationalbreastcancer.org/wp-content/uploads/support-icon.svg" alt="answer-icon"/>
              </div>
              <h1 class="md:-top-24 -top-20 relative pb-1 md:mr-[-6px] md:pl-32 text-2xl font-bold text-[#A64D79] capitalize">Humanitarian Projects</h1>
              <p class="md:-top-24 -top-20 md:ml-32 md:mr-[-10px] md:text-left text-center relative text-lg text-gray-700">We encourage charitable work and organize campaigns to help people all over tunisia.</p>
            </div>
            
            <div class="flex flex-col items-center p-8 transition-colors feature-service duration-200 transform cursor-pointer group">
              <div className='bg-[rgba(255,190,207,.1)] relative w-[215px] h-[215px] rounded-full flex md:items-start items-center md:justify-normal justify-center md:pl-12'>
                <img width="52" height="50" decoding="async" className='relative md:pt-14 mt-[-20px]' src="https://www.nationalbreastcancer.org/wp-content/uploads/Untitled-design-9-e1657036655381.png" alt="answer-icon"/>
              </div>
              <h1 class="md:-top-24 -top-20 relative pb-1 text-2xl font-bold text-[#A64D79] capitalize">Team Spirit</h1>
              <p class="md:-top-24 -top-20 md:ml-32 md:pl-1 md:text-left text-center relative text-lg text-gray-700">WIE mission is to bring students together in an educational environment.</p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Goals