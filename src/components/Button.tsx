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
    className={`rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600 dark:bg-red-700 ${props.className}`}
  >
    {props.children}
  </button>
);

export default Button;
