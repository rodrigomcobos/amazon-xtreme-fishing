import React from 'react';

const HighlightCard = ({ title, description, icon: Icon, backgroundImage }) => (
    <div className="relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 hover:scale-105">
        <img src={backgroundImage} alt="" />
        <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
                backgroundImage: `url('/api/placeholder/400/300')`,
                backgroundPosition: 'center',
            }}
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />

        <div className="relative z-10 p-6 h-full">
            <div className="flex flex-col items-center text-center space-y-4">
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
            description: "Access to the Amazon's most preserved fishing spots",
        },
        {
            title: "Multispecies Adventures",
            description: "Target Peacock Bass, Catfish, and more",
        },
        {
            title: "Expert Guides",
            description: "Knowledgeable local guides to ensure your success",
        },
        {
            title: "Sustainable Fishing",
            description: "Protecting the Amazon while creating unforgettable memories",
        }
    ];

    return (
        <div className=" -mt-20 z-10 max-w-[90%] lg:max-w-[90%] mx-auto mb-0 md:mb-24 lg:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((highlight, index) => (
                    <HighlightCard
                        key={index}
                        title={highlight.title}
                        description={highlight.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Highlights;