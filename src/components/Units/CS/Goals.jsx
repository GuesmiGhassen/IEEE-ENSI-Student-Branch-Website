import React from 'react'
import hard from '../../../assets/images/hard-skills-icon-style-vector.jpg'
import soft from '../../../assets/images/work-ethic-soft-skill-line-icon-illustration-vector.jpg'
import team from '../../../assets/images/vector-members-line-black-icon.jpg'


function Goals() {
  return (
    <div class="bg-[#141D26]">
        <div class="px-6 py-10 mx-auto">
          <h1 class="about-title hidd HP font-bold text-center tracking-widest text-[#FAA41A] capitalize text-4xl ">OUR GOALS</h1>
          <div class="cont hidd grid grid-cols-1 gap-10 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3" >
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#243447] rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full " src={hard} alt="" />
              <h1 class="mt-4 text-xl font-bold text-[#FAA41A] capitalize group-hover:text-white Owl">Technical Workshops</h1>
              <p class="mt-4 text-center text-gray-500 font-semibold capitalize group-hover:text-gray-300">New technologies in fields related to computer science, Web development ...</p>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#243447] rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full" src={soft} alt="" />
              <h1 class="mt-4 text-xl font-bold text-[#FAA41A] capitalize group-hover:text-white Owl">Soft Skills</h1>
              <p class="mt-4 text-center text-gray-500 font-semibold capitalize group-hover:text-gray-300">Communication skills, networking and public speaking.</p>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-[#243447] rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full" src={team} alt="" />
              <h1 class="mt-4 text-xl font-bold text-[#FAA41A] capitalize  group-hover:text-white Owl">Teamwork</h1>
              <p class="mt-4 text-center text-gray-500 font-semibold capitalize  group-hover:text-gray-300">Events, competitions, integration seminars and team building activities.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Goals