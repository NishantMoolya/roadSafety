"use client"
import React, { useState } from 'react';
import CheckboxField from './CheckBoxField'; // Adjust import path as necessary
import { Label } from "@/components/ui/label"

const MultiCheckbox = ({ options,label,onChange=()=>{} }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedOptions((prev) => {
      if (prev.includes(value)) {
        // If already selected, remove it
        return prev.filter((option) => option !== value);
      } else {
        // Otherwise, add it
        onChange([...prev, value])
        return [...prev, value];
      }
    });
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <Label>{label}</Label>}
      <div className='flex gap-2 flex-wrap'>
      {options.map((option) => (
        <CheckboxField
        key={option.value}
        label={option.label}
        checked={selectedOptions.includes(option.value)}
        onChange={() => handleCheckboxChange(option.value)}
        />
      ))}
      </div>
    </div>
  );
};

export default MultiCheckbox;