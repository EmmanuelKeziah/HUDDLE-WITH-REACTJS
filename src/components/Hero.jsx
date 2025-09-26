import React from "react";
import mockups from "../assets/images/mockups.svg";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-2 lg:py-8 ">
<div className="bg-white rounded-xl overflow-hidden max-h-[70vh] w-full lg:w-[600px] flex justify-center shadow-md">
<img
          src={mockups}
          alt="illustration-mockups"
          className=" w-full h-auto max-h-[60vh]"
        />
      </div>

      <div className="text-white max-w-[500px] flex flex-col px-4 py-6">
        <h1 className="text-2xl lg:text-4xl font-bold pb-2 lg:pb-4">
          Lorem ipsum dolor sit,
          <br /> amet consectetur adipisicing elit.
        </h1>
        <p className=" text-xl lg:text-2xl pb-4">
          Enim, hic unde facere maxime quidem tempore temporibus accusamus
          ducimus mollitia natus! Explicabo odio voluptas culpa cupiditate
          aperiam quos similique molestiae official
        </p>
        <button className="py-3 px-6 w-max rounded-[40px] text-[20px] font-bold hover:text-[#ff69b4] transition hover:text-[24px] bg-white text-gray-500 ">
          Register
        </button>
      </div>
    </section>
  );
};

export default Hero;
