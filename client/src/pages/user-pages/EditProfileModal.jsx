import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const EditProfileModal = ({ isOpen, onClose, userData, onSave }) => {
  // Local state to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  // Effect to load initial user data when the modal opens
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || '',
        mobile: userData.mobile || '',
        email: userData.email || '',
      });
    }
  }, [userData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the updated data back to the parent component
    onSave(formData);
  };

  const InputField = ({ label, name, type = 'text', value, onChange }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-sm"
        required
      />
    </div>
  );

  return (
    // Modal Overlay (Fixed, Full Screen)
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
      
      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Edit Profile Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
             className="w-full px-4 py-3 border border-gray-300 
                 rounded-lg focus:outline-none 
                 focus:ring-2 focus:ring-[#01B763]/50 transition"
          />
          
          <InputField
            label="Mobile Number"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
             className="w-full px-4 py-3 border border-gray-300 
                 rounded-lg focus:outline-none 
                 focus:ring-2 focus:ring-[#01B763]/50 transition"
          />
          
          <InputField
            label="Email Address"
            name="email"
            type="email"
             className="w-full px-4 py-3 border border-gray-300 
                 rounded-lg focus:outline-none 
                 focus:ring-2 focus:ring-[#01B763]/50 transition"
            value={formData.email}
            onChange={handleChange} 
          />

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-150 text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-700 transition duration-150 text-sm font-medium shadow-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;