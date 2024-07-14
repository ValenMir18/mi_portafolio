"use client";
import { useState } from "react";
import Filter from "app/app/components/filter";

interface Skill {
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface FilterData {
  frontendChecked: boolean;
  backendChecked: boolean;
  toolsChecked: boolean;
}

export default function Skills() {
  const skills: Skill[] = [
    {
      src: "/imagenes/HTML.png",
      alt: "HTML5",
      title: "HTML5",
      category: "FrontEnd",
    },
    {
      src: "/imagenes/css3.png",
      alt: "CSS3",
      title: "CSS3",
      category: "FrontEnd",
    },
    {
      src: "/imagenes/tailwind.png",
      alt: "Tailwind CSS",
      title: "Tailwind CSS",
      category: "FrontEnd",
    },
    {
      src: "/imagenes/mui.png",
      alt: "Material UI",
      title: "Material UI",
      category: "FrontEnd",
    },
    {
      src: "/imagenes/javascript.png",
      alt: "JavaScript",
      title: "JavaScript",
      category: "BackEnd",
    },
    {
      src: "/imagenes/ts.png",
      alt: "TypeScript",
      title: "TypeScript",
      category: "FrontEnd",
    },
    {
      src: "/imagenes/react.png",
      alt: "React JS",
      title: "React JS",
      category: "FrontEnd",
    },
    {
      src: "/imagenes/nextjs.png",
      alt: "Next JS",
      title: "Next JS",
      category: "FrontEnd",
    },
    {
      src: "/imagenes/mysql.png",
      alt: "MySQL",
      title: "MySQL",
      category: "BackEnd",
    },
    { src: "/imagenes/git.png", alt: "Git", title: "Git", category: "Tools" },
  ];

  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);
  const [filterCriteria, setFilterCriteria] = useState<FilterData>({
    frontendChecked: false,
    backendChecked: false,
    toolsChecked: false,
  });

  const handleFilterChange = (criteria: FilterData) => {
    setFilterCriteria(criteria);
    filterSkills(criteria);
  };

  const filterSkills = (criteria: FilterData) => {
    const { frontendChecked, backendChecked, toolsChecked } = criteria;

    if (!frontendChecked && !backendChecked && !toolsChecked) {
      setFilteredSkills(skills);
      return;
    }

    const filtered = skills.filter((skill) => {
      if (frontendChecked && skill.category === "FrontEnd") return true;
      if (backendChecked && skill.category === "BackEnd") return true;
      if (toolsChecked && skill.category === "Tools") return true;
      return false;
    });

    setFilteredSkills(filtered);
  };

  return (
    <section id="skills" className="flex mx-24 mt-24">
      <div className=" flex flex-col">
        <div className=" flex w-full items-center">
          <h2 className="lg:text-[24px] text-[26px] pl-1 w-16 bg-[#0a192fee] rounded-md shadow-lg drop-shadow-lg">
            Skills
          </h2>
          <hr className="mt-5 border-t-0.5 border-rose-600 flex-grow ml-2" />
        </div>

        <div className="bg-[#0a192fee] shadow-lg lg:w-[800px] h-full lg:p-3 md:px-4 md:my-3 justify-center rounded-2xl flex flex-col">
          <Filter onChange={handleFilterChange} />
          <ul className="flex flex-wrap my-9 px-3">
            {filteredSkills.map((skill, index) => (
              <li key={index} className="ml-4 mb-4 animate-bounce-slow">
                <div className="flex justify-center items-center w-24 h-24 bg-white p-5 rounded-[22px] transition-transform transform hover:scale-105 hover:shadow-xl">
                  <img src={skill.src} alt={skill.alt} title={skill.title} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}