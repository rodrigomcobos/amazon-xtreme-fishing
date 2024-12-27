import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AccommodationsImg3 from '../../../../assets/images/accommodationsimg3.png';
import ZaltanaBoatImg4 from '../../../../assets/images/zaltanaboatimg4.png';
import AccommodationsImg5 from '../../../../assets/images/accommodationsimg5.png';
import ZaltanaBoatImg6 from '../../../../assets/images/zaltanaboatimg6.jpg';

const Accommodations = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { url: AccommodationsImg3, alt: "Luxury accommodation 1" },
        { url: ZaltanaBoatImg4, alt: "Luxury accommodation 2" },
        { url: AccommodationsImg5, alt: "Luxury accommodation 3" },
        { url: ZaltanaBoatImg6, alt: "Luxury accommodation 4" },
        { url: AccommodationsImg5, alt: "Luxury accommodation 5" }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 2 <= slides.length - 1 ? prev + 2 : 0));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 2 >= 0 ? prev - 2 : slides.length - 2));
    };

    return (
        <div className="w-full bg-white">
            <div className="max-w-9xl mx-auto px-4 py-16 sm:px-6 lg:px-0 lg:pl-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="">
                        <div className="uppercase text-secondary tracking-wider text-sm font-dmsans mb-2">
                            Your Floating Oasis Awaits
                        </div>
                        <h2 className="text-5xl tracking-tight text-tertiary font-roxale-calligraphy mb-6">
                            Luxury Meets Mobility in the Heart of the Amazon
                        </h2>
                        <p className="text-gray-600 text-sm font-dmsans">
                            Welcome aboard the Zaltan Floating Hotel, where unmatched comfort and breathtaking views create your private paradise on the water. Accommodating up to 20 guests, the Zaltan features 10 spacious, air-conditioned staterooms with full-size beds, private bathrooms with hot water, river views, ample storage, and daily maid and laundry services.
                        </p>
                        <p className="text-gray-600 text-sm font-dmsans">
                            Relax in the beautifully crafted lounge adorned with native woodwork, or enjoy the solarium for panoramic Amazonian vistas. Unwind at the open bar under starlit skies, or savor the sights from barbecue facilities and spacious gathering areas. With its dual-hull design and shallow draft, the Zaltan ventures where others can’t, combining state-of-the-art navigation with the comforts of a luxury retreat.
                        </p>
                    </div>

                    {/* Right Column - Slideshow */}
                    <div className="relative overflow-visible">
                        <div className="overflow-hidden">
                            <div
                                className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 50}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="w-[80%] flex-shrink-0"
                                    >
                                        <img
                                            src={slide.url}
                                            alt={slide.alt}
                                            className="w-full h-full object-cover"
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