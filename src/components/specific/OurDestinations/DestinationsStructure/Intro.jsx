import React, { useState, useEffect } from 'react';
import ZaltanaIntroImg1 from '../../../../assets/images/zaltanaintroimg1.png';
import ZaltanaIntroImg2 from '../../../../assets/images/zaltanaintroimg2.png';
import ZaltanaIntroImg3 from '../../../../assets/images/zaltanaintroimg3.png';
import ZaltanaIntroImg4 from '../../../../assets/images/zaltanaintroimg4.png';

const IntroCard = ({ title, description, backgroundImage }) => (
    <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-fifth flex-shrink-0 w-full">
        <img
            src={backgroundImage}
            alt={title}
            className="absolute w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />

        {/* Frosted glass overlay - appears on hover */}
        <div className="absolute inset-0 backdrop-blur-sm bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/0 group-hover:via-black/60 group-hover:to-black/30 transition duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <div className="flex flex-col items-center text-center space-y-3 font-dmsans">
                <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors duration-500">{title}</h3>
                <hr className='w-1/4 group-hover:w-2/3 border-t-2 border-fifth transition-all duration-300 ease-in-out' />
                <p className="text-gray-200 text-sm font-light group-hover:text-white/80 transition-colors duration-500">{description}</p>
            </div>
        </div>
    </div>
);

const Intro = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const introductionData = [
        {
            title: "IGFA Record Fishery",
            description: "Experience the ultimate fishing adventure in pristine waters, home to record-breaking catches and an unmatched variety of species.",
            image: ZaltanaIntroImg1
        },
        {
            title: "Tailored for Comfort",
            description: "Enjoy modern amenities and stunning views designed to make your stay unforgettable, blending luxury and relaxation in the heart of the Amazon.",
            image: ZaltanaIntroImg2
        },
        {
            title: "Engineered for Excellence",
            description: "Built with precision and efficiency, our destinations exemplify innovation and quality, setting a new benchmark in fishing retreats.",
            image: ZaltanaIntroImg3
        },
        {
            title: "All-Inclusive Adventure",
            description: "From gear to gourmet meals, enjoy a hassle-free journey where every detail is handled, leaving you free to focus on the thrill of fishing and exploration.",
            image: ZaltanaIntroImg4
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide((prev) => (prev + 1) % introductionData.length);
                setTimeout(() => setIsTransitioning(false), 300);
            }
        }, 4000);

        return () => clearInterval(timer);
    }, [introductionData.length, isTransitioning]);

    return (
        <div className="-mt-12 sm:-mt-28 z-10 max-w-[90%] lg:max-w-[90%] mx-auto mb-10 md:mb-10 lg:mb-10">
            {/* Mobile Slider */}
            <div className="md:hidden relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`
                        }}
                    >
                        {introductionData.map((highlight, index) => (
                            <IntroCard
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
                    {introductionData.map((_, index) => (
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
                {introductionData.map((highlight, index) => (
                    <IntroCard
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

export default Intro;