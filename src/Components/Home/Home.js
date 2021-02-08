import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            data-aos="fade-right"
          >
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div
            data-aos="zoom-in-up"
            class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to TechoKids
            </h1>
            <p class="mb-8 leading-relaxed">
              A learning community dedicated to building respectful and
              responsible citizens and empowering all learners.
            </p>
            <p class="mb-8 leading-relaxed font-bold font-lg">
              Are you a Student or Teacher ?
            </p>
            <div class="flex justify-center">
              <Link
                to="/chooseuserstudent"
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Student
              </Link>
              <Link
                to="/chooseuserteacher"
                class="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Teacher
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
