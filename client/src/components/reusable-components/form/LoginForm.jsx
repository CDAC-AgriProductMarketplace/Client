
// ------------------ Login Form ---------------------

import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import { useState } from "react";

const LoginForm = ({ setNotification }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setNotification(null);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
      setNotification({
        type: "success",
        message: "Successfully logged in! Redirecting...",
      });
    } else {
      setNotification({
        type: "error",
        message: "Invalid username or password.",
      });
    }

    setIsLoading(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormInput
        id="username"
        label="Username Or Email Address"
        placeholder="Username or email address"
      />
      <PasswordInput id="password" label="Password" placeholder="Password" />

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#01B763] border-gray-300 rounded focus:ring-[#01B763]"
          />
          <label htmlFor="remember-me" className="ml-2 text-gray-800">
            Remember me
          </label>
        </div>

        <Link
          to="/forgot-password"
          className="font-medium text-[#01B763] hover:underline"
        >
          Forgot password?
        </Link>
      </div>

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
          "Log In"
        )}
      </button>
    </form>
  );
};

export default LoginForm;