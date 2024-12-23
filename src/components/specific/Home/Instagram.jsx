import React, { useState, useEffect } from 'react';
import { fetchInstagramPosts } from '../../../utils/instagramApi';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FaInstagram } from "react-icons/fa";

const Instagram = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(6);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getSlideIncrement = () => {
        if (windowWidth >= 1024) return 5;
        if (windowWidth >= 768) return 4;
        return 2;
    };

    const getItemWidth = () => {
        if (windowWidth >= 1024) return '20%';
        if (windowWidth >= 768) return '25%';
        return '50%';
    };

    useEffect(() => {
        async function loadPosts() {
            try {
                setLoading(true);
                const data = await fetchInstagramPosts();
                const increment = getSlideIncrement();
                const duplicatedStart = data.slice(-increment);
                const duplicatedEnd = data.slice(0, increment);
                setPosts([...duplicatedStart, ...data, ...duplicatedEnd]);
            } catch (err) {
                setError(err.message);
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

    const handleSlideChange = (direction) => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        const increment = direction === 'next' ? getSlideIncrement() : -getSlideIncrement();
        const newIndex = currentIndex + increment;
        setCurrentIndex(newIndex);

        setTimeout(() => {
            setIsTransitioning(false);
            if (newIndex >= posts.length - getSlideIncrement()) {
                setCurrentIndex(getSlideIncrement());
            } else if (newIndex <= getSlideIncrement() - 1) {
                setCurrentIndex(posts.length - (getSlideIncrement() * 2));
            }
        }, 500);
    };

    const renderMedia = (post) => {
        return (
            <div className="group relative w-full h-full">
                {post?.media_type === 'VIDEO' ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300"
                    >
                        <source src={post.media_url} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src={post.media_url}
                        alt={post.caption?.slice(0, 100) || 'Instagram post'}
                        className="w-full h-full object-cover group-hover:opacity-50 transition duration-500"
                    />
                )}

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 p-4">
                    <p className="text-white text-sm mb-2">
                        {new Date(post.timestamp).toLocaleDateString()}
                    </p>
                    <p className="text-white text-xs text-center line-clamp-3">
                        {post.caption || 'No caption'}
                    </p>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <section className="w-full py-16 overflow-hidden bg-white">
                <div className="text-center">
                    <p className="text-primary">Loading Instagram feed...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full py-16 overflow-hidden bg-white">
                <div className="text-center">
                    <p className="text-red-500">Failed to load Instagram feed</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-16 overflow-hidden bg-white">
            <div className="text-center mb-8">
                <h2 className="text-base text-primary uppercase tracking-wider mb-2 font-dmsans flex items-center justify-center">
                    Follow us on Instagram<FaInstagram className='text-fifth ml-2' />
                </h2>
                <hr className='w-7/12 sm:w-[20%] mx-auto border-t-2 border-fifth mb-6' />

                <a href="https://www.instagram.com/amazonxtreme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl font-bold font-roxale italic text-tertiary hover:text-fifth transition duration-500">
                    <span className='font-cormorant'>@</span>AmazonXtreme
                </a>
            </div>

            <div className="relative w-screen -ml-[50vw] left-1/2">
                <div className="relative max-w-[120%] mx-auto overflow-hidden">
                    <div
                        className={`flex ${isTransitioning ? 'transition-transform duration-500' : ''}`}
                        style={{
                            transform: `translateX(-${(currentIndex * parseFloat(getItemWidth()))}%)`,
                        }}
                    >
                        {posts.map((post, index) => (
                            <a
                                key={`${post.id}-${index}`}
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ width: getItemWidth() }}
                                className="aspect-square flex-shrink-0"
                            >
                                <div className="w-full h-full px-2">
                                    {renderMedia(post)}
                                </div>
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => handleSlideChange('prev')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-fifth hover:text-white transition duration-300 z-10"
                        aria-label="Previous"
                    >
                        <MdChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => handleSlideChange('next')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-fifth hover:text-white transition duration-300 z-10"
                        aria-label="Next"
                    >
                        <MdChevronRight size={24} />
                    </button>
                </div>
            </div >
        </section >
    );
};

export default Instagram;