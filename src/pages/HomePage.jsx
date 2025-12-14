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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header className="sticky top-0 z-50 bg-white shadow-md" />

      {/* Hero Section */}
      <section className="relative bg-[url('hero-bg.jpg')] bg-center bg-cover bg-no-repeat h-screen flex flex-col justify-between">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Headline - centered on all screens */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-start justify-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
            Experience the beauty <br className="hidden sm:block" /> of Rwanda
            with us
            <span className="block text-lg sm:text-xl md:text-2xl font-extralight mt-4">
              Discover the Land of a Thousand Hills
            </span>
          </h1>
        </div>

        {/* Carousel arrows - hidden on very small screens, centered container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-8 hidden sm:flex justify-between">
          <img
            src="./images/left-back-button.svg"
            alt="Previous"
            className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer"
          />
          <img
            src="./images/right-back-button.svg"
            alt="Next"
            className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer"
          />
        </div>
      </section>

      {/* Call to Action / Search Bar - already well-centered */}
      <section className="relative z-20 -mt-12 mb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#304F47] rounded-xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search input + filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex items-center bg-white rounded-lg px-4 py-3 flex-1 min-w-0">
                <input
                  type="text"
                  placeholder="Search activities or Destinations"
                  className="w-full outline-none text-gray-800"
                />
                <img
                  src="./images/search.svg"
                  alt="Search"
                  className="w-5 h-5 ml-2"
                />
              </div>

              {/* Guests, Date, Package - stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#9A9AB0]">
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-xs">Guests</span>
                  <span className="flex items-center justify-center sm:justify-start gap-2 text-white text-lg">
                    2 Adult
                    <img
                      src="./images/chevron-bottom.svg"
                      alt=""
                      className="w-4 h-4"
                    />
                  </span>
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-xs">Date</span>
                  <span className="flex items-center justify-center sm:justify-start gap-2 text-white text-lg">
                    12-13 April 2021
                    <img
                      src="./images/chevron-bottom.svg"
                      alt=""
                      className="w-4 h-4"
                    />
                  </span>
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-xs">Package</span>
                  <span className="flex items-center justify-center sm:justify-start gap-2 text-white text-lg">
                    All
                    <img
                      src="./images/chevron-bottom.svg"
                      alt=""
                      className="w-4 h-4"
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <Button className="bg-[#C7923E] hover:bg-[#b07c2e] text-white rounded-lg px-8 py-4 text-lg font-medium w-full lg:w-auto">
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* All content sections now use justify-center for perfect centering on mobile */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <Title
            title="Choose your Package"
            description="Select your Best Package for your Travel"
          />
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
              description="A trip to Lake Kivu can be a truly unique and memorable experience."
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
              description="A trip to Lake Kivu can be a truly unique and memorable experience."
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <Title
            title="Popular Destinations"
            description="Select Our Best Popular Destinations"
          />
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
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
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <Title
            title="Why us?"
            description="Why Travel with Africa wizzy Safari"
          />
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
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
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <Title
            title="Our Traveler Say?"
            description="What our clients say about us"
          />
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
