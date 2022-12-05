import React from "react";
import AboutMe from "./aboutme/AboutMe";
import ContactForm from "./components/contactform/ContactForm";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import RecentWorks from "./components/RecentWorks/RecentWorks";

function CreativeDev() {
  return (
    <main className="bg-brand h-full flex flex-col w-full scroll-smooth overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <AboutMe />
      <RecentWorks />
      <ContactForm />
      <Footer />
      {/* <AboutMe /> */}
    </main>
  );
}

export default CreativeDev;
