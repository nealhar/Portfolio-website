import Image from "next/image";
import React from "react";
interface Props {
  image: string;
  title: string;
}

const SkillCard = ({ image, title }: Props) => {
  return (
    <div className="shadow-md hover:scale-110 transition-all duration-500 bg-black p-8 rounded-lg">
      {/* Image*/}
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="mt-[2rem] mb-[2rem] mx-auto"
      />
      <div className="text-center">
        {/* title */}
        <h1 className="font-semibold text-[26px] text-white">{title}</h1>
        <p className="mt-[0.5rem] text-white text-opacity-60">
          Design and implement network infrastructure based on organizational
          requirements.
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
