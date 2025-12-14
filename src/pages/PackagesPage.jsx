import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PackageCard from "../components/PackageCard";
import Title from "../components/Title";

const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header className="sticky top-0 z-50 bg-white shadow-md" />

      {/* Hero Section */}
      <section className="relative bg-[url('hero-bg.jpg')] bg-center bg-cover h-[70vh] md:h-[80vh] flex items-center justify-center text-center">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold mb-6">
            Tour Package
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white flex items-center justify-center gap-4">
            Home
            <span className="flex items-center gap-4 text-[#C7923E]">
              <img src="./images/arrow.svg" alt="arrow" className="w-6 h-6" />
              Tour Package
            </span>
          </p>
        </div>
      </section>

      {/* Packages Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl text-center mb-12">
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

        {/* Pagination Arrows */}
        <div className="container mx-auto max-w-7xl flex justify-between mt-16 px-4">
          <Button className="bg-white hover:bg-gray-100 border border-[#C7923E] text-[#C7923E] rounded-lg p-4 shadow-md transition">
            <img
              src="./images/angle-arrow-left.png"
              alt="Previous"
              className="w-6 h-6"
            />
          </Button>
          <Button className="bg-[#C7923E] hover:bg-[#b07c2e] text-white rounded-lg p-4 shadow-md transition">
            <img
              src="./images/angle-arrow-right.png"
              alt="Next"
              className="w-6 h-6"
            />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackagesPage;
