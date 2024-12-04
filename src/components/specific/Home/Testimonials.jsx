import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight, MdFormatQuote } from 'react-icons/md';
import CharlieReviewImg from '../../../assets/images/charliereviewimg.png';
import ThomasReviewImg from '../../../assets/images/thomasreviewimg.png';
import MarkReviewImg from '../../../assets/images/markreviewimg.png';

const testimonialData = [
    {
        id: 1,
        name: "Charlie Burda",
        title: "FEBRUARY 2012",
        quote: "I have been Peacock Bass fishing in Brazil 4 times with Marc. We have never had any problems or issues relating to the travels. It is a long trip getting there, but once you arrive, you are well taken care of. Marc is extremely knowledgeable of the area, the fishing and the current conditions. He has always been well prepared and made the trips enjoyable. I look forward to more trips with Marc in the future.",
        image: CharlieReviewImg,
    },
    {
        id: 2,
        name: "Thomas Pope",
        title: "JANUARY 2023",
        quote: "My first experience fishing for Peacock Bass was nothing short of extraordinary. From start to finish, the journey was smooth and well-organized, with no hiccups or complications along the way. While the trip to the Amazon is lengthy, every detail is thoughtfully planned, ensuring a stress-free and enjoyable travel experience. Once you arrive, the exceptional hospitality and attention to detail make you feel instantly at ease and ready for the adventure of a lifetime.",
        image: ThomasReviewImg,
    },
    {
        id: 3,
        name: "Mark Goodwin",
        title: "OCTOBER 2024",
        quote: "Fishing with Marc has become an annual tradition I look forward to every year. His deep expertise, passion for the sport, and knowledge of the Amazon make each trip unforgettable. From the seamless planning to the exceptional hospitality, everything is top-notch. Marc's ability to adapt to conditions and ensure the best fishing experience is unmatched. Year after year, the thrill of landing incredible Peacock Bass and the camaraderie on the water keep me coming back. It's more than a trip—it's an experience I wouldn't trade for anything.",
        image: MarkReviewImg,
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    };

    const handleImageClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="w-full max-w-9xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h2 className="text-base text-primary uppercase tracking-wider mb-2 font-dmsans">Testimonials</h2>
                <hr className='w-1/6 mx-auto border-t-2 border-fifth mb-6' />
                <h3 className="text-4xl font-bold font-roxale italic text-tertiary">Past Experiences and Reviews</h3>
            </div>

            <div className="relative flex items-center justify-center">
                <button
                    onClick={handlePrevious}
                    className="p-2 rounded-full hover:bg-fifth hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                >
                    <MdChevronLeft size={24} />
                </button>

                <div className="flex items-center justify-center">
                    {testimonialData.map((testimonial, index) => {
                        const isActive = index === currentIndex;
                        const isPrevious = (currentIndex === 0 && index === testimonialData.length - 1) ||
                            (index === currentIndex - 1);
                        const isNext = (currentIndex === testimonialData.length - 1 && index === 0) ||
                            (index === currentIndex + 1);

                        return (
                            <div
                                key={testimonial.id}
                                className={`flex flex-col items-center transition-all duration-500 w-full max-w-2xl mx-auto ${isActive ? 'opacity-100 scale-100' :
                                    (isPrevious || isNext) ? 'opacity-60 scale-75 cursor-pointer' : 'opacity-0 scale-75 hidden'
                                    }`}
                                onClick={() => (isPrevious || isNext) && handleImageClick(index)}
                            >
                                {isActive && (
                                    <div className="max-w-xl text-center mb-8">
                                        <MdFormatQuote className="w-12 h-12 mx-auto mb-4 text-tertiary" />
                                        <p className="text-sm sm:text-base text-primary mb-4 font-dmsans font-light">{testimonial.quote}</p>
                                        <h4 className="font-bold text-xl font-roxale italic">{testimonial.name}</h4>
                                        <p className="text-tertiary font-dmsans text-sm">{testimonial.title}</p>
                                    </div>
                                )}
                                <div className="w-full h-auto aspect-[4/3] overflow-hidden">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-fit h-full object-contain"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={handleNext}
                    className="p-2 rounded-full hover:bg-fifth hover:text-white transition-colors"
                    aria-label="Next testimonial"
                >
                    <MdChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;