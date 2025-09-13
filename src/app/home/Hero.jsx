"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Social from "./components/Social";
import "./styles/hero.css";
import { animate, createScope } from "animejs";
import { useRef, useEffect } from "react";

export default function Hero() {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/NicolaxDev" },
    { icon: <FaYoutube />, link: "/" },
  ];

  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: root.current }).add((self) => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      animate(".heroText", {
        x: isMobile ? 0 : "-10rem",
        y: isMobile ? [-50 * 16, 0] : 0,
        opacity: isMobile ? [0, 1] : [0.3, 0.7, 1],
        easing: "easeInOutSine",
        duration: 800,
        onComplete: () => {
          animate(".nicolax", {
            keyframes: [
              { scale: 0.9, duration: 500, easing: "easeInOutSine" },
              { scale: 1, duration: 500, easing: "easeInOutSine" },
              { duration: 3000 },
            ],
            loop: true,
            easing: "easeInOutSine",
          });
        },
      });
    });
  }, []);

  return (
    <div className="hero pt-32 sm:pt-28 pb-10">
      <main className="flex flex-col sm:flex-row w-full items-center justify-center h-[70vh]">
        <div className="heroText opacity-0 sm:opacity-10 sm:w-[50%] w-[90%] sm:mb-0 mb-16 px-4 sm:text-start text-center">
          <h1 className="nicolax text-7xl sm:text-9xl font-black">NICOLAX</h1>
          <span className="text-darkAccent text-lg font-medium">
            “Fueled by coffee, debugged with passion”
          </span>
          <p className="font-thin text-xl">
            I’m a software engineering student and web developer who loves
            crafting clean, efficient, and scalable applications. For me, code
            is not just about functionality-it’s about creating digital
            experiences that are reliable, elegant, and easy to maintain.
          </p>
        </div>
        <div className="flex sm:flex-col gap-4">
          {socials.map(({ icon, link }) => (
            <Social key={link} icon={icon} link={link} />
          ))}
        </div>
      </main>
    </div>
  );
}
