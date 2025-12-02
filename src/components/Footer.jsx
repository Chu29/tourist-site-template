import Button from "./Button";
import { Logo, SocialMediaIcons } from "./Header";

const Footer = () => {
  return (
    <footer className="bg-[#304F47] text-white">
      <div className="flex flex-col items-center justify-center gap-5 lg:max-w-[80vw] sm:max-w-[90vw] w-full mx-auto">
        <div className="flex flex-wrap justify-between w-full p-5">
          <div className="flex flex-col items-start gap-10 ">
            <h1 className="text-[40px] font-bold">
              If you have any question, <br /> Let us help you!
            </h1>
            <p className="flex flex-col font-light">
              If you have any questions or would like <br /> to book a tour with
              us, please don't hesitate <br /> to contact us.{" "}
              <span>
                Phone: +250 788 123 456 <br />
                Email: info@rwandatourism.com <br />
                Address: Kigali, Rwanda
              </span>
            </p>
            <div className="">
              <h1 className="font-bold">Subscribe to our newspaper</h1>
              <div className="flex gap-3">
                <div className="flex items-center bg-white px-5  rounded-lg h-12">
                  <input
                    type="text"
                    placeholder="Input your email here"
                    className="max-w-[300px] outline-0 text-black"
                  />
                </div>
                <Button className="bg-[#C7923E] py-2 px-4 rounded-lg">
                  <img
                    className="max-w-5 w-full"
                    src="./images/send.svg"
                    alt=""
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[50%] ">
            <div className="mb-20">
              <div className="flex gap-40 mb-5">
                <Logo />
                <SocialMediaIcons />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="flex flex-wrap gap-40 font-extralight text-[16px]">
              <ul className="flex flex-col gap-3">
                <li>Home</li>
                <li>Testimonials</li>
                <li>Destinations</li>
                <li>SignIn</li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li>About Us</li>
                <li>Packages</li>
                <li>Events</li>
                <li>Gallery</li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li>Our Team</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div>Copyright Africa Wizzy Safari 2022</div>
      </div>
    </footer>
  );
};

export default Footer;
