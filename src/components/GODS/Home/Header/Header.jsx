import { Countdown } from "./Countdown";
import Logo from "./Title2.1.png"
import Date from './Time.png'
function Header() {
  return (
    <div className=" top-16 relative">
      <div className='overviewgods'>
        <section className="grid grid-cols-12 items-center justify-center py-10 md:py-12">
            <div className="col-span-12 mx-auto">
              {/* <h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none"> */}
              <h1 className="mb-8 lg:mb-2 flex justify-center">
                {/* <span className="text-[#FEDA5E] font-semibold">GO</span>{" "}
                <span className="text-[#FEDA5E] font-semibold">D</span>ATA <span className="text-[#FEDA5E] font-semibold">S</span>CIENCE <span className="text-[#FEDA5E] font-semibold">3.0</span> */}
                <img src={Logo} alt="" className='lg:w-[700px] w-[350px]'/>
              </h1>
              
              {true && (
                <h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-10 lg:text-center lg:text-2xl lg:font-medium lg:leading-none text-[#B0BDC1]">
                  Join the Data Science Fusion: <br /> <br /> competition, workshops, and prizes, defining the forefront of innovation.                </h1>
              )}
              <div className="mb-8 text-center lg:mb-7">
                <span className="flex justify-center">
                  <img src={Date} alt="" width={200}/>
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="xtext-[#3a55b4] border-2 rounded-[50%] p-5 py-10 border-black">
                  <h1 className="mb-2 text-center text-xl font-bold tracking-tight text-[#FEDA5E] lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
                    350+
                  </h1>
                  <span className="mt-1 font-bold uppercase text-[#B0BDC1]">Participants</span>
                </div>
                <div className="w-full md:hidden">
                  <div className="xbg-[#3a55b4] mx-auto h-0.5 w-3/6 bg-black md:block"></div>
                </div>
                <div className="xbg-[#3a55b4] hidden h-20 w-0.5 bg-black md:block"></div>
                {true && (
                  <Countdown
                    timeTillDate="17 02 2024, 10:00 am"
                    timeFormat="MM DD YYYY, h:mm a"
                  />
                )}
                <div className="w-full md:hidden">
                  <div className="xbg-[#3a55b4] mx-auto h-0.5 w-3/6 bg-black md:block"></div>
                </div>
                <div className="xbg-[#3a55b4] hidden h-20 w-0.5 bg-black md:block"></div>
                <div className="border-2 rounded-[50%] p-6 lg:p-4 lg:py-10 py-10 border-black">
                  <h1 className="mb-2 text-center text-xl font-bold tracking-tight text-[#FEDA5E] lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
                    3000 DT+
                  </h1>
                  <span className="mt-1 font-bold uppercase flex justify-center text-[#B0BDC1]">Prices</span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
              <button onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSe3_DjM-lXMlI6aqRpDuod9F9BJvLOeYBZyj_AMpI6Hye6GnQ/viewform'} className='relative flex min-w-[120px] bg-[#1d202b] items-center justify-center rounded-full px-6 py-2 text-center text-xl font-semibold transition-all text-[#feda5e]'>
                Registration
              </button>
              </div>
            </div>
          <br />
          <br />
        </section>
      </div>
    </div>
  );
}

export default Header;
