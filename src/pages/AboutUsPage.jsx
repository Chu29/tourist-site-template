import Button from "../components/Button";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const AboutUsPage = () => {
  return (
    <div>
      <Header />
      <Hero className="flex h-screen w-full">
        <h1 className="text-7xl text-black flex flex-col gap-2 font-bold max-w-[90vw] mt-[25vh] ml-[5%]  w-full mx-auto leading-snug ">
          We are dedicated to <br /> providing the best <br /> travel
          experience.
          <span className="text-xl font-extralight">
            Discover the Land of a Thousand Hills
          </span>
        </h1>
        <img
          className="max-w-[650px] w-full h-dvh absolute top-0 right-0 z-[-1]"
          src="./images/about-hero.jpg"
          alt=""
        />
      </Hero>
      <CallToAction className="flex flex-wrap items-center w-[800px] justify-between bg-white mx-auto rounded-lg p-5 absolute left-[30vw] bottom-20">
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex gap-5 text-[#9A9AB0]">
            <p className="flex flex-col items-start justify-center text-[12px]">
              Guests
              <span className="flex items-center gap-2 text-[18px] text-black">
                2 Adult
                <img src="./images/chevron-bottom.svg" alt="" />
              </span>
            </p>
            <p className="flex flex-col items-start justify-center text-[12px]">
              Date
              <span className="flex items-center gap-2 text-[18px] text-black">
                12-13 April 2021
                <img src="./images/chevron-bottom.svg" alt="" />
              </span>
            </p>
            <p className="flex flex-col items-start justify-center text-[12px]">
              Package
              <span className="flex items-center gap-2 text-[18px] text-black">
                All
                <img src="./images/chevron-bottom.svg" alt="" />
              </span>
            </p>
          </div>
        </div>
        <Button className="bg-[#304F47] text-white rounded-lg px-6 py[11px] border-0 w-40 h-[50px]">
          Book Now
        </Button>
      </CallToAction>
      <section>
        <h1 className="text-center flex flex-col gap-5 text-[62px] font-bold">
          Welcome tom Africa Wizzy Safari{" "}
          <span className="border-b-8 border-[#304F47] mb-20 w-[10%] mx-auto"></span>
        </h1>
        <div className="grid grid-cols-1 gap-4 max-w-[90vw] w-full mx-auto items-center mb-5">
          <div className="grid lg:grid-cols-2 items-center mx-auto gap-8 grid-cols-1">
            <img src="./images/nyungwe-forest-lodge.png" alt="" />
            <p className="w-[500px] font-light leading-[200%]">
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 items-center mx-auto gap-8 grid-cols-1">
            <img
              className=" order-1"
              src="./images/3-days-nyunwe-national-park.png"
              alt=""
            />
            <p className="w-[500px] font-light leading-[200%]">
              At Africa Wizzy safari, we offer a wide range of tours and
              activities, including cultural and historical tours, wildlife
              safaris, mountain gorilla trekking, and more. Our experienced and
              knowledgeable guides will ensure that you have a safe and
              enjoyable experience while exploring the stunning landscapes and
              rich culture of Rwanda.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 items-center mx-auto gap-8 grid-cols-1">
            <img src="./images/lake-kivu.png" alt="" />
            <p className="w-[500px] font-light leading-[200%]">
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
