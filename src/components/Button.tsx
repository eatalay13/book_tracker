"use client";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Button = (props: ButtonProps) => (
  <button
    type={props.type}
    onClick={props.onClick}
    className={`px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors ${props.className}`}
  >
    {props.children}
  </button>
);

export default Button;
