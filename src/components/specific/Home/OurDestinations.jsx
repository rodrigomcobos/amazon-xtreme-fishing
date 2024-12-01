import React, { useState } from 'react';

const OurDestinations = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(null);

    const handleCardClick = (index) => {
        setPreviousIndex(activeIndex);
        setActiveIndex(index);
    };

    const destinations = [
        {
            name: "Zaltana Mothership",
            description: "Experience luxury on the water with our flagship vessel"
        },
        {
            name: "Zaltana Lodge",
            description: "Immerse yourself in nature with premium comfort"
        },
        {
            name: "EcoLodge da Barra",
            description: "Sustainable luxury in harmony with nature"
        },
        {
            name: "Xingu Reservation",
            description: "Discover the untouched beauty of Xingu"
        },
        {
            name: "Peacock Bass Expeditions",
            description: "World-class fishing adventures"
        },
        {
            name: "Galapagos Fishing",
            description: "Unique fishing experience in pristine waters"
        }
    ];

    return (
        <>
            <h2 className="text-3xl font-bold text-primary text-center py-8 font-roxale">Our Destinations</h2>
            <div className="w-full bg-black">
                <div className="flex overflow-x-auto hide-scrollbar h-[600px]">
                    {destinations.map((destination, index) => (
                        <div
                            key={index}
                            className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 h-full
                            ${activeIndex === index ? 'w-[600px]' : 'w-24'}`}
                            onClick={() => handleCardClick(index)}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={`/api/placeholder/800/1200`}
                                    alt={destination.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
                            </div>

                            {/* Vertical Title (for collapsed state) */}
                            <div className={`absolute inset-0 flex items-center justify-center
                            ${activeIndex === index ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                                <div className="transform rotate-180 whitespace-nowrap text-white text-xl font-semibold"
                                    style={{ writingMode: 'vertical-rl' }}>
                                    {destination.name}
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <div className={`absolute inset-0 p-8 flex flex-col justify-between transition-all
                                ${activeIndex === index ? 'translate-y-0 opacity-100 delay-300 duration-500' :
                                    previousIndex === index ? 'translate-y-4 opacity-0 duration-200' :
                                        'translate-y-4 opacity-0 duration-200'}`}>
                                <h3 className="text-3xl font-bold text-white">{destination.name}</h3>
                                <p className="text-white text-xl max-w-lg self-end">
                                    {destination.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom CSS for hiding scrollbar */}
                <style jsx global>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            </div>
        </>
    );
};

export default OurDestinations;