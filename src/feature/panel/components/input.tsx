interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
  return (
    <div className="my-2 flex flex-col">
      <label htmlFor={name} className="text-sm text-gray/80">
        {label}
      </label>
      <input className="border-b border-gray/60 bg-obsidian py-1 text-white" {...props} />
    </div>
  );
};

export default Input;
