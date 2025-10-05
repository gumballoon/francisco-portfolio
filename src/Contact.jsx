import ContactItem from './ContactItem';

import IconEmail from './assets/icon-contact-email.svg?react';
import IconLinkedIn from './assets/icon-contact-linkedin.svg?react';
import IconGithub from './assets/icon-contact-github.svg?react';
import IconFrontendMentor from './assets/icon-contact-frontendmentor.svg?react';
import IconCssBattle from './assets/icon-contact-cssbattle.svg?react';
import IconHackerRank from './assets/icon-contact-hackerrank.svg?react';

export default function Contact() {
    return (
        <footer className="bg-gb-navy-500 text-gb-neutral-100 w-full mt-16">
            <div className='px-8 py-16 md:grid md:grid-cols-2 md:gap-1 xl:flex xl:gap-16 max-w-[1280px] mx-auto'>
                <div className='md:col-'>
                    <h2 className="poppins text-3xl font-bold leading-normal tracking-wider md:text-[2.25rem] xl:text-[2.5rem] transition-all duration-300">Contact</h2>
                    
                    < ContactItem SVG={IconEmail} description={'Email'} title={'franciscocristina.dev@gmail.com'} link={'mailto:franciscocristina.dev@gmail.com'} />
                    
                    < ContactItem SVG={IconLinkedIn} description={'LinkedIn'} title={'/francisco-cristina'} link={'https://www.linkedin.com/in/francisco-cristina/'} />
                </div>

                <div className='bg-gb-neutral-100 w-full h-[1px] mt-8 mb-7 md:hidden'/>

                <div>
                    <h2 className="poppins text-3xl font-bold leading-normal tracking-wider md:text-[2.25rem] xl:text-[2.5rem] transition-all duration-300">Profiles</h2>
                    <div className='md:flex md:gap-[7.5%] transition-all duration-300'>
                        <div>
                            < ContactItem SVG={IconGithub} description={'Github'} title={'@gumballoon'} link={'https://github.com/gumballoon'} />

                            < ContactItem SVG={IconFrontendMentor} description={'Frontend Mentor'} title={'@gumballoon'} link={'https://www.frontendmentor.io/profile/gumballoon'} />
                        </div>

                        <div>
                            < ContactItem SVG={IconCssBattle} description={'CSSBattle'} title={'@gumballoon'} link={'https://cssbattle.dev/player/gumballoon'} />

                            < ContactItem SVG={IconHackerRank} description={'HackerRank'} title={'@gumballoon'} link={'https://www.hackerrank.com/profile/gumballoon'} />
                        </div>
                    </div>
                </div>

                <div className="col-span-2 xl:col-span-1 xl:self-end">
                <p className="font-extralight my-12 md:mt-6 xl:mb-4">
                    Designed in <span className="font-normal">Figma</span> and coded in{" "}
                    <span className="font-normal whitespace-nowrap">Visual Studio Code</span>.
                    Built with <span className="font-normal">React</span> and{" "}
                    <span className="font-normal">Tailwind CSS</span>, deployed with{" "}
                    <span className="font-normal">Github Pages</span>. Headings are set in the{" "}
                    <span className="font-normal">Poppins</span> typeface, while body text uses{" "}
                    <span className="font-normal">Inter</span>.
                </p>
                <p className="text-lg font-extralight xl:text-end">
                    © Francisco Cristina 2025
                </p>
                </div>
            </div>
        </footer>
    )
}