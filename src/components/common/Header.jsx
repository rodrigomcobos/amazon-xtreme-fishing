import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import MobilePortal from './MobilePortal';
import FloatingContactButtons from './FloatingContactButtons';
import { menuItems } from '../../data/HeaderData/MenuItems';
import Logo from '../../assets/logos/amazonxtremelogo.png';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openAccordion, setOpenAccordion] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const location = useLocation();

    // Control header visibility and scroll-to-top button
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                // Scroll up/down detection with threshold
                setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 200));

                // Background color change
                setIsScrolled(currentScrollY > 0);

                // Show/hide scroll-to-top button
                setShowScrollTop(currentScrollY > 200);

                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    // Handle body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleAccordion = (key) => {
        setOpenAccordion(openAccordion === key ? '' : key);
    };

    return (
        <>
            <header className={`tracking-wide fixed w-full z-50 font-dmsans transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}>
                {/* Top bar */}
                <section className='py-2 bg-primary text-white sm:px-4 px-2'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col items-center sm:items-start mx-auto sm:mx-0'>
                            <p className='text-xs font-normal uppercase'>Now Booking Reservations for Next Season</p>
                            <p className='text-xs sm:text-sm uppercase font-light tracking-wide text-fifth'>
                                Get Your Spot On The River Today
                            </p>
                        </div>

                        <div className='hidden sm:flex items-center gap-6'>
                            <p className='text-base font-normal'>
                                <FaWhatsapp size={20} className='text-base inline-block mr-2' />
                                +1 (469) 995-5351
                            </p>
                            <button className="bg-tertiary text-white uppercase font-semibold py-2 px-4 rounded-md text-sm hover:ring-2 hover:ring-fifth transition duration-500 hover:bg-secondary hover:text-fifth">
                                Book Now
                            </button>
                        </div>
                    </div>
                </section>

                {/* Main header */}
                <div className={`flex flex-wrap items-center justify-between gap-4 pl-1 sm:pl-4 pr-4 sm:pr-4 min-h-[80px] overflow-visible transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : ''
                    }`}>
                    {/* Logo */}
                    <div className={`relative -bottom-1 z-50 transition-all duration-300 ${isScrolled ? '-bottom-0' : '-bottom-5'
                        }`}>
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="logo"
                                className={`transition-all duration-300 ${isScrolled ? 'w-24 mb-2 ml-2 sm:w-30' : 'w-32 ml-2 sm:w-56'
                                    }`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden lg:block w-auto'>
                        <ul className='flex gap-x-5 uppercase'>
                            <li className='px-3 group/nav peer'>
                                <Link
                                    to="/"
                                    className={`block font-normal text-[15px] py-4 ${location.pathname === '/'
                                        ? 'text-fifth font-semibold'
                                        : isScrolled
                                            ? 'text-primary hover:text-tertiary'
                                            : 'text-white hover:text-tertiary group-hover/nav:text-primary peer-hover/dropdown:text-primary'
                                        }`}
                                >
                                    Home
                                </Link>
                            </li>
                            {Object.entries(menuItems).map(([key, value]) => (
                                <li key={key} className='group/dropdown static px-3 peer'>
                                    <span className={`block font-normal text-[15px] py-4 cursor-pointer ${isScrolled
                                        ? 'text-primary group-hover/dropdown:text-tertiary'
                                        : 'text-white group-hover/dropdown:text-tertiary group-hover/nav:text-primary peer-hover/dropdown:text-primary'
                                        }`}>
                                        {key}
                                    </span>
                                    <div className='invisible group-hover/dropdown:visible opacity-0 group-hover/dropdown:opacity-100 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-white -z-10' />
                                    <div className='invisible group-hover/dropdown:visible absolute left-0 right-0 top-full mt-0 w-full bg-white overflow-hidden opacity-0 group-hover/dropdown:opacity-100 transition-all duration-300 border-t border-gray-100'>
                                        <div className='container mx-auto px-4'>
                                            <div className='py-8 max-w-6xl mx-auto'>
                                                <div className='grid grid-cols-12 gap-12'>
                                                    <div className='col-span-4'>
                                                        <img
                                                            src={value.image}
                                                            alt={value.alt}
                                                            className="w-full h-[200px] object-cover rounded-lg"
                                                        />
                                                    </div>
                                                    <div className='col-span-8'>
                                                        <ul className='grid grid-cols-2 gap-x-12 gap-y-4 relative'>
                                                            <div className='absolute top-0 bottom-0 left-1/2 w-px bg-gray-200' />
                                                            {value.items.map((item, index) => (
                                                                <li key={index}>
                                                                    <Link
                                                                        to={item.path}
                                                                        className={`block py-2 text-sm ${location.pathname === item.path
                                                                            ? 'text-tertiary'
                                                                            : 'text-gray-700 hover:text-tertiary'
                                                                            }`}
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            <li className='px-3 group/nav peer'>
                                <Link
                                    to="/contact"
                                    className={`block font-normal text-[15px] py-4 ${location.pathname === '/contact'
                                        ? 'text-tertiary'
                                        : isScrolled
                                            ? 'text-primary hover:text-tertiary'
                                            : 'text-white hover:text-tertiary group-hover/nav:text-primary peer-hover/dropdown:text-primary'
                                        }`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320.591 320.591">
                                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            <MobilePortal
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                menuItems={menuItems}
                openAccordion={openAccordion}
                toggleAccordion={toggleAccordion}
            />

            <FloatingContactButtons
                isVisible={isVisible}
                showScrollTop={showScrollTop}
                scrollToTop={scrollToTop}
            />
        </>
    );
};

export default Header;