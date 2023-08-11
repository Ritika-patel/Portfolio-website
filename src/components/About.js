import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import useFadeIn from "../animations/useFadeIn";
import { Link } from "react-router-dom";


const About = () => {

  const Mail = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
const LinkedIn = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
const Github = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
const Insta = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>

const linkStyle = "border px-2.5 py-1.5 rounded-md hover:bg-white hover:stroke-black hover:text-black font-semibold"


  const {
    ref: ImgRef,
    ctrls: imgCtrls,
    vars: imgVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });

  const {
    ref: HeadRef,
    ctrls: headCtrls,
    vars: headVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.2, // Delay for the About Me element
  });

  const {
    ref: AboutRef,
    ctrls: aboutCtrls,
    vars: aboutVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.3, // Delay for the About Me element
  });

  return (

      <div id="about" className="mt-[50px] pt-4 text-textwhite ">
        <motion.div
          ref={ImgRef}
          initial="hidden"
          animate={imgCtrls}
          variants={imgVars}
          className="
          lg:justify-end lg:relative lg:right-[20%]
          flex justify-center grayscale 
          "
        >
          <img
            className="
            h-[320px] w-[320px]
            sm:h-[370px] sm:w-[370px] rounded-full shadow-lg shadow-gray-900 border-solid border border-gray-900
            "
            src={profile}
          />
        </motion.div>

        <div className="relative bottom-[90px] mx-auto text-center ">
          <motion.div
            ref={HeadRef}
            initial="hidden"
            animate={headCtrls}
            variants={headVars}
          >
            <h1 className="
            font-UltraSolar mb-4
            ">Hey, I'm Ritika</h1>
          </motion.div>

          <motion.div
            ref={AboutRef}
            initial="hidden"
            animate={aboutCtrls}
            variants={aboutVars}
            className="text-[18px] leading-6 mx-auto text-l text-justify align-baseline
            w-[90%] md:w-[70%] lg:w-[60%]" 
          >
           <p>Ambitious & adaptable professional with a deep passion for Software Engineering, &
            valuable experience through internships, collaborated with diverse teams, and competitions
            teams. </p>

            <div className="w-[240px] my-4 flex justify-between">
              <a className={linkStyle}  target="_blank" href="https://www.linkedin.com/in/ritikap/">{LinkedIn}</a>
              <a className={linkStyle}  target="_blank" href="https://github.com/Ritika-patel">{Github}</a>
              <a className={linkStyle}  target="_blank" href="https://www.instagram.com/_._.blink_._/">{Insta}</a>
              <a className={linkStyle}  target="_blank" href="https://drive.google.com/file/d/1twT2lESltGOGLKf_J6c1XmKo07snJPD3/view?usp=sharing">CV</a>
            </div>

          </motion.div>
        </div>
      </div>


  
  );
};

export default About;