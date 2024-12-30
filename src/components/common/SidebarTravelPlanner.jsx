// SidebarTravelPlanner.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TRAVEL_PLANNER_LINKS = [
    { path: '/experience', label: 'Experience' },
    { path: '/why-us', label: 'Why Us' },
    { path: '/getting-there', label: 'Getting There' },
    { path: '/faq', label: 'FAQ' },
    { path: '/lures-and-tackle', label: 'Lures & Tackle' },
    { path: '/travel-insurance', label: 'Travel Insurance' },
    { path: '/passport-and-visa', label: 'Passport & Visa' },
];

const SidebarTravelPlanner = () => {
    const location = useLocation();

    return (
        <aside className="w-64 bg-white shadow-lg p-6">
            <h2 className="text-xl font-medium text-gray-800 mb-6">Travel Planner</h2>
            <nav className="space-y-2">
                {TRAVEL_PLANNER_LINKS.map(({ path, label }) => (
                    <Link
                        key={path}
                        to={path}
                        className={`block px-4 py-2 rounded-lg transition-colors ${location.pathname === path
                                ? 'bg-tertiary text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default SidebarTravelPlanner;