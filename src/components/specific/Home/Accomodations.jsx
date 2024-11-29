import React from 'react'
import AccommodationsImg1 from '../../../assets/images/accommodationsimg1.png';

const Accommodations = () => {
    return (
        <section className="relative">
            {/* Full-width image container */}
            <div className="w-full h-[500px] bg-gray-200">
                {/* Placeholder - Replace with your image */}
                <img
                    src={AccommodationsImg1}
                    alt="Amazon Accommodations"
                    className="w-full h-full object-center object-cover"
                />
            </div>

            {/* Overlapping white container */}
            <div className="relative max-w-[90%] lg:max-w-[90%] mx-auto -mt-20 bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Section Title */}
                    <h2 className="text-sm sm:text-base mb-2 max-w-2xl mx-auto text-center font-dmsans uppercase">
                        Accommodations
                    </h2>

                    <hr className='w-1/4 border-t-2 border-fifth mx-auto mb-4' />

                    {/* Section Headline */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-primary mb-6 font-roxale">
                        <span className='font-roxale-calligraphy'>All Inclusive Amenities at the Worlds</span><br />
                        BEST FISHING DESTINATION IN THE AMAZON
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-sm md:text-sm leading-relaxed font-dmsans">
                        At Amazon Xtreme Fishing, we offer a range of accommodations and destination options to suit every preference. Choose from our luxurious 5-star mothership, The Zaltan, the laid-back comfort of a lodge, the serene escape of Headwaters Safari Camp, or the exclusivity of Peacock Bass Expeditions. Whether you’re traveling solo, with a small group, or organizing a corporate retreat, each experience is set deep in the heart of the untouched Amazon Rainforest.
                    </p>
                    <button className="w-full mt-10 sm:w-auto ring-1 ring-primary text-sm hover:bg-secondary hover:ring-1 hover:ring-fifth hover:text-fifth text-pri mary font-normal py-3 px-8 rounded-md transition duration-500 uppercase font-dmsans">
                        Explore Destinations
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Accommodations