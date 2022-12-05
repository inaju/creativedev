import React from "react";

function Main() {
  return (
    <div className="font-nunito absolute h-full w-full ">
      {/* Intro Section */}
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200">
        opposite
        {/* Navbar */}
        <nav className="w-full fixed top-0 bg-white ">
          <div className="container mr-6 md:mx-auto py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-8"
                src="https://github.com/safak/youtube2022/blob/tailwind-portfolio/img/logo.png?raw=true"
                alt="logo"
              />
              <span className="text-2xl font-bold text-indigo-900">
                PortWind
              </span>
            </div>
            <ul className="hidden md:flex space-x-10 text-gray-600 text-sm uppercase">
              <li className="hover:text-gray-500">
                <a>Homepage</a>
              </li>
              <li className="hover:text-gray-500">
                <a>About Me</a>
              </li>
              <li className="hover:text-gray-500">
                <a>Services</a>
              </li>
              <li className="hover:text-gray-500">
                <a>Contact</a>
              </li>
            </ul>
            <img
              className=" hidden  md:block w-5 cursor-pointer"
              src="https://github.com/safak/youtube2022/blob/tailwind-portfolio/img/moon.png?raw=true"
            />
            <div className="flex flex-col space-y-1">
              <div className="md:hidden w-6 h-1 bg-black"> </div>
              <div className="md:hidden w-6 h-1 bg-black"> </div>
              <div className="md:hidden w-6 h-1 bg-black"> </div>
            </div>

            <ul className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
              <li className="hover:text-gray-500">
                <a>Homepage</a>
              </li>
              <li className="hover:text-gray-500">
                <a>About Me</a>
              </li>
              <li className="hover:text-gray-500">
                <a>Services</a>
              </li>
              <li className="hover:text-gray-500">
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* intro content */}
        <div></div>
      </div>
    </div>
  );
}

export default Main;
