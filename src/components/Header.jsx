import { NavLink } from "react-router";
import Button from "./Button";

export const Logo = () => {
  return (
    <img
      className="block max-w-[100px] w-full"
      src="./logo.jpg"
      alt="Travel Logo"
    />
  );
};

export const Contact = () => {
  return (
    <div className="flex items-center gap-10 text-white text-[15px]">
      <span className="flex gap-1">
        <img src="./images/phone-icon.svg" alt="" />
        +250 784 688 641
      </span>
      <span className="flex gap-1">
        <img src="./images/email-icon.svg" alt="" />
        bbonteemma@gmail.com
      </span>
    </div>
  );
};

export const SocialMediaIcons = () => {
  return (
    <div className="flex gap-2">
      <img src="./images/facebook-icon.svg" alt="facebook" />
      <img src="./images/twitter-icon.svg" alt="twitter" />
      <img src="./images/linkedin-icon.svg" alt="linkedin" />
      <img src="./images/instagram-icon.svg" alt="instagram" />
    </div>
  );
};

export const NavBar = () => {
  return (
    <div className="flex items-center justify-around">
      <div className="flex items-center gap-5">
        <Logo />
        <div className="flex items-start max-w-[500px] w-full gap-5 text-[#000000B2] ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive
                ? "border-b-4 border-b-[#304F47] max-w-fit text-[#304F47]"
                : isPending
                ? "border-b-0"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive, isPending }) =>
              isActive
                ? "border-b-4 border-b-[#304F47] max-w-fit text-[#304F47]"
                : isPending
                ? "border-b-0"
                : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/tour-packages"
            className={({ isActive, isPending }) =>
              isActive
                ? "border-b-4 border-b-[#304F47] max-w-fit text-[#304F47]"
                : isPending
                ? "border-b-0"
                : ""
            }
          >
            Tour Package
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isActive
                ? "border-b-4 border-b-[#304F47] max-w-fit text-[#304F47]"
                : isPending
                ? "border-b-0"
                : ""
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive, isPending }) =>
              isActive
                ? "border-b-4 border-b-[#304F47] max-w-fit text-[#304F47]"
                : isPending
                ? "border-b-0"
                : ""
            }
          >
            Contact us
          </NavLink>
        </div>
      </div>
      <Button className="bg-[#C7923E] text-white rounded-lg px-6 py[11px] border border-[#304F47] w-40 h-[50px]">
        Sign In
      </Button>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <div className="bg-[#304F47] flex justify-around p-5">
        <Contact />
        <SocialMediaIcons />
      </div>
      <div>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
