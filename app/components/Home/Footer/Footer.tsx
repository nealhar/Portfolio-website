import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="text-[35px] font-semibold text-white">
            N<span className="text-red-500">ea</span>l
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            In addition to my professional pursuits, I am an individual who
            values a well-rounded and balanced lifestyle.
          </h1>
          <p className="mt-[1.3rem] text-yellow-300 underline font-semibold">
            NealHarricharan@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
