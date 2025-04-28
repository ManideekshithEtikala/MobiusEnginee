import React from 'react';

const HowWeWork = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-medium text-start mb-12 text-[#0649E7]" style={{fontFamily:'DM Sans'}}>
          How we work?
        </h2>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pt-8" style={{fontFamily:'DM Sans'}}>
          {/* Step 1 */}
          <div className="flex flex-col items-start text-center">
            <div className=" border-1 border-[#0649E7] w-18 h-18 rounded-full text-black flex items-center justify-center text-2xl font-bold mb-4">
              1
            </div>
            <span className='w-full border-1 border-[#0649E7]'></span>
            <h3 className="mt-3 text-xl font-medium mb-2 text-[#0649E7] text-start" style={{fontFamily:'DM Sans'}}>Submit Intake Form</h3>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start text-center">
          <div className=" border-1 border-[#0649E7] w-18 h-18 rounded-full text-black flex items-center justify-center text-2xl font-bold mb-4">

              2
            </div>
            <span className='w-full border-1 border-[#0649E7]'></span>
            <h3 className="mt-3 text-xl font-medium mb-2 text-[#0649E7] text-start" style={{fontFamily:'DM Sans'}}>
              We do the search and curation for list of jobs
            </h3>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start text-center">
          <div className=" border-1 border-[#0649E7] w-18 h-18 rounded-full text-black flex items-center justify-center text-2xl font-bold mb-4">

              3
            </div>
            <span className='w-full border-1 border-[#0649E7]'></span>
            <h3 className="mt-3 text-xl font-medium mb-2 text-[#0649E7] text-start" style={{fontFamily:'DM Sans'}}>
              You approve, we do the tedious part (applying)
            </h3>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-start text-center">
          <div className=" border-1 border-[#0649E7] w-18 h-18 rounded-full text-black flex items-center justify-center text-2xl font-bold mb-4">

              4
            </div>
            <span className='w-full border-1 border-[#0649E7]'></span>
            <h3 className="mt-3 text-xl font-medium mb-2 text-[#0649E7] text-start" style={{fontFamily:'DM Sans'}}>
              You get the interviews
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;