import Navbar from "@/components/Navbar";
import React from "react";
import projects from "@/data/projects.json";
import ProjectContainer from "@/components/ProjectContainer";

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <Navbar />
        <div className="flex flex-col items-center w-full">
          <h3 className="text-4xl font-semibold">Projects</h3>
          <div className="w-full flex flex-col items-center my-4">
            <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 list-none p-2">
              {projects.map((item) => (
                <li key={item.id}>
                  <ProjectContainer
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
