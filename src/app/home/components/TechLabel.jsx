import React from "react";

export default function TechLabel({ icon, title, color }) {
  return (
    <div className={`text-white flex items-center justify-center border border-solid border-white/40 rounded-full sm:px-2 px-1 text-xs sm:text-sm `} style={{ backgroundColor: color }} >
      {icon} {title}
    </div>
  );
}
