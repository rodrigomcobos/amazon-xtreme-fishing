import React from 'react';
import { Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const ContactForm = () => {
    return (
        <div className="max-w-[100rem] mx-auto px-3 sm:px-10 grid grid-cols-1 lg:grid-cols-3 gap-8 my-6 sm:my-20 relative">
            {/* Left Column - Form (2/3 width) */}
            <form className="lg:col-span-2 bg-white ring-1 ring-tertiary/25 bg-gradient-to-b from-white to-tertiary/5 shadow-lg rounded-lg p-6 sm:p-14">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-roxale-calligraphy mb-5 text-tertiary text-center sm:text-left">
                        Inquiry Form
                    </h2>
                    <p className='text-xs sm:text-sm text-gray-700 font-dmsans font-light mb-10 text-center sm:text-left'>Each journey with Amazon Xtreme Fishing is customized to match your unique interests. Share a bit about yourself and the experiences you’re looking forward to in the heart of the Amazon. Our dedicated team will connect with you soon to craft your ultimate adventure with tailored all-inclusive packages and pricing.
                    </p>
                </div>
                {/* Adult Guests */}
                <section className="space-y-2 mb-14">
                    <label className="block text-xl font-medium text-tertiary font-roxale-calligraphy">How many guests <span className='font-cormorant'>:</span></label>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="number"
                            placeholder="Number of Adults *"
                            required
                            className="w-full p-2 bg-transparent-blue-300 border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                        <input
                            type="number"
                            placeholder="Number of Children"
                            className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                    </div>
                </section>

                {/* Interested In */}
                <section className="space-y-2 mb-14">
                    <label className="block text-xl font-medium text-tertiary font-roxale-calligraphy">You are interested in <span className='font-cormorant'>:</span></label>
                    <div className="grid grid-cols-2 gap-2">
                        {['Zaltana Mothership', 'Zaltana Lodge', 'Ecolodge da Barra',
                            'Peacock Bass Expeditions', 'Xingu Reservation', 'Galapagos Fishing'].map((option) => (
                                <div key={option} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={option.toLowerCase().replace(/\s+/g, '-')}
                                        className="h-4 w-4 text-tertiary"
                                    />
                                    <label htmlFor={option.toLowerCase().replace(/\s+/g, '-')} className="ml-2 text-sm font-light font-dmsans text-gray-700">
                                        {option}
                                    </label>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Contact Information */}
                <section className="space-y-2 mb-14">
                    <label className="block text-xl font-medium text-tertiary font-roxale-calligraphy">Your contact information <span className='font-cormorant'>:</span></label>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            required
                            className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            required
                            className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                    />
                </section>

                {/* Address */}
                <section className="space-y-2 mb-14">
                    <label className="block text-xl font-medium text-tertiary font-roxale-calligraphy">Your Address <span className='font-cormorant'>:</span></label>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                        <input
                            type="text"
                            placeholder="Suite"
                            className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                        <input
                            type="text"
                            placeholder="State/Region"
                            className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Zip/Postal Code"
                            className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                        />
                    </div>
                </section>

                {/* More Details */}
                <section className="space-y-2 mb-14">
                    <label className="block text-xl font-medium text-tertiary font-roxale-calligraphy">
                        Please share more details about your desired fishing destination <span className='font-cormorant'>:</span>
                    </label>
                    <textarea
                        rows="4"
                        className="w-full p-2 border-2 border-tertiary/30 rounded-md focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                    />
                </section>

                {/* How did you hear about us */}
                <section className="space-y-2 mb-14">
                    <label className="block text-xl font-medium text-tertiary font-roxale-calligraphy">How did you hear about us <span className='font-cormorant'>?</span></label>
                    <div className="grid grid-cols-2 gap-2">
                        {['Searching the internet', 'Word of Mouth', 'Social Media', 'Travel Agency',
                            'Magazine or Online Article', 'Advertising', 'Other'].map((option) => (
                                <div key={option} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="hear-about-us"
                                        id={option.toLowerCase().replace(/\s+/g, '-')}
                                        className="h-4 w-4 text-tertiary"
                                    />
                                    <label htmlFor={option.toLowerCase().replace(/\s+/g, '-')} className="ml-2 text-sm font-light font-dmsans text-gray-700">
                                        {option}
                                    </label>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Other Elaboration */}
                <section className="space-y-2 mb-14">
                    <label className="block text-xl font-medium text-tertiary font-roxale-calligraphy">
                        If you selected  <span className='font-cormorant'> "</span>Other <span className='font-cormorant'>"</span> above <span className='font-cormorant'>,</span> please elaborate <span className='font-cormorant'>:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Let Us know if it was a referral"
                        className="w-full p-2 bg-transparent border-b-2 border-tertiary/30 focus:border-tertiary outline-none transition-colors font-cormorant text-tertiary placeholder:text-tertiary/60"
                    />
                </section>

                {/* Newsletter Opt-in */}
                <section className="flex items-center mb-10">
                    <input
                        type="checkbox"
                        id="newsletter"
                        className="h-4 w-4 text-tertiary"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                        I would like to receive news and offers from Amazon Xtreme Fishing.
                        You may opt-out of email communications at any time.
                    </label>
                </section>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn-primary"
                >
                    Submit
                </button>
            </form>

            {/** Right Column - Contact Info (1/3 width) **/}
            <section className="lg:col-span-1 space-y-6 xl:sticky lg:top-4 px-4 sm:px-0 pb-10 py-8 sm:py-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-roxale-calligraphy mb-5 text-tertiary text-center sm:text-left font-medium">Connect Now</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-start space-x-4 font-dmsans font-light">
                        <Clock className="h-8 w-8 text-tertiary" />
                        <p className="text-gray-700">Business Hours: <br />Monday - Friday, 8:00 AM - 5:00 PM CST</p>
                    </div>
                    <div className="flex items-center space-x-4 font-dmsans font-light">
                        <Phone className="h-8 w-8 text-tertiary" />
                        <p className="text-gray-700">Call Us: +1 (469) 995-5351</p>
                    </div>
                    <div className="flex items-center space-x-4 font-dmsans font-light">
                        <Mail className="h-8 w-8 text-tertiary" />
                        <p className="text-gray-700">Email Us: marc@amazonxtremefishing.com</p>
                    </div>
                </div>

                <div className="py-8">
                    <hr className='border-gray-300' />
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-3xl font-roxale-calligraphy mb-5 text-tertiary text-center sm:text-left font-medium">Find Us on Social Media</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-start space-x-4 font-dmsans font-light">
                        <Instagram className="h-8 w-8 text-tertiary" />
                        <p className="text-gray-700">Instagram: @amazonxtreme</p>
                    </div>
                    <div className="flex items-center justify-start space-x-4 font-dmsans font-light">
                        <Facebook className="h-8 w-8 text-tertiary" />
                        <p className="text-gray-700">Facebook: @amazonxtremefishing</p>
                    </div>
                    <div className="flex items-center justify-start space-x-4 font-dmsans font-light">
                        <Youtube className="h-8 w-8 text-tertiary" />
                        <p className="text-gray-700">Youtube: @amazonxtremefishingadventu590</p>
                    </div>
                </div>

                <div className="py-8">
                    <hr className='border-gray-300' />
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-3xl font-roxale-calligraphy mb-5 text-tertiary text-center sm:text-left font-medium">Get Prepared</h2>
                <p className='text-xs sm:text-sm text-gray-700 font-dmsans font-light mb-10 text-center sm:text-left'>
                    Explore our Travel Planner for everything you need to know about your Amazon Xtreme Fishing adventure. From detailed information on getting to our destinations and essential lures and tackle recommendations to guidance on passports and visas, we've got you covered. Learn why anglers choose us for World-Class fishing experiences and get answers to common questions in our FAQs. Whether you're a seasoned angler or planning your first fishing trip, our Travel Planner ensures your journey is smooth, exciting, and unforgettable.
                </p>
                <button className='btn-primary'>Travel Planner</button>
            </section>
        </div>
    );
};

export default ContactForm;