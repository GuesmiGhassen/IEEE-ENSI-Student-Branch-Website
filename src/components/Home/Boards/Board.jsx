import React from 'react';
import './style.css'
import { TeamMembers1, TeamMembers2 } from '../../../constantes/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'

function Board() {

  return (
    <div className='bg-white'>
      <div className='relative md:top-[-10px] top-3'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0C0D26" fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,224C672,245,768,267,864,245.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>
      <div className='bg-[#0C0D26] relative md:top-[-12px] pb-10'>
          <div className='flex justify-center flex-col'>
            <span className='tit main-title hidd text-[#F2F2F2] relative md:text-[48px] text-[23px] flex justify-center md:mt-[-2rem] mt-1 mb-4'>Meet Our Executive Board</span>
            <div className='border containeer hidd border-1 mb-2 md:w-[25%] md:ml-[37.5%] w-[40%] ml-[30%] border-[#428bca]'></div>
            <div className='border containeerr hidd border-1 mb-2 md:w-[20%] md:ml-[40%] w-[35%] ml-[32.5%] border-[#428bca]'></div>
            <div className='border containeer hidd border-1 mb-2 md:w-[15%] md:ml-[42.5%] w-[30%] ml-[35%] border-[#428bca]'></div>
            <div className='border containeerr hidd border-1 mb-5 md:w-[10%] md:ml-[45%] w-[25%] ml-[37.5%] border-[#428bca]'></div>
          </div>
          <div className='containeer relative hidd grid md:grid-cols-4 grid-cols-2 mx-10 gap-5'>
          {TeamMembers1.map((member, index) => (
                <div
                  key={index}
                  className={`image relative flex items-end justify-start w-full text-left bg-center sm:h-[450px] h-[225px] bg-cover`}
                  style={{ backgroundImage: `url(${member.backImg})` }}
                >
                <div className="social_media absolute top-0 left-0 flex flex-col md:mx-5 mx-1 md:mt-3 md:text-3xl text-2xl">
                  <a
                    href={member.FbLink}
                    className="text-[#0C0D26] hover:text-4xl transition-all duration-300 ease-in-out md:mb-0 mb-[-5px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </a>
                  <a
                    href={member.InstaLink}
                    className="text-[#0C0D26] hover:text-4xl transition-all duration-300 ease-in-out md:mb-0 mb-[-5px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </a>
                  <a
                    href={member.LinkedInLink}
                    className="text-[#0C0D26] hover:text-4xl transition-all duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                <h2 className="py-2 lg:w-[60%]">
                  <p className='bg-red-800 md:p-2 py-2 rounded-tr-xl rounded-br-xl md:mb-2 mb-[0.15rem] font-semibold lg:text-base md:text-[14px] px-3 flex justify-center text-xs'>{member.name}</p>
                  <p className='bg-[#253C6A] md:p-2 py-2 px-2 rounded-tr-xl rounded-br-xl md:font-semibold font-medium lg:text-base md:text-[14px] flex justify-center text-xs'>{member.role}</p>
                </h2>
              </div>
            ))}
          </div>
          <div className='containeer relative hidd grid md:grid-cols-4 grid-cols-2 mx-10 mt-10 gap-5'>
              {TeamMembers2.map((member, index) => (
                <div
                  key={index}
                  className={`image relative flex items-end justify-start w-full text-left bg-center sm:h-[450px] h-[225px] bg-cover`}
                  style={{ backgroundImage: `url(${member.backImg})` }}
                >
                <div className="social_media absolute top-0 left-0 flex flex-col md:mx-5 mx-1 md:mt-3 md:text-3xl text-2xl">
                  <a
                    href={member.FbLink}
                    className="text-[#0C0D26] hover:text-4xl transition-all duration-300 ease-in-out md:mb-0 mb-[-5px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </a>
                  <a
                    href={member.InstaLink}
                    className="text-[#0C0D26] hover:text-4xl transition-all duration-300 ease-in-out md:mb-0 mb-[-5px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </a>
                  <a
                    href={member.LinkedInLink}
                    className="text-[#0C0D26] hover:text-4xl transition-all duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                <h2 className="py-2 lg:w-[60%]">
                  <p className='bg-red-800 md:p-2 py-2 rounded-tr-xl rounded-br-xl md:mb-2 mb-[0.15rem] font-semibold lg:text-base md:text-[14px] px-3 flex justify-center text-xs'>{member.name}</p>
                  <p className='bg-[#253C6A] md:p-2 py-2 px-2 rounded-tr-xl rounded-br-xl md:font-semibold font-medium lg:text-base md:text-[14px] flex justify-center text-xs'>{member.role}</p>
                </h2>
              </div>
            ))}
          </div>
          
      </div>
    </div>
  )
}

export default Board