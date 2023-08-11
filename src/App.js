import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="debug-screens text-textwhite mx-8 sm:mx-14 App">
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      {openNav ? (
        ""
      ) : (
        <>
          <About />
          <Timeline />
          <Projects />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
