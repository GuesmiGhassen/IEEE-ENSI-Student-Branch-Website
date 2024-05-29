import React from "react";
import "./index.css";
import Slider from "react-infinite-logo-slider";
import Section from "./Section";
import AI from '../assets/AI.png'
import Lanterns from '../assets/Lanterns.png'
const Partners = () => {
  return (
    <Section id="features">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <div className="Slide relative mx-[-30px]">
          <Slider
            width="250px"
            duration={20}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={"#0C0D26"}
          >
            <Slider.Slide>
              <img src={AI} alt="dailyn" className="w-36 grayscale-image" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={Lanterns} alt="wee learn" className="w-44 grayscale-image" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={AI} alt="dailyn" className="w-36 grayscale-image" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={Lanterns} alt="wee learn" className="w-44 grayscale-image" />
            </Slider.Slide>
          </Slider>
        </div>
      </div>
    </Section>
  );
};

export default Partners;
