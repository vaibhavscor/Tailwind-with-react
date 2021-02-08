import React from "react";

import { Link } from "react-router-dom";
import img1 from "../../assets/images/img1.svg";

export default function MainloginS() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div
          class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          data-aos="fade-down"
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img1}
            />
          </div>
          <div
            class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Students Portal
            </h1>
            <p class="mb-8 leading-relaxed">
              A learning community dedicated to building respectful and
              responsible citizens and empowering all learners.
            </p>
            <div class="flex justify-center">
              <Link
                to="/loginstudent"
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Login
              </Link>
              <Link
                to="/registerstudent"
                class="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
