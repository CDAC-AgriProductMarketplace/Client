import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// SVG Icon components for clarity and reusability
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

export default function Footer() {
  const primaryColor = 'bg-[#01B763]';
  const footerLinkStyle = "hover:underline transition-colors duration-300";

  return (
    <footer className={`bg-primary text-white`}>
      <div className="container mx-auto px-4 py-12">
        {/* Adjusted grid for 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Column 1: Logo & Contact */}
          <div className="space-y-6">
            <Link to="/" className="inline-block d-flex d-flex-col align-items-center">
              <img src="/favicon.ico" alt="AgriForge Suppliers" className="h-12 bg-white p-2 rounded-md" />
            {/* <h3 className='text-primary'>AgriForge</h3> */}
            </Link>
            <address className="not-italic space-y-3 text-sm">
              <p className="flex items-start"><LocationIcon /><span className="ml-3">453 Hansen Court, Coomera, 4209, Hinjewadi, Pune</span></p>
              <p className="flex items-start"><PhoneIcon /><span className="ml-3">1300 005 032</span></p>
              <p className="flex items-start"><PhoneIcon /><span className="ml-3">07 5564 6626</span></p>
              <p className="flex items-start"><PhoneIcon /><span className="ml-3">0430 388 124</span></p>
              <p className="flex items-start"><MailIcon /><span className="ml-3">info@Pulsemedicalsupplies.com.au</span></p>
            </address>
          </div>

          {/* Column 2: My Account */}
          <div>
            <h3 className="text-lg font-bold mb-4">MY ACCOUNT</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/my-account" className={footerLinkStyle}>My Account</Link></li>
              <li><Link to="/product-return" className={footerLinkStyle}>Product Return</Link></li>
              <li><Link to="/privacy-policy" className={footerLinkStyle}>Privacy Policy</Link></li>
              <li><Link to="/collection-statement" className={footerLinkStyle}>Collection Statement</Link></li>
              <li><Link to="/terms-and-conditions" className={footerLinkStyle}>Term and Conditions</Link></li>
              <li><Link to="/faqs" className={footerLinkStyle}>FAQs</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about-us" className={footerLinkStyle}>About Us</Link></li>
              <li><Link to="/resources" className={footerLinkStyle}>Resources</Link></li>
              <li><Link to="/blog" className={footerLinkStyle}>Blog</Link></li>
              <li><Link to="/shipping" className={footerLinkStyle}>Shipping</Link></li>
              <li><Link to="/trademarks" className={footerLinkStyle}>Trademarks, Copyrights and Restrictions</Link></li>
              <li><Link to="/contact-us" className={footerLinkStyle}>Contact us</Link></li>
              <li><Link to="/events" className={footerLinkStyle}>Events</Link></li>
              <li><Link to="/request-catalogue" className={footerLinkStyle}>Request For Catalogue</Link></li>
            </ul>
          </div>
           <div>
              <h3 className="font-bold mb-3">Follow us on</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="p-2 bg-white/20 rounded-full hover:bg-white/40"><FaFacebookF /></a>
                <a href="#" aria-label="Instagram" className="p-2 bg-white/20 rounded-full hover:bg-white/40"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn" className="p-2 bg-white/20 rounded-full hover:bg-white/40"><FaLinkedinIn /></a>
              </div>
            </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-center items-center text-center">
          <p className="text-sm">Copyright &copy; 2025. All rights reserved by Pulse Medical Supplies.</p>
        </div>
      </div>
    </footer>
  );
}
