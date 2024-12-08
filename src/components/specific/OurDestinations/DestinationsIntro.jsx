import React from 'react'
import HeroImg from '../../../assets/images/destinationsheroimg.png';

const DestinationsIntro = () => {
    return (
        <div className="bg-tertiary px-4 py-12 mt-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-9xl mx-auto">
                <div className="text-left">
                    <p className='text-base text-white uppercase font-dmsans font-light mb-2'>World Class Accommodations</p>
                    <h2 className="text-white text-3xl sm:text-5xl font-roxale italic font-bold mb-6">Have you planned your fishing trip yet <span className='font-cormorant italic'>?</span></h2>
                    <p className="mb-4 text-sm text-white font-dmsans font-light">Whether you're after a premier luxury lodge, the #1 live-aboard houseboat, a private yacht, remote river expeditions, or exploratory fishing adventures, we'll help you find the perfect destination tailored to your travel needs, schedule, fishing goals, and budget. With years of hands-on experience and intimate knowledge of our regions, we provide expert guidance to create unforgettable experiences. If it's not already in our offerings, we'll customize it for you—whether it's outdoor TV shows, documentaries, research expeditions, missionary trips, or educational excursions. Even if you just want to escape on a private boat for a week, we'll turn your vision into reality.</p>
                </div>
                <div className="-mt-24">
                    <img src={HeroImg} loading="lazy" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default DestinationsIntro