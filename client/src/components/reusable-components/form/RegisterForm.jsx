import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import PasswordInput from './PasswordInput';
import { useState } from 'react';

const RegisterForm = ({ setNotification }) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setNotification(null);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setNotification({
      type: "success",
      message: "Registration successful! Please check your email.",
    });

    setIsLoading(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormInput
        id="reg-email"
        label="Email Address"
        type="email"
        placeholder="your@email.com"
      />

      <PasswordInput
        id="reg-password"
        label="Password"
        placeholder="Create a password"
      />

      <p className="text-xs text-gray-600">
        Your personal data will be used as described in our{" "}
        <Link
          to="/privacy-policy"
          className="font-medium text-[#01B763] hover:underline"
        >
          privacy policy
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center bg-primary text-white 
                   font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 
                   transition-colors shadow-md disabled:bg-gray-400"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};
export default RegisterForm;