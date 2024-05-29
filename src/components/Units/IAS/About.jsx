import React from 'react';
import { useState } from 'react';


function About() {
  const [state, setstate] = useState(1);
  const click = (index) => {
    setstate(index)
  }
  const items = [
    { id: 1, text: 'IEEE IAS' },
    { id: 2, text: 'IEEE IAS ENSI SBC' },
  ];
  return (
    <div id='About' className=''>
      <div class="bg-[#F0F1F2] md:pt-20 pt-16 px-5 pb-32">
        <div class="px-50 py-8 mx-auto ">
          <h1 class="about-title hidd md:text-3xl text-[22px] font-bold text-center text-[#595959] capitalize ">ABOUT US</h1>
          <div class="about-title hidd mx-auto bg-[#078107] custom-line md:mt-0 -mt-1 w-28 md:h-1.5 h-[0.25rem] relative"></div>
            <div class=" md:grid-cols-2 cont hidd grid grid-cols-2 md:mx-32 gap-2 mt-6 xl:mt-0">
                {items.map((item) => (
                <td key={item.id}>
                    <div
                    onClick={() => click(item.id)}
                    className={`mt-10 mr-1 py-4 relative flex justify-center about-container items-center border cursor-pointer rounded-xl ${
                        state === item.id ? 'border-blue-800' : 'dark:border-gray-500'
                    }`}
                    >
                    <h2 className="md:text-3xl font-medium text-[#595959]  text-xl ">
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
                IEEE Industry Applications Society will be a world leader in the advancement of science and technology linking theory 
                and practice in the application of electrical and electronic systems for the benefit of humanity. IEEE Industry Applications 
                Society enables the advancement of theory and practice in the design, development, manufacturing and application of safe, 
                sustainable, reliable, smart electrical systems, equipment and services.</p>
              </div>
            </div>
          )}
          {state === 2 && (
            <div class="drop-shadow-lg md:w-[50%] about-container md:h-65 md:mx-5 md:flex box-shadow bg-white rounded-xl p-5 md:p-0">
              <div class="flex items-center md:p-10 text-center md:text-left space-y-5">
                <p class="md:text-[1rem] text-[#595959] text-justify text-justify-last sm:text-xl">
                IEEE IAS ENSI SBC was created in October 2018 by engineering students from the national school of computer science, 
                given the internationalization of this institute and the necessity that we have touched to integrate our school in such a 
                movement that takes care of the improvement of the Engineering, computer science and information technology around the world. 
                Our SB always tries to address the most relevant technical themes of today at local and global level through lectures and regular 
                articles.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    
  )
}

export default About