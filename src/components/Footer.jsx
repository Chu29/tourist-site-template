import Button from "./Button";
import { Logo, SocialMediaIcons } from "./Header";

const Footer = () => {
  return (
    <footer className="bg-[#304F47] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Contact + Newsletter */}
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              If you have any question, <br className="hidden sm:block" /> Let
              us help you!
            </h1>

            <div className="space-y-4 font-light text-lg">
              <p>
                If you have any questions or would like to book a tour with us,
                please don't hesitate to contact us.
              </p>
              <div className="space-y-2">
                <p>Phone: +250 788 123 456</p>
                <p>Email: info@rwandatourism.com</p>
                <p>Address: Kigali, Rwanda</p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="max-w-md">
              <h2 className="font-bold text-xl mb-4">
                Subscribe to our newsletter
              </h2>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Input your email here"
                  className="flex-1 px-5 py-3 rounded-lg text-black bg-white outline-none"
                />
                <Button className="bg-[#C7923E] hover:bg-[#b07c2e] px-6 py-3 rounded-lg flex items-center justify-center">
                  <img src="./images/send.svg" alt="Send" className="w-6 h-6" />
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column: Logo, Description & Links */}
          <div className="flex flex-col gap-10">
            {/* Logo + Social + Description */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between gap-6">
                <Logo />
                <SocialMediaIcons />
              </div>
              <p className="text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            {/* Footer Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-lg">
              <ul className="flex flex-col gap-4">
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Home
                </li>
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Testimonials
                </li>
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Destinations
                </li>
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Sign In
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  About Us
                </li>
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Packages
                </li>
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Events
                </li>
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Gallery
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Our Team
                </li>
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Blog
                </li>
                <li className="hover:text-[#C7923E] cursor-pointer transition">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          Copyright © 2025 Africa Wizzy Safari.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
