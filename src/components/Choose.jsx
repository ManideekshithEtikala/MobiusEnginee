import React from "react";
import { FaHandshake, FaUser, FaStar } from "react-icons/fa";

const Choose = () => {
  return (
    <section className="w-full flex justify-center px-8 py-16" style={{ fontFamily: 'DM Sans' }}>
      <div className="w-full max-w-5xl rounded-lg p-8 bg-[#F8FAFF]">
        {/* Title */}
        <h2  className="text-2xl md:text-4xl font-medium text-start mb-12 text-[#0649E7]" style={{fontFamily:'DM Sans'}}>
          Why Choose Us?
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center border border-blue-300 rounded-2xl p-6 w-full md:w-1/3 space-y-4">
            <FaHandshake className="text-blue-900 text-5xl" />
            <h3 className="text-blue-900 text-lg font-semibold font-sora">Tried, Tested, Trusted</h3>
            <p className="text-[#0A0A0A] text-sm font-dmsans">
              Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center border border-blue-300 rounded-2xl p-6 w-full md:w-1/3 space-y-4">
            <FaUser className="text-blue-900 text-5xl" />
            <h3 className="text-blue-900 text-lg font-semibold font-sora">Real People, Real Help</h3>
            <p className="text-[#0A0A0A] text-sm font-dmsans">
              A hands-on team that actually cares — guiding you through every twist in your career path.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center border border-blue-300 rounded-2xl p-6 w-full md:w-1/3 space-y-4">
            <FaStar className="text-blue-900 text-5xl" />
            <h3 className="text-blue-900 text-lg font-semibold font-sora">Beat the Line</h3>
            <p className="text-[#0A0A0A] text-sm font-dmsans">
              We search, shortlist, and apply for you, so your name shows up first — every single day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
