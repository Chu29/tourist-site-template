import Button from "../components/Button";
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
      <Header className="sticky top-0 bg-white" />
      <Hero className="bg-[url('./images/hero-bg.jpg')] bg-center bg-cover h-screen w-full bg-no-repeat flex flex-col gap-15">
        <div className="max-w-[90vw] mt-[25vh] ml-[5%]  w-full mx-auto">
          <h1 className="text-7xl text-white flex flex-col gap-2 font-bold">
            Experience the beauty <br /> of Rwanda with us{" "}
            <span className="text-xl font-extralight">
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
      <CallToAction className="flex flex-wrap items-center justify-evenly bg-[#304F47] max-w-[75vw] mx-auto rounded-lg p-5 mt-[-50px] mb-[50px]">
        <div className="flex flex-wrap justify-center gap-5">
          <span className="flex items-center bg-white px-5  rounded-lg h-12">
            <input
              type="text"
              placeholder="Search activities or Destinations"
              className="max-w-[300px] w-full outline-0"
            />
            <img src="./images/search.svg" alt="" />
          </span>
          <div className="flex gap-5 text-[#9A9AB0]">
            <p className="flex flex-col items-start justify-center text-[12px]">
              Guests
              <span className="flex items-center gap-2 text-[18px] text-white">
                2 Adult
                <img src="./images/chevron-bottom.svg" alt="" />
              </span>
            </p>
            <p className="flex flex-col items-start justify-center text-[12px]">
              Date
              <span className="flex items-center gap-2 text-[18px] text-white">
                12-13 April 2021
                <img src="./images/chevron-bottom.svg" alt="" />
              </span>
            </p>
            <p className="flex flex-col items-start justify-center text-[12px]">
              Package
              <span className="flex items-center gap-2 text-[18px] text-white">
                All
                <img src="./images/chevron-bottom.svg" alt="" />
              </span>
            </p>
          </div>
        </div>
        <Button className="bg-[#C7923E] text-white rounded-lg px-6 py[11px] border-0 w-40 h-[50px]">
          Book Now
        </Button>
      </CallToAction>
      <section>
        <Title
          title="Choose your Package"
          description="Select your Best Package for your Travel"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 gap-4 justify-items-center lg:max-w-[70vw] sm:max-w-[90vw] w-full mx-auto">
          <PackageCard
            path="./images/img-pkg-1.png"
            title="Akagera National Park"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            path="./images/img-pkg-2.png"
            title="Bisoke Hike"
            description="The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."
          />
          <PackageCard
            path="./images/img-pkg-3.png"
            title="Lake Kivu trip"
            description="A trip to Lake Kivu can be a truly unique and memorable experience. "
          />
          <PackageCard
            path="./images/img-pkg-1.png"
            title="Akagera National Park"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            path="./images/img-pkg-2.png"
            title="Bisoke Hike"
            description="The Bisoke hike is a popular mountain trek in Rwanda, located in the Volcanoes National Park. It is one of the most challenging hikes in the park."
          />
          <PackageCard
            path="./images/img-pkg-3.png"
            title="Lake Kivu trip"
            description="A trip to Lake Kivu can be a truly unique and memorable experience. "
          />
        </div>
      </section>
      <section>
        <Title
          title="Popular Destinations"
          description="Select Our Best Popular Destinations"
        />
        <div className="flex flex-wrap items-center justify-center gap-5 lg:max-w-[80vw] sm:max-w-[90vw] w-full mx-auto">
          <DestinationCard
            path="./images/img-dst-1.png"
            title="Kigali"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
          />
          <DestinationCard
            path="./images/img-dst-2.png"
            title="Huye"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
          />
          <DestinationCard
            path="./images/img-dst-3.png"
            title="Rubavu"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
          />
          <DestinationCard
            path="./images/img-dst-2.png"
            title="Musanze"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
          />
        </div>
      </section>
      <section>
        <Title
          title="Why us?"
          description="Why Travel with Africa wizzy Safari"
        />
        <div className="flex flex-wrap items-center justify-center gap-5 lg:max-w-[80vw] sm:max-w-[90vw] w-full mx-auto ">
          <WhyUsCard
            path="./images/CarOutlined.svg"
            description="100+ tours around Rwanda"
          />
          <WhyUsCard
            path="./images/CheckCircleOutlined.svg"
            description="100% Trusted travel agency"
          />
          <WhyUsCard
            path="./images/ContactsOutlined.svg"
            description="10 years of travel experience"
          />
          <WhyUsCard
            path="./images/LikeOutlined.svg"
            description="90% of travelers are happy"
          />
        </div>
      </section>
      <section>
        <Title
          title="Our Traveler Say?"
          description="What our clients say about us"
        />
        <div className="flex flex-wrap items-center justify-center gap-5 lg:max-w-[80vw] sm:max-w-[90vw] w-full mx-auto mb-40">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
