interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className = "" }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors ${className}`}
  >
    {children}
  </button>
);

export default Button;
