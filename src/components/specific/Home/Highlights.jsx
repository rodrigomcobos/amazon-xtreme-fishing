import React from 'react';
import HighlightImg1 from '../../../assets/images/highlightimg1.png';
import HighlightImg2 from '../../../assets/images/highlightimg2.png';
import HighlightImg3 from '../../../assets/images/highlightimg3.png';
import HighlightImg4 from '../../../assets/images/highlightimg4.png';

const HighlightCard = ({ title, description, backgroundImage }) => (
    <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 hover:scale-105">
        {/* Background Image */}
        <img
            src={backgroundImage}
            alt={title}
            className="absolute w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay - stronger at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/0 group-hover:via-black/60 group-hover:to-black/30 transition-colors duration-300" />

        {/* Content Container - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <div className="flex flex-col items-center text-center space-y-3 font-dmsans">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-200 text-sm">{description}</p>
            </div>
        </div>
    </div>
);

const Highlights = () => {
    const highlights = [
        {
            title: "Exclusive Locations",
            description: "Gain exclusive access to pristine fishing spots, Brazil’s national parks, and remote indigenous territories.",
            image: HighlightImg1
        },
        {
            title: "Multispecies Adventures",
            description: "Target legendary Peacock Bass, massive Catfish, and a variety of other species.",
            image: HighlightImg2
        },
        {
            title: "Expert Guides",
            description: "Expert local guides with extensive knowledge to ensure an unforgettable fishing adventure.",
            image: HighlightImg3
        },
        {
            title: "Travel Light, Fish Big",
            description: "Enjoy a seamless experience with accommodations, meals, and all fishing tackle included.",
            image: HighlightImg4
        }
    ];

    return (
        <div className="-mt-24 z-10 max-w-[90%] lg:max-w-[90%] mx-auto mb-0 md:mb-24 lg:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((highlight, index) => (
                    <HighlightCard
                        key={index}
                        title={highlight.title}
                        description={highlight.description}
                        backgroundImage={highlight.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Highlights;