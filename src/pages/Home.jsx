import React from 'react';
import Hero from '../components/specific/Home/Hero';
import Highlights from '../components/specific/Home/Highlights';
import Introduction from '../components/specific/Home/Introduction';
import Accommodations from '../components/specific/Home/Accomodations';
import IntroductionBackgroundImg from '../assets/images/introductionbackgroundimg.svg';

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="relative">
                {/* Shared background container */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${IntroductionBackgroundImg})`,
                        opacity: 0.10
                    }}
                />

                {/* Content container */}
                <div className="relative">
                    <Highlights />
                    <Introduction />
                </div>
            </div>
            <Accommodations />
        </div>
    );
};

export default Home;