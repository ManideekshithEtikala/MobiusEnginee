import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-12 px-6 md:px-12 font-sans max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Column - Logo and Address */}
        <div className="flex flex-col items-start justify-start mb-6 col-span-2">
        <div className="flex space-y-1 flex-col items-start px-2">
          {/* Background Blob (big white shape) */}

          <div className="relative w-[80px] h-[60px]">
            {/* First SVG */}
            <svg
              width="26"
              className="absolute top-0 left-1"
              height="31"
              viewBox="0 0 18 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6975 26.1584C17.5713 26.1321 17.5061 26.1168 17.5061 26.1168C17.4215 26.0974 17.33 26.0766 17.2343 26.0544C15.6118 25.6814 12.525 24.9658 11.3199 24.547C9.37843 23.3239 7.01542 21.6931 4.80495 19.7863C3.33639 18.5202 2.11328 16.9879 1.26459 15.2434C0.547648 13.7679 0.108051 12.1939 0.241178 9.47589C0.407587 6.09224 5.02544 2.98038 7.31357 1.8488C7.40925 1.79749 7.51049 1.7448 7.61449 1.68933C10.2382 0.475925 13.9685 0.0571289 15.2346 0.0571289C15.3165 0.0571289 15.4205 0.0585155 15.5439 0.061289C15.1293 0.62708 13.6302 2.78624 13.1545 5.04941C12.5998 7.68422 12.1838 8.79361 12.3225 11.1511C12.4612 13.5085 12.4612 19.7489 17.3148 25.7119L17.6975 26.1584Z"
                fill="#0649E7"
              />
            </svg>

            {/* Second SVG */}
            <svg
            className="absolute -top-2 left-3"
              width="64"
              height="30"
              viewBox="0 0 64 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.8703 29.8605C46.9372 28.9161 40.7994 25.6254 35.8307 22.5676C30.4224 19.2395 22.3793 15.0792 22.3793 15.0792L20.1605 14.1085C14.7675 11.4127 10.0886 11.0937 8.54379 11.0618C8.42037 11.0591 8.31636 11.0577 8.23454 11.0577C6.96845 11.0577 3.23811 11.4765 0.614388 12.6899C3.4059 11.2033 9.14425 8.08033 12.0314 6.2623C15.7757 3.90484 21.4613 0.854004 26.7309 0.854004C28.9788 0.854004 31.457 1.31302 33.5828 1.86494C35.6754 2.40854 37.7056 3.16848 39.6484 4.12117C43.8295 6.17217 50.7119 9.30343 54.3271 10.0758C58.0547 10.8705 61.0404 12.6164 62.3855 13.6356C62.5616 13.7687 62.7225 13.9227 62.8611 14.0932L62.8556 14.0974C66.0326 19.4655 54.9997 26.7639 48.8703 29.8605Z"
                fill="#0649E7"
              />
            </svg>
            {/* Third SVG (shine/accent) */}
            <svg
            className="absolute top-1 left-4"
              width="64"
              height="36"
              viewBox="0 0 64 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.0157 25.1286C62.5082 26.9314 58.7168 31.2303 47.6229 34.0038C40.2731 35.8412 32.861 35.4668 27.4665 34.5751C24.1217 34.0218 20.8823 32.9582 17.8439 31.4536C14.9761 30.0322 11.6785 28.3542 10.6661 27.6941C8.86337 26.5154 5.67386 24.5739 4.21778 23.8112C3.61454 23.495 2.1543 22.7032 0.319641 21.5481C1.52472 21.9669 4.61161 22.6824 6.2341 23.0554C6.32979 23.0776 6.42131 23.0984 6.50591 23.1179C6.50591 23.1179 6.57108 23.1331 6.69728 23.1608C8.56522 23.5519 23.9414 26.3115 44.6414 15.9761C44.7162 15.9387 44.7925 15.8999 44.8702 15.861C50.9996 12.7644 62.0325 5.46599 58.8555 0.0979101L58.861 0.09375C58.9484 0.200529 59.0274 0.312856 59.0968 0.432116C59.3089 0.794056 59.5447 1.26416 59.6875 1.69267C59.9094 2.3583 61.9992 17.5931 63.0157 25.1286Z"
                fill="#0649E7"
              />
            </svg>
          </div>

            <h1 className="text-2xl font-bold text-[#0649E7] font-sora" style={{ fontFamily: 'DM Sans' }}>
              MobiusEngine
            </h1>
        </div>
        <div className="flex items-start justify-between text-[#0649E7] px-2 py-4">
            <div className="flex flex-col items-start justify-start mb-6 max-w-1/2">
                <span className="underline">Address</span>
                <p>1875 Mission St Ste 103 #450
                San Francisco, CA 94103</p>
            </div>
            <div  className="flex flex-col items-start justify-start mb-6 px-4 max-w-1/2">
                <span className="underline">Email</span>
                <p className="underline">finance@mobiusengine.ai</p>
            </div>
            <div className="flex flex-col items-start justify-start mb-6 px-4 max-w-1/2">
                <span  className="underline">Telephone</span>
                <p>650-889-6026</p>
            </div>
        </div>
        </div>

        {/* Right Column - Social Links and Legal */}
        <div className="flex flex-col items-end col-span-1">
          {/* Social Icons - Placeholder circles */}
          <div className="flex space-x-4 mb-8 md:mb-0">
            <div className="w-10 h-10 rounded-full border-1 border-[#0649E7] flex items-center justify-center">
              <FaLinkedin className="text-[#0649E7]" />
            </div>
            <div className="w-10 h-10 rounded-full border-1 border-[#0649E7] flex items-center justify-center">
              <FaLinkedin className="text-[#0649E7]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




