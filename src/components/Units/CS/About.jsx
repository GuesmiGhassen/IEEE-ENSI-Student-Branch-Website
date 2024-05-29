import React from 'react';
import { useState } from 'react';

function Tabs() {
  const [state, setstate] = useState(1);
  const click = (index) => {
    setstate(index)
  }
  const items = [
    { id: 1, text: 'IEEE CS' },
    { id: 2, text: 'IEEE CS ENSI SBC' },
  ];
  return (
    <div id='About'>
      <div class="bg-[#141D26] pt-12 px-5 pb-10">
        <div class="px-50 py-8 mx-auto ">
            <h1 className='about-title hidd  text-[#FAA41A] HP text-4xl tracking-widest font-semibold text-center capitalize'>ABOUT US</h1>
            <div class=" md:grid-cols-2 cont hidd grid grid-cols-2 md:mx-32 gap-2 mt-6 xl:mt-0">
                {items.map((item) => (
                <td key={item.id}>
                    <div
                    onClick={() => click(item.id)}
                    className={`mt-10 mr-1 py-4 relative flex justify-center about-container items-center border cursor-pointer rounded-xl ${
                        state === item.id ? 'border-blue-800' : 'dark:border-gray-500'
                    }`}
                    >
                    <h2 className="md:text-3xl font-medium text-gray-500 HP text-2xl ">
                        {item.text}
                    </h2>
                    </div>
                </td>
                ))}
          </div>
        </div>
        <div className='flex justify-center'>
          {state === 1 && (
            <div class="drop-shadow-lg md:w-[50%] about-container md:h-65 md:mx-5 md:flex box-shadow bg-white rounded-xl p-5 md:p-0">
              <div class="flex items-center md:p-10 text-center md:text-left space-y-5">
                <p class="md:text-[1rem] text-[#595959] text-justify text-justify-last sm:text-xl">
                  The IEEE Computer Society stands as a revered and unwavering institution committed to the active engagement of engineers, 
                  scientists, academics, and industry professionals hailing from diverse corners of the globe. Our collective mission revolves 
                  around propelling the ever-evolving realms of computer science and technology, where we consistently advocate for and drive 
                  forward the forefront of innovation and progress. We provide a collaborative platform for these thought leaders, experts, and 
                  enthusiasts to come together, share their knowledge, and contribute to the continual advancement of the field.</p>
              </div>
            </div>
          )}
          {state === 2 && (
            <div class="drop-shadow-lg md:w-[50%] about-container md:h-65 md:mx-5 md:flex box-shadow bg-white rounded-xl p-5 md:p-0">
              <div class="flex items-center md:p-10 text-center md:text-left space-y-5">
                <p class="md:text-[1rem] text-[#595959] text-justify text-justify-last sm:text-xl">
                  The ENSI IEEE Computer Society is a prominent chapter operating within the Ensi student branch. Its primary mission is to foster a 
                  deeper appreciation for the diverse facets of computer science within the academic community. To achieve this, the chapter actively engages 
                  in hosting conferences, educational initiatives, competitions, and innovative IT projects. Beyond these activities, it is also dedicated to 
                  the holistic development of its members, emphasizing not only technical prowess but also the cultivation of essential soft skills.</p>
              </div>
            </div>
          )}        
        </div>
        
      </div>
    </div>
    
  )
}

export default Tabs