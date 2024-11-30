import React, { useState, useEffect } from 'react'
import AccommodationsImg1 from '../../../assets/images/accommodationsimg1.png';
import AccommodationsImg2 from '../../../assets/images/accommodationsimg2.png';
import AccommodationsImg3 from '../../../assets/images/accommodationsimg3.png';
import AccommodationsImg4 from '../../../assets/images/accommodationsimg4.png';
import AccommodationsImg5 from '../../../assets/images/accommodationsimg5.png';

const Accommodations = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const images = [
        AccommodationsImg1,
        AccommodationsImg2,
        AccommodationsImg3,
        AccommodationsImg4,
        AccommodationsImg5
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide((prev) => (prev + 1) % images.length);
                setTimeout(() => setIsTransitioning(false), 500);
            }
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [images.length, isTransitioning]);

    return (
        <section className="relative mb-8 sm:mb-16">
            {/* Full-width image container with overlay */}
            <div className="w-full h-[350px] sm:h-[500px] bg-gray-200 relative border-t-8 border-tertiary overflow-hidden">
                {/* Images */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Amazon Accommodations ${index + 1}`}
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                ))}
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Overlapping white container */}
            <div className="relative max-w-[90%] lg:max-w-[90%] mx-auto -mt-24 bg-white rounded-lg shadow-lg p-8 md:p-12">
                {/* Indicators */}
                <div className="absolute -top-5 left-0 right-0 flex justify-center gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-fifth w-4' : 'bg-white'
                                }`}
                        />
                    ))}
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    {/* Section Title */}
                    <h2 className="text-sm sm:text-base mb-2 max-w-2xl mx-auto text-center font-dmsans uppercase">
                        Accommodations
                    </h2>

                    <hr className='w-1/4 border-t-2 border-fifth mx-auto mb-4' />

                    {/* Section Headline */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-prumary mb-6 font-roxale">
                        <span className='font-roxale italic text-tertiary'>All Inclusive Amenities at the World<span className='font-dmsans font-light'>'</span>s</span><br />
                        BEST FISHING DESTINATION IN THE AMAZON
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-sm md:text-sm leading-relaxed font-dmsans font-light">
                        At Amazon Xtreme Fishing, we offer a range of accommodations and destination options to suit every preference. Choose from our luxurious 5-star mothership, The Zaltan, the laid-back comfort of a lodge, the serene escape of Headwaters Safari Camp, or the exclusivity of Peacock Bass Expeditions. Whether you're traveling solo, with a small group, or organizing a corporate retreat, each experience is set deep in the heart of the untouched Amazon Rainforest.
                    </p>
                    <button className="w-full mt-10 sm:w-auto ring-1 ring-primary text-sm hover:bg-secondary hover:ring-1 hover:ring-fifth hover:text-fifth text-pri mary font-normal py-3 px-8 rounded-md transition duration-500 uppercase font-dmsans">
                        Explore More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Accommodations