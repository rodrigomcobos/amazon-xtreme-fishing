// components/layouts/TravelPlannerLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarTravelPlanner from '../common/SidebarTravelPlanner';

const TravelPlannerLayout = () => {
    return (
        <div className="flex gap-8 container mx-auto px-4 py-8">
            <SidebarTravelPlanner />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default TravelPlannerLayout;