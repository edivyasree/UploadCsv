// Dashboard.js
import React from 'react';
import { HiOutlineUpload, HiOutlineCalendar, HiOutlineCog } from 'react-icons/hi'; // Example of using React-icons

const Dashboard = () => {
    return (
        <div className="ml-1/5 p-8">
            <h1 className="text-2xl mb-4">Dashboard</h1>
            {/* Other components for Upload, Invoice, Schedule, Calendar, Settings */}
            <HiOutlineUpload className="w-8 h-8 mr-2 inline-block" />
            <span>Upload</span>
            {/* Similar components for other sections */}
            <HiOutlineCalendar className="w-8 h-8 mr-2 inline-block" />
            <span>Calendar</span>
            <HiOutlineCog className="w-8 h-8 mr-2 inline-block" />
            <span>Settings</span>
        </div>
    );
};

export default Dashboard;
