"use client";

import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:mr-auto lg:place-self-center lg:col-span-7">
          <span className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Everything <br /> you need to build a <br /> Great{" "}
            <TypewriterComponent
              component={"span"}
              options={{
                strings: ["Company.", "Employee.", "Business.", "HR."],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </span>
          {/* <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> */}
          {/* </div> */}
          <p className="max-w-2xl mt-6 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Keka is your people enabler. From automation of people processes to
            creating an engaged and driven culture, Keka is all you need to
            build a good to great company.
          </p>
          <div className="lg:hidden md:hidden mt-0 col-span-5 flex">
            <img
              src="https://d2w2i7rp1a0wob.cloudfront.net/static/images/home/hero-home.svg"
              alt="mockup"
            />
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mt-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 "
          >
            Get Free Trial
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>{" "}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://d2w2i7rp1a0wob.cloudfront.net/static/images/home/hero-home.svg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
