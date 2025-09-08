import React from "react";
import "../styles/link.css";

export default function LinkHeader({ link, icon, pathname }) {
  const isActive = pathname === link;
  const shadow = isActive ? "outside" : "inside";

  return (
    <a
      href={link}
      className={` link-btn ${shadow} px-6 sm:px-8 py-2 text-2xl`}
    >
      {icon}
    </a>
  );
}
