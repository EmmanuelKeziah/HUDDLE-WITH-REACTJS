import React from "react";
import logo from "../assets/images/logo.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between max-w-[1100px] mx-10 h-20">
      <section className="w-70 ">
        <img src={logo} alt="huddle-nav-logo " />
      </section>

      <section className=" flex gap-6 text-[20px] font-medium text-[#ffffff] mx-0 my-[8px] ">
        <a href="#" className="hover:text-[#ff69b4] transition hover:text-[23px]">Home</a>
        <a href="#" className="hover:text-[#ff69b4] transition hover:text-[23px]">About</a>
        <a href="#" className="hover:text-[#ff69b4] transition hover:text-[23px]">Contact</a>
      </section>
    </div>
  );
};

export default NavBar;
