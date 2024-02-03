import React from 'react';
import { HiOutlineHome, HiOutlineUpload, HiOutlineDocumentText, HiOutlineCalendar, HiOutlineCog } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <div className="w-1/5 h-screen">
            <ul>
                <li className="flex items-center p-4" id="lefttext">
                    <HiOutlineHome className="w-6 h-6 mr-2" />
                    Dashboard
                </li>
                <li className="flex items-center p-4">
                    <HiOutlineUpload className="w-6 h-6 mr-2" />
                    Upload
                </li>
                <li className="flex items-center p-4">
                    <HiOutlineDocumentText className="w-6 h-6 mr-2" />
                    Invoice
                </li>
                <li className="flex items-center p-4">
                    <HiOutlineCalendar className="w-6 h-6 mr-2" />
                    Schedule
                </li>
                <li className="flex items-center p-4">
                    <HiOutlineCalendar className="w-6 h-6 mr-2" />
                    Calendar
                </li>
                <li className="flex items-center p-4">
                    <HiOutlineCog className="w-6 h-6 mr-2" />
                    Settings
                </li>
            </ul>
            
        </div>
    );
};

export default LeftSidebar;
