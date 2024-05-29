import React from 'react';
import { useState } from 'react';


function About() {
  const [state, setstate] = useState(1);
  const click = (index) => {
    setstate(index)
  }
  const items = [
    { id: 1, text: 'IEEE CIS' },
    { id: 2, text: 'IEEE CIS ENSI SBC' },
  ];
  return (
    <div id='About'>
      <div class="bg-[#00040f] md:pt-20 pt-16 px-5 pb-10">
        <div class="px-50 py-8 mx-auto ">
            <h1 className='about-title hidd text-[#ffffffb3] text-4xl font-semibold text-center capitalize'>ABOUT US</h1>
            <div class=" md:grid-cols-2 cont hidd grid grid-cols-2 md:mx-32 gap-2 mt-6 xl:mt-0">
                {items.map((item) => (
                <td key={item.id}>
                    <div
                    onClick={() => click(item.id)}
                    className={`mt-10 mr-1 py-4 relative flex justify-center about-container items-center border cursor-pointer rounded-xl ${
                        state === item.id ? 'border-blue-800' : 'dark:border-gray-500'
                    }`}
                    >
                    <h2 className="md:text-3xl font-medium text-gray-500  text-xl ">
                        {item.text}
                    </h2>
                    </div>
                </td>
                ))}
          </div>
        </div>
        <div className='flex justify-center'>
          {state === 1 && (
            <div class="drop-shadow-lg md:w-[50%] about-container md:h-65 md:mx-5 md:flex box-shadow bg-black-gradient-2 rounded-xl p-5 md:p-0">
              <div class="flex items-center md:p-10 text-center md:text-left space-y-5">
                <p class="md:text-[1rem] text-[#ffffffb3] text-justify text-justify-last sm:text-xl">
                  The IEEE Computational Intelligence Society is a professional association of the Institute of Electrical and Electronics Engineers (IEEE) 
                  that focuses on "the theory, design, application, and development of biologically and linguistically motivated computational paradigms 
                  emphasizing neural networks, connectionist systems, genetic algorithms, evolutionary algorithms, fuzzy intelligent systems, and hybrid 
                  intelligent systems in which these paradigms are contained.</p>
              </div>
            </div>
          )}
          {state === 2 && (
            <div class="drop-shadow-lg md:w-[50%] about-container md:h-65 md:mx-5 md:flex box-shadow bg-black-gradient-2 rounded-xl p-5 md:p-0">
              <div class="flex items-center md:p-10 text-center md:text-left space-y-5">
                <p class="md:text-[1rem] text-[#ffffffb3] text-justify text-justify-last sm:text-xl">
                IEEE CIS ENSI SBC was created in MAY 2021 by engineering students from the national school of computer science, given the internationalization 
                of this institute and the necessity that we have touched to integrate our school in such a movement it dedicates itself to make progress 
                in the computing areas by sharing knowledge and introducing several innovative features.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    
  )
}

export default About