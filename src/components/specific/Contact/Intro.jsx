import React from 'react';
import ContactIntroImg from '../../../assets/images/contactintroimg.png';
import TopoBackgroundImg2 from '../../../assets/images/topobackground2.svg';

const Intro = () => {
    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 items-center gap-8 min-h-[150px] py-4 px-4 md:py-6 md:px-6 bg-white ring-1 ring-tertiary/25 bg-gradient-to-b from-white to-tertiary/5  overflow-hidden -mt-14 sm:-mt-24 z-10 max-w-[95%] lg:max-w-[90%] mx-auto rounded-lg mb-0 md:mb-24 lg:mb-8 shadow-lg">
            {/* Left Column - Image */}
            <section className="w-full">
                <img
                    src={ContactIntroImg}
                    alt="Amazon Xtreme Fishing Experience"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </section>

            {/* Right Column - Text Content */}
            <section className="relative pb-4">
                <div
                    style={{
                        position: 'absolute',
                        top: '-25%',
                        right: '-25%',
                        bottom: '-25%',
                        width: '160%',
                        backgroundImage: `url(${TopoBackgroundImg2})`,
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        opacity: 0.05,
                        zIndex: -1
                    }}
                />
                <p className='text-xs sm:text-sm text-gray-700 font-dmsans mb-1 uppercase text-center sm:text-left'>Let's Get Started</p>
                <hr className='w-[35%] sm:w-[22%] border-t-2 border-fifth mb-4 mx-auto sm:mx-0' />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-roxale-calligraphy mb-5 text-tertiary text-center sm:text-left">
                    Planning Your Fishing Trip with Amazon Xtreme Fishing
                </h2>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-dmsans font-light text-center sm:text-left mb-4">
                    Amazon Xtreme Fishing offers unparalleled adventures across some of the most breathtaking destinations. From the luxurious Zaltana Mothership and Zaltana Lodge to the eco-friendly Ecolodge da Barra, our tailored expeditions take you deep into the heart of the Amazon.
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-dmsans font-light text-center sm:text-left">
                    Explore the pristine waters with Peacock Bass Expeditions, connect with rich traditions at the Xingu Reservation, or embark on the extraordinary Galapagos Fishing Expedition. Our All-Inclusive packages include World-Class accommodations, guided fishing, meals, and in-country charter flights with transfers. Let us craft your perfect fishing journey, combining adventure, comfort, and unforgettable memories.
                </p>
            </section>
        </div>
    );
};

export default Intro;