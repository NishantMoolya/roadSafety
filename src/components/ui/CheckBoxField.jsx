import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

const CheckboxField = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <Checkbox 
        checked={checked} 
        onCheckedChange={onChange} 
        id={label}
      />
      <label htmlFor={label} className="ml-2">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;