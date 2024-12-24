import React from 'react';
import ZaltanaMothershipVideo from '../../../../assets/videos/zaltanamothershipvideo.mp4';
import Topobackground2 from '../../../../assets/images/topobackground2.svg';

const SpotlightVideo = () => {
    return (
        <div className="bg-tertiary px-4 pt-14 sm:pt-10 border-t-4 border-fifth relative pb-10 sm:pb-0">
            <img
                src={Topobackground2}
                className="absolute top-0 sm:top-0 right-0 sm:-right-20 w-full h-full sm:h-fit opacity-20 object-cover"
                alt="Topographic background"
            />
            <div className="grid lg:grid-cols-2 gap-0 lg:gap-24 lg:max-w-9xl max-w-7xl mx-auto">
                {/* Video Section - Column 1*/}
                <section className="order-1 relative bottom-24 ">
                    <div className="relative overflow-hidden rounded-lg h-[20rem] sm:h-[30rem] w-[25rem] sm:w-[48rem]">
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

                {/* Text Content  - Column 2*/}
                <section className="text-left order-2 ml-0 sm:ml-32 z-10 -mt-14 sm:mt-4">
                    <p className="text-sm text-white uppercase font-dmsans font-light mb-4">
                        The River's at your mercy
                    </p>
                    <h2 className="text-white text-2xl sm:text-4xl font-roxale italic font-bold mb-6">
                        The World<span className="text-white font-cormorant italic"> ’</span>s Most Demanding Anglers Fish with Us
                    </h2>
                    <p className="mb-4 text-sm text-white font-dmsans font-light">
                        Born from a deep passion for the Amazon Forest and a commitment to excellence in sport fishing, The Zaltan Floating Hotel redefines world-class fishing in the Upper Rio Negro region. Designed to meet the highest expectations, it delivers an unparalleled Peacock Bass fishing experience in the heart of a new frontier. With its indigenous-inspired name, The Zaltan stands as a landmark in sport fishing, setting a new standard not only in the Amazon but across all of Brazil.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default SpotlightVideo;