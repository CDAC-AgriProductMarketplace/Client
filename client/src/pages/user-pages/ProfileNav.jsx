'use client';

import { useState } from 'react';
import {
  User,
  ShoppingBag,
  Settings,
  MapPin,
  Heart,
  Lightbulb,
} from 'lucide-react';

const NavLink = ({ icon: Icon, label, description, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left flex items-center p-3 rounded-lg transition duration-150 ${
      isActive
        ? 'bg-green-50 text-green-700 font-semibold'
        : 'text-gray-700 hover:bg-gray-50'
    }`}
  >
    <Icon className="w-5 h-5 mr-3" />
    <div>
      <p className="text-sm font-medium">{label}</p>
      {description && (
        <p className="text-xs text-gray-500 font-normal">{description}</p>
      )}
    </div>
  </button>
);

const ProfileNav = ({ isMobile = false }) => {
  // STATE to track active tab
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: User, label: "Profile overview", description: "View and update your basic info" },
    { icon: ShoppingBag, label: "Order history", description: "Track, download invoices" },
    { icon: Settings, label: "Account settings", description: "Login, alerts, preferences" },
    { icon: MapPin, label: "Shipping & billing", description: "Addresses and payment methods" },
    { icon: Heart, label: "Wishlist", description: "Save items for later" },
    { icon: Lightbulb, label: "Recommendations", description: "Based on your farm needs" },
  ];

  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-2 border border-gray-100 ${
        isMobile ? 'overflow-x-auto whitespace-nowrap' : 'space-y-1'
      }`}
    >
      {isMobile ? (
        // ------------------ MOBILE VIEW ------------------
        <div className="flex py-2">
          {navItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 px-2">
              <button
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl text-xs transition duration-150 ${
                  activeIndex === index
                    ? 'bg-green-50 text-primary font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5 mb-1" />
                {item.label.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>
      ) : (
        // ------------------ DESKTOP VIEW ------------------
        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              icon={item.icon}
              label={item.label}
              description={item.description}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </nav>
      )}
    </div>
  );
};

export default ProfileNav;
