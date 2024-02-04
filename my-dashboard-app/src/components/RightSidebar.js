import React, { useState } from 'react';
import { HiOutlineCloudUpload, HiOutlineTrash } from 'react-icons/hi';

const RightSidebar = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);

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
        setUploadedFiles(files);
    };

    const handleUploadClick = () => {
        // Trigger the hidden file input element
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        handleFiles(files);
    };
   
    const handleRemoveClick = () => {
        setUploadedFiles([]);
    };

    return (
        <div className="flex justify-center mx-80  h-screen">
      <div
        className={`w-5/6 h-3/6 flex flex-col  mr-56 p-8 border-4 mt-20  border-dashed rounded-lg ${
          isDragging ? "border-blue-500" : "border-gray-300"
        }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <div className="text-center mb-4">
                    {uploadedFiles.length === 0 ? (
                        <>
                            <HiOutlineCloudUpload className="w-12 h-12" />
                            <p className="text-lg text-gray-600">Drag & drop your CSV file here</p>
                            <p className="text-sm text-gray-500 cursor-pointer" onClick={handleUploadClick}>
                                (or click to browse)
                            </p>
                        </>
                    ) : (
                        <>
                            <HiOutlineTrash className="w-12 h-12 text-red-600" />
                            <p className="text-lg text-gray-600">File Uploaded</p>
                            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded mt-2" onClick={handleRemoveClick}>
                                Remove
                            </button>
                        </>
                    )}
                </div>
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded" onClick={handleUploadClick}>
                    Upload
                </button>
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".csv"
                />
            </div>
        </div>
    );
};

export default RightSidebar;
