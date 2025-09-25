export default function TopBannerIcon({SVG, description, link}) {
    return (
        <a href={link} target="_blank" aria-label='Github profile' className='group flex flex-col items-center'>
            < SVG />
            <span className='font-extralight opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{description}</span>
        </a>
    )
}