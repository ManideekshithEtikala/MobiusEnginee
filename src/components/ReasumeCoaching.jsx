import React from "react";
import {  FaCheckCircle } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
const ResumeCoaching = () => {
  return (
    <div className="flex flex-col items-center w-full px-6 md:px-12 py-16 bg-white">
      
      {/* Top Section */}
      <div className="max-w-5xl w-full text-left mb-12 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0649E7] mb-2 font-sora" style={{ fontFamily: 'DM Sans' }}>
          Resume Building & Coaching
        </h2>
        <p className="text-sm md:text-base text-[#0649E7] font-dmsans" style={{ fontFamily: 'DM Sans' }}>
          Let's talk about where you're headed — and how your resume can get you there. <br />
          <span className="text-[#0649E7] cursor-pointer font-semibold">Schedule a call to get started.</span> 
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl rounded-xl p-6 justify-center">
        
        {/* Resume Rebuild Card */}
        <div className="flex flex-col border border-[#0649E7] rounded-2xl text-[#0649E7] p-6 w-full md:w-1/2 space-y-4">
        <div>
            
        </div>
          <h3 className=" text-xl font-semibold" style={{ fontFamily: 'DM Sans' }}>Resume Rebuild</h3>
          <p className=" text-sm font-dmsans">
            Crafted for senior to VP-level professionals ready for their next big step.
          </p>
          <p className=" text-3xl font-bold">$1000 <span className="text-base font-normal">one time</span></p>

          {/* Features */}
          <ul className="space-y-2 text-[#0649E7]">
            {[
              "3× 30–min coaching",
              "Focused on storytelling, not just formatting",
              "Analyst + full application team on Pacific hours",
              "Tailored to your target industry, company, or role",
              "Direct work with our co-founder (ex–Google, JP Morgan)",
              "Executive coaching from UC Berkeley alum with 10+ yrs experience",
              "Resume Rebuild portfolio available upon request"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm" style={{ fontFamily: 'DM Sans' }}>
                <FaCheckCircle className="text-green-500 mt-1" /> {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4 bg-blue-600 text-white rounded-full px-6 py-2 font-sora flex items-center justify-start gap-2 text-sm hover:bg-blue-700 transition w-fit">
          <button className="w-fit">
            Get Started →
          </button>

          </div>
        </div>

        {/* Interview Prep Card */}
        <div className="flex flex-col border border-[#0649E7] rounded-2xl text-[#0649E7] p-6 w-full md:w-1/2 space-y-4">
          <h3 className="text-[#0649E7] text-xl font-semibold font-sora"  style={{ fontFamily: 'DM Sans' }}>Interview Prep</h3>
          <p className="text-[#0649E7] text-sm font-dmsans"  style={{ fontFamily: 'DM Sans' }}>
            Two sessions to sharpen your story, confidence, and clarity — fast.
          </p>
          <p className="text-[#0649E7] text-3xl font-bold">$500 <span className="text-base font-normal">one time</span></p>

          {/* Features */}
          <ul className="space-y-2 text-[#0649E7]">
            {[
              "2× 45–min live coaching with our co-founder",
              "Real–time, practical feedback",
              "Build clarity, empathy & executive presence",
              "For senior and leadership roles — technical & non–technical"
            ].map((item, index) => (
              <li key={index}className="flex items-start gap-2 text-sm" style={{ fontFamily: 'DM Sans' }}>
                <FaCheckCircle className="text-green-500 mt-1" /> {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4 bg-blue-600 text-white rounded-full px-6 py-2 font-sora flex items-center justify-start gap-2 text-sm hover:bg-blue-700 transition w-fit">
          <button className="w-fit">
            Get Started →
          </button>

          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="w-full max-w-5xl mt-20" style={{ fontFamily: 'DM Sans' }}>
        <div className="bg-[#0649E7] text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-left">
            <p className="text-lg font-semibold mb-2" style={{ fontFamily: 'DM Sans' }}>STILL HAVE DOUBTS?</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-semibold font-sora mb-2" style={{ fontFamily: 'DM Sans' }}>Contact Us</h3>
          </div>
          <button className="bg-white text-[#0649E7] rounded-full p-6 mt-6 md:mt-0 hover:bg-gray-100 transition">
            <MdArrowForward className="text-4xl" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ResumeCoaching;
