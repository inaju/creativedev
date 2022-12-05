import React from "react";
import FooterItem from "./footeritem/FooterItem";
import homeicon from "../assets/homeicon.svg";
import aboutmefooter from "../assets/aboutmefooter.svg";
import contactfooter from "../assets/contactfooter.svg";
import facebook from "../assets/facebookicon.svg";
import instagram from "../assets/instagramicon.svg";
import twitter from "../assets/twittericon.svg";
import youtube from "../assets/youtubeicon.svg";
import Image from "next/image";
function Footer() {
  return (
    <div className="m-8 md:h-[15rem] ">
      <div className="flex w-full justify-between sm:justify-around h-[10rem] sm:w-[30rem] sm:mx-auto  ">
        <FooterItem text="Services" icon={homeicon} />
        <FooterItem text="About Me" icon={aboutmefooter} />
        <FooterItem text="Contact" icon={contactfooter} />
      </div>
      <div className="flex mx-auto justify-around w-[17rem]">
        <Image src={facebook} className="w-8" alt="footer social icon" />
        <Image src={instagram} className="w-8" alt="footer social icon" />
        <Image src={twitter} className="w-8" alt="footer social icon" />
        <Image src={youtube} className="w-8" alt="footer social icon" />
      </div>
    </div>
  );
}

export default Footer;
