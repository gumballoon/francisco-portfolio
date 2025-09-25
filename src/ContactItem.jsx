import IconArrow from './assets/icon-arrow-sm.svg?react'

export default function ContactItem({ SVG, description, title, link}) {
    return (
        <div className="flex items-center my-6 xl:mb-0"> 
            < SVG className="icon w-10 h-10"/>
            <div className="flex flex-col ml-4">
                <span className="font-light text-sm text-gb-neutral-300">{description}</span>
                <a href={link} target="_blank" className='flex items-center font-light hover:font-normal transition-all duration-300 group'>
                    <span>{title}</span>
                    < IconArrow className="ml-1 w-2 h-2 group-hover:-mt-1 transition-all duration-200" />
                </a>
            </div>
        </div>
        )
}