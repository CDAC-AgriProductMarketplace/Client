
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slices/authSlices";

const LoginForm = ({ setNotification }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null);

    try {
      const resultAction = await dispatch(loginUser({
        ...form,
        role: "CUSTOMER"
      }));

      if (loginUser.fulfilled.match(resultAction)) {
        console.log("Login Success:", resultAction.payload);
        setNotification({
          type: "success",
          message: "Successfully logged in! Redirecting...",
        });
        navigate('/');
      } else {
        setNotification({
          type: "error",
          message:resultAction.payload|| "Invalid username or password.",
        });
        console.error("Login Failed:", resultAction.payload);
      }
    } catch (error) {
      setNotification({
        type: "error",
        message: "Unexpected Error during login",
      });
      console.error("Unexpected Error during login:", error);
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormInput
        id="username"
        label="Username Or Email Address"
        placeholder="Username or email address"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <PasswordInput id="password" label="Password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

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