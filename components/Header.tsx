import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const categoryList = ["Live Shows", "Streams", "Movies", "Plays", "Events", "Sports", "Activities"];

const Header = () => {
  return (
    <div className="flex flex-col text-gray-600 text-base mx-10 my-5">
      {/* search section  */}
      <div className="flex justify-between items-center ">
        {/* logo */}
        <div className="sm:text-2xl text-lg text-logo-color font-bold flex sm:flex-row flex-col">
          BookUsNow
          <div className="flex text-sm text-gray-400 justify-center items-center space-x-2 font-medium sm:hidden ">
            <FaLocationDot className="text-gray-400" />
            <p>Mumbai, India</p>
            <MdKeyboardArrowRight className="text-gray-400" />
          </div>
        </div>
        <div className="flex sm:space-x-16 space-x-4">
          {/* serach bar */}
          <div className="flex space-x-3">
            <div className="sm:flex justify-center items-center space-x-2 text-white bg-black rounded-xl px-5 hidden">
              <IoMenu className="w-6 h-8" />
              <div className=" bg-black font-semibold">Categories</div>
            </div>
            <div className="flex justify-between items-center border rounded-xl py-1 px-4  ">
              <input
                type="search"
                placeholder="DJI platform"
                className="outline-none md:w-[600px] w-[100px]"
              />
              <BiSearch />
            </div>
          </div>
          {/* favourites */}
          <div className="flex sm:space-x-4 space-x-3">
            <div className="flex justify-center items-center space-x-4">
              <FaHeart className="text-gray-400" />
              <p className="sm:inline-block hidden">Favourites</p>
            </div>
            <button className="border rounded-xl py-2 px-3 hidden sm:flex">Sign in</button>
            <p className="sm:hidden flex text-gray-400  items-center">
              <FaUser />
            </p>
          </div>
        </div>
      </div>
      {/* Categories section */}
      <div className="flex sm:space-x-64 space-x-10 mt-3 sm:mt-6">
        {/* location */}
        <div className="sm:flex justify-center items-center space-x-2 font-medium hidden ">
          <FaLocationDot className="text-gray-400" />
          <p>Mumbai, India</p>
          <MdKeyboardArrowRight className="text-gray-400" />
        </div>
        {/* categories */}
        <ul className="flex space-x-10 overflow-x-scroll sm:overflow-x-hidden text-sm">
          {categoryList.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
