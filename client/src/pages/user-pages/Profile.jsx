import React from 'react';
import {
  Settings,
} from 'lucide-react';

// Import the sub-components
import ProfileCard from './ProfileCard';
import ProfileNav from './ProfileNav';
import ShippingBilling from './ShippingBilling';
import UserOrders from './orders/UserOrders';

// --- Data Mockup (to populate the components) ---
const userData = {
  name: "Ramesh Kumar",
  title: "Vegetable farmer",
  memberSince: "Since 2025",
  deliveries: 4,
  onTime: "98%",
  farmAddress: "Ramesh Kumar, Village Road, Plot 17",
  billingDetails: "UPI •••• 9201",
};

const orders = [
  {
    orderId: "AF-48293",
    items: "NPK fertilizer 50kg, Tomato seeds pack",
    amount: "64.20",
    status: "Delivered on 03 Mar",
  },
  {
    orderId: "AF-48177",
    items: "Carbon steel shovel, Hand sprayer",
    amount: "42.10",
    status: "On the way",
  }, {
    orderId: "AF-48177",
    items: "Carbon steel shovel, Hand sprayer",
    amount: "42.10",
    status: "On the way",
  }, {
    orderId: "AF-48177",
    items: "Carbon steel shovel, Hand sprayer",
    amount: "42.10",
    status: "On the way",
  },
];

// --- Main Component ---
const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 hidden md:block">
          My Profile
        </h1>
        
        {/* Main Grid Layout - Sidebar and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Column (Profile Card & Navigation) */}
          <div className="lg:col-span-1">
            <ProfileCard userData={userData} />
            <div className="mt-6 hidden lg:block">
              <ProfileNav />
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Mobile Navigation (only visible on small screens) */}
            <div className="lg:hidden">
              <ProfileNav isMobile={true} />
            </div>

            {/* Order History */}
            <UserOrders orders={orders} />

            {/* Account Settings */}
            <Settings />

            {/* Shipping & Billing (Details section) */}
            <ShippingBilling userData={userData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;