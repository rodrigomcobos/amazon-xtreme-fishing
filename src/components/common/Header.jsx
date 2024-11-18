import React, { useState } from 'react';
import Logo from '../../assets/logos/amazonxtremelogo.png';
import { FaPhone } from "react-icons/fa6";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = {
        'About': [
            'About Us',
            'Welcome',
            'Experience The Amazon',
            'Meet Your Host',
            'Meet Your Staff'
        ],
        'Destinations': [
            'Our Destinations',
            'The Zaltan Mothership',
            'The Zaltan Lodge',
            'Headwaters Safari Camp',
            'Peacock Bass Expeditions'
        ],
        'Experience': {
            main: [
                'Experience The Amazon',
                'Getting There',
                'Lures & Tackle',
                'Passport & Visa',
                'Travel Insurance',
                'Why Us',
                'FAQs',
                'Species'
            ],
            species: [
                'Fish Species',
                'Fish Specie...'
            ]
        },
        'Gallery': [
            'Pictures',
            'Videos'
        ]
    };

    return (
        <header className='tracking-wide relative z-50'>
            {/* Top bar */}
            <section className='py-2 bg-black text-white text-right px-10 flex items-center gap-4 justify-end'>
                <FaPhone className='text-lg' />
                <p className='text-base font-bold'>+1 (469) 995-5351</p>
                <button className="bg-zinc-600 text-white uppercase font-semibold py-2 px-4 rounded-md text-sm">
                    Check Availability
                </button>
            </section>

            {/* Main header */}
            <div className='flex flex-wrap items-center justify-between gap-4 px-4 min-h-[70px] overflow-visible'>
                <div className='relative -bottom-4'>
                    <a href="#">
                        <img src={Logo} alt="logo" className='w-48' />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:block'>
                    <ul className='flex gap-x-5 uppercase'>
                        <li className='px-3'>
                            <a href='#' className='hover:text-[#007bff] text-[#007bff] block font-bold text-[15px] py-6'>
                                Home
                            </a>
                        </li>
                        {Object.entries(menuItems).map(([key, value]) => (
                            <li key={key} className='group relative px-3'>
                                <a href='#' className='hover:text-[#007bff] text-[#333] block font-bold text-[15px] py-6'>
                                    {key}
                                </a>
                                {/* Full-width white background that appears on hover */}
                                <div className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full bg-white -z-10' />

                                {/* Full-width dropdown content */}
                                <div className='invisible group-hover:visible absolute left-1/2 -translate-x-1/2 top-full mt-0 w-full min-w-screen bg-white overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <div className='container mx-auto px-4'>
                                        {Array.isArray(value) ? (
                                            <ul className='py-8 grid grid-cols-4 gap-4'>
                                                {value.map((item, index) => (
                                                    <li key={index}>
                                                        <a href='#' className='block py-2 text-sm text-gray-700 hover:text-[#007bff]'>
                                                            {item}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className='py-8'>
                                                <ul className='grid grid-cols-4 gap-4'>
                                                    {value.main.map((item, index) => (
                                                        <li key={index} className='group/submenu relative'>
                                                            <a href='#' className='block py-2 text-sm text-gray-700 hover:text-[#007bff]'>
                                                                {item}
                                                            </a>
                                                            {item === 'Species' && (
                                                                <ul className='mt-2 space-y-2'>
                                                                    {value.species.map((species, idx) => (
                                                                        <li key={idx}>
                                                                            <a href='#' className='block py-1 text-sm text-gray-600 hover:text-[#007bff] pl-4'>
                                                                                {species}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                        <li className='px-3'>
                            <a href='#' className='hover:text-[#007bff] text-[#333] block font-bold text-[15px] py-6'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className='lg:hidden'
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320.591 320.591">
                            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                                    <a href='#' className='block px-4 py-2 text-[#007bff] font-bold'>Home</a>
                                </li>
                                {Object.entries(menuItems).map(([key, value]) => (
                                    <li key={key} className='border-b'>
                                        <div className='px-4 py-2'>
                                            <span className='font-bold text-gray-800'>{key}</span>
                                            <ul className='ml-4 mt-2'>
                                                {Array.isArray(value) ? (
                                                    value.map((item, index) => (
                                                        <li key={index}>
                                                            <a href='#' className='block py-1 text-sm text-gray-600 hover:text-[#007bff]'>
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <>
                                                        {value.main.map((item, index) => (
                                                            <li key={index}>
                                                                <a href='#' className='block py-1 text-sm text-gray-600 hover:text-[#007bff]'>
                                                                    {item}
                                                                </a>
                                                                {item === 'Species' && (
                                                                    <ul className='ml-4 mt-1'>
                                                                        {value.species.map((species, idx) => (
                                                                            <li key={idx}>
                                                                                <a href='#' className='block py-1 text-sm text-gray-600 hover:text-[#007bff]'>
                                                                                    {species}
                                                                                </a>
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
                                    <a href='#' className='block px-4 py-2 text-gray-800 font-bold'>Contact</a>
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