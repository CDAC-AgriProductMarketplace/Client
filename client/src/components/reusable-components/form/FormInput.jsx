const FormInput = ({ id, label, type = "text", placeholder, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-bold text-gray-700 mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 
                 rounded-lg focus:outline-none 
                 focus:ring-2 focus:ring-[#01B763]/50 transition"
      {...props}
    />
  </div>
);
export default FormInput;