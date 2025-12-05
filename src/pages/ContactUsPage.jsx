import ContactCard from "../components/ContactCard";
import ContactFrom from "../components/ContactFrom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const ContactUsPage = () => {
  return (
    <div>
      <Header />
      <Hero className="bg-[url('./images/hero-bg.jpg')] bg-center bg-cover h-[550px] w-full bg-no-repeat flex flex-col gap-15">
        <div className="flex flex-col items-center max-w-[500px] mx-auto my-auto">
          <h1 className="text-white font-bold text-[64px]">Contact Us</h1>
          <p className="flex gap-5 text-[32px] text-white">
            Home{" "}
            <span className="flex gap-5 text-[#c7923e]">
              {" "}
              <img src="./images/arrow.svg" alt="" /> Contact Us
            </span>
          </p>
        </div>
      </Hero>
      <h1 className="text-center flex flex-col gap-5 text-[62px] font-bold">
        Get in Touch{" "}
        <span className=" text-left font-light text-[20px] max-w-[90vw] w-300px mx-auto text-[#515151] ">
          We would love to hear from you! If you have any comments or
          suggestions about our <br /> website or our tours, please don't
          hesitate to get in touch. We are always looking for ways to improve
          and make <br /> your travel experience even better.
        </span>
      </h1>
      <ContactFrom />
      <div className="max-w-[90vw] lg:max-w-[1000px] mx-auto p-10 md:flex gap-5 justify-between">
        <ContactCard title="Social media">
        <div className="flex gap-2">
          <img
            className="block max-w-[30px] w-full "
            src="./images/sm-fb.png"
            alt="facebook"
          />
          <img
            className="block max-w-[30px] w-full"
            src="./images/sm-twitter.png"
            alt="twitter"
          />
          <img
            className="block max-w-[30px] w-full"
            src="./images/sm-linkedin.png"
            alt="linkedin"
          />
          <img
            className="block max-w-[30px] w-full"
            src="./images/sm-ig.png"
            alt="instagram"
          />
        </div>
      </ContactCard>
      <ContactCard title="Email & Phone">
        <div className="flex flex-col gap-2 text-white text-[15px]">
          <span className="flex gap-1 text-[#304F47]">
            <img src="./images/Vector-1.svg" alt="" />
            +250 784 688 641
          </span>
          <span className="flex gap-1 text-[#304F47]">
            <img src="./images/Vector.svg" alt="" />
            bbonteemma@gmail.com
          </span>
        </div>
      </ContactCard>
      <ContactCard title="Address">
        <p className="flex flex-col text-[#304F47]">
          <span className="text-sm">kk 600 st</span>Kigali, Rwanda
        </p>
      </ContactCard>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
