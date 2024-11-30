import React from 'react';

// Import specific components
import Hero from '../components/specific/Home/Hero';
import Highlights from '../components/specific/Home/Highlights';
import Introduction from '../components/specific/Home/Introduction';
import Accommodations from '../components/specific/Home/Accomodations';
import TripsForEveryone from '../components/specific/Home/TripsForEveryone';
import OurAffiliates from '../components/specific/Home/OurAffiliates';
import OurDestinations from '../components/specific/Home/OurDestinations';

// Import the background image
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
            <TripsForEveryone />
            <OurDestinations />
            <OurAffiliates />
        </div>
    );
};

export default Home;