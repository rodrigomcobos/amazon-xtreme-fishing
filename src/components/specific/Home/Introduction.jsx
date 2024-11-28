import React from 'react';
import IntroductionImg from '../../../assets/images/introductionimg.png';

const Introduction = () => {
    return (
        <div className="relative">
            {/* Content Container */}
            <div className="max-w-[95%] lg:max-w-9xl mx-auto">
                {/* Mobile and Large: 2 columns (text | image) */}
                {/* Medium: 1 row for text (title | description) and 1 row for image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Text Content - changes layout on medium screens */}
                    <section className="font-dmsans mt-4 md:mt-4 lg:mt-24 sm:mt-10 pb-20 lg:pb-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-12 pr-0 sm:pr-14">
                            {/* Title Content */}
                            <section className='mb-2 md:mb-8 sm:mb-8 lg:mb-2'>
                                <h2 className="text-xl md:text-2xl lg:text-2xl mb-2 leading-tight text-gray-900 uppercase font-dmsans">
                                    Experience the <br />
                                </h2>
                                <h2 className="font-roxale-calligraphy text-3xl md:text-4xl lg:text-5xl font-bold pl-0 sm:pl-4">
                                    Very Best of the Amazon
                                </h2>
                                <h2 className="font-roxale-calligraphy text-3xl md:text-4xl lg:text-5xl font-bold text-right">
                                    in One Place
                                </h2>
                            </section>

                            {/** Description Content **/}
                            <section className="text-gray-700 text-sm md:text-sm sm:text-base">
                                <p className="leading-relaxed pb-4">
                                    Immerse yourself in the heart of the Amazon Rainforest, where we combine unmatched fishing experiences with 5-star accommodations or rustic retreats tailored to your style. Located on the legendary Rio Negro River, our pristine waters are home to Trophy Peacock Bass, setting the stage for an adventure of a lifetime.
                                </p>
                                <p className="leading-relaxed pb-4">
                                    Surround yourself with breathtaking scenery, unparalleled hospitality, and meticulous attention to detail. From luxury accommodations and gourmet Brazilian cuisine to classic American dishes, every aspect of your stay is crafted to perfection.
                                </p>
                                <p className="leading-relaxed pb-10">
                                    Experience a warm welcome, unforgettable moments, and a destination that truly stands as the best in the Amazon—and the world—for Peacock Bass fishing.
                                </p>
                                <div className="sm:flex sm:justify-center lg:justify-end">
                                    <button className="w-full sm:w-auto ring-1 ring-primary text-sm hover:bg-secondary hover:ring-1 hover:ring-fifth hover:text-fifth text-primary font-normal py-3 px-8 rounded-md transition duration-500 uppercase font-dmsans">
                                        Learn More
                                    </button>
                                </div>
                            </section>
                        </div>
                    </section>

                    {/* Right Column - Image */}
                    <section className="relative min-h-[300px] md:min-h-[500px] lg:min-h-400px mt-0 sm:mt-20">
                        <img
                            src={IntroductionImg}
                            alt="Amazon Fishing Experience"
                            className="absolute bottom-0 right-0 h-auto w-full lg:w-auto max-h-[500px] lg:max-h-full object-contain object-bottom lg:object-right-bottom"
                        />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Introduction;