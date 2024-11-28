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
                    <h2 className="text-primary uppercase tracking-wide text-sm font-semibold mb-4">
                        Accommodations
                    </h2>

                    {/* Section Headline */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-6">
                        ALL-INCLUSIVE AMENITIES AT THE WORLD'S BEST FISHING DESTINATION IN THE AMAZON
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Amazon Xtreme Fishing features different accommodations and options for your destinations.
                        Choose from our State-of-the-Art 5-Star mothership The Zaltan, the relaxed atmosphere of a Lodge,
                        the unplugged bliss of Headwaters Safari Camp, the seclusion of the Peacock Bass Expeditions,
                        from small groups to corporate groups, all deep in the lost Amazon Rainforest.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Accommodations