import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ZaltanaBoatMap from '../../../../assets/images/zaltanaboatmap.png';

import BassBoatIcon from '../../../../assets/images/bassboat.svg';
import LureIcon from '../../../../assets/images/lure.svg';
import PlaneIcon from '../../../../assets/images/plane.svg';

const Map = () => {
    return (
        <div className="w-full bg-white overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-4 items-center">
                    {/* Left Column - Map Image */}
                    <div className="relative flex justify-center items-center">
                        <div className="relative w-full h-[350px] sm:h-[750px] flex justify-center items-center group">
                            <div className="absolute inset-0 bg-radial-gradient-to-tr from-white via-transparent to-transparent shadow-[inset_0_0_20px_20px_rgba(255,255,255,.9)]"></div>
                            <div className="relative w-full h-full cursor-zoom-in transition-transform hover:scale-[1.01]">
                                <Zoom zoomImg={{
                                    src: ZaltanaBoatMap,
                                    alt: "Zaltana Boat Map",
                                }}>
                                    <img
                                        src={ZaltanaBoatMap}
                                        alt="Zaltana Boat Map"
                                        className="w-full h-full object-contain"
                                    />
                                </Zoom>
                                <div className="absolute top-2 right-2 text-primary ring-1 ring-primary px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity font-dmsans font-light">
                                    Click to zoom
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="w-full flex justify-center px-0 sm:px-8 lg:px-0">
                        <div className="w-full sm:max-w-2xl lg:max-w-lg flex flex-col items-center lg:items-start">
                            <div className="uppercase text-secondary tracking-wider text-sm font-dmsans mb-3 text-center lg:text-left">
                                Discover Your Amazon Adventure
                            </div>
                            <h2 className="text-3xl sm:text-5xl tracking-tight text-tertiary font-roxale-calligraphy mb-6 text-center lg:text-left">
                                From Arrival to <br />An Unforgettable Catch
                            </h2>
                            <p className="text-gray-600 text-sm font-dmsans text-center lg:text-left max-w-prose mb-5">
                                Your journey begins at Manaus International Airport, where your Amazon adventure truly takes flight. From here, a private charter transports you to Santa Isabel do Rio Negro, a gateway to the Amazon's pristine beauty. Awaiting your arrival is the Zaltana Mothership, docked at the port and ready to serve as your luxurious base for the ultimate fishing experience.
                            </p>
                            <p className="text-gray-600 text-sm font-dmsans text-center lg:text-left max-w-prose">
                                Over six incredible days, you'll explore the legendary waters of Uneuixi, Tea, Aiuana, Rio Preto, and the tributaries of the Rio Negro. These record-breaking fisheries are teeming with the prized peacock bass, offering anglers an unparalleled opportunity to connect with nature and test their skills. From the moment you step aboard to your final cast, every detail is designed for comfort, adventure, and memories to last a lifetime.
                            </p>

                            {/* Icons Section */}
                            <div className="grid grid-cols-3 gap-8 mt-8 w-full">
                                <div className="flex flex-col items-center">
                                    <img src={PlaneIcon} alt="Plane" className="w-10 h-10 sm:w-12 sm:h-12 mb-2 [filter:invert(48%)_sepia(11%)_saturate(754%)_hue-rotate(77deg)_brightness(92%)_contrast(86%)]" />
                                    <span className="text-base text-gray-600 font-dmsans text-center">MAO to IRZ</span>
                                    <span className="text-sm text-gray-600 font-dmsans text-center">Charted Flight</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={BassBoatIcon} alt="Bass Boat" className="w-10 h-10 sm:w-12 sm:h-12 mb-2 [filter:invert(48%)_sepia(11%)_saturate(754%)_hue-rotate(77deg)_brightness(92%)_contrast(86%)]" />
                                    <span className="text-base text-gray-600 font-dmsans text-center">10 Equipped</span>
                                    <span className="text-sm text-gray-600 font-dmsans text-center">Bass Boats</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={LureIcon} alt="Lure" className="w-10 h-10 sm:w-12 sm:h-12 mb-2 [filter:invert(48%)_sepia(11%)_saturate(754%)_hue-rotate(77deg)_brightness(92%)_contrast(86%)]" />
                                    <span className="text-base text-gray-600 font-dmsans text-center">6 Full Days</span>
                                    <span className="text-sm text-gray-600 font-dmsans text-center">of Fishing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;