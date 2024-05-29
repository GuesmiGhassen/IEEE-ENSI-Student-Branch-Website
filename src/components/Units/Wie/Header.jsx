import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './index.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination} from 'swiper/modules';

export default function Header() {
  return (
    <div id='Home'>
      <Swiper 
        spaceBetween={30}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="d-flex align-items-center z-10 col-12 absolute md:mt-[-15rem] mt-[-6rem]">
                <div className="flex flex-row justify-between items-center md:px-20"  >
                    <h1 className="flex-1 cont hidd md:pt-0 pt-14 font-medium ss:text-[72px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
                        Welcome To<br/>{" "}
                        <h1 className="text-center">
                            <p className="m-0 pt-4 Bro font-medium md:text-9xl text-7xl pb-4 text-[#741B47]  ">Women In Engineering</p>
                        </h1>
                        <h1>Affinity Group</h1>
                    </h1>
                    
                </div>
            </div>
            <img src={"https://res.cloudinary.com/dvw61yp2y/image/upload/v1712636990/Chapters/star4_pbblri.jpg"} alt="Back1" className='bg-cover back1 md:h-auto h-screen w-screen'/>
        </SwiperSlide>
        

      </Swiper>


      
    </div>
  );
}
