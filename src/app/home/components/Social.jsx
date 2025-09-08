import React from "react";
import "../styles/social.css";

export default function Social({ icon, link }) {
  return (
    <a href={link} target="blank" className="p-4 text-2xl ">
      {icon}
    </a>
  );
}
