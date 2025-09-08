import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CurrentProject({ current, name, description, link }) {
  return (
    <div className="sm:hover:scale-105 transition-all duration-300 ease-in-out bg-white text-darkAccent rounded-xl sm:p-4 p-2 flex items-center font-leagueSpartan gap-4 sm:gap-8 mt-10">
      <Image
        src={current}
        alt="project image"
        width={120}
        height={120}
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="flex flex-col sm:gap-[1px] max-w-xs">
        <h2 className="font-semibold text-2xl text-accent">{name}</h2>
        <p className="font-extralight">{description}</p>
        <a
          href={link}
          className="inline-flex items-center justify-start gap-2 py-1 text-accent transition-colors underline font-light"
          target="blank"
        >
          View project <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}
