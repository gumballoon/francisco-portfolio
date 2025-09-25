import { useState } from 'react';

import NavigationBar from './NavigationBar';
import Menu from './Menu';
import TopBanner from './TopBanner';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';

import './App.css'

export default function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className='text-gb-navy-500 mx-auto min-h-[400px]'>
      <div className={(isMenuVisible && 'blur-[3px] lg:blur-none z-0')}>
          < TopBanner />
          < Projects />
          < AboutMe />
          < Skills />
          < Contact />
      </div>
      < NavigationBar openMenu={() => setIsMenuVisible(true)} />
      < Menu isMenuVisible={isMenuVisible} closeMenu={() => setIsMenuVisible(false)}/>
    </div>
  )
}