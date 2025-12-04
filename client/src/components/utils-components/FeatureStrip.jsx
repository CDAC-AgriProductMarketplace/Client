import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import "../../../src/index.css";

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Growth Regulators', 
    href: '/growth-regulators',
    submenu: [
      { name: 'Humic Acid', href: '/growth-regulators/humic-acid' },
      { name: 'Yeild booster', href: '/growth-regulators/yield-booster' },
      { name: 'Zymes', href: '/growth-regulators/zymes' },
      { name: 'pH Balancer', href: '/growth-regulators/ph-balancer' },
    ]
  },
  { name: 'Organic Farming', href: '/organic-farming',
    submenu: [
      { name: 'Bio Fertilizers', href: '/organic-farming/bio-fertilizers' },
      { name: 'Bio Pesticides', href: '/organic-farming/bio-pesticides' },
      { name: 'Organic Nutrients', href: '/organic-farming/organic-nutrients' },
      { name: 'Neem Oil', href: '/organic-farming/neem-oil' },
      { name: 'Vermi Compost', href: '/organic-farming/vermi-compost' },
    ]
  },
  { name: 'Seeds', href: '/seeds', submenu: [
    { name: 'Vegetable Seeds', href: '/seeds/vegetable-seeds' },
    { name: 'Flower Seeds', href: '/seeds/flower-seeds' },
  ]},
  { name: 'Fertilizers', href: '/fertilizers', 
    submenu: [
    { name: 'Bio-Fertilizers', href: '/fertilizers/bio-fertilizers' },
    { name: 'Organic Fertilizers', href: '/fertilizers/organic-fertilizers' },
    { name: 'Liquid Fertilizers', href: '/fertilizers/liquid-fertilizers' },
  ]},
  { name: 'Irrigation', href: '/irrigation' },
  { name: 'Gardening', href: '/gardening' },
  { name: 'Crop Protection', href: '/crop-protection' }
];

export default function FeatureStrip() {
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const handleMobileSubmenuToggle = (name) => {
    setOpenMobileSubmenu(openMobileSubmenu === name ? null : name);
  };

  const getSpecialLinkClass = (special) => {
    switch (special) {
      case 'clearance':
        return 'text-red-500 font-bold';
      case 'deals':
        return 'bg-red-600 text-white font-bold px-3 py-1 rounded';
      default:
        return 'hover:text-primary';
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">

        {/* Mobile button */}
        <div className="lg:hidden flex justify-between items-center py-3">
          <span className="font-bold text-gray-700">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-center space-x-6  text-medium font-medium text-gray-600 h-14">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative h-full flex items-center"
              onMouseEnter={() => link.submenu && setOpenDesktopMenu(link.name)}
              onMouseLeave={() => link.submenu && setOpenDesktopMenu(null)}
            >
              <Link to={link.href} className={`flex items-center ${getSpecialLinkClass(link.special)}`}>
                {link.name}
                {link.submenu && <ChevronDownIcon className="h-4 w-4 ml-1" />}
              </Link>

              {link.submenu && openDesktopMenu === link.name && (
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg border w-48 py-2 z-50">
                  {link.submenu.map((sub) => (
                    <li key={sub.name}>
                      <Link to={sub.href} className="block px-4 py-2 hover:bg-surface-light hover:text-white">
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => handleMobileSubmenuToggle(link.name)}
                        className={`w-full flex justify-between items-center px-3 py-2 ${getSpecialLinkClass(link.special)}`}
                      >
                        {link.name}
                        <ChevronDownIcon className={`h-5 w-5 ${openMobileSubmenu === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileSubmenu === link.name && (
                        <ul className="pl-6 pt-2 space-y-1">
                          {link.submenu.map((s) => (
                            <li key={s.name}>
                              <Link to={s.href} className="block px-3 py-2 hover:bg-gray-100 hover:text-primary">
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link to={link.href} className={`block px-3 py-2 ${getSpecialLinkClass(link.special)}`}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}
