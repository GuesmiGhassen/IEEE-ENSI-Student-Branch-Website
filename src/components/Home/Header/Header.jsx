import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Autoplay, Pagination} from 'swiper/modules';

export default function Header() {
  return (
    <>
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
        className="mySwiper top-14"
      >
        <SwiperSlide>
        <div className="d-flex align-items-center col-12 absolute md:mt-0 mt-[-6rem]">
          <div className='img-container flex items-center justify-center'>
            <img src={"https://res.cloudinary.com/dvw61yp2y/image/upload/v1712636807/PDC/Slogan_xrudpa.png"} alt="Slogan" className='md:w-auto w-72 about-image'/>
          </div>
          <h1 className="text-center md:pt-0 pt-5 mb-7">
            <p className="paragraph m-0 font-normal md:text-[5vw] text-[7.5vw]">IEEE ENSI STUDENT BRANCH</p>
          </h1>
        </div>
          <img src={"https://res.cloudinary.com/dvw61yp2y/image/upload/v1712636171/PDC/Pdc1_qb80bt.jpg"} alt="Back1" className='bg-cover md:h-auto h-screen'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
