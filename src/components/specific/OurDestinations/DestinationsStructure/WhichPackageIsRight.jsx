import React, { useState } from 'react';
import ZaltanaBoatImg from '../../../../assets/images/zaltanaboatimg3.jpg';
import ZaltanaLodgeImg from '../../../../assets/images/zaltanalodgeimg6.png';
import EcolodgeImg from '../../../../assets/images/ecolodge.png';
import GalapagosImg from '../../../../assets/images/galapagosimg1.png';
import PeacockBassExpImg from '../../../../assets/images/peacockbassexpimg1.png';
import XinguImg from '../../../../assets/images/xingureservationimg1.jpg';

import TopoBackground from '../../../../assets/images/topobackground3.svg';


const PackageCard = ({ title, description, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="group relative overflow-hidden rounded-lg shadow-lg hover:ring-2 hover:ring-fifth transition duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* Image container with fixed aspect ratio */}
            <section className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Frosted glass overlay */}
                <div className={`absolute inset-0 backdrop-blur-sm bg-white/10 transition-opacity duration-500 rounded-lg
                    md:opacity-0 md:group-hover:opacity-100
                    ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/0 transition duration-500 rounded-lg
                    md:group-hover:via-black/60 md:group-hover:to-black/30
                    ${isExpanded ? 'via-black/60 to-black/30' : ''}`}
                />
            </section>

            {/* Content */}
            <section className={`absolute inset-0 flex flex-col justify-center md:justify-end p-6 transition-all duration-500 rounded-lg
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
            </section>
        </div>
    );
};

const WhichPackageIsRight = () => {
    const packages = [
        {
            title: "Zaltana Mothership",
            description: "Experience luxury on the water with our state-of-the-art mothership. Perfect for groups seeking the ultimate combination of comfort and adventure.",
            image: ZaltanaBoatImg
        },
        {
            title: "Zaltana Lodge",
            description: "Immerse yourself in the heart of the Amazon with in the lodge. Offering top-tier amenities and seamless access to adventure, ideal for nature enthusiasts.",
            image: ZaltanaLodgeImg
        },
        {
            title: "Ecolodge da Barra",
            description: "An eco-friendly paradise where sustainability meets luxury. Perfect for environmentally conscious anglers looking for an authentic Amazon experience.",
            image: EcolodgeImg
        },
        {
            title: "Xingu Reservation",
            description: "Fish in pristine waters while immersing yourself in indigenous culture. A unique opportunity to experience traditional fishing methods and local customs.",
            image: XinguImg
        },
        {
            title: "Peacock Bass Expeditions",
            description: "Specialized trips focused on landing the legendary peacock bass. Designed for serious anglers seeking the thrill of catching these powerful game fish.",
            image: PeacockBassExpImg
        },
        {
            title: "Galapagos Fishing",
            description: "Combine world-class fishing with incredible wildlife encounters in the Galapagos Islands. A perfect blend of fishing adventure and natural discovery.",
            image: GalapagosImg
        }
    ];

    return (
        <section className="m-4 sm:m-4 md:m-6 lg:m-10 xl:m-12">
            {/* Container with border */}
            <div className=" overflow-hidden bg-white bg-gradient-to-b from-white to-tertiary/5 shadow-lg ring-1 ring-tertiary/25 rounded-lg">
                {/* Section Header with background - now spans full width */}
                <div className="relative bg-tertiary border-b-4 border-fifth">
                    {/* Background Image */}
                    <div
                        className="absolute right-0 top-0 w-[100%] sm:w-[100%] h-full opacity-40 sm:opacity-20 overflow-hidden"
                        style={{
                            backgroundImage: `url(${TopoBackground})`,
                            backgroundPosition: 'center right',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />

                    {/* Content */}
                    <div className="relative px-4 md:px-6 pt-8 pb-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-fourth mb-2 font-roxale text-centersm:text-left">
                            Find Your Perfect Adventure
                        </h2>
                        <p className="text-white/75 font-dmsans font-light uppercase text-centersm:text-left">
                            Explore our tailored packages to discover the ideal fishing experience for your goals, group size, and preferences.
                        </p>
                    </div>
                </div>

                {/* Cards Grid Container */}
                <div className="px-2 sm:px-0">
                    <div className="max-w-[95%] sm:max-w-9xl mx-auto">
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 sm:mt-10">
                            {packages.map((pkg, index) => (
                                <PackageCard
                                    key={index}
                                    title={pkg.title}
                                    description={pkg.description}
                                    image={pkg.image}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center mt-10 mb-8">
                            <button className="ring-1 ring-primary text-sm hover:bg-secondary hover:ring-1 hover:ring-fifth hover:text-fifth text-primary font-normal py-3 px-8 rounded-md transition duration-500 uppercase font-dmsans">
                                View All Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhichPackageIsRight;