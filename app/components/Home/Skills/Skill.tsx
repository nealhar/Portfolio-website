import React from "react";
import Heading from "../../Helper/Heading";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <Heading headingPrimary="What can I do?" headingSub="Skills" />
      <div className="w-[80%] mt-[4rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          {/* Skills */}
          <SkillCard image="/images/icon1.png" title="Network Engineer" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          {/* Skills */}
          <SkillCard image="/images/icon2.png" title="React Developer" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          {/* Skills */}
          <SkillCard image="/images/icon3.png" title="Next Js Developer" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          {/* Skills */}
          <SkillCard
            image="/images/icon4.png"
            title="CyberSecurity Professional"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="800"
        >
          {/* Skills */}
          <SkillCard image="/images/icon5.png" title="Cloud Engineer" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="1000"
        >
          {/* Skills */}
          <SkillCard image="/images/icon2.png" title="IT Professional" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
