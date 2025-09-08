import React from "react";
import "../styles/social.css";

export default function Social({ icon, link }) {
  return (
    <a href={link} target="blank" className="social-link p-4 text-2xl hover:scale-90 ">
      {icon}
    </a>
  );
}
