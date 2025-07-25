import React from "react";

// Local assets (adjust paths if needed)
import herdImage from "../../src/assets/sheeps.jpg";
import womanGrain from "../../src/assets/Champavat.jpg";
import riceHarvest from "../../src/assets/womengroup.jpg";
import berries from "../../src/assets/berries.jpg";
import aboutHeroVideo from "../../src/assets/aboutus.mp4";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => (
  <div className="bg-[#FEF9C2] min-h-screen overflow-x-hidden flex flex-col min-h-screen">
    {/* Navigation */}
    <Navigation />

    <main className="flex-grow">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center w-full h-[70vh] md:h-[85vh] overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
          background: "#fffbe0",
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={aboutHeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4">
          <h1 className="text-4xl md:text-7xl font-black tracking-widest drop-shadow-lg mb-3 text-center">
            About Us
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl text-center font-semibold mt-2 drop-shadow">
            Nature. People. Care.<br className="hidden md:block" />
            <span className="font-normal">Bringing the soul of Himalayas to your home.</span>
          </p>
        </div>
      </section>

      {/* Whole Section Left with left margin */}
      <section className="py-8 md:py-14 w-full max-w-5xl mr-auto ml-[5%]">
        <div className="bg-white bg-opacity-70 rounded-xl shadow-lg px-6 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#386641] mb-4">
                From Himalayan Forests to You
              </h2>
              <p className="text-gray-700 text-lg mb-3">
                Himalayan Care delivers herbs, honey, pinecones, spices and more—both in raw and processed forms—straight from Uttarakhand's heartlands.
                <br />
                We ensure minimal intervention, <span className="font-semibold text-[#bc6c25]">maximum purity</span>.
              </p>
              <p className="text-gray-600">
                Our mission: preserve nature, empower Himalayan communities, and spark global wellness—without compromise on quality or sustainability.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={herdImage}
                alt="Shepherd with flock in the Himalayas"
                className="rounded-xl w-full max-w-[400px] h-[220px] object-cover shadow-md border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Whole Section Right with right margin */}
      <section className="py-8 md:py-14 w-full max-w-5xl ml-auto mr-[5%]">
        <div className="bg-white bg-opacity-70 rounded-xl shadow-lg px-6 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center">
              <img
                src={womanGrain}
                alt="Woman harvesting grain"
                className="rounded-xl w-full max-w-[400px] object-contain shadow-md border-4 border-white"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#386641] mb-4">
                Empowering Villages, Empowering Women
              </h2>
              <p className="text-gray-800 text-lg mb-3">
                Every purchase empowers women and youth in remote Uttarakhand villages. Your trust fuels training, income, and brighter futures.
              </p>
              <p className="text-gray-600">
                We create livelihood, skill-building, and rural self-reliance—one Himalayan product at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Whole Section Left with left margin */}
      <section className="py-8 md:py-14 w-full max-w-5xl mr-auto ml-[5%]">
        <div className="bg-white bg-opacity-70 rounded-xl shadow-lg px-6 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#386641] mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg mb-2">
                Rooted in the majestic Himalayan valleys, our journey blends generational wisdom with forward-looking responsibility.
                Inspired by long-held traditions, we unite nature's bounty with eco-harvesting, reaching you with the purest mountain essence.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={riceHarvest}
                alt="Women in rice field"
                className="rounded-xl w-full max-w-[400px] h-[220px] object-cover shadow-md border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Whole Section Right with right margin */}
      <section className="py-8 md:py-14 w-full max-w-5xl ml-auto mr-[5%]">
        <div className="bg-white bg-opacity-70 rounded-xl shadow-lg px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center">
              <img
                src={berries}
                alt="Himalayan wild berries"
                className="rounded-xl w-full max-w-[320px] h-[220px] object-cover shadow-md border-4 border-white"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#386641] mb-4">
                Direct From Nature's Lap
              </h2>
              <p className="text-gray-800 text-lg">
                From forest wildflowers to native berries and roots—every Himalayan Care product tells a story of ancient soils, careful hands, and natural potency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Values & Impact Section */}
      <section className="py-10 md:py-16 text-center bg-[#fffce2]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#386641] mb-6">
          Nature, Community, Integrity
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-white rounded-lg py-8 px-4 shadow-lg hover:scale-105 transition">
            <div className="text-4xl mb-2">🌿</div>
            <h3 className="font-semibold text-lg mb-1 tracking-wide text-[#bc6c25]">
              Locally Harvested
            </h3>
            <p className="text-gray-600">
              All ingredients come directly from Himalayan villages.
            </p>
          </div>
          <div className="bg-white rounded-lg py-8 px-4 shadow-lg hover:scale-105 transition">
            <div className="text-4xl mb-2">♻️</div>
            <h3 className="font-semibold text-lg mb-1 tracking-wide text-[#bc6c25]">
              Eco-Friendly Processing
            </h3>
            <p className="text-gray-600">
              We minimize chemicals and follow green practices.
            </p>
          </div>
          <div className="bg-white rounded-lg py-8 px-4 shadow-lg hover:scale-105 transition">
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="font-semibold text-lg mb-1 tracking-wide text-[#bc6c25]">
              Community Support
            </h3>
            <p className="text-gray-600">
              We provide income and training to the underprivileged.
            </p>
          </div>
        </div>
      </section>
    </main>

    {/* Footer */}
    <Footer />
  </div>
);

export default About;
