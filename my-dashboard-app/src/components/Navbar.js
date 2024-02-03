import React from 'react';
import { HiOutlineBell } from 'react-icons/hi'; // Import notification icon
import ellipse from '../images/Subtract (3).png';
import profilepicture from '../images/Profile.png';

const Navbar = () => {
    return (
        <div className="bg-white-800 py-4 px-6 flex items-center justify-between">
            {/* Company Logo on the left */}
            <div className="flex items-center">
                
                <img src={ellipse} alt="Company Logo" className="h-8 mr-2 primary"  />
                <p className='title'>Base</p>
                <span className="font-bold text-lg"></span>
            </div>
            <p class="uploadname">Upload CSV</p>
            <div className="flex items-center">
               
                <div className="mr-4 relative">
                    <HiOutlineBell className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-2 py-1">3</span>
                </div>
              
                <img src={profilepicture} alt="Profile" className="h-8 w-8 rounded-full" />
            </div>
            
        </div>
    );
};

export default Navbar;
