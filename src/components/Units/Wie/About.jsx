import React from 'react';
import { useState } from 'react';


function About() {
  const [state, setstate] = useState(1);
  const click = (index) => {
    setstate(index)
  }
  const items = [
    { id: 1, text: 'IEEE WIE' },
    { id: 2, text: 'IEEE WIE ENSI AG' },
  ];
  return (
    <div id='About' className=''>
      <div class="bg-[#ebe5e5] md:pt-20 pt-16 px-5 pb-32">
        <div class="px-50 py-8 mx-auto ">
          <h1 class="about-title hidd md:text-3xl text-[22px] font-bold text-center text-[#595959] capitalize ">ABOUT US</h1>
          <div class="about-title hidd mx-auto bg-[rgba(255,190,207,.9)] custom-line md:mt-0 -mt-1 w-28 md:h-1.5 h-[0.25rem] relative"></div>
            <div class=" md:grid-cols-2 cont hidd grid grid-cols-2 md:mx-32 gap-2 mt-6 xl:mt-0">
                {items.map((item) => (
                <td key={item.id}>
                    <div
                    onClick={() => click(item.id)}
                    className={`mt-10 mr-1 py-4 relative flex justify-center about-container items-center border cursor-pointer rounded-xl ${
                        state === item.id ? 'border-blue-800' : 'border-gray-300'
                    }`}
                    >
                    <h2 className="md:text-3xl font-medium text-[#741B47]  text-xl ">
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
                IEEE WIE is one of the world’s leaders in changing the face of engineering. 
                Our global network connects nearly 20,000 members in over 100 countries to advance women in technology at all points 
                in their life and career. IEEE WIE members make lifelong friendships, acquire influential mentors, and make a difference 
                for the benefit of humanity.</p>
              </div>
            </div>
          )}
          {state === 2 && (
            <div class="drop-shadow-lg md:w-[50%] about-container md:h-65 md:mx-5 md:flex box-shadow bg-white rounded-xl p-5 md:p-0">
              <div class="flex items-center md:p-10 text-center md:text-left space-y-5">
                <p class="md:text-[1rem] text-[#595959] text-justify text-justify-last sm:text-xl">
                IEEE WIE ENSI AG was created in October 2017 by female engineering students from the national school of computer science, 
                given the internationalization of this institute and the necessity that we have touched to integrate our school in such a 
                movement that takes care of the improvement of the Engineering, humans around the world. Membership in IEEE WIE ENSI gives 
                you access to a global network that advances women professionals in technology at all stages of their lives and careers. 
                IEEE WIE ENSI offers the opportunity to facilitate knowledge sharing and provide support through highly interactive sessions 
                  designed to foster discussion and collaboration.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    
  )
}

export default About