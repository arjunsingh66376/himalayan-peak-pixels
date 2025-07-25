import React from "react";

const About = () => {
  return (
    // Edit and UNCOMMENT BELOW for a full About page (replace the /* ... */ lines with these updated sections)

    <div className="bg-[#FEF9C2]">
      {/* Hero Section with embedded video */}
      <section className="w-full h-[90vh] overflow-hidden relative flex items-center justify-center" style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)", // V-shape for modern hero
      }}>
        <iframe
          src="https://www.youtube.com/embed/Rk6_hdRtJOE?autoplay=1&mute=1&controls=0&loop=1&playlist=Rk6_hdRtJOE"
          className="w-full h-full absolute inset-0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="About Us Video"
          allowFullScreen
        ></iframe>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-semibold mb-8 drop-shadow-lg tracking-wide">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Images Row (nature themed team) */}
      <section className="flex justify-center gap-4 px-4 flex-wrap mb-10">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=360&q=80" alt="team1" className="rounded-lg w-60 h-40 object-cover" />
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=360&q=80" alt="team2" className="rounded-lg w-60 h-40 object-cover" />
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=360&q=80" alt="team3" className="rounded-lg w-60 h-40 object-cover" />
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=360&q=80" alt="team4" className="rounded-lg w-60 h-40 object-cover" />
      </section>

      {/* Section 1 */}
      <section className="grid md:grid-cols-2 gap-10 px-6 py-10 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-4">We deliver Uttarakhand’s natural resources with care</h2>
          <p>
            Himalayan Care brings you herbs, honey, pinecones, spices and more — both in raw and processed forms.
            We ensure minimal intervention and maximum purity.
          </p>
        </div>
        <div>
          <p>
            Our mission is to preserve nature while making it accessible globally. We use non-harmful chemicals
            only where absolutely necessary, safeguarding both your health and the environment.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="grid md:grid-cols-2 gap-10 px-6 py-10 max-w-6xl mx-auto">
        <div>
          <img
            src="https://images.unsplash.com/photo-1465101178521-c1a9136a07b7?auto=format&fit=crop&w=600&q=80"
            alt="Founder"
            className="rounded-lg w-full h-64 object-cover"
          />
          <p className="text-center italic mt-2">“Spreading Himalayan goodness, one product at a time.” <br />— Founder, Himalayan Care</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Empowering Villages</h2>
          <p>
            Choosing us helps create livelihood for women in remote villages and unemployed youth of Uttarakhand.
            Every purchase fuels local employment and self-reliance.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-10 px-6 py-10 max-w-6xl mx-auto items-center">
        <img
          src="https://images.unsplash.com/photo-1519681393-3f8fc3ad1b5b?auto=format&fit=crop&w=600&q=80"
          alt="Our Story"
          className="rounded-lg w-full h-96 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p>
            It all started deep within the Himalayan valleys, where nature's bounty surrounds the daily lives of locals.
            Inspired by traditions, our venture blends natural harvesting with sustainable practices to deliver you the purest essence of the mountains.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl font-semibold mb-6">We help the Himalayas grow with us</h2>
        <p className="max-w-2xl mx-auto mb-10">
          From forest to your home — every step is sustainable and responsible.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl mb-2">🌿</div>
            <h3 className="font-semibold text-lg mb-1">Locally Harvested</h3>
            <p>All ingredients are sourced directly from Himalayan villages.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">♻️</div>
            <h3 className="font-semibold text-lg mb-1">Eco-Friendly Processing</h3>
            <p>We minimize chemical use and follow green practices.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="font-semibold text-lg mb-1">Community Support</h3>
            <p>We provide income and training to underprivileged locals.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

