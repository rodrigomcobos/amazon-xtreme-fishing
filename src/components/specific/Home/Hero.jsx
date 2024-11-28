import React from 'react';
import HeroVideo from '../../../assets/videos/herovideo.mp4';

const Hero = () => {
    return (
        <section className="relative h-[100dvh] sm:h-[1200px] w-full overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={HeroVideo} type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <img
                    src="/api/placeholder/1920/1200"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
            </video>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-primary/25" />
            {/* Additional top gradient for navbar area */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/80 h-32" />

            {/* Content Container */}
            <section className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-2 md:px-6 pt-24 sm:pt-0">
                <p className="text-sm sm:text-base mb-2 max-w-2xl text-center font-dmsans uppercase">
                    Catch the Ultimate Trophy
                </p>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-roxale font-bold uppercase mb-1 text-center">
                    Peacock Bass Fishing in the
                </h1>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-roxale font-bold uppercase mb-6 sm:mb-10 text-center">
                    Heart of the Amazon
                </h1>
                <section className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full max-w-lg sm:max-w-2xl justify-center px-10 sm:px-0">
                    <button className="w-full sm:w-auto ring-1 ring-white text-sm hover:bg-secondary hover:ring-1 hover:ring-fifth hover:text-fifth text-white font-normal py-3 px-8 rounded-md transition duration-500 uppercase font-dmsans">
                        Plan Your Trip
                    </button>
                    <button className="w-full sm:w-auto ring-1 ring-white text-sm hover:bg-secondary hover:ring-1 hover:ring-fifth hover:text-fifth text-white font-normal py-3 px-8 rounded-md transition duration-500 uppercase font-dmsans">
                        Explore Destinations
                    </button>
                </section>
            </section>
        </section>
    );
};

export default Hero;