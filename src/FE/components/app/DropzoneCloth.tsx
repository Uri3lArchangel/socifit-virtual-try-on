'use client'
import React, { useState } from 'react';

const DropzoneCloth = () => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  return (
    <div
      className={`w-full  h-64 border-2 border-dashed border-gray-400 rounded-lg flex flex-col justify-center items-center relative ${
        dragging ? 'bg-gray-200' : ''
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {selectedFile ? (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Preview"
          className="w-full max-h-full rounded-lg"
        />
      ) : (
        <p className="text-lg text-gray-600">Drag & Drop or choose an image file</p>
      )}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="file-upload"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-upload"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4  text-white rounded-md cursor-pointer focus:outline-none bg-[#DBD1F7] shadow"
      >
        Choose files
      </label>
    </div>
  );
};

export default DropzoneCloth;
