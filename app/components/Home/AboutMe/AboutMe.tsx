import React from "react";
import Heading from "../../Helper/Heading";
import AboutInfoBox from "./AboutInfoBox";
import AboutImage from "@/public/images/about.svg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="mt-[5rem] mb-[3rem]">
      {/* Heading */}
      <Heading
        headingPrimary="I am a Computer Science student at the University of Maryland"
        headingSub="About Me"
      />
      <div className="w-[80%] mt-[5rem] md:mt-[3rem] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-[4rem]">
        {/* Personal Info */}
        <div>
          <h1 className="mb-[1.4rem] text-[27px] font-semibold text-orange-500">
            Personal Info :
          </h1>
          {/* AboutInfoBox */}
          <AboutInfoBox
            text1="First Name : Neal"
            text2="Last Name : Harricharan"
          />
          <AboutInfoBox text1="City : College Park" text2="State : Maryland" />
          <AboutInfoBox
            text1="Age : 18"
            text2="Email : Nealharricharan@gmail.com"
          />
          <AboutInfoBox
            text1="Major: Computer Science"
            text2="Honors Program : Advanced Cybersecurity"
          />
          <AboutInfoBox text1="Language: English" text2="Country : USA" />
        </div>
        {/* Image */}
        <Image
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          src={AboutImage}
          alt="About"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutMe;
