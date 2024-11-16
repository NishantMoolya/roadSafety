import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"; // Adjust import path as per your setup
import { Label } from "@/components/ui/label"; // Adjust import path as per your setup

export default function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  errorMessage = "",
  required = false,
}) {
  const [internalError, setInternalError] = useState("");

  const handleBlur = () => {
    if (required && value.trim() === "") {
      setInternalError("This field is required.");
    } else {
      setInternalError("");
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="textareaField" className="text-gray-700">
        {label}
      </Label>
      <Textarea
        id="textareaField"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={handleBlur}
        className={`border rounded px-3 py-2 focus:outline-none 
          ${internalError ? "border-red-500" : "border-gray-300"}
          ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
        `}
      />
      {(internalError || errorMessage) && (
        <p className="text-red-500 text-sm">
          {internalError || errorMessage}
        </p>
      )}
    </div>
  );
}