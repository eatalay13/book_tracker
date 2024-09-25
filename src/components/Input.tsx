interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  autoComplete?: string;
}

const Input = (props: InputProps) => (
  <input
    id={props.id}
    type={props.type}
    name={props.name}
    placeholder={props.placeholder}
    onChange={props.onChange}
    autoComplete={props.autoComplete || "off"}
    className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}
  />
);

export default Input;
