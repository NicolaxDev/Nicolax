'use client'

import React from "react";
import { TiHome } from "react-icons/ti";
import { GiOpenBook } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./styles/header.css";
import { usePathname } from "next/navigation";
import LinkHeader from "./subComponetns/LinkHeader";

export default function MainHeader() {
  const pathname = usePathname();

  const links = [
    { link: "/", icon: <TiHome /> },
    { link: "/blog", icon: <GiOpenBook /> },
  ];

  const links2 = [
    { link: "/projects", icon: <FaCode /> },
    { link: "/contact", icon: <IoIosMail /> },
  ]

  return (
    <header className="w-screen flex items-center justify-center fixed top-0">
      <nav className="flex items-center justify-around w-[90%] sm:w-[60%] p-4 my-4">
        {
            links.map(({ link, icon }) => (
                <LinkHeader key={link} link={link} icon={icon} pathname={pathname} />
        ))}
        <span className="hidden sm:flex font-leagueSpartan text-3xl font-black">Nicolax</span>
        {
            links2.map(({link, icon}) => (
                <LinkHeader key={link} link={link} icon={icon} pathname={pathname} />
        ))
        }
      </nav>
    </header>
  );
}
