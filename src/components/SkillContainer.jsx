import React from "react";
import Image from "next/image";

export default function SkillContainer({ title, platform, image, year }) {
  return (
    <>
      <div className="w-40 h-56 flex flex-col items-center justify-center">
        <Image
          className="min-h-32"
          src={image}
          width={80}
          height={80}
          alt={title}
        />
        <h3 className="text-white">{title}</h3>
        <p className="text-white">{platform}</p>
        <p className="text-white">{year}</p>
      </div>
    </>
  );
}
