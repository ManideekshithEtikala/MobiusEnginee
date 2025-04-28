import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);

  const toggleMore = () => setMoreOpen((prev) => !prev);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 text-white">
      {/* Left: Logo */}
      <div className="flex space-x-1">
        {/* Background Blob (big white shape) */}

        <div className="relative w-[80px] h-[60px]">
          {/* First SVG */}
          <svg
            className="absolute top-0 left-1"
            width="26"
            height="31"
            viewBox="0 0 18 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0084 27.4525C17.8784 27.4253 17.8113 27.4096 17.8113 27.4096C17.7241 27.3896 17.6298 27.3682 17.5312 27.3453C15.8597 26.961 12.6795 26.2238 11.438 25.7924C9.43787 24.5323 7.00343 22.8522 4.72614 20.8878C3.21319 19.5834 1.95311 18.0047 1.07876 16.2075C0.340145 14.6874 -0.112741 13.0658 0.0244108 10.2657C0.19585 6.77973 4.9533 3.57381 7.31059 2.40802C7.40917 2.35516 7.51346 2.30087 7.62061 2.24372C10.3236 0.993643 14.1667 0.562187 15.4711 0.562187C15.5554 0.562187 15.6626 0.563616 15.7897 0.566473C15.3625 1.14937 13.8182 3.3738 13.3281 5.70537C12.7567 8.41983 12.3281 9.56277 12.4709 11.9915C12.6138 14.4202 12.6138 20.8492 17.6141 26.9925L18.0084 27.4525Z"
              fill="#FEFEFE"
            />
          </svg>

          {/* Second SVG */}
          <svg
            className="absolute -top-2 left-3"
            width="66"
            height="30"
            viewBox="0 0 66 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.3351 29.9339C48.3436 28.961 42.0203 25.5708 36.9014 22.4206C31.3296 18.9918 23.0434 14.7058 23.0434 14.7058L20.7575 13.7057C15.2014 10.9284 10.3811 10.5998 8.78959 10.567C8.66244 10.5641 8.55529 10.5627 8.471 10.5627C7.16663 10.5627 3.32353 10.9941 0.620499 12.2442C3.4964 10.7127 9.40821 7.49533 12.3827 5.62235C16.2401 3.19363 22.0976 0.0505676 27.5265 0.0505676C29.8424 0.0505676 32.3954 0.523455 34.5855 1.09206C36.7414 1.6521 38.833 2.43501 40.8345 3.4165C45.1419 5.52949 52.2324 8.75541 55.9569 9.55118C59.7972 10.3698 62.8731 12.1685 64.2589 13.2186C64.4403 13.3557 64.606 13.5143 64.7489 13.69L64.7432 13.6943C68.0163 19.2247 56.6498 26.7437 50.3351 29.9339Z"
              fill="#FEFEFE"
            />
          </svg>

          {/* Third SVG (shine/accent) */}
          <svg
            className="absolute top-1 left-4"
            width="66"
            height="37"
            viewBox="0 0 66 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.029 26.4815C64.5061 28.3388 60.6002 32.7677 49.1709 35.625C41.599 37.518 33.9628 37.1322 28.4053 36.2136C24.9593 35.6435 21.622 34.5478 18.4918 32.9977C15.5373 31.5333 12.1399 29.8046 11.097 29.1246C9.23974 27.9102 5.95381 25.9101 4.45372 25.1243C3.83225 24.7986 2.32787 23.9828 0.437744 22.7927C1.67925 23.2242 4.85946 23.9614 6.53099 24.3457C6.62957 24.3685 6.72386 24.39 6.81101 24.41C6.81101 24.41 6.87816 24.4257 7.00817 24.4543C8.93258 24.8571 24.7736 27.7002 46.0993 17.0524C46.1764 17.0138 46.255 16.9738 46.335 16.9338C52.6497 13.7436 64.0161 6.22452 60.7431 0.694166L60.7488 0.68988C60.8388 0.799887 60.9202 0.915609 60.9916 1.03847C61.2102 1.41136 61.4531 1.89567 61.6003 2.33713C61.8288 3.02289 63.9818 18.7182 65.029 26.4815Z"
              fill="#FEFEFE"
            />
          </svg>
        </div>
      </div>

      {/* Middle: Navigation Links */}
      <ul className="hidden md:flex items-center space-x-10 text-white font-light relative font-sans text-xl">
        <li className="cursor-pointer ">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Plans</li>
        <li className="cursor-pointer">Testimonial</li>
        <li className="cursor-pointer">Privacy Policy</li>

        {/* More with Dropdown */}
        <li className="relative">
          <button
            onClick={toggleMore}
            className="flex items-center justify-center space-x-1 cursor-pointer focus:outline-none"
          >
            <span>More</span>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                moreOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {moreOpen && (
            <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md py-2 w-40 z-50 animate-fadeIn text-[#022183]">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Blog
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Careers
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Support
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Right: Get Started Button */}
      <div className="hidden md:block">
        <button className="bg-white text-[#022183] px-6 py-2 rounded-full font-light font-sans">
          Get Started
        </button>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden flex items-center">
        <button className="text-3xl">&#9776;</button>
      </div>
    </nav>
  );
};

export default Navbar;
