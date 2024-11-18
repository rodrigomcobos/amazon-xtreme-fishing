import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logos/amazonxtremelogo.png';
import Placeholder from '../../assets/images/placeholder.png';
import { FaPhone } from "react-icons/fa6";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = {
        'About': [
            { name: 'About Us', path: '/about-us' },
            { name: 'Welcome', path: '/welcome' },
            { name: 'Experience The Amazon', path: '/experience-the-amazon' },
            { name: 'Meet Your Host', path: '/meet-your-host' },
        ],
        'Destinations': [
            { name: 'Our Destinations', path: '/destinations' },
            { name: 'The Zaltan Mothership', path: '/zaltan-mothership' },
            { name: 'The Zaltan Lodge', path: '/zaltan-lodge' },
            { name: 'Headwaters Safari Camp', path: '/headwaters-camp' },
            { name: 'Peacock Bass Expeditions', path: '/peacock-bass-expeditions' }
        ],
        'Experience': [
            { name: 'Experience The Amazon', path: '/experience' },
            { name: 'Getting There', path: '/getting-there' },
            { name: 'Lures & Tackle', path: '/lures-and-tackle' },
            { name: 'Passport & Visa', path: '/passport-and-visa' },
            { name: 'Travel Insurance', path: '/travel-insurance' },
            { name: 'Why Us', path: '/why-us' },
            { name: 'FAQs', path: '/faq' },
        ],
        'Species': [
            { name: 'All Fish Species', path: '/species' },
            { name: 'Peacock Bass', path: '/species/peacock-bass' },
            { name: 'Red Tail Catfish', path: '/species/red-tail-catfish' },
            { name: 'Goliath Catfish', path: '/species/goliath-catfish' },
            { name: 'Arapaima', path: '/species/arapaima' },
            { name: 'Piranha Species', path: '/species/piranha' },
            { name: 'Traira', path: '/species/traira' },
            { name: 'Arowana', path: '/species/arowana' },
            { name: 'Payara', path: '/species/payara' },
            { name: 'Giant Oscar', path: '/species/giant-oscar' },
            { name: 'Needle Jaw', path: '/species/needle-jaw' },
            { name: 'Aracu', path: '/species/aracu' },
            { name: 'Pacu', path: '/species/pacu' },
            { name: 'Bodo', path: '/species/bodo' },
            { name: 'Sorubim', path: '/species/sorubim' },
            { name: 'Tambaqui', path: '/species/tambaqui' },
        ],
        'Gallery': [
            { name: 'Pictures', path: '/pictures' },
            { name: 'Videos', path: '/videos' }
        ]
    };

    return (
        <header className='tracking-wide fixed w-full z-50'>
            {/* Top bar */}
            <section className='py-2 bg-primary text-white text-right px-4 flex items-center gap-4 justify-end'>
                <FaPhone className='text-lg' />
                <p className='text-base font-bold'>+1 (469) 995-5351</p>
                <button className="bg-tertiary text-white uppercase font-semibold py-2 px-4 rounded-md text-sm">
                    Check Availability
                </button>
            </section>

            {/* Main header */}
            <div className={`flex flex-wrap items-center justify-between gap-4 px-4 min-h-[70px] overflow-visible transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : ''}`}>
                <div className='relative -bottom-4 z-50'>
                    <Link to="/">
                        <img src={Logo} alt="logo" className='w-48' />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:block w-auto'>
                    <ul className='flex gap-x-5 uppercase'>
                        <li className='px-3'>
                            <Link
                                to="/"
                                className={`block font-bold text-[15px] py-4 ${location.pathname === '/' ? 'text-tertiary' : 'text-white hover:text-tertiary'
                                    }`}
                            >
                                Home
                            </Link>
                        </li>
                        {Object.entries(menuItems).map(([key, value]) => (
                            <li key={key} className='group static px-3'>
                                <span className='hover:text-tertiary text-white block font-bold text-[15px] py-4 cursor-pointer'>
                                    {key}
                                </span>
                                {/* Full-width white background that appears on hover */}
                                <div className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 left-0 w-full h-full bg-white -z-10' />

                                {/* Full-width dropdown content */}
                                <div className='invisible group-hover:visible absolute left-0 right-0 top-full mt-0 w-full bg-white overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 border-t border-gray-100'>
                                    <div className='container mx-auto px-4'>
                                        {Array.isArray(value) ? (
                                            <div className='py-8 max-w-6xl mx-auto'>
                                                <div className='grid grid-cols-12 gap-8'>
                                                    {/* Image Column */}
                                                    <div className='col-span-4'>
                                                        <img
                                                            src={Placeholder}
                                                            alt="Category Image"
                                                            className="w-full h-[200px] object-cover rounded-lg"
                                                        />
                                                    </div>

                                                    {/* Links Section - Split into two columns */}
                                                    <div className='col-span-8'>
                                                        <div className='grid grid-cols-2 gap-x-12 gap-y-4 relative'>
                                                            {/* Divider line */}
                                                            <div className='absolute top-0 bottom-0 left-1/2 w-px bg-gray-200' />

                                                            {value.map((item, index) => (
                                                                <li key={index} className='list-none'>
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='py-8 max-w-6xl mx-auto'>
                                                <div className='grid grid-cols-12 gap-8'>
                                                    {/* Image Column */}
                                                    <div className='col-span-4'>
                                                        <img
                                                            src={Placeholder}
                                                            alt="Category Image"
                                                            className="w-full h-[200px] object-cover rounded-lg"
                                                        />
                                                    </div>

                                                    {/* Links Section - Split into two columns */}
                                                    <div className='col-span-8'>
                                                        <div className='grid grid-cols-2 gap-x-12 gap-y-4 relative'>
                                                            {/* Divider line */}
                                                            <div className='absolute top-0 bottom-0 left-1/2 w-px bg-gray-200' />

                                                            {value.main.map((item, index) => (
                                                                <li key={index} className='list-none group/submenu relative'>
                                                                    <Link
                                                                        to={item.path}
                                                                        className={`block py-2 text-sm ${location.pathname === item.path
                                                                            ? 'text-tertiary'
                                                                            : 'text-gray-700 hover:text-tertiary'
                                                                            }`}
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                    {item.name === 'Species' && (
                                                                        <ul className='mt-2 space-y-2 pl-4'>
                                                                            {value.species.map((species, idx) => (
                                                                                <li key={idx}>
                                                                                    <Link
                                                                                        to={species.path}
                                                                                        className={`block py-1 text-sm ${location.pathname === species.path
                                                                                            ? 'text-tertiary'
                                                                                            : 'text-gray-600 hover:text-tertiary'
                                                                                            }`}
                                                                                    >
                                                                                        {species.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                        <li className='px-3'>
                            <Link
                                to="/contact"
                                className={`block font-bold text-[15px] py-4 ${location.pathname === '/contact' ? 'text-tertiary' : 'text-white hover:text-tertiary'
                                    }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className='lg:hidden'
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 320.591 320.591">
                            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50'>
                        <div className='bg-white w-64 h-full overflow-y-auto'>
                            <ul className='py-4'>
                                <li className='border-b'>
                                    <Link
                                        to="/"
                                        className={`block px-4 py-2 font-bold ${location.pathname === '/' ? 'text-tertiary' : 'text-gray-800'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                {Object.entries(menuItems).map(([key, value]) => (
                                    <li key={key} className='border-b'>
                                        <div className='px-4 py-2'>
                                            <span className='font-bold text-gray-800'>{key}</span>
                                            <ul className='ml-4 mt-2'>
                                                {Array.isArray(value) ? (
                                                    value.map((item, index) => (
                                                        <li key={index}>
                                                            <Link
                                                                to={item.path}
                                                                className={`block py-1 text-sm ${location.pathname === item.path ? 'text-tertiary' : 'text-gray-600 hover:text-tertiary'
                                                                    }`}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <>
                                                        {value.main.map((item, index) => (
                                                            <li key={index}>
                                                                <Link
                                                                    to={item.path}
                                                                    className={`block py-1 text-sm ${location.pathname === item.path ? 'text-tertiary' : 'text-gray-600 hover:text-tertiary'
                                                                        }`}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                                {item.name === 'Species' && (
                                                                    <ul className='ml-4 mt-1'>
                                                                        {value.species.map((species, idx) => (
                                                                            <li key={idx}>
                                                                                <Link
                                                                                    to={species.path}
                                                                                    className={`block py-1 text-sm ${location.pathname === species.path ? 'text-tertiary' : 'text-gray-600 hover:text-tertiary'
                                                                                        }`}
                                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                                >
                                                                                    {species.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </>
                                                )}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                                <li className='border-b'>
                                    <Link
                                        to="/contact"
                                        className={`block px-4 py-2 font-bold ${location.pathname === '/contact' ? 'text-tertiary' : 'text-gray-800'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;