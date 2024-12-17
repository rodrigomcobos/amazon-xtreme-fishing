import React from 'react';
import DontMissItBackgroundImg from '../../../assets/images/dontmissitbackgroundimg.png';

const DontLetItGetAway = () => {
    return (
        <section className="relative w-full">
            {/* Content Container - Moved outside of absolute positioning for mobile */}
            <div className="sm:absolute sm:inset-0 flex items-start justify-center sm:pt-16 pt-8 px-4 relative z-10">
                <div className="text-center max-w-3xl sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
                    {/* Heading Section */}
                    <p className="text-base font-dmsans text-gray-700 mb-1">
                        DON'T LET THIS ONE GET AWAY!
                    </p>
                    <hr className='w-[40%] border-t-2 border-fifth mb-4 mx-auto' />
                    <h2 className="text-6xl font-roxale text-tertiary font-bold mb-4">
                        2025 PRIME WEEKS
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 font-dmsans mb-8 max-w-2xl mx-auto">
                        The 2025 Season is filling up quick! Reach out to our committed travel team
                        for information on pricing, packages and more.
                    </p>

                    {/* CTA Button */}
                    <button className="btn-primary">
                        Book Now
                    </button>
                </div>
            </div>

            {/* Background Image with Gradient Overlay */}
            <div className="relative w-full h-[300px] sm:h-[750px] -mt-16 sm:mt-0">
                <img
                    src={DontMissItBackgroundImg}
                    alt="Don't miss out background"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/10 to-transparent"></div>
            </div>
        </section>
    );
};

export default DontLetItGetAway;