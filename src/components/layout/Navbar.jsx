import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "/assets/images/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop: Nav Links + Theme Toggle (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500"
          >
            About
          </Link>
          <Link
            to="/resume"
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500"
          >
            Contact
          </Link>
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
        <div
          className="md:hidden absolute w-1/3 right-0 top-24 py-4 px-6 text-left bg-fuchsia-600/30 backdrop-blur-md backdrop-saturate-150 rounded-bl-lg border border-white/20 shadow-lg"
        >
          <Link
            to="/"
            className="block py-2 text-gray-800 dark:text-gray-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-800 dark:text-gray-200"
          >
            About
          </Link>
          <Link
            to="/resume"
            className="block py-2 text-gray-800 dark:text-gray-200"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-800 dark:text-gray-200"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
