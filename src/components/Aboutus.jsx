import React from "react";
import AshwinImage from "/public/ashwin.png"; // Add actual image path
import NicoleImage from "/public/Nicole.png"; // Add actual image path
import BgImage from "/public/bgaboutus.png"; // Background image
import { FaLinkedinIn } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section
      className="w-full min-h-screen px-8 py-12 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
        <div className="max-w-5xl mx-auto mt-4">

      {/* Title */}
      <h2 className="max-w-5xl flex flex-col items-start justify-center text-white text-4xl font-semibold mb-12 text-start" style={{ fontFamily: 'DM Sans' }}>
        About Us
      </h2>

      {/* Members */}
      <div className="flex flex-col items-center justify-center space-y-20 max-w-5xl">

        {/* Ashwin */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-8 md:space-y-0 w-full justify-center">
          {/* Profile Image */}
          <div className="relative">
            <img
              src={AshwinImage}
              alt="Ashwin"
              className="w-44 h-44 object-cover rounded-full bg-white"
            />
            {/* LinkedIn Icon */}
            <div className="absolute bottom-0 right-0 border-1 border-white backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
              <FaLinkedinIn className=" text-xl text-white " />
            </div>
          </div>

          {/* Description */}
          <div className="text-white text-sm md:text-base font-dmsans text-center md:text-left max-w-lg">
            <p className="font-light text-sm" style={{ fontFamily: 'DM Sans' }}>
              <span className="font-bold">Ashwin</span> is the founder of mobiusengine.ai. He is an accomplished
              senior executive with over 20 years of experience in cloud infrastructure and financial services.
              With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles.
              Ashwin is an MBA holder from Yale University.
            </p>
            <br />
            <p>
              Ashwin’s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
            </p>
          </div>
        </div>

        {/* Nicole */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 justify-center space-y-8 md:space-y-0 w-full">
          {/* Profile Image */}
          <div className="relative">
            <img
              src={NicoleImage}
              alt="Nicole"
              className="w-44 h-44 object-cover rounded-full bg-white"
            />
            {/* LinkedIn Icon */}
            <div className="absolute bottom-0 right-0 border-1 border-white backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
              <FaLinkedinIn className=" text-xl text-white " />
            </div>
          </div>

          {/* Description */}
          <div className="text-white text-sm md:text-base font-light text-center md:text-left max-w-lg">
            <p className="font-light text-sm" style={{ fontFamily: 'DM Sans' }}>
              <span className="font-bold">Nicole</span> is an Executive coach at Mobius specializing in resume builds and career advisory.
            </p>
            <br />
            <p>
              With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI–driven product strategy,
              she has seen firsthand how the proper positioning opens doors. She takes a targeted, results–driven approach to
              help clients confidently stand out and land roles that truly match their skills and potential.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Links */}
      <div className="flex flex-col items-center justify-center mt-16 space-y-2 text-white text-sm font-dmsans">
        <div className="flex flex-col items-start justify-start space-y-2">
        <a href="#" className="hover:underline text-start">
          Learn more about our Board of Advisors ↗
        </a>
        <a href="#" className="hover:underline">
          Follow us on our Linkedin page ↗
        </a>
        </div>
       
      </div>

        </div>
    </section>
  );
};

export default AboutUs;
