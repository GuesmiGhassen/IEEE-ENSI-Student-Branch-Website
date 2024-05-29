import React from 'react'
import hard from '../../../assets/images/hard-skills-icon-style-vector.jpg'
import soft from '../../../assets/images/work-ethic-soft-skill-line-icon-illustration-vector.jpg'
import team from '../../../assets/images/vector-members-line-black-icon.jpg'


function Goals() {
  return (
    <div class="bg-[#00040f] pt-20" id='Goals'>
        <div class="px-6 py-10 mx-auto">
          <h1 class="about-title hidd font-bold text-center text-[#ffffffb3] capitalize text-4xl ">OUR GOALS</h1>
          <div class="cont hidd grid grid-cols-1 gap-10 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3" >
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#243447] rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full" src={soft} alt="" />
              <h1 class="mt-4 text-xl font-bold text-gradient capitalize group-hover:text-white ">Soft Skills</h1>
              <p class="mt-4 text-center text-gray-500 font-semibold capitalize group-hover:text-gray-300">Communication skills, networking and public speaking.</p>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#243447] rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full " src={hard} alt="" />
              <h1 class="mt-4 text-xl font-bold text-gradient capitalize group-hover:text-white ">Technical Workshops</h1>
              <p class="mt-4 text-center text-gray-500 font-semibold capitalize group-hover:text-gray-300">Training session in several top in-demand technologies in the field of Artificial Intelligence.</p>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#243447] rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full" src={team} alt="" />
              <h1 class="mt-4 text-xl font-bold text-gradient capitalize  group-hover:text-white ">Team Spirit</h1>
              <p class="mt-4 text-center text-gray-500 font-semibold capitalize  group-hover:text-gray-300">Our mission is Advancing nature-inspired computational solutions in science.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Goals