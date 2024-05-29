import Navbar from "../Navbar/Navbar";
import React from "react";
import Logo from "../Registration/Vector1.png";
import Footer from "../Footer/Footer";
import vec from "../Home/About/Vector3.png";
import LogoSB from "../../../assets/Logos/Logo.png";
import CIS from "../../../assets/Logos/cis.png";
function AboutUs() {
  return (
    <div className="bg-[#edecec]">
      <Navbar />
      <div className="titlegods">
        <br />
        <div className="allgods relative lg:top-auto">
          <span className="highlightgods">A</span>boutUs
        </div>
        <img src={Logo} alt="img" />
      </div>
      <br />
      <br />
      <div className="div_kbira2 border-b-2 border-black">
        <div className="div10">
          <h id="titre_gods30" className="Color">
            ABOUT IEEE ENSI SB{" "}
          </h>
          <img src={vec} className="pl-10 lg:w-[300px] w-[280px]" alt="" />
        </div>

        <div className="div11">
          <img
            src={LogoSB}
            alt="Image_GODS_2.0"
            id="img_gods20"
            className="relative lg:top-[-40px]"
          />
          <div className="lg:pt-10">
            <p
              id="para2"
              className="text-justify text-justify-last lg:pl-[80px] pl-5"
            >
              Created in October 2011 by engineering students from the national
              school of computer science, given the internationalization of this
              institute and the necessity that we have touched to integrate our
              school in such a movement that takes care of the improvement of
              the Engineering, computer science and information technology
              around the world. Our SB always tries to address the most relevant
              technical themes of today at local and global level through
              lectures and regular articles.
              <button onClick={() => window.location.href='/'} className='relative top-2 flex min-w-[120px] items-center justify-center rounded-full border-2 border-[#feda5e] px-3 py-2 text-center text-sm font-semibold transition-all hover:border-[#0061A8] focus:outline-none focus:ring-4 focus:ring-blue-300'>
                Visit IEEE ENSI SB Website
              </button>
            </p>
            <div className="grid grid-cols-4 lg:mx-28 items-center justify-center lg:gap-8">
              <div className="xtext-[#3a55b4] p-1 lg:p-4 py-10">
                <h1 className="mb-2 flex items-center justify-center text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  270+
                </h1>
                <span className="mt-1 flex items-center justify-center font-semibold uppercase text-lg text-[#0061A8]">
                  Members
                </span>
              </div>
              <div className="xtext-[#3a55b4] p-1 lg:p-4 py-10">
                <h1 className="mb-2 flex items-center justify-center text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  4+
                </h1>
                <span className="mt-1 flex items-center justify-center font-semibold uppercase text-lg text-[#0061A8]">
                  Units
                </span>
              </div>
              <div className="xtext-[#3a55b4] p-4 py-10">
                <h1 className="mb-2 flex items-center justify-center text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  9+
                </h1>
                <span className="mt-1 flex items-center justify-center font-semibold uppercase text-lg text-[#0061A8]">
                  Awards
                </span>
              </div>
              <div className="xtext-[#3a55b4] p-4 py-10">
                <h1 className="mb-2 flex items-center justify-center text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  5+
                </h1>
                <span className="mt-1 flex items-center justify-center font-semibold uppercase text-lg text-[#0061A8]">
                  Partners
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div_kbira2 relative top-5">
        <div className="div20 flex relative lg:right-10">
          <h id="titre_gods30" className="Color">
            IEEE ENSI CIS Chapter{" "}
          </h>
          <img src={vec} className="pl-10 lg:w-[310px] w-[290px]" alt="" />
        </div>

        <div className="div21 flex flex-col-reverse">
          <div className="lg:pt-10">
            <p
              id="para2"
              className="text-justify text-justify-last lg:pl-[80px] pl-5"
            >
              IEEE CIS ENSI SBC was created in MAY 2021 by engineering students
              from the national school of computer science, given the
              internationalization of this institute and the necessity that we
              have touched to integrate our school in such a movement it
              dedicates itself to make progress in the computing areas by
              sharing knowledge and introducing several innovative features.
              <br />
              <button onClick={() => window.location.href='/CIS'} className='relative top-2 flex min-w-[120px] items-center justify-center rounded-full border-2 border-[#feda5e] px-3 py-2 text-center text-sm font-semibold transition-all hover:border-[#0061A8] focus:outline-none focus:ring-4 focus:ring-blue-300'>
                Visit IEEE ENSI CIS Website
              </button>
            </p>
            
            <div className="grid grid-cols-3 lg:mx-28 items-center justify-center lg:gap-8">
              <div className="xtext-[#3a55b4] p-1 lg:p-4 py-10">
                <h1 className="mb-2 flex items-center justify-center text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  150+
                </h1>
                <span className="mt-1 flex items-center justify-center font-semibold uppercase text-lg text-[#0061A8]">
                  Members
                </span>
              </div>
              <div className="xtext-[#3a55b4] p-4 py-10">
                <h1 className="mb-2 flex items-center justify-center text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  2+
                </h1>
                <span className="mt-1 flex items-center justify-center font-semibold uppercase text-lg text-[#0061A8]">
                  Awards
                </span>
              </div>
              <div className="xtext-[#3a55b4] p-4 py-10">
                <h1 className="mb-2 flex items-center justify-center text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  10+
                </h1>
                <span className="mt-1 items-center font-semibold uppercase text-lg text-[#0061A8] flex justify-center">
                  Workshops
                </span>
              </div>
            </div>
          </div>
          <img
            src={CIS}
            alt="Image_GODS_2.0"
            id="img_gods20"
            className="relative lg:top-[-30px]"
          />
        </div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
