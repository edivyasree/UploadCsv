import React, { useState } from 'react';
import { HiOutlineCloudUpload } from 'react-icons/hi';

const RightSidebar = () => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setIsDragging(false);

        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFiles = (files) => {
        // Process the uploaded files (e.g., send them to the server)
        console.log("Files uploaded:", files);
    };

    const handleUploadClick = () => {
        // Trigger the hidden file input element
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        handleFiles(files);
    };

    return (
        <div className="flex justify-center mx-80  h-screen">
            <div
                className={`w-5/6 h-2/6 flex flex-col  mr-56 p-8 border-4 mt-20  border-dashed rounded-lg ${
                    isDragging ? 'border-blue-500' : 'border-gray-300'
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <div className="text-center mb-4">
                    <HiOutlineCloudUpload className="w-12 h-12" />
                    <p className="text-lg text-gray-600">Drag & drop your CSV file here</p>
                    <p className="text-sm text-gray-500 cursor-pointer" onClick={handleUploadClick}>
                        (or click to browse)
                    </p>
                </div>
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".csv"
                />
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded" onClick={handleUploadClick}>
                    Upload
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;
