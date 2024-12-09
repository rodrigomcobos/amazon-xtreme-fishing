import React, { useState, useEffect } from 'react';
import WelcomeBackgroundImg from '../../../assets/images/welcomebackgroundimg.png';
import { useInView } from 'react-intersection-observer';

const Welcome = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const stats = [
        {
            number: 3000,
            suffix: '',
            label: 'Fish Species',
            description: 'Including the Iconic Peacock Bass'
        },
        {
            number: 1100,
            suffix: '',
            label: 'Tributaries',
            description: 'Including the Rio Negro'
        },
        {
            number: 5.5,
            suffix: ' Million',
            label: 'Square Km',
            description: 'Spanning 9 Countries'
        },
        {
            number: 15,
            suffix: '',
            label: 'years of Experience',
            description: 'Since 2009'
        },
        {
            number: 5,
            suffix: '',
            label: 'IGFA World Records',
            description: 'Caught in our destinations'
        },
        {
            number: 6,
            suffix: '',
            label: 'Distinct Destinations',
            description: 'Tailored Trips'
        }
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        if (inView) {
            const intervals = stats.map((stat, index) => {
                const duration = 2000;
                const steps = 60;
                const increment = stat.number / steps;
                let currentStep = 0;

                return setInterval(() => {
                    if (currentStep < steps) {
                        setCounts(prevCounts => {
                            const newCounts = [...prevCounts];
                            newCounts[index] = Math.min(
                                stat.number,
                                increment * (currentStep + 1)
                            );
                            return newCounts;
                        });
                        currentStep++;
                    } else {
                        clearInterval(intervals[index]);
                    }
                }, duration / steps);
            });

            return () => intervals.forEach(interval => clearInterval(interval));
        }
    }, [inView]);

    return (
        <div className="relative">
            {/* Background container */}
            <div
                className="absolute inset-0 bg-cover bg-left bg-no-repeat"
                style={{
                    backgroundImage: `url(${WelcomeBackgroundImg})`,
                }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent" />

            {/* Content Container */}
            <div className="relative px-4 pt-16 sm:pt-10 pb-[26rem]">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-roxale text-center text-primary mb-8 uppercase">
                    Step Into the Wonders of the Amazon
                </h2>

                {/* Stats Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 max-w-6xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="flex items-center justify-center gap-2">
                                <div className="text-3xl md:text-4xl font-medium text-primary font-dmsans">
                                    {counts[index].toFixed(stat.number % 1 === 0 ? 0 : 1)}
                                    {stat.suffix}
                                </div>
                                <div className="text-base sm:text-lg font-light font-dmsans text-primary">
                                    {stat.label}
                                </div>
                            </div>
                            <div className="text-xs text-gray-600 uppercase">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Welcome;