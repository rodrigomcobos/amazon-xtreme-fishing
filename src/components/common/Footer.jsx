import React from 'react'
import { Link } from 'react-router-dom'
// Icons
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaXTwitter,
    FaGooglePlus,
    FaPinterest
} from 'react-icons/fa6';
// Background Overlay
import Topographic from '../../assets/images/topographic.png';
// Logos
import GlobalRescueLogo from '../../assets/logos/globalrescuelogo.png';
import MercureLogo from '../../assets/logos/mercurelogo.png';
import MartinTravelLogo from '../../assets/logos/martintravellogo.png';
import EmbraturLogo from '../../assets/logos/embraturlogo.png';
import AmazonasturLogo from '../../assets/logos/amazonasturlogo.png';
import ShimanoLogo from '../../assets/logos/shimanologo.png';
import TfoLogo from '../../assets/logos/tfologo.png';
import KLuresLogo from '../../assets/logos/klureslogo.png';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-primary via-primary to-black py-12 px-6 font-dmsans fixed bottom-0 w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
                style={{
                    backgroundImage: `url(${Topographic})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'cover',
                    mixBlendMode: 'overlay'
                }}
            />

            {/* Content container - relative to stay above background */}
            <div className="relative z-10">
                {/* Newsletter Section */}
                <section className="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8 mb-12">
                    <div className='lg:col-span-2'>
                        <h2 className="text-xl font-semibold text-tertiary uppercase mb-4">Stay Hooked on the Adventure</h2>
                        <p className='text-gray-300 font-light text-sm'>Be the first to know about exclusive fishing trips, expert tips, and updates from the Amazon. <br />Subscribe to our newsletter and never miss the catch of a lifetime.</p>
                    </div>
                    <div className="bg-transparent border border-tertiary focus-within:border-fifth transition duration-500 flex px-1 py-1 rounded-full">
                        <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent pl-4 text-sm text-gray-300" />
                        <button type='button'
                            className="bg-secondary hover:bg-tertiary hover:font-bold transition-all text-gray-200 text-sm rounded-full px-5 py-2.5 uppercase tracking-wider">Submit</button>
                    </div>
                </section>

                <hr className="my-8 border-secondary" />

                {/* Contact Section */}
                <p className='text-sm font-medium text-center text-gray-300'>For assistance with your Amazon Xtreme Fishing adventure, including package bookings, please call +1 (469) 995-5351.<br />
                    <span className='text-tertiary text-sm'>8:00 AM to 5:00 PM Central Time. Guests under 18 years of age must have parent or guardian permission to call.</span>
                </p>

                <hr className="my-8 border-secondary" />

                {/* Footer Content */}
                <style>
                    {`
    @media (min-width: 1024px) {
      .footer-grid {
        grid-template-columns: minmax(0, 20%) minmax(0, 20%) minmax(0, 20%) minmax(0, 40%);
      }
    }
  `}
                </style>

                <section className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-12 w-full mx-auto footer-grid">
                    {/* About Section */}
                    <section>
                        <h4 className="text-sm font-semibold mb-4 text-tertiary uppercase">About</h4>
                        <ul className="space-y-4 mb-8">
                            <li><Link to="/about-us" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">About Us</Link></li>
                            <li><Link to="/welcome" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Welcome</Link></li>
                            <li><Link to="/experience-the-amazon" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Experience The Amazon</Link></li>
                            <li><Link to="/meet-your-host" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Meet Your Host</Link></li>
                        </ul>
                        <h4 className="text-sm font-semibold mb-4 text-tertiary uppercase">Social Links</h4>
                        {/* Social Icons */}
                        <section className="grid grid-cols-4 gap-6 pr-20">
                            <a href="https://www.facebook.com/amazonmarc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tertiary transition-colors" aria-label="Visit our Facebook page">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.instagram.com/amazonxtreme/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tertiary transition-colors" aria-label="Visit our Instagram page">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/amazonxtremefishing/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tertiary transition-colors" aria-label="Visit our LinkedIn profile">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCEwzJPEIRP5JgRh8YbN67kg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tertiary transition-colors" aria-label="Visit our YouTube channel">
                                <FaYoutube size={24} />
                            </a>
                            <a href="https://x.com/amazonxtreme" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tertiary transition-colors" aria-label="Visit our Twitter page">
                                <FaXTwitter size={24} />
                            </a>
                            <a href="https://www.google.com/search?q=amazon+xtreme+fishing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tertiary transition-colors" aria-label="Search us on Google">
                                <FaGooglePlus size={24} />
                            </a>
                            <a href="https://www.pinterest.com/amazonxtreme/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tertiary transition-colors" aria-label="Visit our Pinterest page">
                                <FaPinterest size={24} />
                            </a>
                        </section>
                    </section>

                    {/* Destinations Section */}
                    <section>
                        <h4 className="text-sm font-semibold mb-4 text-tertiary uppercase">Destinations</h4>
                        <ul className="space-y-4">
                            <li><Link to="/destinations" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Our Destinations</Link></li>
                            <li><Link to="/zaltan-mothership" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">The Zaltan Mothership</Link></li>
                            <li><Link to="/zaltan-lodge" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">The Zaltan Lodge</Link></li>
                            <li><Link to="/ecolodge" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Eco Lodge</Link></li>
                            <li><Link to="/xingu" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Xingu</Link></li>
                            <li><Link to="/headwaters-camp" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Headwaters Safari Camp</Link></li>
                            <li><Link to="/peacock-bass-expeditions" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Peacock Bass Expeditions</Link></li>
                        </ul>
                    </section>

                    {/* Experience Section */}
                    <section>
                        <h4 className="text-sm font-semibold mb-4 text-tertiary uppercase">Experience</h4>
                        <ul className="space-y-4">
                            <li><Link to="/experience" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Experience The Amazon</Link></li>
                            <li><Link to="/getting-there" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Getting There</Link></li>
                            <li><Link to="/lures-and-tackle" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Lures & Tackle</Link></li>
                            <li><Link to="/passport-and-visa" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Passport & Visa</Link></li>
                            <li><Link to="/travel-insurance" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Travel Insurance</Link></li>
                            <li><Link to="/why-us" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">Why Us</Link></li>
                            <li><Link to="/faq" className="text-gray-300 hover:text-tertiary transition duration-300 text-sm">FAQs</Link></li>
                        </ul>
                    </section>

                    {/* Partners Section */}
                    <section>
                        <h4 className="text-sm font-semibold mb-4 text-tertiary uppercase">Our Partners</h4>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <a href="https://www.martintravelservices.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={MartinTravelLogo} alt="Martin Travel Services" className="w-40 h-auto" />
                                </a>
                                <p className="text-gray-300 text-sm">Contact Kevin with Martin Travel Services at (800) 627-8468 for Airline Reservations.</p>
                            </div>
                            <hr className="my-1 border-secondary" />
                            <div className="flex items-center gap-4">
                                <a href="https://all.accor.com/hotel/5671/index.en.shtml" target="_blank" rel="noopener noreferrer">
                                    <img src={MercureLogo} alt="Mercure" className="w-64 h-auto" />
                                </a>
                                <p className="text-gray-300 text-sm">Located in the exclusive area of Manaus, it is about 15 minutes from the international airport, the city centre and the industrial district.</p>
                            </div>
                            <hr className="my-1 border-secondary" />
                            <div className="flex items-center gap-4">
                                <a href="https://partner.globalrescue.com/amazonxtremefishing/index.html" target="_blank" rel="noopener noreferrer">
                                    <img src={GlobalRescueLogo} alt="Global Rescue" className="w-56 h-auto" />
                                </a>
                                <p className="text-gray-300 text-sm">Amazon Xtreme Fishing strongly recommends that you enroll with Global rescue prior to embarking on your trip.</p>
                            </div>
                        </div>
                    </section>
                </section>

                <hr className="my-6 border-secondary" />

                {/* Copyright Section */}
                <p className='text-xs text-center text-tertiary mt-8'>
                    © Copyright GoFish Adventures/ Amazon Xtreme Fishing Adventures LLC 2004-2024 All Rights Reserved. <br />This website and its content is available only for public display and reproduction, distribution, or transmission of any content is expressly prohibited.
                </p>
                <div className='flex justify-center space-x-4 mt-2'>
                    <Link to="/terms-and-conditions" className='text-gray-300 hover:text-tertiary transition duration-300 text-base'>Terms & Conditions</Link>
                    <Link to="/privacy-policy" className='text-gray-300 hover:text-tertiary transition duration-300 text-base'>Privacy Policy</Link>
                    <Link to="/covid-policy" className='text-gray-300 hover:text-tertiary transition duration-300 text-base'>Covid Policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer