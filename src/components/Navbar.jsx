import React, { useState } from "react";
import Logo from "/nav1.jpg";
import Vector from "/Vector.png";
import { IoReorderThreeSharp } from "react-icons/io5";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 text-black">
        <img className="h-8 w-8 md:h-24 md:w-24" src={Logo} alt="Logo"/>
        <div className="flex items-center space-x-4  ">
          <label className="hidden md:block cursor-pointer">Home</label>
          {/* <label className="hidden md:block cursor-pointer">Services</label> */}
          <select className="hidden md:block cursor-pointer bg-transparent border-none">
    <option value="service1">Services</option>
    <option value="service2">Service 2</option>
    <option value="service3">Service 3</option>
</select>

          <label className="hidden md:block cursor-pointer">Financing</label>
          <label className="hidden md:block cursor-pointer">Contact Us</label>
          <button className="hidden md:block cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-sm py-2 px-4 rounded">
            Book a Service
          </button>
          <div className="grid items-center text-blue border-2 border-blue-600 text-xs font-thin rounded-md min-w-fit py-1 px-4 ">
            <label className="min-w-fit">Schedule a call</label>
            <label className="flex items-center">
              <img src={Vector} alt="vector" className="h-3 w-3" />
              <label className="min-w-fit">(614)-264-4649</label>
            </label>
          </div>
          <IoReorderThreeSharp
            className="block md:hidden h-8 w-8 text-black"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute top-14 right-4 border-blue-400 border-2 rounded-md p-2 grid grid-cols">
              <label>Home</label>
              <label>Services</label>
              <label>Financing</label>
              <label>Contact Us</label>
              <button className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book a Service
              </button>
            </div>
          )}
        </div>
      </div>
      

    </>
  );
}

export default Navbar;
