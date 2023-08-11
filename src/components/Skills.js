import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import useFadeIn from "../animations/useFadeIn";
import useFadeInleft from "../animations/useFadeInleft";
import useFadeInright from "../animations/useFadeInright";

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
    ref: ReactRef,
    ctrls: reactCtrls,
    vars: reactVars,
  } = useFadeInleft({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });

  const {
    ref: JSRef,
    ctrls: jsCtrls,
    vars: jsVars,
  } = useFadeInright({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });

  const {
    ref: NodeRef,
    ctrls: nodeCtrls,
    vars: nodeVars,
  } = useFadeInleft({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });

  const {
    ref: HTMLRef,
    ctrls: htmlCtrls,
    vars: htmlVars,
  } = useFadeInright({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });
  const {
    ref: CSSRef,
    ctrls: cssCtrls,
    vars: cssVars,
  } = useFadeInleft({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });

  const {
    ref: CppRef,
    ctrls: cppCtrls,
    vars: cppVars,
  } = useFadeInright({
    threshold: 0.01,
    delay: 0.1, // Delay for the About Me element
  });


  const data = [
    {
      "id": 1,
      "heading": "React JS",
      "span": ["interactive UI", "virtual dom", "state management", "dynamic"],
      "para": "Build multilpe web application using React with a possess an in-depth understanding of React and its cutting-edge features Implimented state management and create dynamic and interactive user interfaces that cater to the unique needs of each project."
    },
    {
      "id": 2,
      "heading": "React JS",
      "span": ["interactive UI", "virtual dom", "state management", "dynamic"],
      "para": "Build multilpe web application using React with a possess an in-depth understanding of React and its cutting-edge features Implimented state management and create dynamic and interactive user interfaces that cater to the unique needs of each project."
    },
    {
      "id": 3,
      "heading": "React JS",
      "span": ["interactive UI", "virtual dom", "state management", "dynamic"],
      "para": "Build multilpe web application using React with a possess an in-depth understanding of React and its cutting-edge features Implimented state management and create dynamic and interactive user interfaces that cater to the unique needs of each project."
    },
    {
      "id": 4,
      "heading": "React JS",
      "span": ["interactive UI", "virtual dom", "state management", "dynamic"],
      "para": "Build multilpe web application using React with a possess an in-depth understanding of React and its cutting-edge features Implimented state management and create dynamic and interactive user interfaces that cater to the unique needs of each project."
    },
    {
      "id": 5,
      "heading": "React JS",
      "span": ["interactive UI", "virtual dom", "state management", "dynamic"],
      "para": "Build multilpe web application using React with a possess an in-depth understanding of React and its cutting-edge features Implimented state management and create dynamic and interactive user interfaces that cater to the unique needs of each project."
    },
  ]

  const spanStyle = "mr-2 text-sm bg-gray-500 text text-black p-0.5 uppercase";
  const whiteContainer = "w-auto lg:w-[800px] mb-[100px] p-8  bg-white text-black"
  const BlackContainer = "w-auto lg:w-[800px] lg:ml-auto  mb-[100px] p-8  border border-gray-500 text-textwhite"
  const whitespanContainer = " ml-0 md:ml-8  text-justify mt-6 text-gray-500"
  const blackspanContainer = "ml-0 md:mr-8  text-justify mt-6 text-gray-500"
  const blackspan = "flex justify-end"
  const DetailMarginRight = "md:ml-[100px]"
  const DetailMarginLeft = "md:mr-[100px]"

  return (
    <div id="skills" className="mt-[120px] lg:mt-0">
      <motion.div
        ref={HeadRef}
        initial="hidden"
        animate={headCtrls}
        variants={headVars}
        className="font-UltraSolar mb-[80px] text-[80px]"
      >
        Tech-skills
      </motion.div>

      <motion.div
        ref={ReactRef}
        initial="hidden"
        animate={reactCtrls}
        variants={reactVars}
        className={whiteContainer}
      >
        <div className="text-[60px] font-UltraSolar">React JS</div>
        <div className={DetailMarginLeft}>
          <div className={whitespanContainer}>

            <span className="mr-2 text-sm  bg-gray-500 text text-black p-0.5 uppercase ">
              State management
            </span>

            <span className={spanStyle}>
              UI
            </span>

            <span className="mr-2 text-sm  bg-gray-500 text text-black p-0.5 uppercase ">
              dynamic
            </span>

            <p className="mt-4 text-lg">
              Build multilpe web application using React with a possess an
              in-depth understanding of React and its cutting-edge features
              Implimented state management and create dynamic and interactive
              user interfaces that cater to the unique needs of each project.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={JSRef}
        initial="hidden"
        animate={jsCtrls}
        variants={jsVars}
        className={BlackContainer}
      >
        <div className="text-[60px] font-UltraSolar text-right">JavaScript</div>
        <div className={DetailMarginRight}>
          <div className={blackspanContainer}>
            <div className={blackspan}>
            <span className=" text-sm mr-2 bg-gray-500 text-black  p-0.5  uppercase ">
              Asynchronous
            </span>
            <span className=" text-sm mr-2 bg-gray-500 text-black  p-0.5  uppercase ">
              Versatile
            </span>

            </div>


            <p className=" text-lg mt-4">
              Handeling asynchronous task, fetching APIs, buldinng animations,
              state managemanet become easywith the help of JavaScript.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={NodeRef}
        initial="hidden"
        animate={nodeCtrls}
        variants={nodeVars}
       className={whiteContainer}>
        <div className="text-[60px] font-UltraSolar">Node JS</div>
        <div className={DetailMarginLeft}>
          <div className={whitespanContainer}>

            <div>

            


            <span className={spanStyle}>
              Scalability
            </span>

            <span className={spanStyle}>
              Vast NPM
            </span>

            <span className={spanStyle}>
              SSR/CSR
            </span>
            </div>

            <p className="mt-4 text-lg">
              Build end-to-end backend applications using Node.js, Executed and
              Debugged Server-side scripts and Documented APIs on Postman.
            </p>
          </div>
        </div>
        </motion.div>

        <motion.div
        ref={HTMLRef}
        initial="hidden"
        animate={htmlCtrls}
        variants={htmlVars}
        className={BlackContainer}>
        <div className="text-[60px] font-UltraSolar text-right">HTML</div>
        <div className={DetailMarginRight}>
          <div className={blackspanContainer}>

            <div className={blackspan}>
            <span className={spanStyle}>
              Structure
            </span>
            <span className={spanStyle}>
              Development
            </span>

            </div>
            <p className=" text-lg mt-4">
              Used HTML(Hyper Text Markup Language) for website structure and
              also itegrated other technologies like CSS (Cascading Style
              Sheets) for styling and layout and JavaScript for interactivity
              and dynamic content.
            </p>
          </div>
        </div>
        </motion.div>

        <motion.div
        ref={CSSRef}
        initial="hidden"
        animate={cssCtrls}
        variants={cssVars}
        className={whiteContainer}>
        <div className="text-[60px] font-UltraSolar">CSS</div>
        <div className={DetailMarginLeft}>
          <div className={whitespanContainer}>

            <div>
            <span className="mr-2 text-sm bg-gray-500 text text-black p-0.5 uppercase ">
              Styling 
            </span>


            <span className="mr-2 text-sm  bg-gray-500 text text-black p-0.5 uppercase ">
              Responsive
            </span>

            <span className="mr-2 text-sm  bg-gray-500 text text-black p-0.5 uppercase ">
              Tailwind
            </span>
            </div>
            <p className="mt-4 text-lg">
              Build animated and Responsive designes with customization Theming,
              also integrated animations using Framer motions and developer
              productivity using Tailwind CSS.
            </p>
          </div>
        </div>
        </motion.div>

        <motion.div
        ref={CppRef}
        initial="hidden"
        animate={cppCtrls}
        variants={cppVars} className={BlackContainer + ' mb-0'}> 
        <div className="text-[60px] font-UltraSolar text-right">C/C++</div>
        <div className={DetailMarginRight}>
          <div className={blackspanContainer}>
            <div className={blackspan}>
            <span className={spanStyle}>
              designes
            </span>
            <span className={spanStyle}>
              algorithms
            </span>
            <span className={spanStyle}>
              Programming
            </span>
            </div>
            <p className=" text-lg mt-4">
              Solved multiple questions at leetcode/codechef/interviewbit using
              C/C++ programming languages
            </p>
          </div>
        </div>
        </motion.div>
    </div>
  );
};

export default Skills;
