// components/FeaturesGrid.js

import React from "react";
import { GiLockedFortress, GiHeadset, GiFamilyHouse } from "react-icons/gi";

const FeaturesGrid = () => {
  return (
    <div
      className="
        grid 
        grid-cols-2 
        gap-4 
        p-4 
        md:flex 
        md:flex-row 
        md:gap-8 
        md:p-8 
        bg-gray-100 
        items-stretch 
        justify-center
      "
    >
      {/* Feature 1: Reliable */}
      <div
        className="
          w-full 
          p-4 
          bg-white 
          rounded-lg 
          text-center 
          shadow-md 
          transition-shadow 
          duration-300 
          hover:shadow-lg
          flex 
          flex-col 
          items-center 
          justify-center
        "
      >
        <img
          src="/asset/quality.svg"
          alt="Reliable"
          width={40}
          height={40}
          className="text-primary"
        />
        <p className="font-semibold text-lg mt-2">Reliable</p>
        <p className="text-gray-500 text-sm">Over 9k+ products</p>
      </div>

      {/* Feature 2: Home Delivery */}
      <div
        className="
          w-full 
          p-4 
          bg-white 
          rounded-lg 
          text-center 
          shadow-md 
          transition-shadow 
          duration-300 
          hover:shadow-lg
          flex 
          flex-col 
          items-center 
          justify-center
        "
      >
        <img
          src="/asset/person_deilivery.svg"
          alt="Home Delivery"
          width={40}
          height={40}
          className="text-primary"
        />
        <p className="font-semibold text-lg mt-2">Home Delivery</p>
        <p className="text-gray-500 text-sm">
          Free delivery to your home <span className="text-red-500">*</span>
        </p>
      </div>

      {/* Feature 3: Secure Payment */}
      <div
        className="
          w-full 
          p-4 
          bg-white 
          rounded-lg 
          text-center 
          shadow-md 
          transition-shadow 
          duration-300 
          hover:shadow-lg
          flex 
          flex-col 
          items-center 
          justify-center
        "
      >
        <GiLockedFortress className="text-4xl md:text-5xl text-primary" />
        <p className="font-semibold text-lg mt-2">Secure Payment</p>
        <p className="text-gray-500 text-sm">100% Secure Payments</p>
      </div>

      {/* Feature 4: After-hours Support */}
      <div
        className="
          w-full 
          p-4 
          bg-white 
          rounded-lg 
          text-center 
          shadow-md 
          transition-shadow 
          duration-300 
          hover:shadow-lg
          flex 
          flex-col 
          items-center 
          justify-center
        "
      >
        <GiHeadset className="text-4xl md:text-5xl text-primary" />
        <p className="font-semibold text-lg mt-2">After-hours Support</p>
        <p className="text-gray-500 text-sm">
          Available via live chat and emails
        </p>
      </div>

      {/* Feature 5: Family Owned Business */}
      <div
        className="
          w-full 
          p-4 
          bg-white 
          rounded-lg 
          text-center 
          shadow-md 
          transition-shadow 
          duration-300 
          hover:shadow-lg
          flex 
          flex-col 
          items-center 
          justify-center
        "
      >
        <GiFamilyHouse className="text-4xl md:text-5xl text-primary" />
        <p className="font-semibold text-lg mt-2">
          A family owned Australian business
        </p>
      </div>
    </div>
  );
};

export default FeaturesGrid;
