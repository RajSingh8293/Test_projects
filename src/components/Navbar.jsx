import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <nav className={`p-3  w-full fixed top-0 left-0 z-10 transition-all duration-300 ${isScrolled ? `bg-white text-white fixed` : ` bg-gray-600 text-white`}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className={` ${isScrolled ? `text-black ` : `text-white `} text-3xl font-bold `}>Test</div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
                <div className={`${isScrolled ? `text-black` : `text-white`} md:flex md:items-center ${isOpen ? 'flex flex-col gap-5 justify-center items-center absolute top-14 right-0 w-64 bg-gray-800 h-[70vh] translate-y-1' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4">
                        <li>
                            <Link to="/" className=" font-bold block px-2 py-1">Home</Link>
                        </li>
                        <li>
                            <Link to="/Shop" className=" font-bold block px-2 py-1">Shop</Link>
                        </li>
                        <li>
                            <Link to="/about" className=" font-bold block px-2 py-1">About</Link>
                        </li>
                        <li>
                            <Link to="/" className=" font-bold block px-2 py-1">Services</Link>
                        </li>
                        <li>
                            <Link to="/" className=" font-bold block px-2 py-1">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
