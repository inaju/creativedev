import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FormComponent from "./Form";
import logo from "./img/logo.svg";
import beach from "./img/beach-work.jpg";

function Hero() {
  return (
    <div className="bg-gray-300">
      <div className=" bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-sm mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg-max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <Image className="h-10" src={logo} alt="workcation" />
            <Image
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src={beach}
              alt="work cationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="lg:inline" />
              <span className="text-brand"> Take advantage from it</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              odio pariatur optio tempore autem praesentium perferendis.
              Delectus repellat corrupti officiis repudiandae perspiciatis
              praesentium porro aut.
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className=" font-semibold uppercase tracking-wider inline-block rounded-md bg-brand text-white px-5 py-3 shadow-lg text-sm sm:text-base hover:bg-brand-light hover:-translate-y-0.5 transform transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-brand-light focus:ring-opacity-50 active:bg-brand-dark
"
              >
                Book your escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative 2xl:col-span-3">
          <Image
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={beach}
            alt="work cationing on the beach"
          />
        </div>
        {/* <h1 className="text-4xl font-bold text-center text-blue-500">Hello</h1> */}
        {/* <FormComponent /> */}
      </div>
    </div>
  );
}

export default Hero;
