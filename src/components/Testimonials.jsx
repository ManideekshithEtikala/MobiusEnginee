import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="w-full px-8 py-16 space-y-12 bg-white" style={{ fontFamily: 'DM Sans' }}>
        <div className="max-w-5xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium text-start mb-12 text-[#0649E7]" style={{fontFamily:'DM Sans'}}>
        What our clients have to say
      </h2>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="w-72 h-80 flex flex-col items-center justify-between rounded-2xl border border-[#d4d4d4] overflow-hidden bg-white shadow-sm"
          >
            {/* Video Area */}
            <div className="w-full h-2/3 bg-[#f5f5f5] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#0649E7] flex items-center justify-center">

              <FaPlay className="text-white text-xl" />
            </div>
            </div>

            {/* Text Area */}
            <div className="w-full bg-[#0649E7] text-white flex flex-col justify-between px-4 py-6 relative">
              <p className="text-sm font-dmsans leading-relaxed">
                Holly is a <span className="font-bold">senior executive</span> who got
                over <span className="font-bold">10 job interviews</span> and an offer she accepted
              </p>
              <div className="absolute bottom-4 right-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <FaArrowRight className="text-[#0649E7] text-sm" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-20 items-center justify-center mt-14">
        <button className="px-6 py-3 border-2 border-[#0649E7] text-[#0649E7] rounded-full font-medium text-sm hover:bg-blue-50 transition font-dmsans">
          More customer testimonials ↗
        </button>
        <button className="px-6 py-3 bg-[#0649E7] text-white rounded-full font-medium text-sm hover:bg-blue-800 transition font-dmsans">
          Get Started →
        </button>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
