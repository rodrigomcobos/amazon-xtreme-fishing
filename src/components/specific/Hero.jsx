import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-[1200px] w-full">
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
                <h1 className="text-6xl font-bold mb-6">
                    Welcome to Amazon Xtreme
                </h1>
                <p className="text-xl mb-8 max-w-2xl text-center">
                    Experience the ultimate fishing adventure in the heart of the Amazon
                </p>
                <button className="bg-[#007bff] hover:bg-[#0056b3] text-white font-bold py-3 px-8 rounded-md transition duration-300">
                    Book Your Adventure
                </button>
            </div>
        </section>
    );
};

export default Hero;