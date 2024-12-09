import React from 'react'
import Hero from '../../components/specific/OurDestinations/Hero'
import DestinationsStrip from '../../components/specific/OurDestinations/DestinationsStrip'
import DestinationsIntro from '../../components/specific/OurDestinations/DestinationsIntro'
import Welcome from '../../components/specific/OurDestinations/Welcome'

const AllDestinations = () => {
    return (
        <div>
            <Hero />
            <div className="destinations-strip relative">
                <DestinationsStrip />
                <Welcome />
            </div>
            <DestinationsIntro />
        </div>
    );
};

export default AllDestinations;