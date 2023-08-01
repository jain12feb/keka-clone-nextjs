"use client";

import { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { CgUserAdd } from "react-icons/cg";

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <header className="text-gray-600 bg-white border sticky top-0">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">
              <img src="https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoBlack.svg" />
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 cursor-pointer hover:text-indigo-600">
              Products
            </a>
            <a className="mr-5 cursor-pointer hover:text-indigo-600">
              Customers
            </a>
            <a className="mr-5 cursor-pointer hover:text-indigo-600">Pricing</a>
            <a className="mr-5 cursor-pointer hover:text-indigo-600">Careers</a>
          </nav>
          <div className="flex flex-row">
            <button
              onClick={() => setRegisterOpen(true)}
              className="mr-3 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Register
              <CgUserAdd className="w-5 h-5 ml-1" />
            </button>
            <button
              onClick={() => setLoginOpen(true)}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {loginOpen && (
        <LoginModal open={loginOpen} onCloseModal={() => setLoginOpen(false)} />
      )}
      {registerOpen && (
        <RegisterModal
          open={registerOpen}
          onCloseModal={() => setRegisterOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
