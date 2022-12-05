import Image from "next/image";
import React from "react";
import contact from "../assets/contact.svg";
import sendicon from "../assets/sendicon.svg";
import Button from "../button/Button";
import { Animated } from "react-animated-css";
import "animate.css/animate.css";

function ContactForm() {
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row justify-between lg:mx-20 mx-6 h-full mt-32 "
    >
      <Animated
        animationIn="bounceInLeft"
        // animationOut="fadeOut"
        isVisible={true}
        animationInDelay={500}
        animateOnMount={false}
      >
        <div className="">
          <div className="text-left">
            <h1 className="text-white text-4xl font-bold lg:text-6xl  ">
              Got a project in <span className="text-brand-text ">mind?</span>
            </h1>
          </div>
          <Image src={contact} alt="contact" className="hidden lg:block" />
        </div>
      </Animated>

      <div className="py-8 lg:py-16   lg:w-1/2 ">
        {/* <div className="w-full text-center ">
          <h1 className="text-white text-4xl font-bold lg:text-6xl ">
            Contact <span className="text-brand-text">Us</span>
          </h1>
        </div> */}
        {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p> */}
        <form action="#" className="space-y-8 w-full lg:w-full ">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@creativedev.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="justify-self-end">
            <div className=" flex rounded-full  ">
              <div className="bg-brand-text hover:bg-brand-text-light flex items-center justify-center  py-2 px-4 xsm:px-6  font-bold text-xs lg:text-lg shadow-2xl rounded-full text-white hover:cursor-pointer ">
                Send a message
                <Image
                  className="w-4 h-5 ml-2 "
                  alt="btn-icon"
                  src={sendicon}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
