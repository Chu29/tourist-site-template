import { useState } from "react";
import { NavLink } from "react-router";
import Button from "./Button";

export const Logo = () => {
  return (
    <img
      className="h-12 w-auto"
      src="./logo.jpg"
      alt="Travel Logo"
    />
  );
};

export const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white text-sm">
      <span className="flex items-center gap-2">
        <img src="./images/phone-icon.svg" alt="Phone" className="w-5 h-5" />
        +250 784 688 641
      </span>
      <span className="flex items-center gap-2">
        <img src="./images/email-icon.svg" alt="Email" className="w-5 h-5" />
        bbonteemma@gmail.com
      </span>
    </div>
  );
};

export const SocialMediaIcons = () => {
  return (
    <div className="flex gap-4">
      <img className="w-6 h-6" src="./images/facebook-icon.svg" alt="Facebook" />
      <img className="w-6 h-6" src="./images/twitter-icon.svg" alt="Twitter" />
      <img className="w-6 h-6" src="./images/linkedin-icon.svg" alt="LinkedIn" />
      <img className="w-6 h-6" src="./images/instagram-icon.svg" alt="Instagram" />
    </div>
  );
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // store all page routes in an array
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About" },
    { to: "/tour-packages", label: "Tour Package" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact-us", label: "Contact us" },
  ];

  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      {/* Logo + Desktop Nav */}
      <div className="flex items-center gap-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8 text-gray-700">
          {navLinks.map((link,index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-b-[#304F47] text-[#304F47] pb-1"
                  : "hover:text-[#304F47] pb-1"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Right side: Search + Sign In (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        <img src="./images/search.svg" alt="Search" className="w-6 h-6 cursor-pointer" />
        <Button className="bg-[#C7923E] hover:bg-[#b07c2e] text-white rounded-lg px-6 py-3">
          Sign In
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-8 h-8 text-[#304F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 pt-20 flex flex-col gap-8">
          <nav className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#304F47] font-semibold border-b-2 border-[#304F47]" : "text-gray-700"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-6 pt-8 border-t">
            <div className="flex justify-center">
              <img src="./images/search.svg" alt="Search" className="w-6 h-6" />
            </div>
            <Button className="bg-[#C7923E] hover:bg-[#b07c2e] text-white rounded-lg py-3 w-full">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ className = "" }) => {
  return (
    <header className={`${className} w-full`}>
      {/* Top Bar: Contact + Social */}
      <div className="bg-[#304F47] py-3">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Contact />
          <SocialMediaIcons />
        </div>
      </div>

      {/* Main Navbar */}
      <NavBar />
    </header>
  );
};

export default Header;