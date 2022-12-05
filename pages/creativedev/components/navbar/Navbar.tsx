import React, { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showHomeDetail, setShowHomeDetail] = useState(false);

  return (
    <div
      className={`w-screen md:w-full flex justify-between align-center px-7 py-5 fixed z-[100] ${
        showNav ? "" : "backdrop-blur-md"
      }   `}
      onMouseLeave={() => setShowHomeDetail(false)}
    >
      <h1 className="text-white uppercase font-oswald">MitchelInaju</h1>

      <div
        className={`${
          !showNav ? "block" : "hidden"
        } sm:hidden flex gap-1 flex-col `}
        onClick={() => setShowNav(!showNav)}
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      <div
        className={`${
          showNav ? "block" : "hidden"
        } sm:block bg-slate-100 text-gray-700 font-normal text-lg text-start fixed top-0 z-[1] -right-0  w-full h-full flex flex-row md:items-center md:justify-center rounded-bl-xl sm:bg-inherit sm:text-white sm:font-thin sm:text-[0.9rem] sm:w-full sm:h-0 sm:relative `}
      >
        <ul className=" flex flex-col h-full font-bold sm:font-thin  p-3 pt-32  gap-6 sm:flex-row  sm:gap-x-14 sm:justify-end sm:pr-10 sm:p-0">
          <li className="flex flex-col space-y-3 hover:border-b">
            <a
              onMouseEnter={() => {
                setShowHomeDetail(!showHomeDetail);
                // setShowNav(false);
              }}
              // onMouseLeave={() => setShowHomeDetail(false)}
              href="#"
            >
              Services
            </a>
            <div
              onMouseLeave={() => {
                setShowHomeDetail(false);
              }}
              onClick={() => setShowNav(false)}
              className={`${
                showHomeDetail ? "block" : "hidden"
              } bg-white p-3 text-gray-900 md:absolute top-8 right-screen   rounded-md`}
            >
              <ul className="gap-3 flex flex-col text-indigo-500 font-bold text-sm hover:cursor-pointer">
                <li>Freelancing</li>
                <li>Web Development</li>
                <li>Andriod Development</li>
              </ul>
            </div>
          </li>
          <li className="hover:border-t-[1px]">
            <a
              href="#aboutme"
              onMouseMove={() => {
                setShowHomeDetail(false);
                setShowNav(false);
              }}
            >
              About Me
            </a>
          </li>
          <li className="hover:border-t-[1px]">
            <a
              onMouseMove={() => {
                setShowHomeDetail(false);
                setShowNav(false);
              }}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <div
          className={`${
            showNav ? "block" : "hidden"
          }   self-start right-8 top-4 absolute`}
          onClick={() => setShowNav(!showNav)}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default Navbar;
