import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faBuildingColumns, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react';

const CustomCounter = ({ maxValue,resetTime,delay }) => {
    const [count, setCount] = useState(1);
    const [shouldReset, setShouldReset] = useState(false);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (count < maxValue) {
          setCount((prevCount) => prevCount + 1);
        } else {
          setShouldReset(true);
        }
      }, resetTime); // Adjust the interval duration as needed
  
      if (shouldReset) {
        setTimeout(() => {
          setCount(maxValue); // Smooth transition before resetting
        }, 10); // Delay before resetting, adjust as needed
  
        setTimeout(() => {
          setCount(1); // Reset to 1
          setShouldReset(false);
        }, delay); // Total time for reset, adjust as needed
  
        clearInterval(intervalId); // Clear the interval after resetting
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [count, shouldReset, maxValue,resetTime,delay]);
  
    return (
      <div>
        {count}
      </div>
    );
  };

function Counter() {
  return (
    <div className='counter about-title hidd bg-blue-800 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-white text-[36px]'>
            <div className='Count1 bg-[#1E1F23] flex items-center justify-center hover:bg-black'>
                <div>
                    <span className='flex justify-center mt-10 mb-5'><FontAwesomeIcon icon={faUsers}/></span>
                    <div>
                        <span className='font-semibold flex justify-center'><CustomCounter maxValue={270} resetTime={10} delay={2900}/></span>
                    </div>
                    <h3 className='text-[18px] mt-2 mb-10 font-semibold flex justify-center'>MEMBERS</h3>
                </div>
            </div>
            <div className='Count1 bg-[#232428] flex items-center justify-center hover:bg-black'>
                <div className=''>
                    <span className='flex justify-center mt-10 mb-5'><FontAwesomeIcon icon={faBuildingColumns}/></span>
                    <div>
                        <span className='font-semibold flex justify-center'><CustomCounter maxValue={4} resetTime={1000} delay={2000}/></span>
                    </div>
                    <h3 className='text-[18px] mt-2 mb-10 font-semibold flex justify-center'>UNITS</h3>
                </div>
            </div>
            <div className='Count1 bg-[#25262B] flex items-center justify-center hover:bg-black'>
                <div>
                    <span className='flex justify-center mt-10 mb-5'><FontAwesomeIcon icon={faTrophy}/></span>
                    <div>
                        <span className='font-semibold flex justify-center'><CustomCounter maxValue={9} resetTime={400} delay={2500}/></span>
                    </div>
                    <h3 className='text-[18px] mt-2 mb-10 font-semibold flex justify-center'>AWARDS</h3>
                </div>
            </div>
            <div className='Count1 bg-[#26292E] flex items-center justify-center hover:bg-black'>
                <div>
                    <div className='flex justify-center mt-10 mb-5'><FontAwesomeIcon icon={faHandshake}/></div>
                    <div>
                        <span className='font-semibold flex justify-center'><CustomCounter maxValue={5} resetTime={800} delay={2000}/></span>
                    </div>
                    <h3 className='text-[18px] mt-2 mb-10 font-semibold flex justify-center'>PARTNERS</h3>
                </div>
            </div>
    </div>
  )
}

export default Counter