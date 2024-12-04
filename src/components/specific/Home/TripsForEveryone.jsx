import React, { useState } from 'react';
import TailoredForYouImg from '../../../assets/images/tailoredforyouimg1.png';
import TailoredForYouImg2 from '../../../assets/images/tailoredforyouimg2.png';
import TailoredForYouImg3 from '../../../assets/images/tailoredforyouimg3.png';

const TripCard = ({ title, description, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="group relative overflow-hidden rounded-lg shadow-lg hover:ring-2 hover:ring-fifth transition duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* Image container with fixed aspect ratio */}
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Frosted glass overlay - now visible on both mobile and desktop */}
                <div className={`absolute inset-0 backdrop-blur-sm bg-white/10 transition-opacity duration-500
                    md:opacity-0 md:group-hover:opacity-100
                    ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/0 transition duration-500
                    md:group-hover:via-black/60 md:group-hover:to-black/30
                    ${isExpanded ? 'via-black/60 to-black/30' : ''}`}
                />
            </div>

            {/* Content */}
            <div className={`absolute inset-0 flex flex-col justify-center md:justify-end p-6 transition-all duration-500
                ${isExpanded ? 'justify-end' : 'justify-center'}`}>
                <div className="text-center">
                    <h3 className={`text-xl font-medium text-white font-dmsans transition-all duration-500
                        md:group-hover:text-white/90
                        ${isExpanded ? 'md:mb-3 -translate-y-2 text-white/90' : 'md:mb-3'}`}>
                        {title}
                    </h3>

                    {/* Desktop-only elements */}
                    <div className="hidden md:block">
                        <hr className='w-0 mx-auto group-hover:w-2/3 border-t-2 border-fifth transition-all duration-300 ease-in-out' />
                        <p className="text-gray-200 text-sm mt-3 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-dmsans group-hover:text-white/80">
                            {description}
                        </p>
                    </div>

                    {/* Mobile-only elements */}
                    <div className="block md:hidden">
                        <hr className={`mx-auto border-t-2 border-fifth transition-all duration-300 ease-in-out
                            ${isExpanded ? 'w-2/3 mb-3' : 'w-0'}`}
                        />
                        <p className={`text-gray-200 text-sm font-light leading-relaxed font-dmsans transition-all duration-500 tracking-tight
                            ${isExpanded ? 'opacity-100 max-h-96 text-white/80' : 'opacity-0 max-h-0'} overflow-hidden`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TripsForEveryone = () => {
    const trips = [
        {
            title: "Corporate & Team Building",
            description: "Boost team morale with an unforgettable Amazon fishing adventure. Our corporate packages combine thrilling activities, luxury accommodations, and team-building moments in the Amazon Rainforest.",
            image: TailoredForYouImg
        },
        {
            title: "Family & Friends Getaways",
            description: "Strengthen bonds and create lifelong memories on a fishing trip designed for families and groups. Whether it's your first adventure or a cherished tradition, we ensure every moment is unforgettable.",
            image: TailoredForYouImg3
        },
        {
            title: "Solo Explorers & Couples",
            description: "Embark on a journey of self-discovery or share an intimate adventure with someone special. Experience the thrill of fishing, the tranquility of the Amazon, and the unmatched hospitality of our team.",
            image: TailoredForYouImg2
        }
    ];

    return (
        <section className="py-16 px-2">
            <div className="max-w-[95%] sm:max-w-9xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="section-title">
                        Adventures Tailored to Every Group and Occasion
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-lg md:text-base mb-14 font-dmsans uppercase">
                        From corporate retreats to family vacations, we've got the perfect trip for you.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {trips.map((trip, index) => (
                        <TripCard
                            key={index}
                            title={trip.title}
                            description={trip.description}
                            image={trip.image}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <button className="ring-1 ring-primary text-sm hover:bg-secondary hover:ring-1 hover:ring-fifth hover:text-fifth text-primary font-normal py-3 px-8 rounded-md transition duration-500 uppercase font-dmsans">
                        Get Your Trip Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TripsForEveryone;