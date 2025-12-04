import React from 'react'
import {
  Settings,
  Lock,
  Bell,
  Globe,
  FileText
} from 'lucide-react';


const SettingBlock = ({ icon: Icon, title, description, buttonText, onClick }) => (
  <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 flex justify-between items-start">
    <div className="mr-4">
      <p className="font-medium text-gray-800 text-base">{title}</p>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
    <button
      onClick={onClick}
      className="text-sm border border-gray-300 hover:bg-white text-gray-700 font-medium py-1.5 px-3 rounded-lg transition duration-150 flex-shrink-0"
    >
      {buttonText}
    </button>
  </div>
);

const Settings = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-800">Account settings</h2>
      <button className="text-green-600 hover:text-green-700 font-medium text-sm border border-green-200 bg-green-50 py-1 px-3 rounded-lg transition duration-150">
        Open settings
      </button>
    </div>
    <p className="text-gray-500 mb-6 text-sm">
      Control how you sign in and when AgriForge contacts you.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-3">
        <p className="font-semibold text-gray-700 flex items-center mb-1">
          <Lock className="w-4 h-4 mr-2 text-green-600" /> Sign-in & security
        </p>
        <SettingBlock
          title="Update security"
          description="Change password, enable OTP for safe login."
          buttonText="Update security"
        />
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-gray-700 flex items-center mb-1">
          <Bell className="w-4 h-4 mr-2 text-green-600" /> Notifications
        </p>
        <SettingBlock
          title="Adjust alerts"
          description="Choose SMS, WhatsApp, or email for alerts."
          buttonText="Adjust alerts"
        />
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-gray-700 flex items-center mb-1">
          <Globe className="w-4 h-4 mr-2 text-green-600" /> Language & region
        </p>
        <SettingBlock
          title="Set preferences"
          description="Select your preferred language and currency."
          buttonText="Set preferences"
        />
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-gray-700 flex items-center mb-1">
          <FileText className="w-4 h-4 mr-2 text-green-600" /> Data & privacy
        </p>
        <SettingBlock
          title="Review privacy"
          description="Download your data or close your account."
          buttonText="Review privacy"
        />
      </div>
    </div>
  </div>
);
export default Settings