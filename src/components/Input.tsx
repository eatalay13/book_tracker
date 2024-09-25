"use client";

interface InputProps {
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = (props: InputProps) => (
  <input
    type={props.type}
    name={props.name}
    placeholder={props.placeholder}
    onChange={props.onChange}
    className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}
  />
);

export default Input;
