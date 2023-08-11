import React from "react";
import useFadeIn from "../animations/useFadeIn";
import { motion } from "framer-motion";

const Timeline = () => {
    const {
        ref: TimeRef,
        ctrls: timeCtrls,
        vars: timeVars,
      } = useFadeIn({
        threshold: 0.01,
        delay: 0.5, // Delay for the About Me element
      });

      const link = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>


  return (
    <motion.div
    ref={TimeRef}
    initial="hidden"
    animate={timeCtrls}
    variants={timeVars}
  
    className="mt-0 md:mt-[50px] flex justify-center align-center flex-col gap-8 lg:gap-[80px] lg:flex-row lg:gap-0
    ">

      <div className="lg:w-[50%]">


        <div className="mb-8 text-4xl font-semibold md:mb-[70px]">Education</div>
        <ol className=" 
          md:ml-[50px] md:relative md:border-l md:border-gray-200 md:dark:border-gray-700">
          <li className="mb-10 md:ml-6">
            <span className="hidden md:absolute md:flex md:items-center md:justify-center md:w-4 md:h-4  md:rounded-full  md:-left-2 md:ring-2 md:ring-white md:dark:ring-gray-100 bg-black"></span>
            <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
              Lakshmi Narain College Of Technology, Bhopal, M.P
            </h3>
            <time className="block my-5 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <span className="leading-7 bg-gray-500 text-black  p-0.5 ">
                Bachelor's Of Technology
              </span>
              <span className="ml-2 text-l font-semibold uppercase text-gray-500">
                aug 2019 - july 2023
              </span>
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              I've graduated with a remarkable 8.8 CGPA in Electronics and
              Communication!
            </p>
          </li>

          <li className="mb-10 md:ml-6">
            <span className="hidden md:absolute md:flex md:items-center md:justify-center md:w-4 md:h-4  md:rounded-full  md:-left-2 md:ring-2 md:ring-white md:dark:ring-gray-100 bg-black"></span>
            <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
              ST.Theresa's School, Bhopal, M.P
            </h3>
            <time className="block my-5 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <span className="leading-7 bg-gray-500 text-black  p-0.5 ">Full-time</span>
              <span className="ml-2 text-l font-semibold uppercase text-gray-500">
                aug 2017 - May 2019
              </span>
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              completed my Secondary and Higher Secondary education from CBSE
            </p>
          </li>
        </ol>
      </div>

      <div className="lg:w-[50%]">
        <div className="mb-8 text-4xl font-semibold md:mb-[70px]">Experience</div>
        <ol className=" md:ml-[50px] md:relative md:border-l md:border-gray-200 md:dark:border-gray-700">

          <li className="mb-10 md:ml-6">
            <span className="hidden md:absolute md:flex md:items-center md:justify-center md:w-4 md:h-4  md:rounded-full  md:-left-2 md:ring-2 md:ring-white md:dark:ring-gray-100 bg-black"></span>
            <h3 className="flex mb-1 text-xl font-semibold text-gray-900 dark:text-white">
             <span>FrontEnd Developer Intern At Vkonex.AI</span>
             <a className="ml-2 my-auto b" target="_blank" href="https://drive.google.com/file/d/18lr5qmumSScK3qO_hNRnDtMKoeXujf6M/view" >{link}</a>
            </h3>
            <time className="block my-5 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <span className="leading-7 bg-gray-500 text-black  p-0.5 ">Intern</span>
              <span className="ml-2 text-l font-semibold uppercase text-gray-500">
                {" "}
                sep 2021 - Dec 2021
              </span>
            </time>

            <time className="block my-3 mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <i className="text-l font-semibold  text-white">
                Mumbai, Maharashtra
              </i>
            </time>
            <ul className="text-justify text-base font-normal text-gray-500 dark:text-gray-400">
              
                Worked on backend applications using Node.js and was responsible
                for integrating the websites built using React from scratch.
              
              
                Executed and Debugged Server-side scripts and Documented APIs on
                Postman.
              
              
                Implemented website designs/UIs and was a member of the Core
                Development Team.
              
              
                Coordinated with teams and followed Agile software development
                methodologies while building software.
              
            </ul>
          </li>
        </ol>
      </div>
      </motion.div>
  );
};

export default Timeline;
