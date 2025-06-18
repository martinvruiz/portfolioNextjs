import React from "react";
import Image from "next/image";
import TechnicalSkill from "@/components/TechnicalSkill";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-screen">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="w-full flex justify-center">
            <Image
              src="/MVR-removebg.png"
              width={600}
              height={600}
              alt="Martin Villalo Ruiz logo"
            />
          </div>
          <div className="max-w-2/5 mb-8 text-center flex flex-col items-center">
            <h1 className="text-4xl font-semibold py-2">Martin Villalo Ruiz</h1>
            <p className="w-3/4">
              Frontend Developer with a hands-on approach and product mindset. I
              focus on delivering real-world solutions, crafting smooth user
              experiences, and working independently with a results-driven
              mentality.
            </p>
          </div>
        </div>
        <div className="text-center border-4 rounded-2xl w-3/4 p-2 mb-12">
          <h3 className="text-3xl">Technical Skills</h3>
          <TechnicalSkill />
        </div>
      </div>
    </>
  );
}
