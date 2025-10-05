import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ openMenu }) {
    const [isMenuOpening, setIsMenuOpening] = useState(false);

    function handleClick() {
        setIsMenuOpening(true);
        openMenu();
        setTimeout(
            () => setIsMenuOpening(false), 600
        );
    }

    return (
        <nav className="Navbar bg-gb-navy-500 flex items-center justify-end py-2 px-5 xl:pr-12 w-full h-min fixed inset-0 transition-all duration-100">
            <div className={`p-3 flex flex-col justify-center items-end gap-[0.15rem] group hover:cursor-pointer ${isMenuOpening && 'OpenMenu'}`} onClick={handleClick} role='button' aria-label='open menu'>
                <div className="mb-2 w-6 h-0.5 rounded-full bg-gb-neutral-100 backdrop-blur-xs group-hover:w-7 transition-all duration-200"/>
                <div className="w-4.5 h-0.5 rounded-full bg-gb-neutral-100 ml-auto backdrop-blur-xs group-hover:w-5.5 transition-all duration-200"/>
            </div>
        </nav>
    )
}