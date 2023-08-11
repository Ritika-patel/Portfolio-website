import React from "react";
import { motion } from "framer-motion";
import useFadeIn from "../animations/useFadeIn";
import useFadeInleft from "../animations/useFadeInleft";
import useAnimateIn from "../animations/useAnimateIn";
import fitcoach from "../assets/fitcoach.jpeg";
import ayush from "../assets/ayush.jpeg";
import zameen from "../assets/zameen.jpeg";
import cosmo from "../assets/cosmo.jpeg";

const Skills = () => {
  const {
    ref: HeadRef,
    ctrls: headCtrls,
    vars: headVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });

  const {
    ref: FitRef,
    ctrls: fitCtrls,
    vars: fitVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.2, // Delay for the About Me element
  });

  const {
    ref: AyushRef,
    ctrls: ayushCtrls,
    vars: ayushVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.2, // Delay for the About Me element
  });

  const {
    ref: ZameenRef,
    ctrls: zameenCtrls,
    vars: zameenVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.2, // Delay for the About Me element
  });

  const {
    ref: CosmoRef,
    ctrls: cosmoCtrls,
    vars: cosmoVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.2, // Delay for the About Me element
  });

  const link = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-external-link"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );

  const projectText = "font-UltraSolar mb-[80px] md:text-[80px] text-[60px]";
  const spanLink =
    "text-sm capitalize text-sky-500 px-1.5 py-0.5 border border-solid border-sky-500 hover:bg-sky-500 hover:text-textwhite hover:border hover:border-textwhite";

  const TextImgContainerLeft =
    "flex justify-center mt-[80px] sm:mt-[120px] md:mt-[100px] lg:mt-[120px]  flex-col-reverse  align-center";
  const TextImgContainerRight =
    "flex justify-center mt-[80px] sm:mt-[120px] md:mt-[100px] lg:mt-[120px]  flex-col-reverse  align-center ";
  const LeftImgTxt =
    "text-right relative z-10 ml-auto my-auto right-[4%] lg:bottom-[280px] bottom-[65px]";
  const RightImgTxt =
    "mr-auto my-auto z-10 relative left-[4%] lg:bottom-[280px] md: bottom-[65px] md:left-[0] ";
  const LeftImgDetail =
    "w-[100%] lg:w-[60%] ml-auto text-sm sm:text-lg md:text-xl ";
  const RightImgDetail = "text-sm sm:text-lg md:text-xl w-[100%] lg:w-[60%]";
  const ImgStyleLeft =
    "mr-auto brightness-100 opacity-60 w-[100%] md:w-[90%] drop-shadow-md";
  const ImgStyleRight =
    "ml-auto  brightness-100 opacity-60 w-[100%] md:w-[90%] drop-shadow-md";

  return (
    <div id="projects" className="mt-[130px]">
      <motion.div
        ref={HeadRef}
        initial="hidden"
        animate={headCtrls}
        variants={headVars}
        className={projectText}
      >
        Projects
      </motion.div>

      <motion.div
        ref={FitRef}
        initial="hidden"
        animate={fitCtrls}
        variants={fitVars}
        className={TextImgContainerLeft}
      >
        <div className={LeftImgTxt}>
          <h2 className="font-UltraSolar">FitCoach.AI</h2>

          <div className="flex justify-end uppercase text-l md:text-xl text-gray-100">
            <span>Fitness Training application</span>
            <a
              className="ml-2 my-auto b"
              target="_blank"
              href="https://646a72380fe5f82fb2adcfe2--playful-pixie-29c3b1.netlify.app/"
            >
              {link}
            </a>
          </div>

          <div className="my-4 mb-6">
            <span className="text-sm mr-2  bg-gray-500 text text-black p-1 uppercase ">
              React
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              NodeJS
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              MongoDB
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              JavaScript
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              HTML
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              CSS
            </span>
          </div>

          <div className={LeftImgDetail}>
            AI-based fitness Training application with 75% accuracy real-time
            feedback, rewards-based streak system with smart analytics(heat map,
            calories burn, etc), and smart-watch connectivity.
          </div>
        </div>

        <div className="relative">
          <img className={ImgStyleLeft} src={fitcoach} alt="Fit Coach" />
          <div className="absolute w-[100%] md:w-[90%] xl:w-[100%] inset-0 bg-gradient-to-l from-[#111111]"></div>
        </div>
      </motion.div>

      <motion.div
        ref={AyushRef}
        initial="hidden"
        animate={ayushCtrls}
        variants={ayushVars}
        className={TextImgContainerRight}
      >
        <div className={RightImgTxt}>
          <h2 className="font-UltraSolar">Ayush</h2>

          <div className="flex flex-col uppercase text-l md:text-xl text-gray-100">
            <div className="flex flex-row">
              <div>Hospitals and Research Center </div>
              <a target="_blank" href="https://github.com/am-aakash/Ayush-Hospital-App" className="flex ml-2 my-auto justify-center">{link}</a>
            </div>
            <div className="mt-2 w-[270px] flex justify-between">
              <a href="https://docs.google.com/document/d/1tvYwbVv4kAVMTgTn0fXSY9r9ZobFeqRNyPqBhtnixWE/edit?usp=sharing" target="_blank" className={spanLink}>certificate</a>
              <a href="https://github.com/Ritika-patel/ayush-server.git" target="_blank" className={spanLink}>Server</a>
              <a href="https://github.com/Ritika-patel/ayush-client" target="_blank" className={spanLink}>client</a>
              <a href="https://youtu.be/KcEbRw_PjZU" target="_blank" className={spanLink}>Video</a>
            </div>
          </div>

          <div className="my-4 mb-6">
            <span className="text-sm mr-2  bg-gray-500 text text-black p-1 uppercase ">
              React
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              NodeJS
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              MongoDB
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              JavaScript
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              HTML
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              CSS
            </span>
          </div>

          <div className={RightImgDetail}>
            Mobile app for locating 4000+ Ayush Hospitals with numerous filters,
            a structured way to show details and a hospital management website
            with multiple admins.
          </div>
        </div>

        <div className="relative">
          <img className={ImgStyleRight} src={ayush} alt="Fit Coach" />
          <div className="absolute w-[100%] md:w-[90%] xl:w-[100%] inset-0 bg-gradient-to-r from-[#111111]"></div>
        </div>
      </motion.div>

      <motion.div
        ref={ZameenRef}
        initial="hidden"
        animate={zameenCtrls}
        variants={zameenVars}
        className={TextImgContainerLeft}
      >
        <div className={LeftImgTxt}>
          <h2 className="font-UltraSolar">Zameen Square</h2>

          <div className="flex justify-end uppercase text-l md:text-xl text-gray-100">
            <span>A property management service</span>
            <a
              className="ml-2 my-auto b"
              target="_blank"
              href="https://www.zameensquare.com/"
            >
              {link}
            </a>
          </div>

          <div className="my-4 mb-6">
            <span className="text-sm mr-2  bg-gray-500 text text-black p-1 uppercase ">
              React
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              NodeJS
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              Postgres
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              JavaScript
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              HTML
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              CSS
            </span>
          </div>

          <div className={LeftImgDetail}>
            Solution to buy, sell and rent a property, includes user
            authentication, multiple filter options, etc.
          </div>
        </div>

        <div className="relative">
          <img className={ImgStyleLeft} src={zameen} alt="Fit Coach" />
          <div className="absolute w-[100%] md:w-[90%] xl:w-[100%] inset-0 bg-gradient-to-l from-[#111111]"></div>
        </div>
      </motion.div>

      <motion.div
        ref={CosmoRef}
        initial="hidden"
        animate={cosmoCtrls}
        variants={cosmoVars}
        className={TextImgContainerRight}
      >
        <div className={RightImgTxt}>
          <h2 className="font-UltraSolar">
            Cosmo Conscious
          </h2>

          <div className="flex uppercase text-l md:text-xl text-gray-100">
            <span>Memory Game</span>
            <a className="ml-2 my-auto" href="https://ritika-patel.github.io/COSMOS-CONSCIOUS/">{link}</a>
          </div>

          <div className="mt-2"><a target="_blank" className={spanLink} href="https://github.com/Ritika-patel/COSMOS-CONSCIOUS">Github</a></div>

          <div className="my-4 mb-6">
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              JavaScript
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              HTML
            </span>
            <span className="text-sm mr-2 bg-gray-500 text text-black p-1 uppercase ">
              CSS
            </span>
          </div>

          <div className={RightImgDetail}>
            The objective of this game is to collect the most pairs of cards, by
            matching pairs within a 20 chances.
          </div>
        </div>

        <div className="relative">
          <img className={ImgStyleRight} src={cosmo} alt="Fit Coach" />
          <div className="absolute w-[100%] md:w-[90%] xl:w-[100%] inset-0 bg-gradient-to-r from-[#111111]"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
