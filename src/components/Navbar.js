import React, { useState } from "react";
import { motion } from "framer-motion";
import useFadeIn from "../animations/useFadeIn";
import useAnimateIn from "../animations/useAnimateIn";
import useMediaQuery from "../animations/useMediaQuery";

const Navbar = ({ openNav, setOpenNav }) => {
  const {
    ref: aboutRef,
    ctrls: aboutCtrls,
    vars: aboutVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });

  const {
    ref: skillsRef,
    ctrls: skillsCtrls,
    vars: skillsVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.2, // Delay for the Skills element
  });

  const {
    ref: projectsRef,
    ctrls: projectsCtrls,
    vars: projectsVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.3, // Delay for the Projects element
  });

  const {
    ref: contactRef,
    ctrls: contactCtrls,
    vars: contactVars,
  } = useFadeIn({
    threshold: 0.01,
    delay: 0.4, // Delay for the Contact element
  });

  const scrollToSection = async (sectionId) => {
    await setOpenNav(false);
    const section = document.getElementById(sectionId);

    if (section) {
      const targetY = section.getBoundingClientRect().top + window.pageYOffset;
      const initialY = window.pageYOffset;
      const difference = targetY - initialY;
      const duration = 500; // Adjust this value to control the scrolling speed

      let start;

      function step(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, initialY + difference * progress);

        if (elapsed < duration) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }
  };

  return (
    <div
      className={`flex justify-between mb-8 z-50 my-8 ${
        !openNav ? "sticky top-8" : "top-0"
      }`}
    >
      <div className="w-[40%] logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-activity"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </div>

      <div
        className="
      relative-group z-50
      md:collapse
      "
      >
        {!openNav ? (
          <svg
            onClick={() => setOpenNav(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        ) : (
          <svg
            onClick={() => setOpenNav(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </div>

      <div
        className={`bg-black flex justify-between flex-col gap-9 absolute top-0 left-0 w-full h-screen items-center z-40 p-[150px] text-2xl text-textwhite
        md:hidden
      ${openNav ? "" : "hidden"}
      
      `}
      >
        <div
          onClick={() => scrollToSection("about")}
          className="relative group text-textwhite flex justify-between uppercase font-semibold"
        >
          <div>About</div>
          <span className="absolute top-[32px] left-0 w-0 h-[1px] bg-textwhite transition-all group-hover:w-full"></span>
        </div>
        <div
          onClick={() => scrollToSection("projects")}
          className="relative group text-textwhite flex justify-between uppercase font-semibold"
        >
          <div>Projects</div>
          <span className="absolute top-[32px] left-0 w-0 h-[1px] bg-textwhite transition-all group-hover:w-full"></span>
        </div>
        <div
          onClick={() => scrollToSection("skills")}
          className="relative group text-textwhite flex justify-between uppercase font-semibold"
        >
          <div>Skills</div>
          <span className="absolute top-[32px] left-0 w-0 h-[1px] bg-textwhite transition-all group-hover:w-full"></span>
        </div>

        <div
          onClick={() => scrollToSection("contact")}
          className="relative group text-textwhite flex justify-between uppercase font-semibold"
        >
          <div>Contact</div>
          <span className="absolute top-[32px] left-0 w-0 h-[1px] bg-textwhite transition-all group-hover:w-full"></span>
        </div>
      </div>

      <div
        className="
       hidden md:flex md:justify-between md:w-[70%] md:flex-row md:h-auto md:p-0 md:text-l"
      >
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutCtrls}
          variants={aboutVars}
          onClick={() => scrollToSection("about")}
          className="relative group text-textwhite flex justify-between uppercase font-semibold"
        >
          <div>About</div>
          <span className="absolute top-[22px] left-0 w-0 h-[1px] bg-textwhite transition-all group-hover:w-full"></span>
        </motion.div>

        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={projectsCtrls}
          variants={projectsVars}
          onClick={() => scrollToSection("projects")}
          className="relative group text-textwhite flex justify-between uppercase font-semibold"
        >
          <div>Projects</div>
          <span className="absolute top-[22px] left-0 w-0 h-[1px] bg-textwhite transition-all group-hover:w-full"></span>
        </motion.div>

        <motion.div
          ref={skillsRef}
          initial="hidden"
          animate={skillsCtrls}
          variants={skillsVars}
          onClick={() => scrollToSection("skills")}
          className="relative group text-textwhite flex justify-between uppercase font-semibold"
        >
          <div>Skills</div>
          <span className="absolute top-[22px] left-0 w-0 h-[1px] bg-textwhite transition-all group-hover:w-full"></span>
        </motion.div>

        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactCtrls}
          variants={contactVars}
          onClick={() => scrollToSection("contact")}
          className="relative group text-textwhite flex justify-between uppercase font-semibold"
        >
          <div>Contact</div>
          <span className="absolute top-[22px] left-0 w-0 h-[1px] bg-textwhite transition-all group-hover:w-full"></span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
