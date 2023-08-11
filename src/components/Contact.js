import React, { useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import useFadeIn from "../animations/useFadeIn";

const Contact = () => {
  const {
    ref: HeadRef,
    ctrls: headCtrls,
    vars: headVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });

  const inputstyle = `mt-[10px] bg-[#111111] w-full p-4 border text border-gray-600 placeholder:text-gray-600 mb-4 
  focus:outline-none focus:border-gray-100 focus:ring-gray-100 focus:ring-1
  transition duration-[0.2s] focus:ease-in`

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vljhpqb', 'template_aidxdn6', form.current, 'KROCU_vE0GrmyXxCg')
      .then((result) => {
          console.log(result.text);
          alert("Message send sucessfully")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div id="contact" className="lg:w-[60%] mt-[180px] mx-auto">
      <motion.div
        ref={HeadRef}
        initial="hidden"
        animate={headCtrls}
        variants={headVars}
        className="font-UltraSolar mb-[80px] text-[80px]"
      >
        Get in touch
      </motion.div>

      <form  ref={form} onSubmit={sendEmail} className=" mb-[100px] form">
        <div className="">
          <label type="text" name="user_name" className="">Name</label>
          <input
            id="username"
            className={inputstyle}
            required
          />
        </div>

        <div className="">
          <label>Email</label>
          <input
           type="email"
           name="user_email"
            id="email"
            className={inputstyle}
            required
          />
        </div>

        <div>
        <textarea name="message" placeholder='How can I help?' className={`${inputstyle} h-[150px]`} />
        </div>

        <button type="submit" value="Send" 
        className="float-right relative border border-gray-600 bg-transparent py-4 px-4 font-medium uppercase text-textwhite w-1/2 transition-colors
         before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-textwhite  before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100">Submit</button>


      </form>
    </div>
  );
};

export default Contact;
