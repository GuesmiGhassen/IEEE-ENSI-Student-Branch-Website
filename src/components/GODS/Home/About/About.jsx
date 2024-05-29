import igods2 from "./GODS.png";
import vec from "./Vector3.png";
import "./App.css";
import GODS from "./Gods3.mp4";
import hard from "../../../../assets/images/hard-skills-icon-style-vector.jpg";
import soft from "../../../../assets/images/work-ethic-soft-skill-line-icon-illustration-vector.jpg";
import team from "../../../../assets/images/vector-members-line-black-icon.jpg";
const About = () => {
  return (
    <div className="App bg-[#edecec] relative top-[-10px] lg:top-0 mb-[-40px]">
      <div id="Activities" className="">
        <div className=" relative pb-10 lg:pt-10">
          <div className="div10 cont hidd">
            <h id="titre_gods30" className="Color">
              ABOUT GODS 3.0{" "}
            </h>
            <img src={vec} className="pl-10 lg:w-[250px] w-[240px]" alt="" />
          </div>
          <div className="Cards flex items-center justify-center mt-10 md:pr-0 lg:pb-20">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 ">
              <div className="flex items-center justify-center md:px-0 px-5 lg:ml-5 relative img_gods20">
                <video
                  src={GODS}
                  controls
                  alt=""
                  className="cont imgxtreme hidd"
                  width={800}
                />
              </div>
              <div className="cont hidd md:text-lg description flex flex-col items-center text-justify text-justify-last text-black">
                <div class="cont hidd grid grid-cols-1 gap-6 lg:px-10 px-2 pt-5 lg:pt-0">
                  <div class="flex gap-5 py-3 items-center px-6 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-800 rounded-xl">
                    <div>
                      <img
                        class="object-cover w-40 lg:w-[5.5rem] lg:h-[5.5rem] flex justify-center rounded-full ring-2 ring-[#0061A8] group-hover:ring-gray-200 "
                        src={hard}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h1 class="text-xl font-bold text-[#0061a8] capitalize group-hover:text-white">
                        Technical Workshops
                      </h1>
                      <p class="text-black capitalize group-hover:text-gray-300">
                        Host interactive online workshops covering key topics {" "}
                        <br />in Data Science and AI.
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-5 py-3 items-center px-6 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-800 rounded-xl">
                    <div>
                      <img
                        class="object-cover w-40 lg:w-[5.5rem] lg:h-[5.5rem] flex justify-center rounded-full ring-2 ring-[#0061A8] group-hover:ring-gray-200 "
                        src={soft}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 class="text-xl font-bold text-[#0061a8] capitalize group-hover:text-white">
                        Soft Skills
                      </h1>
                      <p class="text-black capitalize group-hover:text-gray-300">
                        Communication skills, networking and public speaking.
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-5 py-3 items-center px-6 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-800 rounded-xl">
                    <div>
                      <img
                        class="object-cover w-40 lg:w-[5.5rem] lg:h-[5.5rem] rounded-full ring-2 ring-[#0061A8]  group-hover:ring-gray-200"
                        src={team}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 class="text-xl font-bold text-[#0061a8] capitalize group-hover:text-white">
                        Teamwork
                      </h1>
                      <p class="text-black capitalize group-hover:text-gray-300">
                        Foster a collaborative environment where participants{" "}
                        <br /> can work together and share ideas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div_kbira2">
        <div className="div20 flex justify-end relative cont hidd">
          <h id="titre_gods30" className="Color">
            ABOUT GODS 2.0{" "}
          </h>
          <img src={vec} className="pl-10 lg:w-[250px] w-[240px]" alt="" width={270} />
        </div>

        <div className="div21 flex flex-col-reverse cont hidd">
          <div className="lg:pt-10">
            <p
              id="para2"
              className="text-justify text-justify-last lg:pl-[80px] pl-5"
            >
              As the 'Go Data Science' event enters its highly anticipated third
              edition, we look back at the tremendous growth and success of its
              previous iterations. The event seamlessly combines Data Science
              and Artificial Intelligence, showcasing tremendous growth and
              success. Participants dive into immersive workshops, gaining
              insights into cutting-edge technologies. The highlight is the
              exhilarating Data Science Hackathon, where teams leverage AI and
              Data Science to solve real-world challenges.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:gap-8">
              <div className="xtext-[#3a55b4] p-1 lg:p-4 py-10">
                <h1 className="mb-2 text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  350+
                </h1>
                <span className="mt-1 font-semibold text-lg text-[#0061A8] uppercase">
                  Participants
                </span>
              </div>
              <div className="xtext-[#3a55b4] p-4 py-10">
                <h1 className="mb-2 text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  4+
                </h1>
                <span className="mt-1 font-semibold uppercase text-lg text-[#0061A8]">
                  Workshops
                </span>
              </div>
              <div className="xtext-[#3a55b4] p-4 py-10">
                <h1 className="mb-2 text-center text-xl font-bold tracking-tight text-black lg:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
                  2100 DT+
                </h1>
                <span className="mt-1 font-semibold uppercase text-lg text-[#0061A8] flex justify-center">
                  Prices
                </span>
              </div>
            </div>
          </div>
          <img src={igods2} alt="Image_GODS_2.0" id="img_gods20" />
        </div>
      </div>
    </div>
  );
};

export default About;
