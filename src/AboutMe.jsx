import './AboutMe.css';

import IconArrow from './assets/icon-arrow-sm.svg?react';
import PhotoAboutMe from './assets/photo-about-me.jpg';
import ShapeCorner from './assets/shape-corner.svg';

export default function AboutMe() {
    return (
        <div className="AboutMe">
            <div className='max-w-[1280px] mx-auto lg:mt-16 lg:grid lg:grid-cols-3 items-center'>
                {/* Text Box */}
                <div className='px-8 pt-16 lg:pl-8 lg:pr-40 lg:py-16 lg:col-span-2'>
                    <h2 className="poppins text-3xl font-bold leading-normal tracking-wider md:text-[2.25rem] xl:text-[2.5rem] transition-all duration-300">About Me</h2>
                
                    <p className="mt-4">
                        I’m a <span>career-switcher</span> based in Lisbon (Portugal) who spent years as an <span><a href="https://linktr.ee/franciscocristina" target="_blank" className="link">audio engineer</a></span>. Working in post-production studios and as a freelancer, I developed a <span>strong work ethic</span>, a <span>proactive mindset</span>, and the skills to <span>communicate clearly</span> with clients and team members.
                        Now I bring that same dedication to web development.
                    </p>
                    
                    <p className="mt-4">
                        Over the past year, I’ve built <span>50+ frontend projects</span>, developed <span>full-stack applications</span>, and consistently practiced coding challenges. My portfolio showcases <span>hands-on experience</span> with responsive design and practical problem-solving.
                        I leverage AI tools like ChatGPT and Claude to accelerate learning and debugging, but <span>all project code is written and debugged by me</span>.
                    </p>
                    
                    <p className="mt-4">
                        I’m also committed to <span>continuous growth</span>. I’ve completed Colt Steele’s <span><a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" className="link">Full-Stack Web Development</a></span> and <span><a href="https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/" target="_blank" className="link">MySQL</a></span> bootcamps, along with courses in Figma, Python, and other areas of web development. Each course and project builds on the last, helping me become a more <span>versatile</span> and <span>well-rounded developer</span>.
                    </p>
                    
                    <p className="my-4">
                        My goal is to join a team where I can grow as a frontend or full-stack developer while combining <span>creative thinking</span> with <span>attention to detail</span> in every project.
                    </p>

                    <a href="#" target="_blank" className='border-3 border-gb-beige-500 rounded-lg px-2 py-0.5 flex items-center w-max hover:cursor-pointer hover:border-gb-teal-500 group transition-all duration-300 group'>
                        <span>my resume</span>
                        < IconArrow className="arrow ml-1 w-2 h-2 group-hover:-mt-1 transition-all duration-200" />
                    </a>
                </div>

                {/* Photo Box */}
                <div className='relative items-center hidden lg:flex max-w-[24rem]'>
                    <img src={ShapeCorner} alt="" className='absolute z-0 -top-5 right-9 w-15'/>
                    {/* Frame */}
                    <div className='absolute z-0 w-full h-full border-2 border-gb-teal-500 top-5 -left-15'/>
                    <img src={PhotoAboutMe} alt="" className='z-0 w-4xs -ml-20'/>
                </div>
            </div>
        </div>
    )
}