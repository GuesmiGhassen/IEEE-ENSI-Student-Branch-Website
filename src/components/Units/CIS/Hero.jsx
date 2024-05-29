import React from 'react'


function Hero() {
  return (
    <section id="Home" className={`flex md:flex-row flex-col sm:py-16 py-6 bg-[#00040f]`}>
      <div className={`flex-1 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center md:px-20"  >
          <h1 className="flex-1 about-title hidd md:pt-0 pt-14 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Welcome To<br/>{" "}
            <span className="text-gradient font-semibold">IEEE CIS ENSI</span>{" "}
            <h1 className=" font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Chapter
            </h1>
          </h1>
        </div>
        <div className="flex flex-row cont hidd items-center md:mt-20 mt-2 py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`font-normal text-[#ffffffb3] md:text-[18px] leading-[30.8px] ml-2`}>
            Where achieving great things is our goal.
          </p>
        </div>
      </div>

      <div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative cont hidd`}>
        <img src={"https://res.cloudinary.com/dvw61yp2y/image/upload/v1712636704/Chapters/robot_xzcxaa.png"} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

    </section>
  )
}

export default Hero