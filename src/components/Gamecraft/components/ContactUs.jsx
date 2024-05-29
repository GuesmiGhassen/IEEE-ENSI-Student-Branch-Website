import emailjs from '@emailjs/browser';
import Section from "./Section";
import Heading from "./Heading";
import React, { useRef } from "react";
import ENSIMapsImage from "../assets/ensi-maps2.png";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mbp305m', 'template_3kdaa2r', form.current, 'lLbD50xtHft75vY3e')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent')
          setTimeout(() => {
            window.location.reload();
          }, 2000);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Section crosses id="ContactUs">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:flex flex justify-center">
        <Heading tag="Get In Touch" title="Contact Us" />
      </div>
      <div className="border lg:flex lg:flex-row flex flex-col p-3 border-n-1/10 mt-6 mb-12 mx-auto rounded-3xl ls:w-[90%] ss:mx-auto ss:max-w-[90%] ls:h-[210%] sm:flex sm:w-[90%] md:flex lg:max-w-[72rem] ">
        <div className="  overflow-hidden w-full  rounded-[5px] relative sm:border ls:h-[13rem] ss:h-[13rem] sm:h-[36rem] sm:my-4 sm:mx-auto sm:w-[48%] ">
          <img
            src={ENSIMapsImage}
            alt="Ensimaps"
            className=" absolute  rounded-[5px] sm:h-[40rem] sm:w-[40rem] "
          />
          <div className=" inset-0  bg-blue-700 opacity-50 rounded-[5px] h-full "></div>
        </div>
        <form
          ref={form} 
          onSubmit={sendEmail}
          className=" grid  my-4  mx-auto mb-[10px] h-[36rem] rounded-lg sm:w-[48%]   "
        >
          <p className=" text-white text-3xl font-semibold sm:text-red ">
            Let's Connect
          </p>
          <p className="text-white mt-[4px] pl-1 text-[1.14rem] ">
            Join us in connecting the dots of our gaming universe! Reach out and
            let's weave together the magic of collaboration to create
            exceptional experiences.
          </p>
          <div className="h-[2.8rem]  flex justify-between mt-5">
            <input
              type="text"
              name="user_name"
              id="firstname"
              className="border-[1px] border-indigo-700 rounded-[5px]  h-[2.8rem] w-[48.5%] outline-none pl-[8px] text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-slate-400 "
              placeholder="Last Name "
              required
            />
            <input
              type="text"
              name="user_name"
              id="lastname"
              className="border-[1px] border-indigo-700 rounded-[5px] h-[2.8rem] w-[48.5%] outline-none pl-[8px] text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-gray-400 "
              placeholder="First Name"
              required
            />
          </div>
          <input
            type="email"
            name="user_email"
            id="email"
            className="border-[1px] border-indigo-700 rounded-[5px]  h-[2.8rem] mt-[0.7rem] outline-none pl-[8px] text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-scale-400 "
            placeholder="Email"
            required
          />
          <input
            type="tel"
            id="tel"
            className="border-[1px] border-indigo-700 rounded-[5px]  h-[2.8rem] mt-[0.7rem] outline-none pl-[8px] text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-slate-400 "
            placeholder="Tel"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            className="border-[1px] border-indigo-700 mt-[0.7rem] rounded-[5px] outline-none  pl-[8px] pt-[6px]  resize-none text-[0.9rem] bg-transparent text-white placeholder:text-[15px] placeholder:text-scale-400 "
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="rounded-[5px] w-full h-[2.8rem] mt-[0.9rem] bg-gradient-to-l from-purple-700 to-indigo-600 text-white text-lg hover:to-cyan-500 uppercase"
          >
            {" "}
            Send it
          </button>
        </form>
      </div>
    </Section>
  );
};

export default ContactUs;
