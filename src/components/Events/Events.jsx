import {React, useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { RxDotFilled } from 'react-icons/rx';
import { slides } from '../../constantes/index'
import Calendar from './Calender'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Events() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='pt-24'>
      <Navbar/>
      <div className='part1'>
        <h1 class="about-title hidd md:text-3xl text-[22px] font-semibold text-center text-[#253C6A] capitalize">OUR UPCOMING EVENTS</h1>
        <div class="about-title hidd mx-auto custom-line md:mt-0 -mt-1 bg-red-800 w-28 md:h-1.5 h-[0.25rem] relative"></div>
        <div className='flex justify-center pt-10 cont hidd'>
          <div className='flex absolute md:right-80 right-10'>
            <div className='text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer mr-8'>
              <BsChevronCompactLeft onClick={prevSlide} style={{ fontSize: 20 }} />
            </div>
            <div className='text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} style={{ fontSize: 20 }} />
            </div>
          </div>
          <div className='card-cont flex items-center justify-between pt-12 md:w-auto w-[350px]'>
            <div className='flex md:flex-row flex-col border-2 rounded-xl'>
              <div>
                <img src={slides[currentIndex].url} alt="Description" className='md:h-[252px] w-[400px] group-hover:opacity-90 bg-center bg-cover duration-500 rounded-xl'/>
              </div>
              <div className='caaard'>
                <div className='flex items-center'>
                  <h1 className='title text-[25px]'>{slides[currentIndex].title}</h1>
                  <span
                    className={`inline-flex items-center mt-2 cursor-pointer px-3 py-1 ${slides[currentIndex].condition ? 'bg-red-200 hover:bg-red-300 text-red-600' : 'bg-green-200 hover:bg-green-300 text-green-600'} rounded-full text-sm font-semibold `}
                  >
                    <span className="ml-1">
                      {slides[currentIndex].condition ? 'Coming !' : 'Done !'}
                    </span>
                  </span>
                </div>
                <div>
                  <p className='text-black mx-4 md:w-[32rem] pt-2 text-justify text-justify-last'>
                    {slides[currentIndex].Text}
                  </p>
                </div>
                <div className='flex md:flex-row flex-col py-2 '>
                  <span><span className='ml-4 font-semibold'>Location</span> : <FontAwesomeIcon icon={faLocationDot} style={{ color: "#e15519", }} /> {slides[currentIndex].location}</span>
                  <span><span className='ml-4 font-semibold'>Date</span> : <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#e15519", }} /> {slides[currentIndex].date}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className='flex justify-center cont hidd'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className='part2 mt-20'>
        <h1 class="main-title hidd md:text-3xl text-[22px] font-semibold text-center text-[#253C6A] capitalize">EXPLORE MORE EVENTS</h1>
        <div class="main-title hidd mx-auto custom-line md:mt-0 -mt-1 bg-red-800 w-28 md:h-1.5 h-[0.25rem] relative"></div>
        <Calendar/>
      </div>
      <div className='mt-10'>
        <Footer/>
      </div>
    </div>
  )
}

export default Events