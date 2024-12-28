import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ZaltanaBoatAccommodationsImg1 from '../../../../assets/images/zaltanaboataccommodationsimg1.png';
import ZaltanaBoatAccommodationsImg2 from '../../../../assets/images/zaltanaboataccommodationsimg2.png';
import ZaltanaBoatAccommodationsImg3 from '../../../../assets/images/zaltanaboataccommodationsimg3.png';
import ZaltanaBoatAccommodationsImg4 from '../../../../assets/images/zaltanaboataccommodationsimg4.png';
import ZaltanaBoatAccommodationsImg5 from '../../../../assets/images/zaltanaboataccommodationsimg5.png';
import ZaltanaBoatAccommodationsImg6 from '../../../../assets/images/zaltanaboataccommodationsimg6.png';

import BedroomIcon from '../../../../assets/images/bedroom.svg';
import FoodIcon from '../../../../assets/images/food.svg';
import SpaceIcon from '../../../../assets/images/space.svg';

const Accommodations = () => {
    const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 to allow backward transition to last slide
    const [isTransitioning, setIsTransitioning] = useState(false);

    const originalSlides = [
        { url: ZaltanaBoatAccommodationsImg1, alt: "Luxury accommodation 1" },
        { url: ZaltanaBoatAccommodationsImg2, alt: "Luxury accommodation 2" },
        { url: ZaltanaBoatAccommodationsImg3, alt: "Luxury accommodation 3" },
        { url: ZaltanaBoatAccommodationsImg4, alt: "Luxury accommodation 4" },
        { url: ZaltanaBoatAccommodationsImg5, alt: "Luxury accommodation 5" },
        { url: ZaltanaBoatAccommodationsImg6, alt: "Luxury accommodation 6" }
    ];

    // Create an array with duplicated slides for infinite effect
    // Add copies at both ends to enable smooth transitions in both directions
    const slides = [
        ...originalSlides.slice(-1),  // Add last slide at the beginning
        ...originalSlides,            // Original slides
        ...originalSlides.slice(0, 1) // Add first slide at the end
    ];

    const handleTransitionEnd = () => {
        if (currentSlide >= originalSlides.length + 1) {
            // If we've transitioned past the end, jump to the second slide (first real slide)
            setIsTransitioning(true);
            setCurrentSlide(1);
            setTimeout(() => setIsTransitioning(false), 50);
        } else if (currentSlide <= 0) {
            // If we've transitioned before the start, jump to the second-to-last slide (last real slide)
            setIsTransitioning(true);
            setCurrentSlide(originalSlides.length);
            setTimeout(() => setIsTransitioning(false), 50);
        }
    };

    const nextSlide = () => {
        if (!isTransitioning) {
            setCurrentSlide(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    return (
        <div className="w-full bg-white overflow-hidden">
            <div className="max-w-full mx-auto pl-4 py-16 sm:pl-6 lg:px-0 lg:pl-16">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-center">                    {/* Left Column - Text Content */}
                    <div className="pr-4">
                        <div className="uppercase text-secondary tracking-wider text-sm font-dmsans mb-3 text-center sm:text-right">
                            Your Floating Oasis Awaits
                        </div>
                        <h2 className="text-3xl sm:text-5xl tracking-tight text-tertiary font-roxale-calligraphy mb-6 text-center sm:text-right">
                            Luxury Meets Mobility in the Heart of the Amazon
                        </h2>
                        <p className="text-gray-600 text-sm font-dmsans mb-4 text-center sm:text-right">
                            Welcome aboard the Zaltana Mothership Floating Hotel, where unmatched comfort and breathtaking views create your private paradise on the water. Accommodating up to 20 guests, the Zaltana Mothership features 10 spacious, air-conditioned staterooms with full-size beds, private bathrooms with hot water, river views, ample storage, and daily maid and laundry services.
                        </p>
                        <p className="text-gray-600 text-sm font-dmsans text-center sm:text-right">
                            Relax in the beautifully crafted lounge adorned with native woodwork, or enjoy the solarium for panoramic Amazonian vistas. Unwind at the open bar under starlit skies, or savor the sights from barbecue facilities and spacious gathering areas. With its dual-hull design and shallow draft, the Zaltana Mothership ventures where others can't, combining state-of-the-art navigation with the comforts of a luxury retreat.
                        </p>

                        {/* Icons Section */}
                        <div className="grid grid-cols-3 gap-4 mt-10">
                            <div className="flex flex-col items-center sm:items-center">
                                <img src={BedroomIcon} alt="Bedroom" className="w-10 h-10 sm:w-12 sm:h-12 mb-2 [filter:invert(48%)_sepia(11%)_saturate(754%)_hue-rotate(77deg)_brightness(92%)_contrast(86%)]" />
                                <span className="text-base text-gray-600 font-dmsans text-center sm:text-right">20 Guests</span>
                                <span className="text-sm text-gray-600 font-dmsans text-center sm:text-right">VIP Suites</span>
                            </div>
                            <div className="flex flex-col items-center sm:items-center">
                                <img src={FoodIcon} alt="Food" className="w-10 h-10 sm:w-12 sm:h-12 mb-2 [filter:invert(48%)_sepia(11%)_saturate(754%)_hue-rotate(77deg)_brightness(92%)_contrast(86%)]" />
                                <span className="text-base text-gray-600 font-dmsans text-center sm:text-right">Full Course</span>
                                <span className="text-sm text-gray-600 font-dmsans text-center sm:text-right">Meals</span>
                            </div>
                            <div className="flex flex-col items-center sm:items-center">
                                <img src={SpaceIcon} alt="Space" className="w-10 h-10 sm:w-12 sm:h-12 mb-2 [filter:invert(48%)_sepia(11%)_saturate(754%)_hue-rotate(77deg)_brightness(92%)_contrast(86%)]" />
                                <span className="text-base text-gray-600 font-dmsans text-center sm:text-right">180sqft.</span>
                                <span className="text-sm text-gray-600 font-dmsans text-center sm:text-right">Suites</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Slideshow */}
                    <div className="relative w-full overflow-hidden">
                        <div className="overflow-visible">
                            <div
                                className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 88.5}%)`,
                                    transitionDuration: isTransitioning ? '0ms' : '500ms'
                                }}
                                onTransitionEnd={handleTransitionEnd}
                            >
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="w-[85%] flex-shrink-0 first:ml-0"
                                    >
                                        <img
                                            src={slide.url}
                                            alt={slide.alt}
                                            className="w-full h-[350px] sm:h-[600px] object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute bottom-4 left-4 flex space-x-4">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accommodations;