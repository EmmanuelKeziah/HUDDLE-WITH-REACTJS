import React from "react";
import mockups from "../assets/images/mockups.svg";

const Hero = () => {
  return (
    <main className="flex justify-between max-w-[1200px]">
      <section className="">
        <img
          src={mockups}
          alt="illustration-mockups"
          className="w-[600px] max-h-[60vh]"
        />
      </section>
      <section className="text-white max-w-[500px] px-4">
        <h1 className="text-5xl leading-small pb-4 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
        <p className="text-2xl pb-2">
          Enim, hic unde facere maxime quidem tempore temporibus accusamus
          ducimus mollitia natus! Explicabo odio voluptas culpa cupiditate
          aperiam quos similique molestiae official
        </p>
        <button className="p-4 rounded-[40px] text-white text-2xl font-bold hover:text-[#ff69b4] transition hover:text-[23px] bg-gray-500 ">
          Register
        </button>
      </section>
    </main>
  );
};

export default Hero;
