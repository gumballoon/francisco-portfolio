export default function Divider ({ title, isProject=false }) {
    return (
        <div className="flex flex-col mt-16">
            <div className="w-full h-0.5 rounded-xl bg-gb-beige-500 -mb-4.5"/>
            <span className={`poppins bg-neutral-100 text-lg lg:text-xl font-semibold text-center tracking-wide border-3 border-gb-beige-500 rounded-xl px-5 mx-auto ${isProject && 'lg:mr-[17.5%] lg:ml-auto transition-all duration-300'}`}>{title}</span>
        </div>
    )
}