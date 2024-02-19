import React from "react";
import Main from "/main.png";
import Money from "/money-bag 4.png";
import Pc from "/image 21.png";
import Time from "/image 18.png";
import one from "/Group 44611.png";
import two from "/Group 44612.png";
import three from "/Group 44613.png";
import Visa from "/image 37.png";
import Success from "/success 1.png";
import FB from "/fb.png";
import Insta from "/insta.png";
import Linked from "/link.png";
import Twitter from "/twi.png";
import { Link } from "react-router-dom";
import Call from "/call.png";
import Locati from "/location.png";
import Mail from "/mail.png";
import Map from "/map.png";
import Vector1 from "/Vector1.png";
import Logo from "/nav1.jpg";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <main className="w-full h-full">
        <div>
          <Navbar />
        </div>
        <div className="flex justify-center p-2 mx-auto">
          <img
            src={Main}
            alt=""
            className="w-full sm:w-3/4 md:w-2/3 lg:w-3/4"
          />
        </div>
        <div className="grid grid-cols p-2 mx-auto">
          <div className="text-center md:text-center">
            <label className="font-semibold mb-3 block md:block md:text-xl md:mt-4">
              Inspect your HVAC Financing Options through FMS
            </label>
          </div>
          <div className="text-center md:w-full">
            <label className="text-justify mb-4 inline-block md:w-[600px] md:text-justify lg:w-[700px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </label>
          </div>
        </div>
        <div className="grid grid-cols p-2 rounded-md bg-[#F1F5FE] md:w-[800px] mx-auto">
          <div className="text-center md:text-center mt-2">
            <label className="font-semibold mb-3 block md:block md:text-xl md:mt-4">
              Learn how to buy now and pay over time on your HVAC system
            </label>
          </div>
          <div className="text-center md:w-full mt-2">
            <label className="text-justify mb-4 inline-block md:w-[600px] md:text-justify lg:w-[700px]">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s,
            </label>
          </div>
          <div className="mt-2 grid items-center justify-center mx-auto">
            <button className="grid items-center w-[150px] rounded-md text-white bg-[#123EAE] mb-4">
              Apply Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols p-2 ">
          <div className="text-center mt-4 md:text-center">
            <label className="font-semibold mb-3 block md:block md:text-xl">
              Affordable Financing for Your HVAC Needs
            </label>
          </div>
          <div className="text-center md:w-full">
            <label className="text-justify mb-4 inline-block md:w-[600px] md:text-justify lg:w-[700px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </label>
          </div>
        </div>
        <div className="grid grid-cols p-2 bg-gradient-to-br from-sky-100 to-sky-200">
          <div className="text-center md:text-center">
            <label className="font-semibold mb-3 block md:block md:text-xl">
              Financing options we offer
            </label>
          </div>
          <div className="md:flex md:w-[800px] mx-auto gap-4">
            <div className="grid grid-cols">
              <div className="flex items-center p-2 gap-2">
                <img src={Money} alt="money" className="h-4 w-4" />
                <label className="font-semibold">
                  1-12 Months same as cash loan
                </label>
              </div>
              <div>
                Dummy text of the printing and typesetting industry. Lorem Ipsum
                has dummy text of the printing and typesetting industry. Lorem
                Ipsum hasdummy text of the printing and typesetting industry.
                Lorem Ipsum hasdummy text.
              </div>
            </div>
            <div className="md:bg-blue-700 md:h-full md:w-1"></div>
            <div className="grid grid-cols">
              <div className="flex items-center p-2 gap-2">
                <img src={Money} alt="money" className="h-4 w-4" />
                <label className="font-semibold">
                  1-12 Months same as cash loan
                </label>
              </div>
              <div>
                Dummy text of the printing and typesetting industry. Lorem Ipsum
                has dummy text of the printing and typesetting industry. Lorem
                Ipsum hasdummy text of the printing and typesetting industry.
                Lorem Ipsum hasdummy text.
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="grid items-center justify-center mt-2">
            <label className="font-semibold text-lg">Steps to follow</label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 p-2 gap-4">
            <div className="relative">
              <div className="grid justify-center">
                <img
                  src={one}
                  alt="one"
                  className="h-8 w-8 z-10 absolute inset-x-0 mx-auto"
                />
              </div>
              <div className="grid grid-cols bg-[#123EAE2E] mt-4">
                <img src={Pc} alt="pc" className="rounded-sm mx-auto" />
                <label className="font-semibold grid justify-center mt-2">
                  Apply Online Today
                </label>
                <label className="text-justify mb-4 inline-block mt-2">
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has dummy text of the printing and typesetting industry.
                  Lorem Ipsum hasdummy text of the printing and typesetting
                  industry. Lorem Ipsum has
                </label>
              </div>
            </div>

            <div className="relative">
              <div className="grid justify-center">
                <img
                  src={two}
                  alt="one"
                  className="h-8 w-8 z-10 absolute inset-x-0 mx-auto"
                />
              </div>
              <div className="grid grid-cols bg-[#123EAE2E] mt-4">
                <img src={Time} alt="pc" className="rounded-sm mx-auto" />
                <label className="font-semibold grid justify-center mt-2">
                  Get a quick response
                </label>
                <label className="text-justify mb-4 inline-block mt-2">
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has dummy text of the printing and typesetting industry.
                  Lorem Ipsum hasdummy text of the printing and typesetting
                  industry. Lorem Ipsum has
                </label>
              </div>
            </div>

            <div className="relative">
              <div className="grid justify-center">
                <img
                  src={three}
                  alt="three"
                  className="h-8 w-8 z-10 absolute inset-x-0 mx-auto"
                />
              </div>
              <div className="grid grid-cols bg-[#123EAE2E] mt-4">
                <img src={Visa} alt="Visa" className="rounded-sm mx-auto" />
                <label className="font-semibold grid justify-center mt-2">
                  If qualified get your new credit card in the mail
                </label>
                <label className="text-justify mb-4 inline-block mt-2">
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has dummy text of the printing and typesetting industry.
                  Lorem Ipsum hasdummy text of the printing and typesetting
                  industry. Lorem Ipsum has
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4 grid items-center justify-center mx-auto">
            <button className="grid items-center w-[150px] rounded-md text-white bg-[#123EAE] mb-4">
              Apply Now
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <img
            src={Success}
            alt=""
            className="h-14 w-14 md:h-32 md:w-32 lg:h-28 lg:w-28"
          />
        </div>
        <div className="grid grid-cols p-2">
          <div className="mt-4  p-2">
            <label className="font-semibold grid justify-center mt-2 md:text-xl">
              Thank you for your response.
            </label>
          </div>
          <div className="p-2">
            <label className="text-justify mb-4 inline-block mt-2 ml-4">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer{" "}
            </label>
          </div>
        </div>

        <div className="bg-[#191B1C] p-2 grid grid-cols md:grid-cols-4">
          <div className="mt-6">
            <div className="grid justify-center mt-4">
              <img src={Logo} alt="logo" className="h-24 w-24" />
            </div>
            <div className="flex justify-center mt-2 gap-2">
              <img src={FB} alt="fb" className="h-8 w-8" />
              <img src={Twitter} alt="twitter" className="h-8 w-8" />
              <img src={Linked} alt="linked" className="h-8 w-8" />
              <img src={Insta} alt="insta" className="h-8 w-8" />
            </div>
          </div>

          <div className="text-white grid grid-cols justify-center mt-4 gap-2">
            <label className="font-semibold text-lg mt-4">Quick Links</label>
            <Link to="#" className="grid justify-center">
              Services
            </Link>
            <Link to="#" className="grid justify-center">
              Careers
            </Link>
            <Link to="#" className="grid justify-center">
              Blogs
            </Link>
            <Link to="#" className="grid justify-center">
              About Us
            </Link>
            <Link to="#" className="grid justify-center">
              FAQ
            </Link>
          </div>

          <div className="text-white grid grid-cols justify-center mt-4 gap-2">
            <label className="font-semibold text-lg grid justify-center mt-4">
              Get In Touch
            </label>
            <div className="flex gap-2">
              <img src={Locati} alt="locati" />
              <label>1078 Wayback Lane</label>
            </div>
            <div className="flex gap-2">
              <img src={Call} alt="call" />
              <label>(614)-264-4649</label>
            </div>
            <div className="flex gap-2">
              <img src={Mail} alt="mail" />
              <label>sample12.in</label>
            </div>
            <div className="grid grid-cols mt-4">
              <label className="font-semibold text-lg grid justify-center">
                Working Hours
              </label>
              <label>Mon-Fri, 7:00AM-9:00PM</label>
            </div>
          </div>
          <div className="mt-4">
            <img src={Map} alt="map" className="mt-6" />
          </div>
          <div className="mt-4 mb-4 grid md:w-full">
            <label className="text-white font-normal flex text-justify md:w-[1000px] md:justify-center md:mt-4">
              Copyright{" "}
              <img
                src={Vector1}
                alt="vector"
                className="text-white h-3 w-3 mt-2 ml-1 mr-1"
              />
              Frankline heating and cooling. All Rights Reserved.
            </label>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
