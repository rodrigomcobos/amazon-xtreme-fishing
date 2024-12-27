import React from 'react'
import ZaltanaBoatMap from '../../../../assets/images/zaltanaboatmap.png';

const Map = () => {
    return (
        <div className="w-full bg-white overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-4 items-center">
                    {/* Left Column - Map Image */}
                    <div className="relative flex justify-center items-center">
                        <div className="relative w-full h-[350px] sm:h-[600px] flex justify-center items-center">
                            <div className="absolute inset-0 bg-radial-gradient-to-tr from-white via-transparent to-transparent"></div>
                            <img
                                src={ZaltanaBoatMap}
                                alt="Zaltana Boat Map"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="w-full flex justify-center">
                        <div className="w-full lg:max-w-lg flex flex-col items-center lg:items-start">
                            <div className="uppercase text-secondary tracking-wider text-sm font-dmsans mb-3 text-center lg:text-left">
                                Discover Our Journey
                            </div>
                            <h2 className="text-3xl sm:text-5xl tracking-tight text-tertiary font-roxale-calligraphy mb-6 text-center lg:text-left">
                                Navigate the Amazon<span className="font-cormorant italic">'</span>s Hidden Treasures
                            </h2>
                            <p className="text-gray-600 text-sm font-dmsans text-center lg:text-left max-w-prose">
                                Our carefully crafted routes take you through the heart of the Amazon, exploring both well-known landmarks and hidden gems. From the meeting of the waters to remote tributaries, each journey is designed to showcase the river's diverse ecosystems while ensuring maximum comfort aboard our luxury vessel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;