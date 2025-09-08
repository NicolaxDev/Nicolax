import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../styles/current.css"
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import TechLabel from "./TechLabel";

export default function CurrentProject({ current, name, description, link }) {
  const techs = [
    {title: 'Next.js', icon: <TbBrandNextjs />, color: "#000000"},
    {title: 'React js', icon: <FaReact />, color: "#21A1C4"},
    {title: 'TailwindCSS', icon: <RiTailwindCssFill />, color: "#0E7490"},
  ]
  return (
    <div className="current sm:hover:scale-105 transition-all duration-300 ease-in-out text-white rounded-xl sm:p-4 p-4 flex flex-col items-start font-leagueSpartan gap-4 sm:gap-8 mt-10">
      <div className="flex justify-between items-center gap-4 ">
        <Image
          src={current}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h2 className="font-semibold text-2xl">{name}</h2>
          <ul className="flex items-center sm:gap-1 gap-[2px] ">
              {
                techs.map((tech, index)=>(
                  <TechLabel key={index} title={tech.title} icon={tech.icon} color={tech.color} />
                ))
              }
          </ul>
        </div>
      </div>
      <div className="flex items-center text-start flex-col sm:gap-[1px] max-w-xs">
        <p className="font-extralight">{description}</p>
        <a
          href={link}
          className="inline-flex items-center justify-start gap-2 pt-3 transition-colors underline font-light"
          target="blank"
        >
          View project <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}
