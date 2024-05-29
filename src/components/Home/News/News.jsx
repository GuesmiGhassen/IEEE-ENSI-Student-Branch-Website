import React from "react";
import "./style.css";
// import Modal from "./Modal";
// import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import { TSYP11, ESSTHS, IEEE } from "../../../constantes/index";
import Cover from "../../../assets/images/CoverGods.jpg";
import { useState } from "react";
import GC from "../../../assets/images/Gamecraft.jpg";
function News() {
  // const [open, setOpen] = useState(false);
  // const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <>
      <div className=" bg-[#f4f4f4] relative mb-10">
        <div className="flex flex-col items-center m-10 relative top-10 md:pb-0 pb-5">
          <h1 class="main-title hidd md:text-3xl text-[22px] font-semibold text-center text-[#253C6A] capitalize">
            NEWS <span className="text-red-800 font-semibold">&</span> UPCOMING
            EVENTS
          </h1>
          <div class="main-title hidd mx-auto custom-line md:mt-0 -mt-1 bg-red-800 w-28 md:h-1.5 h-[0.25rem] relative"></div>
        </div>
        <div className="Cards flex lg:h-[30rem] items-center justify-center md:pr-0 pb-20">
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {/* -------- Card1 -------- */}
            <div className="w-[22rem] h-[23rem] md:left-10 left-5 top-12 relative mr-10 mb-10">
              <button onClick={() => (window.location.href = "/GAMECRAFT")}>
                <div className="hidd cont bg-[#f7f7f7] w-[22rem] h-[23rem] text-black rounded-xl border hover:border-[#428bca] hover:text-[#428bca]">
                  <div className="image">
                    <img
                      src={GC}
                      alt="Event"
                      className="w-[100%] rounded-t-[12px]"
                    />
                  </div>
                  <div className="flex items-center">
                    <h1 className="title text-[25px]">GAME CRAFT 1.0</h1>
                    <span class="inline-flex items-center mt-2 cursor-pointer px-3 py-1 bg-red-200 hover:bg-red-300 rounded-full text-sm font-semibold text-red-600">
                      <span class="ml-1">New !</span>
                    </span>
                  </div>
                  <div>
                    <p className="text-black mx-4 text-justify text-justify-last">
                      Registration for Game Craft is now open, and we invite you
                      to join us for an immersive journey into the realms of
                      Game Dev. <br />
                      <span className="relative mt-3 flex min-w-[120px] items-center justify-center rounded-full border-2 border-[#0061A8] px-6 py-2 text-center text-xl font-semibold transition-all hover:border-[#feda5e]">
                        JOIN NOW
                      </span>
                    </p>
                  </div>
                </div>
              </button>
              {/* <Modal open={open} onClose={() => setOpen(false)}>
                <div className="grid">
                  <div className="image">
                    <img
                      src={TSYP11}
                      alt="Event"
                      className="md:w-[35rem] w-[20rem] rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h1 className="title text-[25px]">TSYP11</h1>
                      <span class="inline-flex items-center mt-2 cursor-pointer px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">
                        <span class="ml-1">News</span>
                      </span>
                    </div>
                    <div>
                      <p className="text-black mx-4 md:w-[32rem] w-[18rem] text-justify text-justify-last">
                        The Tunisian Students and Young Professionals (TSYP)
                        Congress is an annual gathering of IEEE members in
                        Tunisia. Organized by IEEE ESSTHS Student Branch and
                        IEEE Tunisia Section, the 11th edition provides a unique
                        opportunity to delve into current and future challenges
                        in science and engineering, connect with the national
                        and international IEEE network, and share experiences,
                        under the theme Silicon Valley.
                      </p>{" "}
                      <br />
                      <span className="ml-4">
                        <a
                          href="https://tsyp.ieee.tn/"
                          className="font-semibold  hover:text-blue-800"
                        >
                          Learn More ...
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </Modal> */}
            </div>
            {/* -------- Card2 -------- */}
            <div className="w-[22rem] h-[23rem] md:left-10 left-5 top-12 relative mr-10 mb-10">
              <button onClick={() => (window.location.href = "/GODS")}>
                <div className="hidd cont bg-[#f7f7f7] w-[22rem] h-[23rem] text-black rounded-xl border hover:border-[#428bca] hover:text-[#428bca]">
                  <div className="image">
                    <img
                      src={Cover}
                      alt="Event"
                      className="w-[100%] rounded-t-[12px]"
                    />
                  </div>
                  <div className="flex items-center">
                    <h1 className="title text-[25px]">GODS 3.0</h1>
                    <span class="inline-flex items-center mt-2 cursor-pointer px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">
                      <span class="ml-1">Done !</span>
                    </span>
                  </div>
                  <div>
                    <p className="text-black mx-4 text-justify text-justify-last">
                      The event has come to a close, and we extend our heartfelt
                      gratitude to all participants for joining us. <br />
                      <span className="relative mt-3 flex min-w-[120px] items-center justify-center rounded-full border-2 border-[#0061A8] px-6 py-2 text-center text-xl font-semibold transition-all hover:border-[#feda5e]">
                        VISIT OUR WEBSITE
                      </span>
                    </p>
                  </div>
                </div>
              </button>
              {/* <Modal open={open} onClose={() => setOpen(false)}>
                <div className="grid">
                  <div className="image">
                    <img
                      src={TSYP11}
                      alt="Event"
                      className="md:w-[35rem] w-[20rem] rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h1 className="title text-[25px]">TSYP11</h1>
                      <span class="inline-flex items-center mt-2 cursor-pointer px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">
                        <span class="ml-1">News</span>
                      </span>
                    </div>
                    <div>
                      <p className="text-black mx-4 md:w-[32rem] w-[18rem] text-justify text-justify-last">
                        The Tunisian Students and Young Professionals (TSYP)
                        Congress is an annual gathering of IEEE members in
                        Tunisia. Organized by IEEE ESSTHS Student Branch and
                        IEEE Tunisia Section, the 11th edition provides a unique
                        opportunity to delve into current and future challenges
                        in science and engineering, connect with the national
                        and international IEEE network, and share experiences,
                        under the theme Silicon Valley.
                      </p>{" "}
                      <br />
                      <span className="ml-4">
                        <a
                          href="https://tsyp.ieee.tn/"
                          className="font-semibold  hover:text-blue-800"
                        >
                          Learn More ...
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </Modal> */}
            </div>
            {/* -------- Card3 -------- */}
            <div className="w-[22rem] h-[23rem] md:left-10 left-5 top-12 relative mr-10 mb-10">
              <button onClick={() => setOpen3(true)}>
                <div className="hidd cont bg-[#f7f7f7] w-[22rem] h-[23rem] text-black rounded-xl border hover:border-[#428bca] hover:text-[#428bca]">
                  <div className="image">
                    <img
                      src={TSYP11}
                      alt="Event"
                      className="w-[100%] rounded-t-[12px]"
                    />
                  </div>
                  <div className="flex items-center">
                    <h1 className="title text-[25px]">TSYP11</h1>
                    <span class="inline-flex items-center mt-2 cursor-pointer px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">
                      <span class="ml-1">NEWS</span>
                    </span>
                  </div>
                  <div>
                    <p className="text-black mx-4 text-justify text-justify-last">
                      The Tunisian Students and Young Professionals (TSYP)
                      Congress is an annual gathering of IEEE members in
                      Tunisia.
                    </p>
                  </div>
                  <div className="grid">
                    <div className="flex justify-center items-center ml-[-20px] gap-3">
                      <img src={ESSTHS} alt="wie" width={75} className="ml-5" />
                      <span className=" text-[20px] text-black">X</span>
                      <img src={IEEE} alt="wie" width={70} className="" />
                    </div>
                  </div>
                </div>
              </button>
              <Modal3 open3={open3} onClose={() => setOpen3(false)}>
                <div className="grid">
                  <div className="image">
                    <img
                      src={TSYP11}
                      alt="Event"
                      className="md:w-[35rem] w-[20rem] rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h1 className="title text-[25px]">TSYP11</h1>
                      <span class="inline-flex items-center mt-2 cursor-pointer px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">
                        <span class="ml-1">News</span>
                      </span>
                    </div>
                    <div>
                      <p className="text-black mx-4 md:w-[32rem] w-[18rem] text-justify text-justify-last">
                        The Tunisian Students and Young Professionals (TSYP)
                        Congress is an annual gathering of IEEE members in
                        Tunisia. Organized by IEEE ESSTHS Student Branch and
                        IEEE Tunisia Section, the 11th edition provides a unique
                        opportunity to delve into current and future challenges
                        in science and engineering, connect with the national
                        and international IEEE network, and share experiences,
                        under the theme Silicon Valley.
                      </p>{" "}
                      <br />
                      <span className="ml-4">
                        <a
                          href="https://tsyp.ieee.tn/"
                          className="font-semibold  hover:text-blue-800"
                        >
                          Learn More ...
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </Modal3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
