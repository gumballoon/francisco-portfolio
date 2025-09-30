import { useState } from 'react';
import './MenuButton.css';

export default function MenuButton({ openMenu }) {
    const [isMenuOpening, setIsMenuOpening] = useState(false);

    function handleClick() {
        setIsMenuOpening(true);
        openMenu();
        setTimeout(
            () => setIsMenuOpening(false), 600
        );
    }

    return (
        <nav className="MenuButton flex justify-end pt-15 pr-7 lg:pt-14.5 lg:pr-12 w-full h-min fixed inset-0">
            <div className={`flex flex-col gap-[0.15rem] group hover:cursor-pointer ${isMenuOpening && 'OpenMenu'}`} onClick={handleClick}>
                <div className="w-6 h-0.5 rounded-full bg-gb-navy-500 backdrop-blur-xs group-hover:w-7 transition-all duration-200"/>
                <div className="w-6 h-0.5 rounded-full bg-gb-neutral-100 backdrop-blur-xs group-hover:w-7 transition-all duration-200"/>
                <div className="w-4.5 h-0.5 rounded-full bg-gb-navy-500 ml-auto backdrop-blur-xs group-hover:w-5.5 transition-all duration-200"/>
                <div className="w-4.5 h-0.5 rounded-full bg-gb-neutral-100 ml-auto backdrop-blur-xs group-hover:w-5.5 transition-all duration-200"/>
            </div>
        </nav>
    )
}