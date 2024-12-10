import React, { useState, useEffect, useCallback } from 'react';
import { Users, ShipWheel, Waves, Calendar, ChevronLeft, ChevronRight, Ruler, BedDouble, BadgePlus } from 'lucide-react';
import ZaltanaBoatImg1 from '../../../assets/images/zaltanaboatimg1.jpg';
import ZaltanaBoatImg2 from '../../../assets/images/zaltanaboatimg2.jpg';
import ZaltanaBoatImg3 from '../../../assets/images/zaltanaboatimg3.jpg';
import ZaltanaBoatImg4 from '../../../assets/images/zaltanaboatimg4.png';
import ZaltanaBoatImg5 from '../../../assets/images/zaltanaboatimg5.png';
import ZaltanaBoatImg6 from '../../../assets/images/zaltanaboatimg6.jpg';
import ZaltanaBoatImg7 from '../../../assets/images/zaltanaboatimg7.jpg';

const DestinationsList = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);

    const images = [
        { src: ZaltanaBoatImg1, alt: "Zaltana Boat View 1" },
        { src: ZaltanaBoatImg2, alt: "Zaltana Boat View 2" },
        { src: ZaltanaBoatImg3, alt: "Zaltana Boat View 3" },
        { src: ZaltanaBoatImg4, alt: "Zaltana Boat View 4" },
        { src: ZaltanaBoatImg5, alt: "Zaltana Boat View 5" },
        { src: ZaltanaBoatImg6, alt: "Zaltana Boat View 6" },
        { src: ZaltanaBoatImg7, alt: "Zaltana Boat View 7" },
    ];

    const nextImage = useCallback(() => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setFadeIn(true);
        }, 100);
    }, [images.length]);

    const previousImage = () => {
        setFadeIn(false);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setFadeIn(true);
        }, 20);
    };

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                nextImage();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isHovered, nextImage]);

    return (
        <section className="w-full my-6">
            {/* Section Header */}
            <div className="text-center my-8 md:my-12 pt-6 md:pt-10">
                <h2 className="section-title">
                    All Destinations
                </h2>
            </div>

            <div className="p-4 md:p-6 mx-4 md:m-10 rounded-lg bg-white bg-gradient-to-b from-white to-tertiary/5 shadow-lg">
                <div className="flex flex-col md:flex-row md:gap-6">
                    {/* Info Column */}
                    <div className="w-full md:w-5/12 order-2 md:order-1 mt-6 md:mt-0 md:m-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tertiary mb-2 font-roxale">
                            The Zaltana Mothership
                        </h2>
                        <p className='text-gray-600 font-dmsans font-light uppercase mb-4'>
                            onboard Brazil's #1 Luxury Floating Hotel
                        </p>

                        <hr className="border-gray-200 mb-6" />

                        {/* Description List */}
                        <div className="space-y-4 mb-6 font-dmsans font-light">
                            <div className="flex items-center gap-3">
                                <Users className="w-6 md:w-7 h-6 md:h-7 text-gray-600" />
                                <span className="text-gray-700">16-20 Anglers Per Group</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <ShipWheel className="w-6 md:w-7 h-6 md:h-7 text-gray-600" />
                                <span className="text-gray-700">10 fully equipped bass boats</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Ruler className="w-6 md:w-7 h-6 md:h-7 text-gray-600" />
                                <span className="text-gray-700">VIP - 180sf Suites</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <BedDouble className="w-6 md:w-7 h-6 md:h-7 text-gray-600" />
                                <span className="text-gray-700">Double Occupancy</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Waves className="w-6 md:w-7 h-6 md:h-7 text-gray-600" />
                                <span className="text-gray-700">Located on Rio Negro Tributaries</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Calendar className="w-6 md:w-7 h-6 md:h-7 text-gray-600" />
                                <span className="text-gray-700">7-Nights, 6-Full Days of Fishing</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <BadgePlus className="w-6 md:w-7 h-6 md:h-7 text-gray-600" />
                                <span className="text-gray-700">Ask about Private Charters, Single, Couples, Groups & Family Pkgs</span>
                            </div>
                        </div>

                        <hr className="border-gray-200 mb-6" />

                        <p className="text-gray-600 mb-6">
                            Experience world-class peacock bass fishing in the heart of the Amazon.
                            Our exclusive lodge provides premium accommodations and expert guides
                            to ensure an unforgettable fishing adventure. With access to pristine
                            waters and state-of-the-art equipment, you'll have the best chance to
                            catch trophy peacock bass.
                        </p>

                        <button className="btn-primary float-right mb-4 md:mb-0">
                            More Details
                        </button>
                    </div>

                    {/* Image Column */}
                    <div className="w-full md:w-7/12 order-1 md:order-2 relative mx-0 sm:mx-6">
                        <div
                            className="aspect-square relative overflow-visible rounded-lg"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="w-full h-full">
                                <img
                                    src={images[currentImageIndex].src}
                                    alt={images[currentImageIndex].alt}
                                    className={`w-full h-full object-cover rounded-lg transition duration-600 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={previousImage}
                                className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-fifth hover:text-white p-2 md:p-3 rounded-full shadow-lg transition duration-300 border border-secondary"
                            >
                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-fifth hover:text-white p-2 md:p-3 rounded-full shadow-lg transition duration-300 border border-secondary"
                            >
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 right-4 bg-primary/50 text-white px-3 py-1 rounded-full text-sm">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationsList;