import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PackageCard from "../components/PackageCard";
import Title from "../components/Title";

const PackagesPage = () => {
  return (
    <div>
      <Header />
      <Hero className="bg-[url('./images/hero-bg.jpg')] bg-center bg-cover h-[550px] w-full bg-no-repeat flex flex-col gap-15">
        <div className="flex flex-col items-center max-w-[500px] mx-auto my-auto">
          <h1 className="text-white font-bold text-[64px]">Tour Package</h1>
          <p className="flex gap-5 text-[32px] text-white">
            Home{" "}
            <span className="flex gap-5 text-[#c7923e]">
              {" "}
              <img src="./images/arrow.svg" alt="" /> Tour Package
            </span>
          </p>
        </div>
      </Hero>
      <section>
        <Title
          title="Choose your Package"
          description="Select your Best Package for your Travel"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 gap-4 justify-items-center lg:max-w-[70vw] sm:max-w-[90vw] w-full mx-auto mb-5">
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
      </section>
      <div className="flex justify-between lg:max-w-[70vw] sm:max-w-[90vw] w-full mx-auto mb-5">
        <Button className="bg-white border border-[#C7923E] py-2 px-4 rounded-lg">
          <img src="./images/angle-arrow-left.png" alt="" />
        </Button>
        <Button className="bg-[#C7923E] py-2 px-4 rounded-lg">
          <img src="./images/angle-arrow-right.png" alt="" />
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default PackagesPage;
