import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import Button from "./Button";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { Countdown } from "./Countdown";
import joy from '../assets/JoyStick.png'
import { MouseParallax } from "react-just-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] h-[120vh]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="Home"
    >
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative" ref={parallaxRef}>
        <div className="flex">
          <div>
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                Game <span className="text-gradient">Craft</span> 1.0
              </h1>
              <div className="ss:flex hidden md:mr-4 mr-0"></div>
            </div>

            <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
              GameCraft 1.0 is a national hackathon focused on game development,
              bringing together talented developers from across the country to
              innovate and collaborate.
            </p>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeEso0IBwt7PejV3ylqINeAQFYnQwoRowETsYgbARVuHvWQwg/viewform" black className={`top-14`}>
              Registration
            </Button>
          </div>
          
            <div
              className={`flex-1 flex md:my-0 my-10 relative`}
            >
              <MouseParallax strength={0.07}>
              <img
                src={joy}
                alt="billing"
                className="w-[80%] h-[100%] lg:left-48 lg:top-[-12rem] relative z-[5]"
              />
              </MouseParallax>
            </div>

          
          
          <BackgroundCircles />
          
        </div>
        
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 top-[-20rem]">
          <div>
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <ScrollParallax isAbsolutelyPositioned>
                  <div className="absolute lg:-left-[5.5rem] lg:bottom-[16rem] -bottom-20 px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    <Countdown
                      timeTillDate="12 18 2023, 6:00 am"
                      timeFormat="MM DD YYYY, h:mm a"
                    />
                  </div>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="flex justify-center absolute -right-[0.5rem] lg:-right-[5.5rem] w-[14rem] lg:h-[4rem] lg:w-[24rem] -bottom-44 lg:bottom-[13rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} /> NATIONAL SCHOOL OF COMPUTER SCIENCE
                    </div>
                  </ul>
                </ScrollParallax>
              </div>
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
