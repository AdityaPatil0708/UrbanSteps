import { useState, useEffect } from 'react';
import { Search, User2, ShoppingCart, Menu, X } from 'lucide-react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from '/images/logo2.png';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
            setIsVisible(true);
        }
        else if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const navbarClass = isVisible ? 'translate-y-0' : '-translate-y-full';


    const navLinkClass = ({ isActive }) => 
        isActive 
            ? 'underline underline-offset-5' 
            : 'hover:underline hover:underline-offset-5';

    
    return (
        <>
            <nav
                id="nav"
                className={`flex justify-between items-center pt-2 pb-2 bg-white fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${navbarClass} `}
            >
                <div>
                    <button className='hover:cursor-pointer pl-10'>
                        <img src={logo} alt="not found" width={60} className="md:w-20 " />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex justify-center">
                    <ul className="bg-white-800 text-black text-sm flex justify-center gap-8 pl-28">
                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/men" className={navLinkClass}>
                                Men
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/women" className={navLinkClass}>
                                Women
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>

                {/* Desktop Search & Icons */}
                <div className='hidden lg:flex gap-1 items-center'>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="focus:outline-none p-2 pl-3 pr-10 text-xs rounded-full bg-gray-100 w-35"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <Search size={20} className="hover:cursor-pointer text-gray-500" />
                        </div>
                    </div>
                    <button
                        onClick={() => navigate("/login")}
                        className="border-b-black-500 border p-1.5 pl-3 pr-3 text-sm rounded-full hover:bg-black hover:text-white hover:cursor-pointer transition duration-400 flex items-center gap-2"
                    >
                        <User2 size={16} />
                    </button>
                    <button className="border-b-black-500 border p-1.5 pl-3 pr-3 text-sm rounded-full hover:bg-black hover:text-white hover:cursor-pointer transition duration-400 flex items-center gap-2">
                        <ShoppingCart size={16} />
                    </button>
                </div>

                {/* Mobile Icons */}
                <div className='flex lg:hidden gap-2 items-center pr-4'>
                    <button className="p-2">
                        <Search size={20} />
                    </button>
                    <button className="p-2">
                        <User2 size={20} />
                    </button>
                    <button className="p-2">
                        <ShoppingCart size={20} />
                    </button>
                    <button
                        className="p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed top-[60px] left-0 right-0 bg-white z-40 lg:hidden shadow-lg text-center pr-5">
                    <ul className="flex flex-col text-black text-base p-6 gap-4">
                        <li onClick={() => setIsMobileMenuOpen(false)}>
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>
                        <li onClick={() => setIsMobileMenuOpen(false)}>
                            <NavLink to="/men" className={navLinkClass}>
                                Men
                            </NavLink>
                        </li>
                        <li onClick={() => setIsMobileMenuOpen(false)}>
                            <NavLink to="/women" className={navLinkClass}>
                                Women
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            )}
        </>
    );
}