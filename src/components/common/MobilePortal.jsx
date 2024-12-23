import React from 'react';
import { Link } from 'react-router-dom';
import { FaXmark, FaChevronDown } from "react-icons/fa6";
import Portal from '../Portal/Portal';
import Topographic from '../../assets/images/topographicwhite.png';
import MobileMenuBanner from '../../assets/images/mobilemenubanner.png';

const MobilePortal = ({
    isOpen,
    onClose,
    menuItems,
    openAccordion,
    toggleAccordion
}) => {
    if (!isOpen) return null;

    return (
        <Portal>
            <div className='fixed inset-0 bg-primary z-[60] h-screen overflow-y-auto'>
                {/* Topographic Background */}
                <div
                    className="fixed inset-0 w-full h-full opacity-100 pointer-events-none bg-cover bg-repeat"
                    style={{
                        backgroundImage: `url(${Topographic})`,
                        mixBlendMode: 'overlay',
                    }}
                />

                {/* Main Content Wrapper */}
                <div className="min-h-screen flex flex-col relative z-10">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-white z-50"
                    >
                        <FaXmark className="w-8 h-8" />
                    </button>

                    {/* Mobile Menu Content */}
                    <nav className='pt-10 px-6 flex-1'>
                        <ul className=''>
                            <li>
                                <Link
                                    to="/"
                                    className="block py-6 text-xl font-bold text-white hover:text-tertiary transition-colors border-b border-secondary"
                                    onClick={onClose}
                                >
                                    Home
                                </Link>
                            </li>
                            {Object.entries(menuItems).map(([key, value]) => (
                                <li key={key} className="border-b border-secondary">
                                    <button
                                        onClick={() => toggleAccordion(key)}
                                        className="w-full flex justify-between items-center py-6 text-xl font-bold text-white hover:text-tertiary transition-colors"
                                    >
                                        {key}
                                        <div className={`transform transition-transform duration-300 ${openAccordion === key ? 'rotate-180' : ''
                                            }`}>
                                            <FaChevronDown className="w-5 h-5" />
                                        </div>
                                    </button>
                                    <ul
                                        className={`pl-4 transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === key
                                            ? 'max-h-fit opacity-100 pb-4'
                                            : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        {value.items.map((item, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={item.path}
                                                    className="block py-3 text-gray-300 hover:text-tertiary transition-colors"
                                                    onClick={onClose}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/contact"
                                    className="block py-6 text-xl font-bold text-white hover:text-tertiary transition-colors"
                                    onClick={onClose}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Banner */}
                    <div className="relative z-10 mt-8 mx-4 bottom-4">
                        <img
                            src={MobileMenuBanner}
                            alt="Amazon Xtreme Fishing Mobile Banner"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default MobilePortal;