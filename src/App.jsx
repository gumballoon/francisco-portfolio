import { useState, useRef } from 'react';
import './App.css'

import MenuButton from './MenuButton';
import Menu from './Menu';
import TopBanner from './TopBanner';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';

export default function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const startRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollTo(ref) {
    setIsMenuVisible(false);
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className='text-gb-navy-500 mx-auto min-h-[400px]'>
      <div className={(isMenuVisible && 'blur-[3px] lg:blur-none z-0')}>
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
      < MenuButton isMenuVisible={isMenuVisible} openMenu={() => setIsMenuVisible(true)} />
      < Menu isMenuVisible={isMenuVisible} closeMenu={() => setIsMenuVisible(false)} startRef={startRef} projectsRef={projectsRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef} scrollTo={scrollTo}/>
    </div>
  )
}