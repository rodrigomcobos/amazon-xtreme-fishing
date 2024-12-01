import React, { useState } from 'react';

const OurDestinations = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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
            <ul className="flex min-h-[600px] max-h-[600px] m-0 p-0 overflow-hidden list-none bg-black">
                {destinations.map((destination, index) => (
                    <li
                        key={index}
                        className={`relative cursor-pointer transition-all duration-500 ease-in-out
                            ${activeIndex === index ? 'w-[calc(100%-320px)]' : 'w-16'}`}
                        onClick={() => setActiveIndex(index)}
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

                        {/* Content Container */}
                        <div className="relative flex w-full h-full">
                            {/* Title */}
                            {activeIndex === index ? (
                                <div className="absolute top-8 left-8 opacity-0 animate-fadeIn">
                                    <h2 className="text-white text-xl font-semibold">
                                        {destination.name}
                                    </h2>
                                </div>
                            ) : (
                                <div className="w-full flex justify-center items-center">
                                    <h2 className="text-white text-xl font-semibold whitespace-nowrap -rotate-90">
                                        {destination.name}
                                    </h2>
                                </div>
                            )}

                            {/* Description - Only visible when active */}
                            {activeIndex === index && (
                                <div className="absolute bottom-8 right-8 max-w-lg opacity-0 animate-fadeIn animation-delay-200">
                                    <p className="text-white text-lg">
                                        {destination.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            {/* Add animation keyframes */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                .animation-delay-200 {
                    animation-delay: 200ms;
                }
            `}</style>
        </>
    );
};

export default OurDestinations;