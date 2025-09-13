import React from "react";
import CardStack from "./components/CardStack";
import { FaReact, FaCss3Alt, FaHtml5, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill, RiJavascriptLine } from "react-icons/ri";

export default function MyStack() {
  const stack = [
    { icon: <FaReact />, name: "ReactJS", link: "/" },
    { icon: <TbBrandNextjs />, name: "NextJS", link: "/" },
    { icon: <RiJavascriptLine />, name: "JavaScript", link: "/" },
    { icon: <RiTailwindCssFill />, name: "TailwindCSS", link: "/" },
    { icon: <FaCss3Alt />, name: "CSS3", link: "/" },
    { icon: <FaHtml5 />, name: "HTML5", link: "/" },
    { icon: <FaFigma />, name: "Figma", link: "/" },
  ];
  return (
    <section className="px-8 flex justify-around flex-wrap">
      {stack.map((tech, index) => (
        <CardStack
          key={index}
          icon={tech.icon}
          name={tech.name}
          link={tech.link}
        />
      ))}
    </section>
  );
}
