import React from 'react';
import { FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa6";

const FloatingContactButtons = ({ isVisible, showScrollTop, scrollToTop }) => {
    return (
        <>
            {/* Floating Contact Buttons - Only visible on mobile */}
            <div className={`fixed bottom-4 right-4 flex flex-col gap-3 lg:hidden z-50 transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-32'
                }`}>
                {/* Email Button */}
                <a
                    href="mailto:info@amazonxtremefishing.com"
                    className="bg-tertiary hover:bg-secondary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    aria-label="Send us an email"
                >
                    <FaEnvelope size={24} />
                </a>

                {/* Phone Button */}
                <a
                    href="tel:+14699955351"
                    className="bg-tertiary hover:bg-secondary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    aria-label="Call us"
                >
                    <FaWhatsapp size={24} />
                </a>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-4 left-4 bg-tertiary hover:bg-secondary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    }`}
                aria-label="Scroll to top"
            >
                <FaArrowUp size={24} />
            </button>
        </>
    );
};

export default FloatingContactButtons;