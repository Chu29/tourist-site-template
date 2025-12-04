import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const GalleryPage = () => {
  return (
    <div>
      <Header />
      <Hero className="bg-[url('./images/hero-bg.jpg')] bg-center bg-cover h-[550px] w-full bg-no-repeat flex flex-col gap-15">
        <div className="flex flex-col items-center max-w-[500px] mx-auto my-auto">
          <h1 className="text-white font-bold text-[64px]">Gallery</h1>
          <p className="flex gap-5 text-[32px] text-white">
            Home{" "}
            <span className="flex gap-5 text-[#c7923e]">
              {" "}
              <img src="./images/arrow.svg" alt="" /> Gallery
            </span>
          </p>
        </div>
      </Hero>
      <div className="flex justify-end max-w-[90vw] w-full mx-auto my-20">
        <Button className="bg-[#C7923E] text-white rounded-lg px-6 py[11px] border  w-40 h-[50px] text-[15px]">
          Open Instagram
        </Button>
      </div>
      <section className="max-w-[90vw] w-full mx-auto grid grid-cols-1 gap-5 mb-20">
        <div className="flex items-center justify-center gap-2">
          <div className="flex flex-col items-start gap-2">
            <img src="./images/img-1.png" alt="" />
            <img src="./images/img-2.png" alt="" />
          </div>
          <img src="./images/img-3.png" alt="" />
          <div className="flex flex-col items-start gap-2">
            <img src="./images/img-4.png" alt="" />
            <img src="./images/img-5.png" alt="" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <img src="./images/img-6.png" alt="" />
            <div className="flex gap-2 justify-center">
              <img src="./images/img-7.png" alt="" />
              <img src="./images/img-8.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex flex-col gap-2">
            <img src="./images/img-9.png" alt="" />
            <div className="flex items-start gap-2">
              <img src="./images/img-10.png" alt="" />
              <img src="./images/img-11.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <img src="./images/img-12.png" alt="" />
            <img src="./images/img-13.png" alt="" />
          </div>
          <div className="flex items-start gap-2">
            <img src="./images/img-14.png" alt="" />
            <div className="flex flex-col gap-2 justify-center">
              <img src="./images/img-15.png" alt="" />
              <img src="./images/img-17.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex flex-col items-start gap-2">
            <img src="./images/img-18.png" alt="" />
            <img src="./images/img-19.png" alt="" />
          </div>
          <img src="./images/img-20.png" alt="" />
          <div className="flex flex-col items-start gap-2">
            <img src="./images/img-21.png" alt="" />
            <img src="./images/img-22.png" alt="" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <img src="./images/img-23.png" alt="" />
            <div className="flex gap-2 justify-center">
              <img src="./images/img-24.png" alt="" />
              <img src="./images/img-25.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
