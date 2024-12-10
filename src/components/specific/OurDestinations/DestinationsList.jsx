import React from 'react';
import { Users, ShipWheel, Waves, Calendar, ChevronLeft, ChevronRight, Ruler, BedDouble, BadgePlus } from 'lucide-react';
import ZaltanaBoatImg1 from '../../../assets/images/zaltanaboatimg1.jpg';

const DestinationsList = () => {
    return (
        <div className="p-6 m-10 rounded-lg bg-white shadow-lg">
            <div className="flex gap-6">
                {/* Left Column */}
                <div className="w-1/2">
                    <h2 className="text-4xl font-bold text-tertiary mb-2 font-roxale">
                        The Zaltana Mothership
                    </h2>
                    <p className='text-gray-600 font-dmsans font-light uppercase mb-4'>onboard Brazil's #1 Luxury Floating Hotel</p>

                    <hr className="border-gray-200 mb-6" />

                    {/* Description List */}
                    <div className="space-y-4 mb-6 font-dmsans font-light">
                        <div className="flex items-center gap-3">
                            <Users className="w-7 h-7 text-gray-600" />
                            <span className="text-gray-700">16-20 Anglers Per Group</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <ShipWheel className="w-7 h-7 text-gray-600" />
                            <span className="text-gray-700">10 fully equipped bass boats</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Ruler className="w-7 h-7 text-gray-600" />
                            <span className="text-gray-700">VIP - 180sf Suites</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <BedDouble className="w-7 h-7 text-gray-600" />
                            <span className="text-gray-700">Double Occupancy</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Waves className="w-7 h-7 text-gray-600" />
                            <span className="text-gray-700">Located on Rio Negro tributaries</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Calendar className="w-7 h-7 text-gray-600" />
                            <span className="text-gray-700">7-Nights, 6-Full Days of Fishing</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <BadgePlus className="w-7 h-7 text-gray-600" />
                            <span className="text-gray-700">Ask about Private Charters, Single, Couples, Groups & Family Pkgs</span>
                        </div>
                    </div>

                    <hr className="border-gray-200 mb-6" />

                    <p className="text-gray-600 mb-6">
                        Experience world-class peacock bass fishing in the heart of the Amazon.
                        Our exclusive lodge provides premium accommodations and expert guides
                        to ensure an unforgettable fishing adventure. With access to pristine
                        waters and state-of-the-art equipment, you'll have the best chance to
                        catch trophy peacock bass.
                    </p>

                    <button className="btn-primary">
                        More Details
                    </button>
                </div>

                {/* Right Column - Image */}
                <div className="w-1/2 relative">
                    <div className="aspect-square relative overflow-hidden rounded-lg">
                        <img
                            src={ZaltanaBoatImg1}
                            alt="Amazon Fishing Lodge"
                            className="w-full h-full object-cover"
                        />

                        {/* Navigation Buttons - Now overlapping the image */}
                        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white hover:text-fifth p-2 rounded-full shadow-lg transition-colors border border-gray-200">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white hover:text-fifth p-2 rounded-full shadow-lg transition-colors border border-gray-200">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationsList;