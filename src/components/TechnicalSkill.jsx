import React from "react";
import skills from "../data/skills.json";
import SkillContainer from "./SkillContainer";

export default function TechnicalSkill() {
  return (
    <div className="w-full flex justify-center">
      <ul className="flex justify-center list-none flex-wrap">
        {skills.map((item, index) => (
          <li key={index}>
            <SkillContainer
              title={item.skill}
              platform={item.education}
              year={item.year}
              image={item.img}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
