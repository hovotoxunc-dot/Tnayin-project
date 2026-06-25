import { useController } from "react-hook-form";

const Input = ({ control, name, type, placeholder }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <div className="w-full">
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition duration-200"
      />
    </div>
  );
};

export default Input;