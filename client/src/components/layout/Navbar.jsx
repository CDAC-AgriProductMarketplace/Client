import React from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PhoneIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
     <header className="w-full shadow-md  relative z-50">
      {/* ====== TOP BAR ====== */}
      <div className={`bg-primary text-white py-2 text-xs sm:text-sm`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 text-center sm:text-left">
          <p className="mb-1 sm:mb-0">Welcome to AgriForge Supplies - you&apos;ll love the way we care for you!</p>
          <Link to="/request-catalogue" className="hover:underline">
            Request Catalogue
          </Link>
        </div>
      </div>

      {/* ====== MAIN HEADER ====== */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/favicon.ico"
              alt="AgriForge Suppliers "
              width={160} // Set a base width
              height={48}  // Set a base height
              className="h-10 sm:h-12 w-auto" // Tailwind classes for responsive sizing
             
            />
            <h3 className='text-primary'>AgriForge</h3>
          </Link>

          {/* Search Bar (Centered on Desktop) */}
          <div className="w-full lg:flex-grow lg:max-w-xl lg:mx-auto relative order-3 lg:order-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-lg py-2 pl-4 pr-12 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#01B763]/50"
            />
            <button aria-label="Search" className={`absolute right-0 top-0 h-full px-4 rounded-r-lg bg-primary text-white flex items-center justify-center hover:bg-opacity-90`}>
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>

          {/* --- MODIFIED SECTION --- */}
          {/* Desktop Icons (Hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-700 order-2 lg:order-3">
            <div className="flex items-center space-x-2">
              <PhoneIcon className={`h-6 w-6 text-primary cursor-pointer`} />
              <div>
                <p className="text-sm">Need Help?</p>
                <p className="font-bold text-base whitespace-nowrap">96 0492 6181</p>
              </div>
            </div>
            <Link to="/cart" aria-label="Shopping Cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingBagIcon className="h-6 w-6 text-primary cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <UserIcon className="h-6 w-6    white cursor-pointer" />
              <span className="font-semibold whitespace-nowrap">Log In & Register</span>
            </Link>
          </div>

          {/* Mobile Icons (Replaces Hamburger Menu) */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-4 order-2 lg:order-3">
             <a href="tel:9604926181" aria-label="Call us" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <PhoneIcon className={`h-6 w-6 text-primary`} />
             </a>
             <Link to="/cart" aria-label="Shopping Cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                <ShoppingBagIcon className={`h-6 w-6 text-primary`}  />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
             </Link>
             <Link to="/login" aria-label="Log in or register" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <UserIcon className={`h-6 w-6 text-primary`}  />
             </Link>
          </div>
          
        </div>
      </div>
    </header>
  )
}
export default Navbar