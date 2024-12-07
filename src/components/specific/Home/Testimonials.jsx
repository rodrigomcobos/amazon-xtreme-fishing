import React, { useState, useRef } from 'react';
import { MdChevronLeft, MdChevronRight, MdFormatQuote } from 'react-icons/md';
import { testimonialData } from '../../../data/TestimonialsData/Testimonials';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const minSwipeDistance = 50;

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    };

    const handleImageClick = (index) => {
        setCurrentIndex(index);
    };

    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrevious();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="w-full max-w-9xl mx-auto px-2 py-16">
            <div className="text-center mb-8 sm:mb-16">
                <h2 className="text-sm sm:text-base text-primary uppercase tracking-wider mb-2 font-dmsans">Testimonials</h2>
                <hr className='w-2/6 sm:w-[11%] mx-auto border-t-2 border-fifth mb-6' />
                <h3 className="section-title text-center italic">Past Experiences and Reviews</h3>
            </div>

            <div className="relative">
                <button
                    onClick={handlePrevious}
                    className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-fifth hover:text-white transition-colors z-30"
                    aria-label="Previous testimonial"
                >
                    <MdChevronLeft size={24} />
                </button>

                <div
                    className="flex items-center justify-center overflow-hidden touch-pan-y w-full"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="flex items-center justify-center w-full relative px-4 md:px-0">
                        {testimonialData.map((testimonial, index) => {
                            const isActive = index === currentIndex;
                            const isPrevious = (currentIndex === 0 && index === testimonialData.length - 1) ||
                                (index === currentIndex - 1);
                            const isNext = (currentIndex === testimonialData.length - 1 && index === 0) ||
                                (index === currentIndex + 1);

                            if (!isActive && !isPrevious && !isNext && window.innerWidth >= 768) return null;

                            return (
                                <div
                                    key={testimonial.id}
                                    className={`flex flex-col items-center
                                        ${isActive
                                            ? 'opacity-100 transition-opacity duration-500 ease-in-out md:w-1/3 w-full scale-100 z-20'
                                            : 'md:w-1/4 w-full opacity-0 scale-75 hidden md:flex'}
                                        ${(isPrevious || isNext)
                                            ? 'md:opacity-60 md:scale-75 cursor-pointer absolute'
                                            : ''}
                                        ${isPrevious ? 'md:left-12' : ''}
                                        ${isNext ? 'md:right-12' : ''}`}
                                    onClick={() => (isPrevious || isNext) && handleImageClick(index)}
                                >
                                    {isActive && (
                                        <div className="max-w-lg text-center mb-6 animate-fadeIn">
                                            <MdFormatQuote className="w-8 h-8 mx-auto mb-4 text-tertiary" />
                                            <p className="text-sm sm:text-base text-primary mb-4 font-dmsans font-light">{testimonial.quote}</p>
                                            <h4 className="font-bold text-lg font-roxale italic">{testimonial.name}</h4>
                                            <p className="text-tertiary font-dmsans text-sm">{testimonial.title}</p>
                                        </div>
                                    )}
                                    <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out
                                        ${isActive ? 'h-72 md:h-96 opacity-100' : 'h-48 md:h-72 opacity-0 md:opacity-60'}`}>
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-fifth hover:text-white transition-colors z-30"
                    aria-label="Next testimonial"
                >
                    <MdChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;