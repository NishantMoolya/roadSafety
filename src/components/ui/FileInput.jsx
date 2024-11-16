"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input"; // Adjust import path as necessary
import { Label } from "@/components/ui/label"; // Adjust import path as necessary

export function FileInput({ label, onChange, accepts }) {
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      // Check if the file extension is in the accepted list
      if (accepts.includes(fileExtension)) {
        setFileName(file.name);
        setError('');
        onChange(file); // Pass the selected file to the parent component
      } else {
        setError('Invalid file type. Please upload a valid file.');
        setFileName('');
        onChange(null); // Clear the file in parent component
      }
    } else {
      setFileName('');
      setError('');
      onChange(null); // Clear the file in parent component
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="fileInput">{label}</Label>
      <Input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        accept={accepts.join(',')} // Join accepted extensions for input
      />
      {fileName && <p className="mt-1 text-gray-600">Selected file: {fileName}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}