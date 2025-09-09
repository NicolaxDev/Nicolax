"use client";

import React, { useEffect, useState } from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill, RiJavascriptLine } from "react-icons/ri";
import "./styles/SliderStack.css";

const stack = [
  { id: 1, icon: <TbBrandNextjs />, name: "NextJS", color: "#000000" },
  { id: 2, icon: <FaReact />, name: "ReactJS", color: "#61DAFB" },
  { id: 3, icon: <RiJavascriptLine />, name: "JavaScript", color: "#F7DF1E" },
  { id: 4, icon: <RiTailwindCssFill />, name: "TailwindCSS", color: "#38B2AC" },
  { id: 5, icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { id: 6, icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { id: 7, icon: <FaFigma />, name: "Figma", color: "#F24E1E" },
];

export default function SliderStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    const handler = (e) => setIsMobile(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  if (isMobile) {
    // mobile
    const items = stack.concat(stack);
    return (
      <div className="slider mobile mt-0">
        <div className="list">
          {items.map((tech, idx) => (
            <div key={idx} className="item" style={{ "--color": tech.color }}>
              <span className="icon text-4xl gap-2">
                <span>{tech.icon}</span>
                <strong className="font-light text-sm">{tech.name}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // desktop
  return (
    <div
      className="slider desktop mt-10"
      style={{ "--width": "100px", "--height": "15vh", "--quantity": stack.length }}
    >
      <div className="list">
        {stack.map((tech) => (
          <div
            key={tech.id}
            className="item"
            title={tech.name}
            style={{
              "--position": tech.id,
              "--color": tech.color,
              animationDelay: `${(15 / stack.length) * (tech.id - 1)}s`,
            }}
          >
            <span className="icon text-4xl gap-2">
              <span>{tech.icon}</span>
              <strong className="font-light text-lg">{tech.name}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}