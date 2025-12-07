import {
  User,
  Lock,
} from 'lucide-react';
import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal'; // Assume this file exists

const ProfileCard = ({ userData }) => {
  // Use state to manage the user data and update the display
  const [userDataState, setUserDataState] = useState(userData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle saving the updated data from the modal
  const handleSave = (updatedData) => {
    setUserDataState(updatedData);
    setIsModalOpen(false);
    console.log("Profile updated:", updatedData);
    // In a real app, you would call an API here to persist the changes
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <User className="w-6 h-6 text-green-700" />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">{userDataState.name}</p>
           
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 text-sm">
           <p className="text-sm text-gray-500">
              {userDataState.mobile}  {userDataState.email}
            </p>
         
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full text-center bg-primary hover:bg-green-700 text-white font-medium py-2 rounded-lg transition duration-150 mb-3 text-sm"
        >
          Edit profile details
        </button>
        
        {/* <button className="w-full text-center border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg transition duration-150 text-sm flex items-center justify-center">
          <Lock className="w-4 h-4 mr-2" />
          Manage login & security
        </button> */}

        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          Keep your name, contact number, and preferred language updated so we can serve you better.
        </p>
      </div>

      {/* The Modal Component */}
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userData={{ name: userDataState.name, mobile: userDataState.mobile, email: userDataState.email }}
        onSave={handleSave}
      />
    </>
  );
};

export default ProfileCard;