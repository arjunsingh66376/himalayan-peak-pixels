import React from "react";
import bgImage from "../../src/assets/Contactusbg.jpg";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";

const NAV_HEIGHT = 64; // px (adjust to your nav's actual height)

const Contact = () => (
  <div className="w-full min-h-screen flex flex-col">
    <Navigation />

    <section
      className="relative flex items-center justify-center w-full min-h-[85vh] overflow-hidden"
      style={{
        paddingTop: `${NAV_HEIGHT + 21}px`,
      }}
    >
      {/* Background image with subtle black overlay */}
      <img
        src={bgImage}
        alt="Nature Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: "none" }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.12)" }}
      />

      {/* Glass prism form */}
      <div className="relative z-10 w-full flex items-center justify-center pb-9">
        <form
          className="
            w-[85vw] max-w-[380px]
            p-5 md:p-7
            rounded-3xl
            bg-white/35
            backdrop-blur-2xl
            border border-white/40
            shadow-xl
            flex flex-col gap-5
          "
          style={{
            boxShadow: "0 6px 32px 6px rgba(32,136,92,0.12), 0 2px 8px 0 rgba(0,64,32,0.11)",
          }}
        >
          {/* Headings with #20C381 color instead of white */}
          <h2 className="text-2xl font-bold font-serif text-center mb-1 drop-shadow-lg"
              style={{ color: "#20C381" }}>
            Contact Us
          </h2>
          <p className="text-center mb-4 max-w-xs mx-auto text-base"
             style={{ color: "#20C381" }}>
            We’d love to connect with you! For sales, support, or just to say hello, reach out below.
          </p>
          <input
            type="text"
            className="h-11 px-4 bg-white/55 backdrop-blur border border-emerald-800/10 rounded-xl outline-none text-green-900 placeholder:text-green-700/65 focus:ring-2 focus:ring-green-400 transition"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="h-11 px-4 bg-white/55 backdrop-blur border border-emerald-800/10 rounded-xl outline-none text-green-900 placeholder:text-green-700/65 focus:ring-2 focus:ring-green-400 transition"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            className="h-11 px-4 bg-white/55 backdrop-blur border border-emerald-800/10 rounded-xl outline-none text-green-900 placeholder:text-green-700/65 focus:ring-2 focus:ring-green-400 transition"
            placeholder="Subject (optional)"
          />
          <textarea
            className="min-h-[72px] px-4 py-2 bg-white/55 backdrop-blur border border-emerald-800/10 rounded-xl outline-none text-green-900 placeholder:text-green-700/65 focus:ring-2 focus:ring-green-400 transition resize-none"
            placeholder="Message..."
            required
          />
          <button
            type="submit"
            className="
              mt-2 w-full
              bg-gradient-to-br from-green-600 via-emerald-500 to-green-400
              hover:from-emerald-800 hover:to-green-600
              text-white rounded-xl font-bold h-11 text-lg shadow-md
              shadow-emerald-900/20 border border-white/20
              transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    <Footer/>
  </div>
);

export default Contact;
