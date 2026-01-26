import {
  User,
  Lock,
} from 'lucide-react';
import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal'; 
import { useSelector } from 'react-redux';

const ProfileCard = ({ userData }) => {
 
  const [userDataState, setUserDataState] = useState(userData);
  const [isModalOpen, setIsModalOpen] = useState(false);
const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
 
  const handleSave = (user) => {
    setUserDataState(user);
    setIsModalOpen(false);
    console.log("Profile updated:", user);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <User className="w-6 h-6 text-green-700" />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">{user.name}</p>
           
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 text-sm">
           <p className="text-sm text-gray-500">
              {user.mobile}  {user.email}
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
        userData={{ name: user.name, mobile: user.mobile, email: user.email }}
        onSave={handleSave}
      />
    </>
  );
};

export default ProfileCard;