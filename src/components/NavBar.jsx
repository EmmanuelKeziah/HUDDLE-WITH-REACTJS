import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mx-10 lg:h-20 lg:py-4 py-2 ">
      <img
        src={logo}
        alt="huddle-nav-logo"
        className="w-20 md:w-32 lg:w-40 xl:w-48"
      />

      <nav className="hidden xl:flex gap-6 text-[18px] font-medium text-white">
        <a
          href="#"
          className="hover:text-[#ff69b4] hover:text-[20px]  transition"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-[#ff69b4] hover:text-[20px] transition"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-[#ff69b4] hover:text-[20px] transition"
        >
          Contact
        </a>
      </nav>

      <div className="block xl:hidden relative">
        {isOpen ? (
          <IoMdClose
            size={24}
            className="text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <CiMenuBurger
            size={24}
            className=" text-white cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}

        {isOpen && (
          <div className="absolute right-2 mt-2 w-40 bg-[#e6ccff] rounded-lg shadow-lg p-4 flex flex-col gap-4">
            <a
              href="#"
              className="hover:text-[#ff69b4] hover:text-[20px] transition"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#ff69b4] hover:text-[20px] transition"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-[#ff69b4] hover:text-[20px] transition"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
