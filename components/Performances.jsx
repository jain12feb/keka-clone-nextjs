"use client";

import { HiCurrencyDollar } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";
import { BiSolidUserPlus } from "react-icons/bi";
import { VscChecklist } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";

const Performances = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-12 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-center text-gray-900 mb-20">
          Everything you need to create a high
          <br className="hidden sm:block" />
          performance culture
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <HiCurrencyDollar className="h-10 w-10" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Payroll & Expenses
              </h2>
              <p className="leading-relaxed text-base">
                Our industry redefining payroll system automates your payroll
                and saves time for everyone.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FaUserAlt className="h-7 w-7" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Modern HR
              </h2>
              <p className="leading-relaxed text-base">
                All your people information in one place to create a connected
                digital workplace.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <PiShieldCheckFill className="h-9 w-9" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Performance & Culture
              </h2>
              <p className="leading-relaxed text-base">
                An engaging culture driven by contextual feedback and
                organization aligned goals.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <BiSolidUserPlus className="h-11 w-11" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Hiring & Onboarding
              </h2>
              <p className="leading-relaxed text-base">
                An integrated hiring platform for teams to collaborate with
                recruiters and hire good talent.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <VscChecklist className="h-8 w-8" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Project timesheet
              </h2>
              <p className="leading-relaxed text-base">
                Track your employee time and maintain effective utilization to
                grow your services business.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <SlCalender className="h-8 w-8" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Time & Attendance
              </h2>
              <p className="leading-relaxed text-base">
                Track your employee time effectively and compensate on time
                while working remotely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performances;
