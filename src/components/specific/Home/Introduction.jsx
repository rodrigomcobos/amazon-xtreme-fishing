import React from 'react';
import IntroductionImg from '../../../assets/images/introductionimg.png';

const Introduction = () => {
    return (
        <div className="relative">
            {/* Content Container */}
            <div className="max-w-[90%] lg:max-w-[95%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column - Text Content */}
                    <section className="font-dmsans pt-24 md:pt-32 pb-10 md:pb-32">
                        <div className='mb-8'>
                            <h2 className="text-xl md:text-2xl lg:text-2xl mb-2 leading-tight text-gray-900 uppercase font-dmsans">
                                Experience the <br />
                            </h2>
                            <h2 className="font-roxale-calligraphy text-3xl md:text-4xl lg:text-5xl font-bold pl-4">
                                Very Best of the Amazon
                            </h2>
                            <h2 className="font-roxale-calligraphy text-3xl md:text-4xl lg:text-5xl font-bold text-right">
                                in One Place
                            </h2>
                        </div>

                        <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                            <p className="leading-relaxed">
                                Immerse yourself in the heart of the Amazon Rainforest, where we combine unmatched fishing experiences with 5-star accommodations or rustic retreats tailored to your style. Located on the legendary Rio Negro River, our pristine waters are home to Trophy Peacock Bass, setting the stage for an adventure of a lifetime.
                            </p>

                            <p className="leading-relaxed">
                                Surround yourself with breathtaking scenery, unparalleled hospitality, and meticulous attention to detail. From luxury accommodations and gourmet Brazilian cuisine to classic American dishes, every aspect of your stay is crafted to perfection.
                            </p>

                            <p className="leading-relaxed">
                                Experience a warm welcome, unforgettable moments, and a destination that truly stands as the best in the Amazon—and the world—for Peacock Bass fishing.
                            </p>
                        </div>
                    </section>

                    {/* Right Column - Image */}
                    <section className="relative min-h-[300px] md:min-h-full">
                        <img
                            src={IntroductionImg}
                            alt="Amazon Fishing Experience"
                            className="absolute bottom-0 right-0 h-auto w-full md:w-auto max-h-[500px] md:max-h-full object-contain object-bottom md:object-right-bottom"
                        />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Introduction;