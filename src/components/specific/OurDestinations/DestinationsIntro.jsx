import React, { useState, useEffect } from 'react'
import HeroImg from '../../../assets/images/destinationsheroimg.png';
import DestinationIntroImg1 from '../../../assets/images/destinationintroimg1.png';
import DestinationIntroImg2 from '../../../assets/images/destinationintroimg2.png';
import DestinationIntroImg3 from '../../../assets/images/destinationintroimg3.png';
import DestinationIntroImg4 from '../../../assets/images/destinationintroimg4.png';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const DestinationsIntro = () => {
    const slides = [
        {
            title: "Cultural Connections in the Amazon",
            description: "Immerse yourself in the traditions of the Amazon’s indigenous communities. Experience fishing paired with cultural discovery.",
            image: DestinationIntroImg1
        },
        {
            title: "Unforgettable Group Adventures",
            description: "Share laughs and create memories with friends and family on the water. Fishing is more fun when done together!",
            image: DestinationIntroImg2
        },
        {
            title: "A Multispecies Fishing Paradise",
            description: "From the legendary Peacock Bass to massive Catfish and more, enjoy the thrill of catching a wide variety of fish species.",
            image: DestinationIntroImg3
        },
        {
            title: "All-Inclusive Fishing Adventures",
            description: "Leave the planning to us! Our trips include fishing tackle, gear, and everything you need for a worry-free experience in the Amazon.",
            image: DestinationIntroImg4
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlideIndex, setNextSlideIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToNextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setNextSlideIndex((currentSlide + 1) % slides.length);
            setTimeout(() => {
                setCurrentSlide((currentSlide + 1) % slides.length);
                setIsAnimating(false);
            }, 500);
        }
    };

    const goToPrevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setNextSlideIndex((currentSlide - 1 + slides.length) % slides.length);
            setTimeout(() => {
                setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
                setIsAnimating(false);
            }, 500);
        }
    };

    return (
        <div className="bg-tertiary px-4 py-20 mt-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:max-w-7xl max-w-7xl mx-auto">
                <div className="text-left">
                    <p className='text-base text-white uppercase font-dmsans font-light mb-4'>World Class Accommodations</p>
                    <h2 className="text-white text-3xl sm:text-5xl font-roxale italic font-bold mb-6">Have you planned your fishing trip yet <span className='font-cormorant italic font-light'>?</span></h2>
                    <p className="mb-4 text-sm text-white font-dmsans font-light">Whether you're after a premier luxury lodge, the #1 live-aboard houseboat, a private yacht, remote river expeditions, or exploratory fishing adventures, we'll help you find the perfect destination tailored to your travel needs, schedule, fishing goals, and budget. With years of hands-on experience and intimate knowledge of our regions, we provide expert guidance to create unforgettable experiences. If it's not already in our offerings, we'll customize it for you—whether it's outdoor TV shows, documentaries, research expeditions, missionary trips, or educational excursions. Even if you just want to escape on a private boat for a week, we'll turn your vision into reality.</p>
                </div>
                <div className="-mt-28 relative">
                    <div className="relative overflow-hidden rounded-lg">
                        {/* Current Slide */}
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="rounded-lg object-contain w-full h-full absolute top-0 left-0"
                            style={{
                                opacity: isAnimating ? 0 : 1,
                                transition: 'opacity 500ms ease-in-out'
                            }}
                        />
                        {/* Next Slide */}
                        <img
                            src={slides[nextSlideIndex].image}
                            alt={slides[nextSlideIndex].title}
                            className="rounded-lg object-contain w-full h-full"
                            style={{
                                opacity: isAnimating ? 1 : 0,
                                transition: 'opacity 500ms ease-in-out'
                            }}
                        />
                    </div>

                    <section className="absolute -bottom-10 left-0 right-0 bg-secondary px-6 py-4 mx-6 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="flex-1 mr-8">
                                <div className="overflow-hidden">
                                    <h3
                                        className="text-white text-xl sm:text-xl font-roxale mb-2 transition-all duration-500 ease-in-out"
                                        style={{
                                            opacity: isAnimating ? 0 : 1,
                                            transform: isAnimating ? 'translateY(20px)' : 'translateY(0)'
                                        }}
                                    >
                                        {slides[currentSlide].title}
                                    </h3>
                                </div>
                                <div className="overflow-hidden">
                                    <p
                                        className="text-white text-sm font-dmsans font-light transition-all duration-500 ease-in-out"
                                        style={{
                                            opacity: isAnimating ? 0 : 1,
                                            transform: isAnimating ? 'translateY(20px)' : 'translateY(0)'
                                        }}
                                    >
                                        {slides[currentSlide].description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={goToPrevSlide}
                                    disabled={isAnimating}
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-fifth hover:text-primary text-white transition duration-300"
                                >
                                    <GoChevronLeft className='inline-block' size={24} />
                                </button>
                                <button
                                    onClick={goToNextSlide}
                                    disabled={isAnimating}
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-fifth hover:text-primary text-white transition duration-300"
                                >
                                    <GoChevronRight className='inline-block' size={24} />
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DestinationsIntro