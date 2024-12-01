import React, { useState } from 'react';
import ZaltanaBoatImg from '../../../assets/images/zaltanaboat.png';
import ZaltanaLodgeImg from '../../../assets/images/zaltanalodge.png';
import EcolodgeImg from '../../../assets/images/ecolodge.png';
import XinguReservationImg from '../../../assets/images/xingureservation.png';
import PeacockBassExpeditionsImg from '../../../assets/images/peacockbassexpeditions.png';
import GalapagosFishingImg from '../../../assets/images/galapagos.png';

const OurDestinations = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const destinations = [
        {
            name: "Zaltana Mothership",
            description: "The Zaltan, a 5-star floating hotel, redefines world-class fishing. Designed to meet the expectations of the most discerning anglers, it delivers an unparalleled Peacock Bass fishing experience in the heart of a new frontier.",
            backgroundImg: ZaltanaBoatImg,
            buttonLink: '#',
        },
        {
            name: "Zaltana Lodge",
            description: "The Zaltana Lodge, our newest destination, combines rustic charm with modern comfort, offering anglers a unique Amazon experience. Set in untouched rainforest, it features cozy accommodations, expert guides, and access to exceptional fishing waters. Perfect for families, private groups, or passionate anglers seeking adventure and unforgettable memories.",
            backgroundImg: ZaltanaLodgeImg,
            buttonLink: '#',
        },
        {
            name: "EcoLodge da Barra",
            description: "The Ecolodge is uniquely situated at the tri-border of Amazonas, Mato Grosso, and Pará states. Here, the Juruena and Teles-Pires rivers merge to form the crystal-clear Tapajós River. One of our greatest advantages is year-round fishing, made possible by this exceptional location.",
            backgroundImg: EcolodgeImg,
            buttonLink: '#',
        },
        {
            name: "Xingu Reservation",
            description: "Experience the Xingu Indigenous Reservation, where exceptional fishing meets authentic cultural immersion. Sleep under the stars in comfortable native accommodations, fish in pristine waters, and connect with the rich traditions of the local indigenous tribes. Guided by native experts, this adventure offers an unparalleled glimpse into the true heart of the Amazon.",
            backgroundImg: XinguReservationImg,
            buttonLink: '#',
        },
        {
            name: "Peacock Bass Expeditions",
            description: "Designed for passionate anglers, this adventure offers cozy accommodations with a touch of excitement. Equipped with smaller fishing boats, exploring remote fishing spots is effortless. Perfect for private groups, family trips, or fishing friends.",
            backgroundImg: PeacockBassExpeditionsImg,
            buttonLink: '#',
        },
        {
            name: "Galapagos Fishing",
            description: "Galapagos Fishing offers an unparalleled adventure in one of the world's most unique ecosystems. Our newest destination combines stunning island scenery with exceptional fishing opportunities, targeting species like tuna, marlin, and more. With expert guides, comfortable accommodations, and endless exploration, it's perfect for anglers, families, and groups seeking a once-in-a-lifetime experience.",
            backgroundImg: GalapagosFishingImg,
            buttonLink: '#',
        }
    ];

    return (
        <section className='my-14'>
            <h2 className="text-3xl font-bold text-tertiary text-center py-8 font-roxale">Our Destinations</h2>
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
                                src={destination.backgroundImg}
                                alt={destination.name}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 transition-all duration-500
                                ${activeIndex === index
                                    ? 'bg-gradient-to-b from-black/70 to-black/30'
                                    : 'backdrop-blur-md bg-black/40'}`}
                            />
                        </div>

                        {/* Content Container */}
                        <div className="relative flex w-full h-full">
                            {/* Title */}
                            {activeIndex === index ? (
                                <div className="absolute top-8 left-8 opacity-0 animate-fadeIn">
                                    <h2 className="text-white text-xl font-normal font-dmsans uppercase">
                                        {destination.name}
                                    </h2>
                                    <hr className='w-full border-t-2 border-fifth mt-2' />
                                </div>
                            ) : (
                                <div className="w-full flex justify-center items-center">
                                    <h2 className="text-white text-xl font-normal whitespace-nowrap -rotate-90 uppercase font-dmsans">
                                        {destination.name}
                                    </h2>
                                </div>
                            )}

                            {/* Description - Only visible when active */}
                            {activeIndex === index && (
                                <div className="absolute bottom-8 right-8 max-w-lg opacity-0 animate-fadeIn animation-delay-200">
                                    <p className="text-white text-base font-light font-dmsans">
                                        {destination.description}
                                    </p>
                                    <div className="flex justify-end mt-4">
                                        <button className="btn-white">
                                            Learn More
                                        </button>
                                    </div>
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
        </section>
    );
};

export default OurDestinations;