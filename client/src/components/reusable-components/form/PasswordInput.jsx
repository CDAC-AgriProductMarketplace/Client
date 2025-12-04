import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const PasswordInput = ({ id, label, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-bold text-gray-700 mb-2"
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={isVisible ? "text" : "password"}
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-300 
                     rounded-lg focus:outline-none 
                     focus:ring-2 focus:ring-[#01B763]/50 transition"
        />

        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute inset-y-0 right-0 px-4 flex items-center 
                     text-gray-500 hover:text-[#01B763]"
        >
          {isVisible ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};
export default PasswordInput;