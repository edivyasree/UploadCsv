import React, { useState } from 'react';
import { HiOutlineCloudUpload, HiOutlineTrash } from 'react-icons/hi';

const RightSidebar1 = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [excelData, setExcelData] = useState([]);

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

        // Assuming you have a function to parse the Excel data, parseExcelData()
        const excelData = parseExcelData(files);
        setExcelData(excelData);
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
        setExcelData([]);
    };

    const parseExcelData = (files) => {
        // Parse Excel data here (e.g., using a library like XLSX.js)
        // Example: const excelData = parse(files[0]);
        // Return the parsed data
        return [];
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div
                className={`w-2/5 h-2/5 flex flex-col justify-center items-center p-8 border-4 border-dashed rounded-lg ${
                    isDragging ? 'border-blue-500' : 'border-gray-300'
                }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <div className="text-center mb-4">
                    {excelData.length === 0 ? (
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
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".csv"
                />
                {excelData.length > 0 && (
                    <table className="table-auto">
                        <thead>
                            <tr>
                                {excelData[0].map((header, index) => (
                                    <th key={index} className="border px-4 py-2">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {excelData.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <tr>
                                        <td key={cellIndex} className="border px-4 py-2">{cell.id}</td>
                                        <td className="border px-4 py-2">{cell.links}</td>
                                        <td  className="border px-4 py-2">{cell.prefix}</td>
                                        </tr>

                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default RightSidebar1;
