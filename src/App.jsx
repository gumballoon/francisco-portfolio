import { useState, useRef, useEffect } from "react";
import "./App.css";

import Preloader from "./Preloader";
import Navbar from "./Navbar";
import Menu from "./Menu";
import TopBanner from "./TopBanner";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";

export default function App() {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    console.log(
      "👋 Hey there! Curious about the code?\n Take a look around: https://github.com/gumballoon/francisco-portfolio"
    );
  }, []);

  function handleLoad() {
    setTimeout(() => {
      setIsContentLoaded(true);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }, 2500);
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const startRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollTo(ref) {
    setIsMenuVisible(false);
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <div className="text-gb-navy-500 mx-auto min-h-[400px]">
        <div className={isMenuVisible ? "blur-[3px] lg:blur-none z-0" : ""}>
          <div ref={startRef}>
            <TopBanner />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={aboutRef}>
            <AboutMe />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
        <Navbar
          isMenuVisible={isMenuVisible}
          openMenu={() => setIsMenuVisible(true)}
        />
        <Menu
          isMenuVisible={isMenuVisible} closeMenu={() => setIsMenuVisible(false)} startRef={startRef} projectsRef={projectsRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef} scrollTo={scrollTo}
        />
      </div>
      
      {!isContentLoaded && <Preloader />}
    </>
  );
}
