import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white">
              Hackathon
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="/" className="text-gray-300 hover:text-white">
                Team
              </a>
              <a href="/" className="text-gray-300 hover:text-white">
                Contact
              </a>
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800"
          >
            Home
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Contact
          </a>
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;