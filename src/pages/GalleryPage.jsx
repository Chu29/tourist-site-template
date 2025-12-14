import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header className="sticky top-0 z-50 bg-white shadow-md" />

      {/* Hero Section */}
      <section className="relative bg-[url('./images/hero-bg.jpg')] bg-center bg-cover h-[70vh] md:h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white flex items-center justify-center gap-4">
            Home
            <span className="flex items-center gap-4 text-[#C7923E]">
              <img src="./images/arrow.svg" alt="arrow" className="w-6 h-6" />
              Gallery
            </span>
          </p>
        </div>
      </section>

      {/* Instagram Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 text-right">
        <Button className="bg-[#C7923E] hover:bg-[#b07c2e] text-white rounded-lg px-8 py-4 text-lg font-medium shadow-lg transition">
          Open Instagram
        </Button>
      </div>

      {/* True Masonry Gallery using CSS Columns (Pinterest-style, like your screenshot) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
          {/* All 25 images in a single column flow - varied heights create natural masonry */}
          <img src="./images/img-1.png" alt="Gorilla in forest" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-2.png" alt="Giraffe" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-3.png" alt="Mountain view" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-4.png" alt="Tourists on boat" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-5.png" alt="Safari lodge" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-6.png" alt="Canopy walk" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-7.png" alt="Kayaking" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-8.png" alt="Lake view" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-9.png" alt="Church" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-10.png" alt="Cycling" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-11.png" alt="Sunset" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-12.png" alt="Elephant" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-13.png" alt="Dancing" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-14.png" alt="Traditional hut" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-15.png" alt="Group tour" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-17.png" alt="Wildlife" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-18.png" alt="Landscape" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-19.png" alt="People" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-20.png" alt="Big landscape" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-21.png" alt="Activity" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-22.png" alt="Animal" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-23.png" alt="Culture" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-24.png" alt="Safari vehicle" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
          <img src="./images/img-25.png" alt="Group photo" className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow object-cover" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;