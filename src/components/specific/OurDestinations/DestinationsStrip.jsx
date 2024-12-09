import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    WiDaySunny,
    WiCloudy,
    WiRain,
    WiThunderstorm,
    WiSnow,
    WiFog,
    WiDaySunnyOvercast,
    WiMoonNew,
    WiMoonWaxingGibbous1,
    WiMoonWaxingGibbous2,
    WiMoonWaxingGibbous3,
    WiMoonWaxingGibbous4,
    WiMoonWaxingGibbous5,
    WiMoonFull,
    WiMoonWaningCrescent1,
    WiMoonWaningCrescent2,
    WiMoonWaningCrescent3,
    WiMoonWaningCrescent4,
    WiMoonWaningCrescent5
} from 'react-icons/wi';
import { Moon } from 'lunarphase-js';

const WeatherIcon = ({ condition, size = 64 }) => {
    const getIcon = () => {
        switch (condition?.toLowerCase()) {
            case 'clear':
                return <WiDaySunny size={size} />;
            case 'clouds':
                return <WiCloudy size={size} />;
            case 'rain':
                return <WiRain size={size} />;
            case 'thunderstorm':
                return <WiThunderstorm size={size} />;
            case 'snow':
                return <WiSnow size={size} />;
            case 'mist':
            case 'smoke':
            case 'haze':
            case 'dust':
            case 'fog':
                return <WiFog size={size} />;
            case 'partly cloudy':
                return <WiDaySunnyOvercast size={size} />;
            default:
                return <WiDaySunny size={size} />;
        }
    };

    return getIcon();
};

const MoonPhaseIcon = ({ phase, size = 64 }) => {
    return (
        <div style={{ fontSize: `${size * 0.75}px` }}>
            {Moon.lunarPhaseEmoji()}
        </div>
    );
};

const WeatherWidget = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [moonPhase, setMoonPhase] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

                const currentResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=-3.1190275&lon=-60.0217314&appid=${apiKey}&units=imperial`
                );
                if (!currentResponse.ok) {
                    throw new Error(`Weather API Error: ${currentResponse.status}`);
                }
                const currentData = await currentResponse.json();

                const forecastResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=-3.1190275&lon=-60.0217314&appid=${apiKey}&units=imperial`
                );
                if (!forecastResponse.ok) {
                    throw new Error(`Forecast API Error: ${forecastResponse.status}`);
                }
                const forecastData = await forecastResponse.json();

                setCurrentWeather(currentData);
                const dailyForecasts = forecastData.list
                    .filter(item => item.dt_txt.includes('12:00:00'))
                    .slice(0, 4);
                setForecast(dailyForecasts);

                // Get current moon phase
                const currentPhase = Moon.lunarPhase();
                setMoonPhase(currentPhase);

                setError(null);
            } catch (err) {
                console.error('Error fetching weather:', err);
                setError(`Failed to fetch weather data: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-gray-600 text-lg">Loading weather data...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    const formatDate = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    const formatMoonPhase = (phase) => {
        return phase.split('_').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
    };

    return (
        <div className="grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Left Column - Current Weather */}
            <div className="relative flex items-start md:col-span-4 md:pr-6 pb-6 sm:pb-0">
                <div className="space-y-2 flex-1">
                    <h2 className="text-xl font-medium text-tertiary font-dmsans">Manaus, Brazil</h2>
                    <p className="text-gray-600 font-dmsans font-light text-sm">{formatDate(currentWeather?.dt)}</p>
                    <div className="text-4xl font-bold mt-4 text-tertiary font-dmsans">
                        {Math.round(currentWeather?.main.temp)}°F
                    </div>
                    <div className="text-gray-600 text-sm font-dmsans font-light">
                        H: {Math.round(currentWeather?.main.temp_max)}°F
                        L: {Math.round(currentWeather?.main.temp_min)}°F
                    </div>
                </div>
                <div className="space-y-2 ml-8">
                    <p className="capitalize text-gray-700 font-dmsans font-medium">{currentWeather?.weather[0].description}</p>
                    <p className="text-gray-600 text-sm font-dmsans font-light">Wind: {Math.round(currentWeather?.wind.speed)} mph</p>
                    <p className="text-gray-600 text-sm font-dmsans font-light">Humidity: {currentWeather?.main.humidity}%</p>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.08]">
                    <WeatherIcon
                        condition={currentWeather?.weather[0].main}
                        size={240}
                    />
                </div>
            </div>

            {/* Middle Column - 4-Day Forecast */}
            <div className="grid grid-cols-4 gap-4 md:col-span-6 py-6 md:py-0 md:px-6">
                {forecast?.map((day) => (
                    <div
                        key={day.dt}
                        className="flex flex-col items-center p-3 bg-white rounded-lg hover:bg-white/75 transition-colors"
                    >
                        <p className="font-semibold text-tertiary text-sm mb-2">{formatDate(day.dt)}</p>
                        <WeatherIcon
                            condition={day.weather[0].main}
                            size={40}
                        />
                        <p className="text-xs text-center capitalize text-secondary mt-2 mb-1">{day.weather[0].description}</p>
                        <div className="text-xs font-medium text-secondary text-center">
                            <div>H: {Math.round(day.main.temp_max)}°F</div>
                            <div>L: {Math.round(day.main.temp_min)}°F</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Column - Lunar Phase */}
            <div className="flex flex-col items-center justify-center md:col-span-2 py-6 md:py-0 md:pl-6">
                <h3 className="text-base text-center font-medium text-tertiary font-dmsans mb-2">Current Moon Phase</h3>
                <div className="relative text-tertiary">  {/* Changed from text-fifth */}
                    <MoonPhaseIcon phase={moonPhase} size={60} />
                </div>
                <p className="text-gray-700 font-dmsans font-medium mt-2">
                    {formatMoonPhase(moonPhase)}
                </p>
                <p className="text-gray-600 text-sm font-dmsans font-light mt-2">
                    {Moon.lunarAgePercent().toFixed(1)}% through cycle
                </p>
            </div>
        </div>
    );
};

const DestinationsStrip = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative min-h-[150px] py-4 px-4 md:py-6 md:px-6 bg-white font-sans overflow-hidden -mt-8 sm:-mt-20 z-10 max-w-[95%] lg:max-w-[90%] mx-auto rounded-lg mb-0 md:mb-24 lg:mb-8 shadow-lg"
        >
            <WeatherWidget />
        </motion.div>
    );
};

export default DestinationsStrip;