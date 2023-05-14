import React from "react";
import trophy from "../assets/images/crazy-chef-happy-expression.jpg";
// import { useState } from "react";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCity, FaQuestionCircle, FaPhoneSquare } from "react-icons/fa";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ShareYourRecipeSection = () => {
 
  return (
    <div className="md:my-24 my-10">
      <h2 className="text-2xl md:text-4xl text-[#FF5771] font-bold my-4 text-center ">
        Participate in sharing your Recipe!!
      </h2>
      <p className="text-sm md:text-xl my-2 text-center text-gray-400">
        "Calling all home cooks! Showcase your culinary skills and compete with
        the best in our recipe contest. <br /> Participate now and stand a
        chance to win exciting prizes!"
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:p-10 p-2 items-center">
        <div className="md:w-[50%]">
          <LazyLoadImage
            className="md:w-[90%] rounded-lg mx-auto shadow-md"
            src={trophy}
            alt=""
          />
        </div>
        <div className="md:w-[50%]">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <div className="flex items-center">
                <span className="mr-3">
                  <FaUser />
                </span>
                <input
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base px-4 py-2"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <div className="flex items-center">
                <span className="mr-3">
                  <FaEnvelope />
                </span>
                <input
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base px-4 py-2"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <div className="flex items-center">
                <span className="mr-3">
                  <FaCity />
                </span>
                <input
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base px-4 py-2"
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                />
              </div>
            </div>
            <div className="my-4">
              <label
                htmlFor="age"
                className="block text-gray-700 font-bold mb-2"
              >
                Age
              </label>

              <div className="flex items-center">
                <span className="mr-3">
                  <FaQuestionCircle />
                </span>
                <input
                  type="number"
                  placeholder="Enter your Age"
                  id="age"
                  name="age"
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base px-4 py-2"
                />
              </div>
            </div>
            <div className="my-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone Number
              </label>
              <div className="flex items-center">
                <span className="mr-3">
                  <FaPhoneSquare />
                </span>
                <input
                  type="tel"
                  placeholder="Enter your Number"
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base px-4 py-2"
                />
              </div>
            </div>
            <div className="my-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Participate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShareYourRecipeSection;
