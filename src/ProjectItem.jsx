import { useState } from 'react'

import DefaultImage from './assets/image-project-default.png';
import IconArrow from './assets/icon-arrow-sm.svg?react'

import './ProjectItem.css';

export default function ProjectItem({ image=DefaultImage, title, date, description, demo, repo}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isViewCollapsed, setIsViewCollapsed] = useState(true);

    function toggleView() {
        setIsViewCollapsed(!isViewCollapsed);
    }

    return (
        <div className='ProjectItem mt-10 flex flex-col items-center lg:w-max-none lg:grid lg:grid-cols-2 lg:gap-16'>
            <div style={{backgroundImage:`url(${image})`}} className={`image z-0 order-1 lg:order-2 border-4 border-gb-beige-500 rounded-xl flex items-center justify-center transition-all duration-200 ${!isViewCollapsed && 'border-gb-teal-500 lg:border-gb-beige-500'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <button type="button" aria-label="toggle description" className="bg-gb-neutral-100 font-normal px-4 py-1 text-md border-4 border-gb-beige-500 rounded-xl hover:cursor-pointer hover:border-gb-teal-500 transition-all duration-200 lg:hidden" style={!isHovered ? {display:'none'} : null} onClick={toggleView}>
                    {isViewCollapsed ? 'learn more' : 'collapse'}
                </button>
            </div>
            <div className='flex flex-col order-2 lg:order-1'>
                <div className={`Description z-0 order-1 lg:order-2 ${isViewCollapsed ? 'hidden lg:block' : 'block'}`}>
                    <div className='flex mt-5 mb-3'>
                        <a href={demo} target="_blank" className='font-semibold border-3 border-gb-beige-500 rounded-lg px-2 py-0.5 mr-2 flex items-center w-max hover:cursor-pointer hover:border-gb-teal-500 group transition-all duration-300 group'>
                            <span>Live Demo</span>
                        < IconArrow className="arrow ml-1 w-2 h-2 group-hover:-mt-1 transition-all duration-200" />
                        </a>
                        <a href={repo} target="_blank" className='font-semibold border-3 border-gb-beige-500 rounded-lg px-2 py-0.5 flex items-center w-max hover:cursor-pointer hover:border-gb-teal-500 group transition-all duration-300 group'>
                            <span>Github</span>
                        < IconArrow className="arrow ml-1 w-2 h-2 group-hover:-mt-1 transition-all duration-200" />
                        </a>
                    </div>
                    <p className='leading-relaxed lg:leading-loose transition-all duration-300'>{description}</p>
                </div>
                <div className={`flex flex-col lg:flex-row lg:justify-start flex-wrap order-2 lg:order-1 text-center lg:text-star mt-4 lg:mt-0 ${isViewCollapsed ? 'items-center' : 'items-end'}`}>
                    <h3 className="text-xl lg:text-2xl font-semibold lg:font-bold lg:mr-2">
                        {title}
                    </h3>
                    <p className="font-light text-lg lg:text-xl">
                        {date}
                    </p> 
                </div>
            </div>
        </div>
    )
}