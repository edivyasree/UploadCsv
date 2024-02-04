import React, { useState, useEffect } from "react";
import { HiOutlineCloudUpload, HiOutlineTrash } from "react-icons/hi";
import Papa from "papaparse";

const RightSidebar1 = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  useEffect(() => {
    if (csvData.length > 0) {
      const uniqueOptions = [...new Set(csvData.map(row => row[3]))];
      setDropdownOptions(uniqueOptions);
    }
  }, [csvData]);

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
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      Papa.parse(text, {
        complete: (result) => {
          setCsvData(result.data);
          const initialSelectedValues = {};
          result.data.forEach((row, index) => {
            initialSelectedValues[index] = "";
          });
          setSelectedValues(initialSelectedValues);
        },
        header: true,
      });
    };
    reader.readAsText(files[0]);
    setUploadedFiles(files);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleRemoveClick = () => {
    setUploadedFiles([]);
    setCsvData([]);
    setSelectedValues({});
  };

  const handleSelectChange = (e, rowIndex) => {
    const selectedValue = e.target.value;
    setSelectedValues(prevState => ({
      ...prevState,
      [rowIndex]: selectedValue,
    }));
  };

  return (
    <div className="flex justify-center mx-80 h-screen">
      <div
        className={`w-5/6 h-3/6 flex flex-col mr-56 p-8 border-4 mt-20 border-dashed rounded-lg ${
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
              <p className="text-lg text-gray-600">
                Drag & drop your CSV file here
              </p>
              <p
                className="text-sm text-gray-500 cursor-pointer"
                onClick={handleUploadClick}
              >
                (or click to browse)
              </p>
            </>
          ) : (
            <>
              <HiOutlineTrash className="w-12 h-12 text-red-600" />
              <p className="text-lg text-gray-600">File Uploaded</p>
              <button
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded mt-2"
                onClick={handleRemoveClick}
              >
                Remove
              </button>
            </>
          )}
        </div>
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          onClick={handleUploadClick}
        >
          Upload
        </button>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          accept=".csv"
        />
        <div className="mt-4">
          <table className="table-auto border-collapse border border-blue-800">
            <thead>
              <tr>
                {csvData.length > 0 &&
                  Object.keys(csvData[0]).map((key, index) => (
                    <th key={index} className="border border-blue-600 px-4 py-2">
                      {key}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
  {csvData.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {Object.entries(row).map(([key, value], columnIndex) => (
        <td key={columnIndex} className="border border-blue-600 px-4 py-2">
          {columnIndex === 3 ? (
            <select
              value={selectedValues[rowIndex] || ''} // Set the value to selected value or empty string if not selected
              onChange={(e) => handleSelectChange(e, rowIndex)}
            >
              <option value="">Select...</option>
              {dropdownOptions.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            value
          )}
        </td>
      ))}
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar1;
