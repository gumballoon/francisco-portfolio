import TopBannerIcon from './TopBannerIcon';
import './TopBanner.css';

import IconGithub from "./assets/icon-top-github.svg?react";
import IconLinkedIn from "./assets/icon-top-linkedIn.svg?react";
import IconResume from "./assets/icon-top-resume.svg?react";
import IconEmail from "./assets/icon-top-email.svg?react";
import PhotoTopBanner from "./assets/photo-top-banner.jpg";
import ShapeCorner from './assets/shape-corner.svg';
import ShapeWavesBeige from './assets/shape-waves-beige.svg';
import ShapeWavesTeal from './assets/shape-waves-teal.svg';

export default function TopBanner() {
    return (
        <section className='TopBanner' id='TopBanner'>
            <div className='max-w-[1280px] mx-auto md:grid md:grid-cols-3 items-center md:mt-18'>
                {/* Text Box */}
                <div className='px-8 md:pl-8 md:pr-40 md:py-8 md:col-span-2'>
                    <div className='pt-32 pb-20 md:pt-24 md:pb-24'>
                        <h1 className='poppins text-4xl font-bold leading-normal tracking-wider mb-4 md:text-[2.5rem] xl:text-[3rem] transition-all duration-300'>
                            Francisco Cristina
                        </h1>

                        <h3 className='poppins text-lg font-semibold tracking-wide md:text-[1.188rem] md:text-xl transition-all duration-300'>
                            frontend <span className='text-gb-teal-500'>/</span> full-stack developer
                        </h3>

                        <p className="mt-16 mb-4 text-lg">
                            from <span className="font-semibold wavy-teal-500">sound waves</span> to <span className="font-semibold underline-teal-500">code lines</span>
                        </p>

                        <p className="text-lg">
                            building <span className="font-semibold">responsive</span>, <span className="font-semibold">user-focused</span> web applications
                        </p>
                    </div>

                    <div className='grid grid-cols-4 w-60 gap-6 items-center mb-0 text-gb-neutral-500 text-sm'>
                        < TopBannerIcon SVG={IconGithub} description={'Github'} link={"https://github.com/gumballoon"} />

                        < TopBannerIcon SVG={IconLinkedIn} description={'LinkedIn'} link={"https://www.linkedin.com/in/francisco-cristina/"} />

                        < TopBannerIcon SVG={IconResume} description={'Resume'} link={"#"} />

                        < TopBannerIcon SVG={IconEmail} description={'Email'} link={"mailto:franciscocristina.dev@gmail.com"} />
                    </div>
                </div>

                {/* Photo Box */}
                <div className='z-0 bg-gb-navy-500 w-full mt-8 py-18 md:bg-transparent'>
                    <div className='relative flex items-center'>
                        <img src={ShapeCorner} alt="" className='absolute -top-5 right-[15%] w-[10%] md:right-12 md:w-[15%]'/>
                        <img src={ShapeWavesTeal} alt="" className='absolute z-20 -top-5 md:-top-9 left-[15%] md:-left-23 w-[10%] md:w-[17.5%]'/>
                        <img src={ShapeWavesBeige} alt="" className='absolute z-20 -bottom-9 right-[15%] w-[10%] md:right-13 md:w-[17.5%] md:-bottom-10'/>
                        {/* Frame */}
                        <div className='absolute z-0 w-[60%] md:w-[100%] h-full border-2 border-gb-teal-500 top-5 md:top-3.5 left-[22.5%] md:-left-16.5'/>
                        <img src={PhotoTopBanner} alt="" className='z-10 w-[60%] mx-auto md:w-[100%] md:-ml-20'/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}