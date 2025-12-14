import ContactCard from "../components/ContactCard";
import ContactFrom from "../components/ContactFrom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header className="sticky top-0 z-50 bg-white shadow-md" />

      {/* Hero Section */}
      <section className="relative bg-[url('/hero-bg.jpg')] bg-center bg-cover h-[70vh] md:h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white flex items-center justify-center gap-4">
            Home
            <span className="flex items-center gap-4 text-[#C7923E]">
              <img src="./images/arrow.svg" alt="arrow" className="w-6 h-6" />
              Contact Us
            </span>
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-[#515151] leading-relaxed max-w-4xl mx-auto">
            We would love to hear from you! If you have any comments or
            suggestions about our website or our tours, please don't hesitate to
            get in touch. We are always looking for ways to improve and make
            your travel experience even better.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto max-w-5xl">
          <ContactFrom />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-5xl">
          {/* Centered wrapper for the cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
              {/* Social Media Card */}
              <ContactCard title="Social media">
                <div className="flex gap-6 justify-center">
                  <img
                    className="w-8 h-8"
                    src="./images/sm-fb.png"
                    alt="Facebook"
                  />
                  <img
                    className="w-8 h-8"
                    src="./images/sm-twitter.png"
                    alt="Twitter"
                  />
                  <img
                    className="w-8 h-8"
                    src="./images/sm-linkedin.png"
                    alt="LinkedIn"
                  />
                  <img
                    className="w-8 h-8"
                    src="./images/sm-ig.png"
                    alt="Instagram"
                  />
                </div>
              </ContactCard>

              {/* Email & Phone Card */}
              <ContactCard title="Email & Phone">
                <div className="flex flex-col gap-4 text-lg justify-center">
                  <span className="flex items-center gap-3 text-[#304F47]">
                    <img
                      src="./images/Vector-1.svg"
                      alt="Phone"
                      className="w-5 h-5"
                    />
                    +250 784 688 641
                  </span>
                  <span className="flex items-center gap-3 text-[#304F47]">
                    <img
                      src="./images/Vector.svg"
                      alt="Email"
                      className="w-5 h-5"
                    />
                    bbonteemma@gmail.com
                  </span>
                </div>
              </ContactCard>

              {/* Address Card */}
              <ContactCard title="Address">
                <div className="flex flex-col text-lg text-[#304F47] justify-center">
                  <span className="block text-base">KK 600 St</span>
                  Kigali, Rwanda
                </div>
              </ContactCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
