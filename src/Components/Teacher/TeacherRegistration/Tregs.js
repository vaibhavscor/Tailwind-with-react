import React from "react";
import img7 from "../../../assets/images/img7.svg";

export default function Tregs() {
  return (
    <div>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5  mx-auto flex flex-wrap items-center">
            <div
              class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
              data-aos="fade-right"
            >
              <h2 className="font-bold mb-5 text-xl">
                "Teaching kids to count is fine, but teaching them what counts
                is best."
              </h2>
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={img7}
              />
            </div>
            <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Registartion
              </h2>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Teacher ID
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
