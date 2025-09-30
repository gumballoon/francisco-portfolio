import './Menu.css';

export default function Menu({ isMenuVisible, closeMenu, startRef, projectsRef, aboutRef, skillsRef, contactRef, scrollTo }) {
    const underline = 
        <svg className="w-[110%] h-[6px] -mt-1" viewBox="0 0 40 5" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path className="group-hover:fill-gb-neutral-100" d="M28.5308 0.734375C30.6673 0.944678 32.8027 1.40051 34.9292 2.10156C35.9391 2.43447 36.736 2.65513 37.3276 2.76562C37.6197 2.82003 37.8437 2.83879 38.0073 2.84375C38.1421 2.84765 38.2063 2.838 38.2183 2.83594L38.9136 2.57031L39.0854 2.5H39.3745V3.75781L39.6401 4.42969L38.9058 4.71875L38.8823 4.72656L38.8667 4.73438C38.3195 4.92142 37.6198 4.84952 36.9604 4.72656C36.2442 4.5928 35.353 4.3457 34.3042 4C32.3107 3.34279 30.3189 2.92179 28.3354 2.72656C26.4054 2.53671 24.4734 2.71555 22.5308 3.26562C20.3002 3.89763 18.0534 3.91995 15.8198 3.33594C13.8662 2.8253 11.9197 2.64559 9.97607 2.79688C7.99841 2.95125 5.00132 3.50049 0.960449 4.46875L0.843262 4.5H0.624512L0.491699 2.53125C4.55568 1.55736 7.67807 0.971868 9.81982 0.804688C11.9931 0.635397 14.1643 0.832847 16.3276 1.39844C18.2141 1.89169 20.0945 1.87128 21.9839 1.33594C24.1586 0.720087 26.3434 0.519291 28.5308 0.734375Z" fill="#6DB1BF"/>
        </svg>

    return (
        <div className={`Menu ${isMenuVisible && 'ShowMenu'}`}>
            { isMenuVisible &&
                <div className="fixed inset-0 w-full h-full z-50 lg:w-[20rem] lg:h-min lg:ml-auto bg-gb-beige-500 px-7 pt-13 lg:px-7 lg:pt-9 lg:mr-4 lg:mt-4">
                    <svg className={`h-8 ml-auto group hover:cursor-pointer ${isMenuVisible && 'ShowMenuButton'}`} onClick={closeMenu} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                        <rect className="group-hover:fill-gb-neutral-100 transition-all duration-150" width="17" height="17" fill="#223843"/>
                        <path d="M4.95833 4.95831L12.0417 12.0416M4.95833 12.0416L12.0417 4.95831" stroke="#EAE0D5" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <div className="my-18 w-full flex flex-col items-center gap-12 lg:gap-15">
                        <div className="flex flex-col items-center">
                            <a className='poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(startRef)}>
                                Start
                                { underline }
                            </a>
                            <i className="lg:hidden mt-2 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-300">welcome & intro</i>
                        </div>

                        <div className="flex flex-col items-center">
                            <a className='poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(projectsRef)}>
                                Projects
                                { underline }
                            </a>
                            <i className="lg:hidden mt-2 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-300">
                                things I’ve built</i>
                        </div>

                        <div className="flex flex-col items-center">
                            <a className='poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(aboutRef)}>
                                About Me
                                { underline }
                            </a>
                            <i className="lg:hidden mt-2 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-300">my journey so far</i>
                        </div>

                        <div className="flex flex-col items-center">
                            <a className='poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(skillsRef)}>
                                Skills
                                { underline }
                            </a>
                            <i className="lg:hidden mt-2 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-300">tools I work with</i>
                        </div>


                        <div className="flex flex-col items-center">
                            <a className='poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(contactRef)}>
                                Contact
                                { underline }
                            </a>
                            <i className="lg:hidden mt-2 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-300">let's connect</i>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}