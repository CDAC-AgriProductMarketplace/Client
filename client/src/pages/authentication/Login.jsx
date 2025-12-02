import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from './../../components/reusable-components/form/LoginForm';
import RegisterForm from "../../components/reusable-components/form/RegisterForm";

// ---------------- Main React Component ---------------------

export default function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const [notification, setNotification] = useState(null);

  return (
    <div className="bg-gray-50 min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="container mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-gray-600">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">»</span>
          <span>My Account</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome!</h1>
            <p className="text-gray-600 mb-6">
              Login to access your Customer Account
            </p>

            {/* Tabs */}
            <div className="flex border-b mb-6">
              <button
                onClick={() => {
                  setActiveTab("login");
                  setNotification(null);
                }}
                className={`py-3 px-4 font-bold text-lg transition-colors ${
                  activeTab === "login"
                    ? "border-b-2 border-[#01B763] text-[#01B763]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Log In
              </button>

              <button
                onClick={() => {
                  setActiveTab("register");
                  setNotification(null);
                }}
                className={`py-3 px-4 font-bold text-lg transition-colors ${
                  activeTab === "register"
                    ? "border-b-2 border-[#01B763] text-[#01B763]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Register
              </button>
            </div>

            {/* Notification */}
            {notification && (
              <div
                className={`p-3 rounded-md mb-4 text-sm ${
                  notification.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {notification.message}
              </div>
            )}

            {/* Tabs Switch */}
            {activeTab === "login" ? (
              <LoginForm setNotification={setNotification} />
            ) : (
              <RegisterForm setNotification={setNotification} />
            )}
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block relative aspect-square rounded-lg overflow-hidden">
            <img
              src="https://joyamedicalsupplies.com.au/wp-content/uploads/2025/09/Free-Shipping-log-in-page.jpg"
              alt="Free shipping"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
