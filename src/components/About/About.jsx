import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import hard from '../../assets/images/hard-skills-icon-style-vector.jpg'
import soft from '../../assets/images/work-ethic-soft-skill-line-icon-illustration-vector.jpg'
import team from '../../assets/images/vector-members-line-black-icon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
function About() {
  const [state, setstate] = useState(1);
  const click = (index) => {
    setstate(index)
  }
  const items = [
    { id: 1, text: 'IEEE' },
    { id: 2, text: 'IEEE R8' },
    { id: 3, text: 'IEEE Tunisia Section' },
    { id: 4, text: 'IEEE ENSI SB' },
    { id: 5, text: 'ENSI' },
  ];
  return (
    <div>
      <Navbar />
      <div class="mr-5 ml-5 pt-14">
        <div class="px-50 py-8 mx-auto ">
          <div className='flex flex-col items-center relative md:pb-2 pt-4'>
            <h1 class="about-title hidd md:text-3xl text-[22px] font-semibold text-center text-[#253C6A] capitalize">GET TO KNOW US MORE <span className='text-red-800 font-semibold'>!</span></h1>
            <div class="about-title hidd mx-auto custom-line md:mt-0 -mt-1 bg-red-800 w-28 md:h-1.5 h-[0.25rem] relative"></div>
          </div>
          <div class=" md:grid-cols-5 grid grid-cols-2 md:mx-5 gap-2 mt-6 xl:mt-0">
            {items.map((item) => (
              <td key={item.id}>
                <div
                  onClick={() => click(item.id)}
                  className={`mt-10 mr-1 py-4 relative flex justify-center about-container items-center border cursor-pointer rounded-xl ${
                    state === item.id ? 'border-blue-800' : 'dark:border-gray-700'
                  }`}
                >
                  <h2 className="text-lg font-medium text-gray-700 sm:text-l ">
                    {item.text}
                  </h2>
                </div>
              </td>
          ))}
          </div>
        </div>
        {state === 1 && (
          <div class="drop-shadow-lg md:h-65 md:mx-5 md:flex bg-[#F2F2F2] rounded-xl p-5 md:p-0">
            <div class="md:w-1/2 p-0">
              <img class="w-42 h-55 mx-auto md:rounded-l-xl sm:rounded-l-xl about-image" src={"https://res.cloudinary.com/dvw61yp2y/image/upload/v1712197677/About/image_zf3rk6.jpg"} alt="" />
            </div>
            <div class="md:w-1/2 flex items-center md:ml-10 md:mr-10 about-container text-center md:text-left space-y-5">
              <p class="md:text-[1rem] text-justify text-justify-last sm:text-xl">
                <h1 class="text-l font-bold  capitalize md:text-3xl text-2xl tracking-wide md:mb-2 mb-2 mt-2 ">IEEE</h1>
                The world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity, 
                IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity. IEEE will be 
                essential to the global technical community and to technical professionals everywhere, and be universally recognized 
                for the contributions of technology and of technical professionals in improving global conditions.
              </p>
            </div>
          </div>
        )}
        {state === 2 && (
          <div class="drop-shadow-lg md:h-65 md:mx-5 md:flex bg-[#F2F2F2] rounded-xl p-5 md:p-0">
            <div class="md:w-1/2 p-0">
              <img class="w-50 h-55 mx-auto md:rounded-l-xl about-image" src={"https://res.cloudinary.com/dvw61yp2y/image/upload/v1712197708/About/region8_ws6d9x.png"} alt="" />
            </div>
            <div class="md:w-1/2 flex items-center md:ml-10 md:mr-10 about-container text-center md:text-left space-y-5">
              <p class="md:text-[1rem] text-justify text-justify-last sm:text-xl">
                <h1 class="text-l font-bold  capitalize md:text-3xl text-2xl md:mb-2 md:tracking-wide mb-2 mt-2"> IEEE Region 8</h1>
                Also known as the IEEE Europe, Middle East, and Africa (EMEA) Region, encompasses a vast and diverse geographical area, 
                spanning from Western to Eastern Europe, North to South Africa, and the Middle East. It plays a pivotal role in advancing 
                the fields of electrical engineering, electronics, and computer science by hosting a wide range of activities, including 
                conferences, technical workshops, and professional development opportunities</p>
            </div>
          </div>
        )}
        {state === 3 && (
          <div class="drop-shadow-lg md:h-65 md:mx-5 md:flex bg-[#F2F2F2] rounded-xl p-5 md:p-0">
            <div class="md:w-1/2 p-0">
              <img class="w-50 h-55 mx-auto md:rounded-l-xl about-image" src={"https://res.cloudinary.com/dvw61yp2y/image/upload/v1712197637/About/section_pkxuxi.jpg"} alt="" />
            </div>
            <div class="md:w-1/2 flex items-center md:ml-10 md:mr-10 about-container text-center md:text-left space-y-5">
              <p class="md:text-[1rem] text-justify text-justify-last sm:text-xl">
                <h1 class="md:tracking-wide text-l font-bold  capitalize md:text-3xl text-2xl md:mb-2 mb-2 mt-2">IEEE Tunisia section</h1> 
                A non-profit organisation representing IEEE in Tunisia. IEEE Tunisia Section aims to spread IEEE Activities to all corners of the country by educational and technical activities, human networking, and to develop technology and its applications for humanitarian challenges. IEEE Tunisia Section mission is to assist and improve the electrical, electronic, computer and information technology industries; in Tunisia by: Providing practical liaisons between academia and the technical workforce, and Advancing the professional standing of our members and their industry.           </p>
            </div>
          </div>
        )}
        {state === 4 && (
          <div class="drop-shadow-lg md:h-65 md:mx-5 md:flex bg-[#F2F2F2] rounded-xl p-5 md:p-0">
            <div class="md:w-1/2 p-0">
              <img class="w-50 h-55 mx-auto md:rounded-l-xl about-image" src={"https://res.cloudinary.com/dvw61yp2y/image/upload/v1712197717/About/sbensi_l9izgo.jpg"} alt="" />
            </div>
            <div class="md:w-1/2 flex items-center md:ml-10 md:mr-10 about-container text-center md:text-left space-y-5">
              <p class="md:text-[1rem] text-justify text-justify-last sm:text-xl">
                <h1 class="md:tracking-wide text-l font-bold capitalize md:text-3xl text-2xl md:mb-2 mb-2 mt-2">IEEE ENSI SB</h1>
                Created in October 2011 by engineering students from the national school of computer science, given the internationalization of this institute and the necessity that we have touched to integrate our school in such a movement that takes care of the improvement of the Engineering, computer science and information technology around the world. Our SB always tries to address the most relevant technical themes of today at local and global level through lectures and regular articles. Programs are often organized to ensure the growth of skills and knowledge among students and to encourage individual commitment to continuing education among IEEE volunteers. </p>
            </div>
          </div>
        )}
        {state === 5 && (
          <div class="drop-shadow-lg md:h-65 md:mx-5 md:flex bg-[#F2F2F2] rounded-xl p-5 md:p-0">
            <div class="md:w-1/2 p-0">
              <img class="w-50 h-55 mx-auto md:rounded-l-xl about-image" src={"https://res.cloudinary.com/dvw61yp2y/image/upload/v1712197660/About/ensi_mysyez.jpg"} alt="" />
            </div>
            <div class="md:w-1/2 flex items-center md:ml-10 md:mr-10 about-container text-center md:text-left space-y-5">
              <p class="md:text-[1rem] text-justify text-justify-last sm:text-xl">
                <h1 class=" md:tracking-wide text-l font-bold capitalize md:text-3xl text-2xl md:mb-2 mb-2 mt-2">NATIONAL SCHOOL OF COMPUTER SCIENCE</h1>
                Established in 1984, ENSI is one of the most prestigious engineering
                school specializing in computer science in Tunisia. ENSI is a regional
                class engineering college where teaching and research - with practical
                relevance as a guiding principle - continues to be its primary focus. Graduates of ENSI go on to have impactful careers in various sectors, contributing to the advancement of technology in Tunisia and making a mark on the global stage.    </p>
            </div>
          </div>
        )}
      </div>
      <div class="bg-white mt-20">
        <div class="px-6 py-10 mx-auto">
          <div className='flex flex-col items-center relative md:pb-0 pb-5'>
            <h1 class="about-title hidd md:text-3xl text-[22px] font-semibold text-center text-[#253C6A] capitalize">OUR MAIN GOALS</h1>
            <div class="about-title hidd mx-auto custom-line bg-red-800 md:mt-0 -mt-1 w-28 md:h-1.5 h-[0.25rem]"></div>
          </div>
          <div class="cont hidd grid grid-cols-1 gap-10 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3" >
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-800 rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full ring-2 ring-red-800 group-hover:ring-gray-200 " src={hard} alt="" />
              <h1 class="mt-4 text-xl font-bold text-red-800 capitalize group-hover:text-white">Technical Workshops</h1>
              <p class="mt-4 text-center text-black capitalize group-hover:text-gray-300">New technologies in fields related to computer science.</p>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-800 rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full ring-2 ring-red-800  group-hover:ring-gray-200" src={soft} alt="" />
              <h1 class="mt-4 text-xl font-bold text-red-800 capitalize group-hover:text-white">Soft Skills</h1>
              <p class="mt-4 text-center text-black capitalize group-hover:text-gray-300">Communication skills, networking and public speaking.</p>
            </div>
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-800 rounded-xl">
              <img class="object-cover w-28 h-28 rounded-full ring-2 ring-red-800  group-hover:ring-gray-200" src={team} alt="" />
              <h1 class="mt-4 text-xl font-bold text-red-800 capitalize  group-hover:text-white">Teamwork</h1>
              <p class="mt-4 text-center text-black capitalize  group-hover:text-gray-300">Events, competitions, integration seminars and team building activities.</p>
            </div>
          </div>
        </div>
      </div>
      <div class=" my-5 py-5 md:mx-auto drop-shadow-lg mt-20 max-w-screen-xl mx-auto px-5 bg-[#F2F2F2] rounded-xl p-2 min-h-sceen">
        <div class="flex flex-col items-center">
          <h1 class="main-title hidd md:text-3xl text-3xl font-semibold text-center text-[#253C6A] capitalize ">FAQ</h1>
          <div class="main-title hidd mx-auto custom-line bg-red-800 md:w-24 w-20 md:h-1.5 h-[0.25rem] pt-1 relative"></div>
          <p class="main-title hidd text-neutral-500 md:text-xl text-base mt-1 text-center">Frequenty asked questions</p>
        </div>
        <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div class="py-5">
            <details class="group">
              <summary class="flex justify-between items-center  hover:text-blue-800 font-medium text-xl cursor-pointer list-none cont hidd">
                <span> What are the IEEE membership benefits?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Members gain access to a vast network of like-minded individuals and experts, enabling them to stay current with industry trends and cutting-edge research through c
                onferences, publications, and webinars. They also enjoy substantial discounts on conferences, publications,
                and technical resources, aiding in their professional development.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="text-xl hover:text-blue-800 flex justify-between items-center font-medium cursor-pointer list-none cont hidd">
                <span> How much does the IEEE membership cost ?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                14 dollars for 2023-2024.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="text-xl hover:text-blue-800 flex justify-between items-center font-medium cursor-pointer list-none cont hidd">
                <span> What's Vtools ?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                VTools is a suite of web-based tools and applications developed by
                the IEEE to help members and volunteers manage various aspects of IEEE-related activities.
                These tools are designed to facilitate the planning and coordination of
                IEEE events, including conferences, meetings and technical activities.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="text-xl hover:text-blue-800 flex justify-between items-center font-medium cursor-pointer list-none cont hidd">
                <span>How can I join IEEE ENSI SB?</span>
                <span class="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                You need to complete the form when it is accessible and pay the membership fee.</p>
            </details>
          </div>
        </div>
      </div>
      <div class=" mt-20 mx-auto w-full h-full">
        <div class="mt-10 flex flex-col items-center">
        <h1 class="about-title hidd md:text-3xl text-[22px] font-semibold text-center text-[#253C6A] capitalize">OUR AWARDS</h1>
          <div class="about-title hidd mx-auto custom-line bg-red-800 md:mt-0 -mt-1 w-28 md:h-1.5 h-[0.25rem]"></div>
        </div>
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div class="border-2-2 -z-10 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
          {/* Award 1 */}
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cont hidd">
              <div class="order-1 w-5/12"></div>
              <div class="flex items-center order-1 bg-red-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">1</h1>
              </div>
              <div class="order-1 bg-slate-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">2023</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className='text-base'/> 2023 Outstanding LARGE Student Branch Award.
                </p>
              </div>
            </div>
            {/* Award 2 */}
            <div class="mb-8 flex justify-between items-center w-full right-timeline cont hidd"> 
              <div class="order-1 w-5/12"></div>
              <div class=" flex items-center order-1 bg-red-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div class="order-1 bg-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">2023</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className='text-base'/> 3RD place in IEEE EMBS Tunisia Technical Challenge. 
                </p>
              </div>
            </div>
            {/* Award 3 */}
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cont hidd">
              <div class="order-1 w-5/12"></div>
              <div class="flex items-center order-1 bg-red-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">3</h1>
              </div>
              <div class="order-1 bg-slate-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">2023</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className='text-base'/> 3RD place in IEEE IAS Tunisia Technical Challenge. 
                </p>
              </div>
            </div>
            {/* Award 4 */}
            <div class="mb-8 flex justify-between items-center w-full right-timeline cont hidd">
              <div class="order-1 w-5/12"></div>
              <div class=" flex items-center order-1 bg-red-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
              <div class="order-1 bg-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">2022</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className='text-base'/> 1ST place in CIS Challenge.
                </p>
              </div>
            </div>
            {/* Award 5 */}
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cont hidd">
              <div class="order-1 w-5/12"></div>
              <div class="flex items-center order-1 bg-red-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">5</h1>
              </div>
              <div class="order-1 bg-slate-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">2022</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className='text-base'/> IEEE Exemplary Student Branch.
                </p>
              </div>
            </div>
            {/* Award 6 */}
            <div class="mb-8 flex justify-between items-center w-full right-timeline cont hidd">
              <div class="order-1 w-5/12"></div>
              <div class="flex items-center order-1 bg-red-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">6</h1>
              </div>
              <div class="order-1 bg-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">2021</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className='text-base'/> 1ST place in CAS Challenge.
                </p>
              </div>
            </div>
            {/* Award 7 */}
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cont hidd">
              <div class="order-1 w-5/12"></div>
              <div class="flex items-center order-1 bg-red-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">7</h1></div>
              <div class="order-1 bg-slate-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">2021</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className='text-base'/> 2ND place in CAS Challenge.
                </p>
              </div>
            </div>
            {/* Award 8 */}
            <div class="mb-8 flex justify-between items-center w-full right-timeline cont hidd">
              <div class="order-1 w-5/12"></div>
              <div class="flex items-center order-1 bg-red-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">8</h1>
              </div>
              <div class="order-1 bg-blue-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">2020</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className='text-base'/> 3RD place in IEEE R8 Website Award.
                </p>
              </div>
            </div>
            {/* Award 9 */}
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cont hidd">
              <div class="order-1 w-5/12"></div>
              <div class="flex items-center order-1 bg-red-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">9</h1></div>
              <div class="order-1 bg-slate-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">2019</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className='text-base'/> IEEE WIE Award.
                </p>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About