import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import { formData } from '../../datas/datas';

const Register = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>

        {formData.map((item) => (
          <Input
            key={item.id}
            name={item.name}
            control={control}
            type={item.type}
            placeholder={item.placeholder}
          />
        ))}

        <input
          type="submit"
          value="Submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition duration-300"
        />
      </form>
    </div>
  );
};

export default Register;