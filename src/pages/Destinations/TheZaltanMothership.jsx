import React from 'react'
import Hero from '../../components/specific/OurDestinations/DestinationsStructure/Hero'
import Intro from '../../components/specific/OurDestinations/DestinationsStructure/Intro'
import Highlight from '../../components/specific/OurDestinations/DestinationsStructure/Highlight'
import Accommodations from '../../components/specific/OurDestinations/DestinationsStructure/Accommodations'
import SpotlightVideo from '../../components/specific/OurDestinations/DestinationsStructure/SpotlightVideo'
import Map from '../../components/specific/OurDestinations/DestinationsStructure/Map'
import Schedule from '../../components/specific/OurDestinations/DestinationsStructure/Schedule'
import FAQ from '../../components/specific/OurDestinations/DestinationsStructure/FAQ'
import WhichPackageIsRight from '../../components/specific/OurDestinations/DestinationsStructure/WhichPackageIsRight'
import DontLetItGetAway from '../../components/specific/OurDestinations/DontLetItGetAway'


const TheZaltanMothership = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Highlight />
            <SpotlightVideo />
            <Accommodations />
            <Map />
            <Schedule />
            <FAQ />
            <WhichPackageIsRight />
            <DontLetItGetAway />
        </>
    )
}

export default TheZaltanMothership