import React from 'react'
import Marquee from 'react-fast-marquee';
import AmazonasTurLogoImg from '../../../assets/images/amazonasturlogo.png';
import EmbraturLogoImg from '../../../assets/images/embraturlogo.png';
import TfoLogoImg from '../../../assets/images/tfologo.png';
import KLuresLogoImg from '../../../assets/images/klureslogo.png';
import ShimanoLogoImg from '../../../assets/images/shimanologo.png';
import BassProLogoImg from '../../../assets/images/bassprologo.png';
import CabelasLogoImg from '../../../assets/images/cabelaslogo.png';
import AmazonLogoImg from '../../../assets/images/amazonlogo.png';
import TripadvisorLogoImg from '../../../assets/images/tripadvisorlogo.png';
import DSCLogoImg from '../../../assets/images/dsclogo.png';

const OurAffiliates = () => {
    const affiliates = [
        { logo: AmazonasTurLogoImg, link: '#', alt: 'Amazonastur Logo' },
        { logo: EmbraturLogoImg, link: '#', alt: 'Embratur Logo' },
        { logo: TfoLogoImg, link: '#', alt: 'TFO Logo' },
        { logo: KLuresLogoImg, link: '#', alt: 'K Lures Logo' },
        { logo: ShimanoLogoImg, link: '#', alt: 'Shimano Logo' },
        { logo: BassProLogoImg, link: '#', alt: 'Bass Pro Logo' },
        { logo: CabelasLogoImg, link: '#', alt: 'Cabelas Logo' },
        { logo: AmazonLogoImg, link: '#', alt: 'Amazon Logo' },
        { logo: TripadvisorLogoImg, link: '#', alt: 'Tripadvisor Logo' },
        { logo: DSCLogoImg, link: '#', alt: 'DSC Logo' },
    ];

    return (
        <section className="py-12">
            <div className="text-center mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 font-roxale-calligraphy">
                    Our Affiliates
                </h2>
                <hr className='w-[14%] mx-auto border-t-2 border-fifth' />
            </div>

            <Marquee
                gradientWidth={50}
                gradientColor={[255, 255, 255]}
                speed={40}
            >
                {affiliates.map((affiliate, index) => (
                    <a
                        key={index}
                        href={affiliate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-4 sm:mx-8 flex items-center justify-center"
                    >
                        <img
                            src={affiliate.logo}
                            alt={affiliate.alt}
                            className="h-16 sm:h-20 w-auto object-contain opacity-75 hover:opacity-100 hover:scale-110 transition duration-300"
                        />
                    </a>
                ))}
            </Marquee>
        </section>
    )
}

export default OurAffiliates