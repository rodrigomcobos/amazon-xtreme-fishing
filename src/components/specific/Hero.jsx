import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-[95dvh] sm:h-[1000px] w-full">
            {/* Placeholder Image */}
            <img
                src="/api/placeholder/1920/1200"
                alt="Hero background"
                className="w-full h-full object-cover"
            />

            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <p className="text-base mb-2 max-w-2xl text-center font-dmsans uppercase">
                    Catch the Ultimate Trophy
                </p>
                <h1 className="text-5xl font-roxale uppercase mb-1">
                    Peacock Bass Fishing in the
                </h1>
                <h1 className="text-7xl font-roxale font-bold uppercase mb-10">
                    Heart of the Amazon
                </h1>
                <section className="flex gap-5">
                    <button className="bg-tertiary hover:bg-secondary text-white font-bold py-3 px-8 rounded-md transition duration-300 uppercase font-dmsans">
                        Plan Your Adventure
                    </button>
                    <button className="bg-tertiary hover:bg-secondary text-white font-bold py-3 px-8 rounded-md transition duration-300 uppercase font-dmsans">
                        Learn More About Peacock Bass
                    </button>
                </section>
            </div>
        </section>
    );
};

export default Hero;