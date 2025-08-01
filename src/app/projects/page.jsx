import Navbar from "@/components/Navbar";
import React from "react";
import projects from "@/data/projects.json";
import ProjectContainer from "@/components/ProjectContainer";

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center w-screen min-h-screen bg-blue-950">
        <div className="flex flex-col items-center w-full mb-4">
          <h3 className="text-4xl font-semibold">Projects</h3>
          <div className="w-full flex flex-col items-center my-4">
            <ul className="flex flex-col items-center gap-4 w-full max-w-4xl">
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
