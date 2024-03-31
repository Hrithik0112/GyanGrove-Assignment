import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const categoryList = ["Live Shows", "Streams", "Movies", "Plays", "Events", "Sports", "Activities"];

const Header = () => {
  return (
    <div className="flex flex-col text-gray-600 text-base mx-10 my-5">
      {/* search section  */}
      <div className="flex justify-between items-center ">
        {/* logo */}
        <div className="text-2xl text-logo-color font-bold">BookUsNow</div>
        <div className="flex space-x-16">
          {/* serach bar */}
          <div className="flex space-x-3">
            <div className="flex justify-center items-center space-x-2 text-white bg-black rounded-xl px-5">
              <IoMenu className="w-6 h-8" />
              <div className=" bg-black font-semibold">Categories</div>
            </div>
            <div className="flex justify-between items-center border rounded-xl py-1 px-4  ">
              <input type="search" placeholder="DJI platform" className="outline-none w-[600px]" />
              <BiSearch />
            </div>
          </div>
          {/* favourites */}
          <div className="flex space-x-4">
            <div className="flex justify-center items-center space-x-4">
              <FaHeart className="text-gray-400" />
              <p>Favourites</p>
            </div>
            <button className="border rounded-xl py-2 px-3">Sign in</button>
          </div>
        </div>
      </div>
      {/* Categories section */}
      <div className="flex space-x-64 mt-6">
        {/* location */}
        <div className="flex justify-center items-center space-x-2 font-medium">
          <FaLocationDot className="text-gray-400" />
          <p>Mumbai, India</p>
          <MdKeyboardArrowRight className="text-gray-400" />
        </div>
        {/* categories */}
        <ul className="flex space-x-10">
          {categoryList.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
