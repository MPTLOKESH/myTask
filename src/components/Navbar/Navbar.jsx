import React from "react";

import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { SiTask } from "react-icons/si";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary to-secondary  rounded-b-[15px]  drop-shadow-lg ">
        <div className="container flex items-center justify-between p-5 ">
          {/* Title section */}

          <div data-aos="fade-right" className="text-3xl text-white">
            <div className="flex items-center gap-3">
              <SiTask className="drop-shadow-md " />
              <h1>MyTask</h1>
            </div>
          </div>
          <div data-aos="fade-left" className="flex gap-5 items-center">
            {/* Search */}
            <div>
              <input
                type="text"
                className="rounded-[20px] focus:outline-none focus:border-black border-2 px-2 sm:w-[200px] drop-shadow-md "
                placeholder="Search Task"
              />
            </div>
            <div>
              <CiSearch className="text-white cursor-pointer drop-shadow-md" />
            </div>
            {/* User icon */}
            <div>
              <FaUserAlt className="text-white cursor-pointer drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
