import CallToAction from "../components/CallToAction";
import DestinationCard from "../components/DestinationCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PackageCard from "../components/PackageCard";
import TestimonialCard from "../components/TestimonialCard";
import Title from "../components/Title";
import WhyUsCard from "../components/WhyUsCard";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero className="bg-[url('./images/hero-bg.jpg')] bg-center bg-cover h-screen w-full bg-no-repeat flex flex-col gap-15">
        <div className="mt-[25vh] ml-[5%]  w-full mx-auto">
          <h1 className="text-7xl text-white flex flex-col gap-2 font-bold">
            Experience the beauty <br /> of Rwanda with us{" "}
            <span className="text-xl font-extralight ">
              Discover the Land of a Thousand Hills
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-between max-w-[90vw] w-full mx-auto">
          <img src="./images/left-back-button.svg" alt="" />
          <img src="./images/right-back-button.svg" alt="" />
        </div>
        {/* <div className="absolute inset-0 bg-black opacity-30 h-screen"></div> */}
      </Hero>
      <CallToAction />
    </div>
  );
};

export default HomePage;
