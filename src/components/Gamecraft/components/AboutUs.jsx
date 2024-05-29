import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/AboutUs";
import Logo1 from "../assets/LogoWhite.png";
import Logo2 from "../assets/CSWhite.png";

const AboutUs = () => {
  return (
    <Section crosses className={`flex gap-8 flex-col`} id="AboutUs">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:flex">
        <div className="">
          <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 md:mb-8 text-n-3">About IEEE ENSI SB</h2>
          <ul className="max-w-[43rem] mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <h6 className="font-light text-[0.875rem] leading-6 md:text-base text-justify text-justify-last ml-5">
                  Created in October 2011 by engineering students from the
                  national school of computer science, given the
                  internationalization of this institute and the necessity that
                  we have touched to integrate our school in such a movement
                  that takes care of the improvement of the Engineering,
                  computer science and information technology around the world.
                  Our SB always tries to address the most relevant technical
                  themes of today at local and global level through lectures and
                  regular articles.
                </h6>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="font-light text-[0.875rem] leading-6 md:text-base mb-8 text-n-4 md:mb-16 lg:mb-20 lg:w-[22rem] lg:mx-auto"></p>
          <div className="relative left-1/2 justify-center items-center flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div
              className={`relative p-1 flex bg-n-7 border border-n-1/15 rounded-xl`}
            >
              <img src={Logo1} alt="Logo SB" width={300} />
            </div>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:flex hidden lg:visible xl:visible md:visible">
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="font-light text-[0.875rem] leading-6 md:text-base mb-8 text-n-4 md:mb-16 lg:mb-20 lg:w-[22rem] lg:mx-auto"></p>
          <div className="relative left-1/2 justify-center items-center flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div
              className={`relative p-1 flex bg-n-7 border border-n-1/15 rounded-xl`}
            >
              <img src={Logo2} alt="Logo SB" width={300} />
            </div>
            <RightCurve />
            <LeftCurve />
          </div>
        </div>
        <div className="">
          <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 text-n-3 md:mb-8 flex justify-end">
            About IEEE CS Chapter
          </h2>

          <ul className="max-w-[43rem] mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <h6 className="font-light text-[0.875rem] text-justify text-justify-last leading-6 md:text-base ml-5">
                  The ENSI IEEE Computer Society is a prominent chapter
                  operating within the Ensi student branch. Its primary mission
                  is to foster a deeper appreciation for the diverse facets of
                  computer science within the academic community. To achieve
                  this, the chapter actively engages in hosting conferences,
                  educational initiatives, competitions, and innovative IT
                  projects. Beyond these activities, it is also dedicated to the
                  holistic development of its members, emphasizing not only
                  technical prowess but also the cultivation of essential soft
                  skills.
                </h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:hidden">
      <div className="">
          <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 text-n-3 md:mb-8 flex justify-end">
            About IEEE CS Chapter
          </h2>

          <ul className="max-w-[43rem] mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <h6 className="font-light text-[0.875rem] text-justify text-justify-last leading-6 md:text-base ml-5">
                  The ENSI IEEE Computer Society is a prominent chapter
                  operating within the Ensi student branch. Its primary mission
                  is to foster a deeper appreciation for the diverse facets of
                  computer science within the academic community. To achieve
                  this, the chapter actively engages in hosting conferences,
                  educational initiatives, competitions, and innovative IT
                  projects. Beyond these activities, it is also dedicated to the
                  holistic development of its members, emphasizing not only
                  technical prowess but also the cultivation of essential soft
                  skills.
                </h6>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="font-light text-[0.875rem] leading-6 md:text-base mb-8 text-n-4 md:mb-16 lg:mb-20 lg:w-[22rem] lg:mx-auto"></p>
          <div className="relative left-1/2 justify-center items-center flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div
              className={`relative p-1 flex bg-n-7 border border-n-1/15 rounded-xl`}
            >
              <img src={Logo2} alt="Logo SB" width={300} />
            </div>
            <RightCurve />
            <LeftCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
