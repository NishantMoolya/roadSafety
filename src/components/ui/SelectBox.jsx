import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectBox = ({
  label, // New label prop
  options,
  value,
  onChange,
  placeholder,
  multiple = false,
}) => {
  
  const handleValueChange = (selectedValue) => {
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(selectedValue)
        ? currentValues.filter(v => v !== selectedValue)
        : [...currentValues, selectedValue];
      onChange?.(newValues);
    } else {
      onChange?.(selectedValue);
    }
  };

  return (
    <div className="flex flex-col">
      {label && <label className="mb-1">{label}</label>} {/* Display the label */}
      <Select onValueChange={handleValueChange} value={value}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectBox;