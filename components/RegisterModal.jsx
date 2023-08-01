"use client";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { MdPersonAddAlt } from "react-icons/md";

const RegisterModal = ({ open, onCloseModal }) => {
  return (
    <Modal
      id="register"
      open={open}
      onClose={onCloseModal}
      showCloseIcon={false}
      center
      classNames={{
        modal: "rounded shadow-2xl bg-gray-100",
      }}
    >
      <h2 className="text-black text-2xl font-medium mb-5">Sign Up</h2>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label for="formFile" className="leading-7 text-sm text-gray-600">
          Profile Image
        </label>
        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="file"
          id="formFile"
        />
      </div>
      <button className="text-white flex bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <MdPersonAddAlt className="h-7 w-7 mr-2" />
        Sign Up
      </button>
      {/* <span className="text-xs text-gray-500 mt-3 flex flex-row">
        Already have an account?
        <Link href={"/"} className="ml-2 text-indigo-900">
          Login
        </Link>
      </span> */}
    </Modal>
  );
};

export default RegisterModal;
