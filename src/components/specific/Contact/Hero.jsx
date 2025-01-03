import React from 'react'
import HeroImg from '../../../assets/images/contactheroimg.png';

const Hero = () => {
    return (
        <section className="relative h-[60dvh] sm:h-[700px] w-full overflow-hidden">
            {/* Image Background */}
            <img
                src={HeroImg}
                alt="Hero background"
                className="absolute top-0 left-0 w-full h-full object-cover object-left"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/25" />
            {/* Additional top gradient for navbar area */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/80 h-32" />

            {/* Content Container */}
            <section className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-2 md:px-6 pt-24 sm:pt-24">
                <p className="text-sm sm:text-base mb-1 max-w-2xl text-center font-dmsans uppercase">
                    Ready to Serve You
                </p>
                <hr className='w-[40%] sm:w-[14%] border-t-2 border-fifth mb-2' />
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-roxale-calligraphy font-bold mb-1 text-center">
                    Get In Touch
                </h1>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-roxale font-bold uppercase mb-2 sm:mb-0 text-center ">
                    Let<span className='font-cormorant font-medium'>'</span>s Talk Fishing
                </h1>
                <p className="text-sm sm:text-xl mb-8 max-w-2xl text-center font-dmsans uppercase">
                    Limited Spots Available
                </p>
            </section>
        </section>
    );
};

export default Hero;