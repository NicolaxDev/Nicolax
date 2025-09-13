"use client";

import "../styles/currentCards.css";
import { GoProjectSymlink } from "react-icons/go";
import { animate } from "animejs";
import { useEffect, useRef } from "react";

export default function CardStack({ icon, name, link }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              opacity: [0, 1],
              translateY: [70, 0],
              duration: 1000,
              delay: 300,
              easing: "easeInOutQuad"
            });
          } else {
            entry.target.style.opacity = 0;
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="card-container mx-8 my-4 opacity-0">
      <div className="card">
        {/* Front */}
        <div className="card-front shadow-card">
          <span className="text-5xl">{icon}</span>
          <h3 className="text-xl font-medium">{name}</h3>
        </div>

        {/* Back */}
        <div className="card-back text-center">
          <h3 className="text-lg font-normal px-2 mb-2">
            Read more about {name}
          </h3>
          <a
            href={link}
            className="font-thin hover:border-darkAccent border-b border-b-transparent hover:scale-105 transition flex items-center justify-center gap-2"
          >
            Leer más <GoProjectSymlink />
          </a>
        </div>
      </div>
    </div>
  );
}
