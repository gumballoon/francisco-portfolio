import './SkillsIcon.css';

export default function SkillsIcon({ SVG, width, description } ) {
    return (
        <div className='SkillsIcon flex flex-col items-center' role='img' aria-label={description}>
            < SVG className={`w-[${width}] max-w-12 peer`} aria-hidden='true'/>

        <span className='block mt-2 font-extralight opacity-0 peer-hover:opacity-100 peer-focus:opacity-100 peer-active:opacity-100 transition-opacity duration-300' aria-hidden='true'>{description}</span>
    </div>
    )
} 