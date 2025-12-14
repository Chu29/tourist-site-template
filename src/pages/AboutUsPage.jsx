import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header className="sticky top-0 z-50 bg-white shadow-md" />

      {/* Hero Section - image right-aligned on desktop */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background Image - right-aligned on large screens, full on mobile */}
        <img
          src="about-hero.jpg"
          alt="Gorilla Trekking in Rwanda"
          className="absolute top-0 right-0 w-full lg:w-[45%] h-full object-cover z-1"
        />
        <div className="absolute top-0 right-0 bg-black/40 z-1 w-full lg:w-[45%] h-full" />

        {/* Text Content - left side */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white lg:text-black font-bold leading-tight">
              We are dedicated to <br className="hidden sm:block" /> providing
              the best <br className="hidden md:block" /> travel experience.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white lg:text-gray-800 font-extralight mt-6">
              Discover the Land of a Thousand Hills
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-32 lg:-mt-70 mb-80 px-4 sm:px-6 lg:px-8">
        <div className=" absolute bg-white rounded-xl shadow-2xl p-6 sm:p-4 max-w-4xl ml-auto mr-4 left-[22%]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[#9A9AB0]">
              <div className="flex flex-col text-left">
                <span className="text-xs">Guests</span>
                <span className="flex items-center gap-2 text-black text-lg mt-1">
                  2 Adults
                  <img
                    src="./images/chevron-bottom.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs">Date</span>
                <span className="flex items-center gap-2 text-black text-lg mt-1">
                  12-13 April 2021
                  <img
                    src="./images/chevron-bottom.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs">Package</span>
                <span className="flex items-center gap-2 text-black text-lg mt-1">
                  All
                  <img
                    src="./images/chevron-bottom.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                </span>
              </div>
            </div>

            <Button className="bg-[#304F47] hover:bg-[#243b34] text-white rounded-lg px-8 py-4 text-lg font-medium w-full lg:w-auto">
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Content Section - Alternating image/text */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Welcome to Africa Wizzy Safari
          </h2>
          <div className="w-24 h-2 bg-[#304F47] mx-auto mt-8" />
        </div>

        <div className="container mx-auto max-w-7xl space-y-20 lg:space-y-32">
          {/* Block 1: Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="./images/nyungwe-forest-lodge.png"
              alt="Nyungwe Forest Lodge"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
            <p className="text-lg lg:text-xl font-light leading-relaxed text-gray-700">
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          </div>

          {/* Block 2: Text left, Image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="text-lg lg:text-xl font-light leading-relaxed text-gray-700 lg:order-1 order-2">
              At Africa Wizzy Safari, we offer a wide range of tours and
              activities, including cultural and historical tours, wildlife
              safaris, mountain gorilla trekking, and more. Our experienced and
              knowledgeable guides will ensure that you have a safe and
              enjoyable experience while exploring the stunning landscapes and
              rich culture of Rwanda.
            </p>
            <img
              src="./images/3-days-nyunwe-national-park.png"
              alt="Nyungwe Canopy Walk"
              className="w-full h-auto rounded-lg shadow-xl object-cover lg:order-2 order-1"
            />
          </div>

          {/* Block 3: Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="./images/lake-kivu.png"
              alt="Lake Kivu Landscape"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
            <p className="text-lg lg:text-xl font-light leading-relaxed text-gray-700">
              We are proud to have received numerous awards and accolades for
              our commitment to excellence, including the RDD award and the
              Excellence award. Thank you for choosing Africa Wizzy Safari for
              your travel needs in Rwanda. We look forward to welcoming you on
              one of our tours soon!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
