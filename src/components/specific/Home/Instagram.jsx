import React, { useState, useEffect } from 'react';
import { fetchInstagramPosts } from '../../../utils/instagramApi';
import Marquee from 'react-fast-marquee';

const Instagram = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadPosts() {
            try {
                setLoading(true);
                const data = await fetchInstagramPosts();
                console.log('Fetched posts:', data); // For debugging
                setPosts(data);
            } catch (err) {
                setError(err.message);
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

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
            {/* Title Section */}
            <div className="text-center mb-8">
                <h2 className="text-base text-primary uppercase tracking-wider mb-2 font-dmsans">Follow us on Instagram</h2>
                <hr className='w-1/6 mx-auto border-t-2 border-fifth mb-6' />
                <a
                    href="https://www.instagram.com/amazonxtreme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl font-bold font-roxale italic text-tertiary hover:text-fifth transition-colors"
                >
                    @AMAZONXTREME
                </a>
            </div>

            {/* Instagram Feed */}
            <div className="w-full">
                <Marquee
                    gradient={false}
                    speed={35}
                    pauseOnHover={true}
                    className="overflow-hidden"
                >
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 w-48 h-48 mx-2 overflow-hidden"
                        >
                            <img
                                src={post.media_url}
                                alt={post.caption?.slice(0, 100) || 'Instagram post'}
                                className="w-full h-full object-cover hover:opacity-75 transition-opacity duration-300"
                            />
                        </a>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Instagram;