import { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjust import path as per your setup
import { Label } from "@/components/ui/label"

export default function TextInput({
  label,
  placeholder,
  value,
  type="text",
  onChange,
  disabled = false,
  errorMessage = "",
  required = false,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [internalError, setInternalError] = useState("");

  const handleBlur = () => {
    setIsFocused(false);
    if (required && value === "") {
      setInternalError("This field is required.");
    } else {
      setInternalError("");
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="inputField" className="text-gray-700">
        {label}
      </Label>
      <Input
        id="inputField"
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          border rounded px-3 py-2 focus:outline-none 
          ${isFocused ? "border-blue-500 ring-2 ring-blue-500" : ""}
          ${isHovered && !isFocused ? "border-gray-400" : ""}
          ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
          ${internalError || errorMessage ? "border-red-500" : "border-gray-300"}
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
