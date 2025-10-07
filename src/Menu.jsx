import './Menu.css';


export default function Menu({ isMenuVisible, closeMenu, startRef, projectsRef, aboutRef, skillsRef, contactRef, scrollTo }) {
    return (
        <div className={`Menu ${isMenuVisible && 'ShowMenu'}`}>
            { isMenuVisible &&
                <div className="fixed inset-0 w-full h-full z-50 lg:w-[20rem] lg:h-min lg:ml-auto bg-gb-beige-500 pr-6 pt-3 lg:px-7 lg:pt-9 lg:mr-4 lg:mt-4">
                    <svg className={`h-8 ml-auto group hover:cursor-pointer ${isMenuVisible && 'ShowMenuButton'}`} onClick={closeMenu} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role='button' aria-label='close menu'>
                        <rect className="group-hover:fill-gb-neutral-100 transition-all duration-150" width="17" height="17" fill="#223843"/>
                        <path d="M4.95833 4.95831L12.0417 12.0416M4.95833 12.0416L12.0417 4.95831" stroke="#EAE0D5" strokeWidth="1.41667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <div className="my-12 w-full flex flex-col items-center gap-10 lg:gap-15">
                        <div className="flex flex-col items-center">
                            <a className='relative px-2 poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(startRef)}>
                                Start
                            </a>
                            <i className="lg:hidden mt-1 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-400">
                                welcome & intro
                            </i>
                        </div>

                        <div className="flex flex-col items-center">
                            <a className='relative px-2 poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(projectsRef)}>
                                Projects
                            </a>
                            <i className="lg:hidden mt-1 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-400">
                                things I’ve built
                            </i>
                        </div>

                        <div className="flex flex-col items-center">
                            <a className='relative px-2 poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(aboutRef)}>
                                About Me
                            </a>
                            <i className="lg:hidden mt-1 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-400">my journey so far</i>
                        </div>

                        <div className="flex flex-col items-center">
                            <a className='relative px-2 poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(skillsRef)}>
                                Skills
                            </a>
                            <i className="lg:hidden mt-1 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-400">
                                tools I work with
                            </i>
                        </div>


                        <div className="flex flex-col items-center">
                            <a className='relative px-2 poppins font-semibold text-xl tracking-[0.15rem] flex flex-col items-center w-max group peer hover:cursor-pointer' onClick={() => scrollTo(contactRef)}
                            >
                                Contact
                            </a>
                            <i className="lg:hidden mt-1 font-light text-gb-neutral-500 opacity-0 peer-hover:opacity-100 transition-all duration-400">
                                let's connect
                            </i>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}