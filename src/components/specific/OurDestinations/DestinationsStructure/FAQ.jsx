import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const faqData = [
        {
            question: "What's the best time to book a fishing trip?",
            answer: "The prime fishing season typically runs from September through March. We recommend booking at least 6-12 months in advance to secure your preferred dates, as popular weeks tend to fill up quickly."
        },
        {
            question: "What species of fish can I expect to catch?",
            answer: "Our waters are home to a variety of prized game fish including Peacock Bass, Arowana, and various catfish species. The specific species available may vary by season and location."
        },
        {
            question: "What's included in the trip package?",
            answer: "Our All-Inclusive packages typically include lodging, meals, guided fishing, fishing equipment including rods, reels, and lures, and local transportation. International flights and personal items are not included."
        },
        {
            question: "Do I need prior fishing experience?",
            answer: "No prior experience is necessary. Our expert guides will provide instruction and support suitable for all skill levels, from beginners to experienced anglers."
        },
        {
            question: "What should I pack for the trip?",
            answer: "We recommend bringing lightweight, moisture-wicking clothing, sun protection, insect repellent, and any personal medications. A detailed packing list will be provided upon booking."
        },
        {
            question: "Are there health requirements or vaccinations needed?",
            answer: "We recommend consulting with your healthcare provider regarding vaccinations and health precautions. Some basic vaccinations may be recommended for travel to the Amazon region."
        },
        // {
        //     question: "What's your cancellation policy?",
        //     answer: "Our standard cancellation policy includes full refund for cancellations made 90 days or more before the trip date. Different terms may apply for peak season bookings."
        // },
        {
            question: "Can you accommodate dietary restrictions?",
            answer: "Yes, we can accommodate most dietary requirements and restrictions. Please inform us of any specific needs when booking so we can make appropriate arrangements."
        }
    ];

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <div className="p-4 font-dmsans my-10 sm:my-24 grid grid-cols-1 sm:grid-cols-3">
            {/* Left Column - 1/3 width */}
            <section className="relative px-4 pb-10 sm:col-span-1">
                <p className="text-sm sm:text-base mb-1 mx-auto text-left font-dmsans uppercase">
                    FAQ
                </p>
                <hr className='w-[50%] sm:w-[10%] border-t-2 border-fifth mb-3' />
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-roxale-calligraphy text-tertiary">
                    Frequently Asked Questions
                </h2>
                <button className='btn-primary mt-10'>
                    See All Questions
                </button>
            </section>

            {/* Right Column - 2/3 width */}
            <section className="max-w-7xl mx-auto sm:col-span-2 mt-10">
                {faqData.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full bg-tertiary text-fourth px-4 py-3 text-left text-lg font-semibold flex justify-between items-center rounded-lg"
                        >
                            <span className="text-sm sm:text-base">{faq.question}</span>
                            <span className="transform transition-transform duration-200 text-2xl">
                                {activeQuestion === index ?
                                    <BiChevronUp size={34} /> :
                                    <BiChevronDown size={34} />
                                }
                            </span>
                        </button>
                        <div
                            className={`transition-all duration-700 ease-in-out overflow-hidden ${activeQuestion === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="p-4 bg-gray-50 rounded-b-lg text-sm sm:text-base">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default FAQ;