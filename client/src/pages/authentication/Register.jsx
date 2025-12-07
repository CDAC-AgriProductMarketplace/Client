import React from 'react'
import { useState } from 'react';
function Register() {
    const [role, setRole] = useState("buyer");
  return (
    
 <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-xl space-y-6">

        {/* Form Card */}
        <div className="bg-white shadow-md rounded-xl p-8 space-y-6">

          <h2 className="text-2xl font-semibold text-gray-800">
            Create your account
          </h2>

          <p className="text-gray-500">
            Join AgriForge to buy and sell agricultural products securely.
          </p>

          {/* Name Inputs */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          
            <input
              type="text"
              placeholder="First name"
              className="input-field border-2 rounded-xs"
            />
            <input
              type="text"
              placeholder="Last name"
              className="input-field border-2 rounded-xs"
            />
          </div>

          {/* Email */}
          <input type="email" placeholder="Email" className="input-field" />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone (optional)"
            className="input-field"
          />

          {/* Passwords */}
          <input type="password" placeholder="Password" className="input-field" />
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field"
          />

          {/* Role Selection */}
          <div className="space-y-2">
            <p className="text-gray-700 font-medium">I am registering as</p>

            <div className="flex gap-4">
              <button
                className={`flex-1 py-3 rounded-lg border ${
                  role === "buyer"
                    ? "bg-green-100 border-green-500 font-medium"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setRole("buyer")}
              >
                Buyer
              </button>

              <button
                className={`flex-1 py-3 rounded-lg border ${
                  role === "seller"
                    ? "bg-green-100 border-green-500 font-medium"
                    : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => setRole("seller")}
              >
                Seller
              </button>
            </div>
          </div>

          {/* Terms & Sign in */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>I agree to the Terms and Privacy Policy</span>
            </label>

            <a href="#" className="text-green-600 font-semibold">
              Sign in
            </a>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
            <span>👤</span> Create Account
          </button>
        </div>

        {/* Secure verification card */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Secure verification
          </h3>
          <p className="text-gray-600">
            We’ll verify your email or phone to protect your account.
          </p>

          <div className="mt-4 bg-yellow-100 text-yellow-800 p-4 rounded-lg flex gap-3">
            <span>📧</span>
            <p className="text-sm">
              After you register, check your inbox for a confirmation link.  
              If you chose phone, we’ll send a 6-digit code.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Register