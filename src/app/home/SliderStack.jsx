"use client";

import React from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill, RiJavascriptLine } from "react-icons/ri";
import "./styles/SliderStack.css";

export default function SliderStack() {
  const stack = [
    { id: 1, icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
    { id: 2, icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
    {
      id: 3,
      icon: <RiTailwindCssFill />,
      name: "Tailwind",
      color: "#38B2AC",
    },
    { id: 4, icon: <RiJavascriptLine />, name: "JavaScript", color: "#F7DF1E" },
    { id: 5, icon: <FaReact />, name: "ReactJS", color: "#61DAFB" },
    { id: 6, icon: <TbBrandNextjs />, name: "NextJS", color: "#000000" },
    { id: 7, icon: <FaFigma />, name: "Figma", color: "#F24E1E" },
  ];

  return (
    <div
      className="slider sm:mt-0 my-10 overflow-x-hidden"
      style={{ "--width": "100px", "--height": "50px", "--quantity": 7 }}
    >
      <div className="list">
        {stack.map((tech, idx) => (
          <div
            key={idx}
            className="item"
            title={tech.name}
            style={{
              "--position": tech.id,
              "--color": tech.color,
              animationDelay: `${(15 / stack.length) * (tech.id - 1)}s`,
            }}
          >
            <span className="icon text-4xl gap-2">
              {tech.icon} <strong className="font-light text-lg sm:text-sm">{tech.name}</strong>{" "}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
