import Navbar from '../Navbar/Navbar'
import '../Registration/RegistrationForm1.css'
import React from 'react';
import Logo from '../Registration/Vector1.png'
import vec from './Vector3.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
// import Day1 from './Day1';
// import Day2 from './Day2';
import Footer from '../Footer/Footer'
import Workshops from './Workshops';
function Program() {
//   const [showDiv1, setShowDiv1] = useState(true);
//   const [showDiv2, setShowDiv2] = useState(false);

//   const handleButtonClick1 = () => {
//     setShowDiv1(true);
//     setShowDiv2(false);
//   };

//   const handleButtonClick2 = () => {
//     setShowDiv1(false);
//     setShowDiv2(true);
//   };
  return (
    <div className='bg-[#f2f2f2]'>
      <Navbar />
      <div className="titlegods">
        <br/>
        <div className="allgods relative lg:top-auto"><span className="highlightgods">P</span >rogram</div>
        <img  src={Logo} alt='img' />
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* <div className="flex justify-center gap-2">
					<div className="text-4xl font-bold">Schedule Overview</div>
			</div>
      <br />
      <div className='flex justify-center '>
        <a
					href="https://drive.google.com/file/d/13em2dUKV1UZfBJWmuhayoAy0ApT-I-8S/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 font-bold"
				>
					<FontAwesomeIcon className="text-xl" icon={faFilePdf} />
					Download PDF
				</a>
      </div>
      <br />
      <br />
      <div className='flex justify-center lg:gap-20 gap-10'>
        <button onClick={handleButtonClick1} className='relative flex min-w-[120px] items-center justify-center rounded-full border-2 border-[#0061A8] px-6 py-2 text-center text-xl font-semibold transition-all hover:border-[#feda5e] focus:outline-none focus:ring-4 focus:ring-blue-300'>
          February 17
        </button>
        <button onClick={handleButtonClick2} className='relative flex min-w-[120px] items-center justify-center rounded-full border-2 border-[#0061A8] px-6 py-2 text-center text-xl font-semibold transition-all hover:border-[#feda5e] focus:outline-none focus:ring-4 focus:ring-blue-300'>
          February 18
        </button>
      </div>
      <br />
      {showDiv1 && <Day1/>}
      {showDiv2 && <Day2/>} */}
      <div className="div10 cont hidd">
            <h id="titre_gods30" className="Color">
              WORKSHOPS{" "}
            </h>
            <img src={vec} className="vec1 pl-10" alt="" width={220} />
        </div>
          <br />
          <Workshops/>
      <Footer/>
    </div>
  )
}

export default Program