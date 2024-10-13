import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow">
      <nav className="flex justify-between items-center px-4 py-3">
        <a href="/" className="text-2xl font-bold">
          Logo
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-lg text-gray-700 hover:text-blue-500">
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <RxHamburgerMenu className="text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-lg text-gray-700 hover:text-blue-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
