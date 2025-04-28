import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
const PricingCard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-[#0649E7] rounded-xl shadow-lg text-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Advance</h2>
          <p className="text-lg mb-6">
            Top-tier support for serious job hunters.
          </p>

          <div className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheck className="text-white bg-green-500 rounded-full mt-1 p-1" />
                <span className="ml-2">Everything in Plug</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-white bg-green-500 rounded-full mt-1 p-1" />

                <span className="ml-2">Custom Resumes & Cover Letters</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-white bg-green-500 rounded-full mt-1 p-1" />

                <span className="ml-2">
                  20 fully customized applications/week
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-white bg-green-500 rounded-full mt-1 p-1" />

                <span className="ml-2">Help with complex job searches</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-white bg-green-500 rounded-full mt-1 p-1" />

                <span className="ml-2">
                  Access to senior resume experts, Founder & Exec Coaches
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-between md:w-1/3">
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">
              $150<span className="text-lg font-medium"> /week</span>
            </p>
          </div>
          <button className="w-full flex items-center justify-center bg-white hover:bg-blue-700 text-[#0649E7] font-medium py-3 rounded-full transition-colors">
            Get Started <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
