import React from "react";
import Ebookdownload from "/public/Ebookdownload.png";
import { GoArrowDownLeft } from "react-icons/go";

const Head = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Ebookdownload;
    link.download = "HiringTrends2024-2025.png";
    link.click();
  };

  return (
    <main className="flex justify-center items-center w-full min-h-screen">
      <section className="w-[80%] flex flex-col md:flex-row items-center justify-center px-8 py-4 text-white">
        {/* Left Side Content */}
        <div className="w-2/3 flex flex-col justify-start items-start space-y-6 text-start md:text-left">
          <h1 className="text-6xl font-semibold leading-tight" style={{fontFamily:'Sora'}}>
            Land job interviews <br />
            <span className="text-[#0649E7]">10x </span>faster
          </h1>
          <p className="text-lg md:text-xl font-light max-w-md">
            Custom-built resumes that match your goals, keywords, and recruiter
            expectations.
          </p>
          <button className="bg-white text-blue-800 font-medium px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            Get Started →
          </button>
        </div>

        {/* Right Side E-Book and Download */}
        <div className="w-1/3 flex-1 flex flex-col justify-center items-center mt-10 md:mt-0 space-y-6 relative">
          {/* Ebook Image */}
          <div className="relative mt-4">
            <div className="w-[250px] h-[340px] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
              <img
                src={Ebookdownload}
                alt="Ebook"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Download Button */}
            <div
              className="absolute -bottom-7 -right-8 w-28 h-28 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/40 transition"
              onClick={handleDownload}
            >
              <div className="relative">
                <span className="w-14 h-14 flex items-center justify-center text-6xl">
                  📖
                </span>
                <div className="absolute w-5 h-5 bottom-2 left-1 flex items-center justify-center rounded-full bg-white">
                  <GoArrowDownLeft className="text-blue-600 text-md" />
                </div>
              </div>
            </div>
          </div>

          {/* Download Text */}
          <span className="text-white text-md font-light">
            Download Free E-Book
          </span>
        </div>
      </section>
    </main>
  );
};

export default Head;
