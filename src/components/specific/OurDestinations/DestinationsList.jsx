import React, { useState, useEffect, useCallback } from 'react';
import { Users, ShipWheel, Waves, Calendar, ChevronLeft, ChevronRight, Ruler, BedDouble, BadgePlus, Home, Leaf, Tent, Compass, Camera } from 'lucide-react';
import { destinationsData } from '../../../data/AllDestinationsData/AllDestinationsData';

// Map icon strings to components
const iconComponents = {
    Users, ShipWheel, Waves, Calendar, Ruler, BedDouble, BadgePlus,
    Home, Leaf, Tent, Compass, Camera
};

const DestinationCard = ({ destination }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);

    const nextImage = useCallback(() => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === destination.images.length - 1 ? 0 : prevIndex + 1
            );
            setFadeIn(true);
        }, 100);
    }, [destination.images.length]);

    const previousImage = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? destination.images.length - 1 : prevIndex - 1
            );
            setFadeIn(true);
        }, 20);
    };

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(nextImage, 5000);
        }
        return () => clearInterval(interval);
    }, [isHovered, nextImage]);

    return (
        <div className="p-4 md:p-6 mx-4 md:m-10 rounded-lg bg-white bg-gradient-to-b from-white to-tertiary/5 shadow-lg ring-1 ring-tertiary/25">
            <div className="flex flex-col md:flex-row md:gap-6">
                {/* Info Column */}
                <div className="w-full md:w-5/12 order-2 md:order-1 mt-6 md:mt-4 md:m-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tertiary mb-2 font-roxale">
                        {destination.title}
                    </h2>
                    <p className='text-gray-600 font-dmsans font-light uppercase mb-4'>
                        {destination.subtitle}
                    </p>

                    <hr className="border-gray-200 mb-6" />

                    {/* Features List */}
                    <div className="space-y-4 mb-6 font-dmsans font-light">
                        {destination.features.map((feature, index) => {
                            const Icon = iconComponents[feature.icon];
                            return (
                                <div key={index} className="flex items-center gap-3">
                                    <Icon className="w-6 md:w-7 h-6 md:h-7 text-gray-600" />
                                    <span className="text-gray-700">{feature.text}</span>
                                </div>
                            );
                        })}
                    </div>

                    <hr className="border-gray-200 mb-6" />

                    <p className="text-gray-600 mb-6 text-sm">
                        {destination.description}
                    </p>

                    <button className="btn-primary float-right mb-4 md:mb-0">
                        More Details
                    </button>
                </div>

                {/* Image Column */}
                <div className="w-full md:w-7/12 order-1 md:order-2 relative mx-auto sm:mx-6 my-0 sm:my-4 p-2 sm:p-0">
                    <div
                        className="aspect-square relative overflow-visible rounded-lg"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="w-full h-full">
                            <img
                                src={`/api/placeholder/800/800`} // Replace with actual image import
                                alt={destination.images[currentImageIndex].alt}
                                className={`w-full h-full object-cover rounded-lg transition duration-600 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={previousImage}
                            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-fifth hover:text-white p-2 md:p-3 rounded-full shadow-lg transition duration-300 border border-secondary hover:border hover:border-white"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-fifth hover:text-white p-2 md:p-3 rounded-full shadow-lg transition duration-300 border border-secondary hover:border hover:border-white"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-primary/50 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {destination.images.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DestinationsList = () => {
    return (
        <section className="max-w-9xl mx-auto my-6">
            <div className="text-center my-8 md:my-12 pt-6 md:pt-10">
                <p className="text-sm sm:text-base mb-1 mx-auto text-center font-dmsans uppercase">
                    Your Gateway to Adventure
                </p>
                <hr className='w-[20%] border-t-2 border-fifth mb-3 mx-auto' />
                <h2 className="section-title">
                    Unforgettable Fishing Destinations
                </h2>
            </div>

            {destinationsData.map((destination) => (
                <DestinationCard
                    key={destination.id}
                    destination={destination}
                />
            ))}
        </section>
    );
};

export default DestinationsList;