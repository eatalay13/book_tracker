"use client";

interface InputProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ type, placeholder, onChange, className = "" }: InputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);

export default Input;
