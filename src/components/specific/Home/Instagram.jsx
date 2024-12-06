import React from 'react';

// These would be replaced with actual Instagram images
const dummyInstagramPosts = [
    { id: 1, image: "/api/placeholder/400/400" },
    { id: 2, image: "/api/placeholder/400/400" },
    { id: 3, image: "/api/placeholder/400/400" },
    { id: 4, image: "/api/placeholder/400/400" },
    { id: 5, image: "/api/placeholder/400/400" },
    { id: 6, image: "/api/placeholder/400/400" },
    { id: 7, image: "/api/placeholder/400/400" },
    { id: 8, image: "/api/placeholder/400/400" },
    { id: 9, image: "/api/placeholder/400/400" },
    { id: 10, image: "/api/placeholder/400/400" },
];

const Instagram = () => {
    return (
        <section className="w-full py-16 overflow-hidden bg-white">
            {/* Title Section */}
            <div className="text-center mb-8">
                <h2 className="text-base text-primary uppercase tracking-wider mb-2 font-dmsans">Follow us on Instagram</h2>
                <hr className='w-1/6 mx-auto border-t-2 border-fifth mb-6' />
                <a
                    href="https://www.instagram.com/amazonxtreme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl font-bold font-cormorant italic text-tertiary hover:text-fifth transition-colors"
                >
                    @AMAZONXTREME
                </a>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full">
                {/* First Marquee */}
                <div className="flex animate-marquee">
                    {dummyInstagramPosts.map((post) => (
                        <div
                            key={post.id}
                            className="flex-shrink-0 w-64 h-64 mx-2"
                        >
                            <img
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                className="w-full h-full object-cover hover:opacity-75 transition-opacity cursor-pointer"
                            />
                        </div>
                    ))}
                </div>

                {/* Duplicate Marquee for Seamless Loop */}
                <div className="flex animate-marquee2">
                    {dummyInstagramPosts.map((post) => (
                        <div
                            key={`duplicate-${post.id}`}
                            className="flex-shrink-0 w-64 h-64 mx-2"
                        >
                            <img
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                className="w-full h-full object-cover hover:opacity-75 transition-opacity cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Add required CSS animations */}
            <style jsx global>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    position: absolute;
                }
                
                .animate-marquee2 {
                    animation: marquee 30s linear infinite;
                    position: absolute;
                    left: 100%;
                }
                
                /* Pause animation on hover */
                .animate-marquee:hover,
                .animate-marquee2:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Instagram;