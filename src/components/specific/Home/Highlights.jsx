import React, { useState, useEffect } from 'react';
import HighlightImg1 from '../../../assets/images/highlightimg1.png';
import HighlightImg2 from '../../../assets/images/highlightimg2.png';
import HighlightImg3 from '../../../assets/images/highlightimg3.png';
import HighlightImg4 from '../../../assets/images/highlightimg4.png';

const HighlightCard = ({ title, description, backgroundImage }) => (
    <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-fifth flex-shrink-0 w-full">
        <img
            src={backgroundImage}
            alt={title}
            className="absolute w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/0 group-hover:via-black/60 group-hover:to-black/30 transition duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <div className="flex flex-col items-center text-center space-y-3 font-dmsans">
                <h3 className="text-xl font-medium text-white">{title}</h3>
                <hr className='w-1/4 group-hover:w-2/3 border-t-2 border-fifth transition-all duration-300 ease-in-out' />
                <p className="text-gray-200 text-sm">{description}</p>
            </div>
        </div>
    </div>
);

const Highlights = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const highlights = [
        {
            title: "Exclusive Locations",
            description: "Gain exclusive access to fishing spots, Brazil's national parks, and remote indigenous lands.",
            image: HighlightImg1
        },
        {
            title: "Multispecies Adventures",
            description: "Target legendary Peacock Bass, massive Catfish, and a variety of other species.",
            image: HighlightImg2
        },
        {
            title: "Expert Guides",
            description: "Expert local guides with extensive knowledge to ensure an unforgettable fishing adventure.",
            image: HighlightImg3
        },
        {
            title: "Travel Light, Fish Big",
            description: "Enjoy a seamless experience with accommodations, meals, and all fishing tackle included.",
            image: HighlightImg4
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide((prev) => (prev + 1) % highlights.length);
                setTimeout(() => setIsTransitioning(false), 300);
            }
        }, 4000);

        return () => clearInterval(timer);
    }, [highlights.length, isTransitioning]);

    return (
        <div className="-mt-12 sm:-mt-24 z-10 max-w-[90%] lg:max-w-[90%] mx-auto mb-14 md:mb-24 lg:mb-24">
            {/* Mobile Slider */}
            <div className="md:hidden relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`
                        }}
                    >
                        {highlights.map((highlight, index) => (
                            <HighlightCard
                                key={index}
                                title={highlight.title}
                                description={highlight.description}
                                backgroundImage={highlight.image}
                            />
                        ))}
                    </div>
                </div>

                {/* Dots indicator */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 mt-4">
                    {highlights.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-fifth w-4' : 'bg-gray-400'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((highlight, index) => (
                    <HighlightCard
                        key={index}
                        title={highlight.title}
                        description={highlight.description}
                        backgroundImage={highlight.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Highlights;