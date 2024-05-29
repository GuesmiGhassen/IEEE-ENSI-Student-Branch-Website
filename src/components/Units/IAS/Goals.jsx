import React from 'react'
import hard from '../../../assets/images/hard-skills-icon-style-vector.jpg'
import soft from '../../../assets/images/work-ethic-soft-skill-line-icon-illustration-vector.jpg'
import team from '../../../assets/images/vector-members-line-black-icon.jpg'


function Goals() {
  return (
    <div class="bg-white md:mt-20 md:pt-10 pt-16 pb-20" id='Goals'>
        <div class="px-6 py-10 mx-auto">
        <h1 class="about-title hidd md:text-3xl text-[22px] font-bold text-center text-[#595959] capitalize ">OUR MAIN GOALS</h1>
          <div class="about-title hidd mx-auto bg-[#078107] custom-line md:mt-0 -mt-1 w-28 md:h-1.5 h-[0.25rem] relative"></div>
          <div class="cont hidd grid grid-cols-1 gap-10 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3" >
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#078107] rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full ring-2 ring-[#078107] group-hover:ring-gray-200 " src={hard} alt="" />
              <h1 class="mt-4 text-xl font-bold text-[#078107] capitalize group-hover:text-white">Technical Workshops</h1>
              <p class="mt-4 text-center text-gray-700 capitalize font-semibold group-hover:text-gray-300">Promote Industry field <br />
                Make humanitarian and industrial projects <br />
                Design and realization of projects <br />
                Workshops and trainings</p>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#078107] rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full ring-2 ring-[#078107]  group-hover:ring-gray-200" src={soft} alt="" />
              <h1 class="mt-4 text-xl font-bold text-[#078107] capitalize group-hover:text-white">Soft Skills</h1>
              <p class="mt-4 text-center text-gray-700 capitalize font-semibold group-hover:text-gray-300">Having an entrepreneurial mindset helps you to quickly identify problems and provide a timely solution.</p>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#078107]  rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full ring-2 ring-[#078107]  group-hover:ring-gray-200" src={team} alt="" />
              <h1 class="mt-4 text-xl font-bold text-[#078107] capitalize  group-hover:text-white">Team Spirit</h1>
              <p class="mt-4 text-center text-gray-700 capitalize font-semibold group-hover:text-gray-300">IAS-chapter's mission is to bring students together in an educational environment and provide them with a place to pursue their interest in industry by working on small and large scale projects.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Goals