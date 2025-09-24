import React from "react";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";

const Footer = () => {
  return (
    <section className="flex justify-end items-center">
      <img
        src={facebook}
        alt="facebook-logo"
        className="w-[50px] mx-2 my-1 filter brightness-0 invert"
      />
      <img
        src={twitter}
        alt="twitter-logo"
        className="w-[50px] mx-2 my-1 filter brightness-0 invert"
      />
      <img
        src={instagram}
        alt="instagram-logo"
        className="w-[50px] mx-2 my-1 filter brightness-0 invert"
      />
    </section>
  );
};

export default Footer;
