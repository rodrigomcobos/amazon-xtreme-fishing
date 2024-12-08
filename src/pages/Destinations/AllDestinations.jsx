import React from 'react'
import Hero from '../../components/specific/OurDestinations/Hero'
import DestinationsStrip from '../../components/specific/OurDestinations/DestinationsStrip'
import DestinationsIntro from '../../components/specific/OurDestinations/DestinationsIntro'

const AllDestinations = () => {
    return (
        <div>
            <Hero />
            <DestinationsStrip />
            <DestinationsIntro />
        </div>
    )
}

export default AllDestinations