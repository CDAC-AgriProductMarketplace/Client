import {
  User,
  Lock,
} from 'lucide-react';

const ProfileCard = ({ userData }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center mr-3">
        <User className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-800">{userData.name}</p>
        <p className="text-sm text-gray-500">
          {userData.title} • {userData.memberSince}
        </p>
      </div>
    </div>

    <div className="flex justify-between items-center mb-4 text-sm">
      <div>
        <p className="font-medium text-gray-800">
          {userData.deliveries} placed
        </p>
        <p className="text-gray-500">This month's orders</p>
      </div>
      <div>
        <p className="font-medium text-right text-primary">
          {userData.onTime}
        </p>
        <p className="text-gray-500">On-time deliveries</p>
      </div>
    </div>

    <button className="w-full text-center bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg transition duration-150 mb-3 text-sm">
      Edit profile details
    </button>
    
    <button className="w-full text-center border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg transition duration-150 text-sm flex items-center justify-center">
        <Lock className="w-4 h-4 mr-2" />
        Manage login & security
    </button>

    <p className="text-xs text-gray-500 mt-4 leading-relaxed">
      Keep your name, contact number, and preferred language updated so we can serve you better.
    </p>
  </div>
);

export default ProfileCard;