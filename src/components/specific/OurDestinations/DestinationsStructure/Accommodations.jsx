import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AccommodationsImg3 from '../../../../assets/images/accommodationsimg3.png';
import ZaltanaBoatImg4 from '../../../../assets/images/zaltanaboatimg4.png';
import AccommodationsImg5 from '../../../../assets/images/accommodationsimg5.png';
import ZaltanaBoatImg6 from '../../../../assets/images/zaltanaboatimg6.jpg';

import ZaltanaBoatAccommodationsImg1 from '../../../../assets/images/zaltanaboataccommodationsimg1.png';
import ZaltanaBoatAccommodationsImg2 from '../../../../assets/images/zaltanaboataccommodationsimg2.png';
import ZaltanaBoatAccommodationsImg3 from '../../../../assets/images/zaltanaboataccommodationsimg3.png';
import ZaltanaBoatAccommodationsImg4 from '../../../../assets/images/zaltanaboataccommodationsimg4.png';
import ZaltanaBoatAccommodationsImg5 from '../../../../assets/images/zaltanaboataccommodationsimg5.png';
import ZaltanaBoatAccommodationsImg6 from '../../../../assets/images/zaltanaboataccommodationsimg6.png';

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
                        <div className="uppercase text-secondary tracking-wider text-sm font-dmsans mb-3 text-center sm:text-left">
                            Your Floating Oasis Awaits
                        </div>
                        <h2 className="text-3xl sm:text-5xl tracking-tight text-tertiary font-roxale-calligraphy mb-6 text-center sm:text-left">
                            Luxury Meets Mobility in the Heart of the Amazon
                        </h2>
                        <p className="text-gray-600 text-sm font-dmsans mb-4 text-center sm:text-left">
                            Welcome aboard the Zaltana Mothership Floating Hotel, where unmatched comfort and breathtaking views create your private paradise on the water. Accommodating up to 20 guests, the Zaltana Mothership features 10 spacious, air-conditioned staterooms with full-size beds, private bathrooms with hot water, river views, ample storage, and daily maid and laundry services.
                        </p>
                        <p className="text-gray-600 text-sm font-dmsans text-center sm:text-left">
                            Relax in the beautifully crafted lounge adorned with native woodwork, or enjoy the solarium for panoramic Amazonian vistas. Unwind at the open bar under starlit skies, or savor the sights from barbecue facilities and spacious gathering areas. With its dual-hull design and shallow draft, the Zaltana Mothership ventures where others can't, combining state-of-the-art navigation with the comforts of a luxury retreat.
                        </p>
                    </div>

                    {/* Right Column - Slideshow */}
                    <div className="relative w-full overflow-hidden">
                        <div className="overflow-visible">
                            <div
                                className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 87.5}%)`,
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