import React from "react";

const attribution = () => {
  return (
    <div className=" flex gap-2 text-sm text-gray-200 justify-center mb-2">
      <p>
        Challenge by {" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        className="text-blue-500 underline">
          Frontend Mentor. 
        </a>
        
      </p>
      <p>
         Coded by {" "}
         <a
          href=" https://github.com/EmmanuelKeziah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
           Emmanuel Keziah
        </a>
        .
      </p>
    </div>
  );
};

export default attribution;
