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
            description: "The Zaltana Mothership, a 5-star floating hotel, redefines world-class fishing with unmatched luxury and innovation. Crafted to exceed the expectations of the most discerning anglers, it offers exceptional comfort, gourmet dining, and cutting-edge amenities.",
            backgroundImg: ZaltanaBoatImg,
            buttonLink: '#',
        },
        {
            name: "Zaltana Lodge",
            description: "The Zaltana Lodge, our newest destination, combines rustic charm with modern comfort, offering anglers a unique Amazon experience. Set in untouched rainforest, it features cozy accommodations, expert guides, and access to exceptional fishing waters.",
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
            description: "Experience the Xingu Indigenous Reservation, where exceptional fishing meets authentic cultural immersion. Sleep under the stars in comfortable native accommodations, fish in pristine waters, and connect with the rich traditions of the local indigenous tribes.",
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
            description: "Galapagos Fishing offers an unparalleled adventure in one of the world's most unique ecosystems. Our newest destination combines stunning island scenery with exceptional fishing opportunities, targeting species like tuna, marlin, and more. With expert guides, comfortable accommodations, and endless exploration, a once-in-a-lifetime experience.",
            backgroundImg: GalapagosFishingImg,
            buttonLink: '#',
        }
    ];

    return (
        <section className='my-2 sm:my-14'>
            <h2 className="text-3xl font-bold text-tertiary text-center py-8 font-roxale">Experience Packages</h2>

            <ul className="flex flex-row md:min-h-[750px] md:max-h-[750px] m-0 p-0 overflow-hidden list-none bg-black 
                          max-md:flex-col max-md:min-h-fit max-md:h-fit">
                {destinations.map((destination, index) => (
                    <li
                        key={index}
                        className={`relative cursor-pointer transition-all duration-500 ease-in-out
                            ${activeIndex === index
                                ? 'md:w-[calc(100%-320px)] max-md:h-[calc(100vh-400px)]'
                                : 'md:w-16 max-md:h-16'}
                            max-md:w-full max-md:last:mb-0`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className="absolute inset-0">
                            <img
                                src={destination.backgroundImg}
                                alt={destination.name}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 transition-all duration-500
                                ${activeIndex === index
                                    ? 'bg-gradient-to-t from-black/75 to-black/50 sm:bg-gradient-to-t sm:from-black/75 sm:to-black/20'
                                    : 'backdrop-blur-md bg-black/40'}`}
                            />
                        </div>

                        <div className="relative flex w-full h-full">
                            {activeIndex === index ? (
                                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 opacity-0 animate-fadeIn">
                                    <h2 className="text-white text-xl sm:text-2xl font-roxale uppercase font-bold">
                                        {destination.name}
                                    </h2>
                                    <hr className='w-full border-t-2 border-fifth mt-2' />
                                </div>
                            ) : (
                                <div className="w-full flex justify-center items-center py-4 md:py-0">
                                    <h2 className="text-white text-xl font-normal whitespace-nowrap uppercase font-dmsans
                                                 md:-rotate-90 max-md:rotate-0">
                                        {destination.name}
                                    </h2>
                                </div>
                            )}

                            {activeIndex === index && (
                                <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 left-4 sm:left-auto max-w-lg opacity-0 animate-fadeIn animation-delay-200">
                                    <p className="text-white text-base font-light font-dmsans sm:ml-0 text-left mt-20 sm:mt-0">
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