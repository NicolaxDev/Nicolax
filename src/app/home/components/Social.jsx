"use client";

import React from "react";
import "../styles/social.css";
import { animate, createScope, createSpring, createDraggable } from "animejs";
import { useRef, useEffect } from "react";

export default function Social({ icon, link }) {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: root.current }).add((self) => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      animate(".social", {
        x: isMobile ? 0 : "5rem",
        y: isMobile ? [50 * 16, 0] : 0,
        scale: [1, 0.5, 1],
        opacity: isMobile ? [0, 1] : 1,
        duration: 800,
        onComplete: () => {
          animate(".social", {
            scale: [1, 0.8, 1],
            loop: true,
            duration: 3000,
            easing: "easeInOutSine"
          });
        },
      });
    });
  }, []);
  return (
    <a
      href={link}
      target="blank"
      className="social opacity-0 sm:opacity-10 social-link p-4 text-2xl hover:scale-90 "
    >
      {icon}
    </a>
  );
}
