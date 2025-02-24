import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "/assets/images/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <a
          href="#"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop: Nav Links + Theme Toggle (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#hero"
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500"
          >
            About
          </a>
          <a
            href="#resume"
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500"
          >
            Resume
          </a>
          <a
            href="#portfolio"
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile: Theme Toggle + Hamburger Menu */}
        <div className="flex md:hidden items-center space-x-8">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden absolute w-full left-0 top-20 py-4 px-6 bg-gray-900 text-white shadow-lg border-t border-gray-700">
          <a
            href="#hero"
            className="block py-2 text-gray-200 hover:text-primary-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-200 hover:text-primary-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#resume"
            className="block py-2 text-gray-200 hover:text-primary-400"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <a
            href="#portfolio"
            className="block py-2 text-gray-200 hover:text-primary-400"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-200 hover:text-primary-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
