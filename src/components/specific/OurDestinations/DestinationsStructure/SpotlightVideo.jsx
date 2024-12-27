import React from 'react';
import ZaltanaMothershipVideo from '../../../../assets/videos/zaltanamothershipvideo.mp4';
import Topobackground2 from '../../../../assets/images/topobackground2.svg';

const SpotlightVideo = () => {
    return (
        <div className="bg-tertiary pt-14 sm:pt-10 border-t-4 border-fifth relative pb-10 sm:pb-0">
            {/* Wrapper div for background with overflow hidden */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={Topobackground2}
                    className="absolute top-0 sm:top-0 right-0 sm:-right-20 w-full h-full sm:h-fit opacity-20 object-cover"
                    alt="Topographic background"
                />
            </div>

            <div className="flex flex-col xl:grid xl:grid-cols-[60%_40%] gap-4 xl:gap-8 xl:max-w-[85rem] max-w-7xl mx-auto">

                {/* Video Section */}
                <section className="relative bottom-24 mx-4 sm:mx-0">
                    <div className="relative overflow-hidden rounded-lg h-[20rem] sm:h-[30rem] w-full sm:w-[50rem] mx-auto xl:mx-0">
                        <video
                            className="rounded-lg object-cover w-full h-full"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={ZaltanaMothershipVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>

                {/* Text Content */}
                <section className="text-center lg:text-center xl:text-left mx-4 sm:mx-auto xl:mx-4 max-w-4xl xl:max-w-none z-10 -mt-20 xl:mt-4">
                    <p className="text-sm sm:text-base text-white uppercase font-dmsans font-light mb-4">
                        The River's at your mercy
                    </p>
                    <h2 className="text-white text-3xl sm:text-5xl font-roxale italic font-bold mb-6">
                        The World<span className="text-white font-cormorant italic"> '</span>s Most Demanding Anglers Fish with Us
                    </h2>
                    <p className="mb-14 lg:mb-14 text-sm text-white font-dmsans font-light">
                        Born from a deep passion for the Amazon Forest and a commitment to excellence in sport fishing, The Zaltana Mothership Floating Hotel redefines world-class fishing in the Upper Rio Negro region. Designed to meet the highest expectations, it delivers an unparalleled Peacock Bass fishing experience in the heart of a new frontier. With its indigenous-inspired name, The Zaltana Mothership stands as a landmark in sport fishing, setting a new standard not only in the Amazon but across all of Brazil.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default SpotlightVideo;