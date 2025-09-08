import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Social from './components/Social';

export default function Hero() {

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/NicolaxDev"},
    { icon: <FaYoutube />, link: "/"},
  ]

  return (
    <main className='flex w-full items-center justify-around h-[70vh]'>
        <div className='w-[50%]'>
            <h1 className='text-6xl font-black'>Nicolax</h1>
            <span className='text-darkAccent text-lg'>“Fueled by coffee, debugged with passion”</span>
            <p className='font-thin text-xl'>I’m a software engineering student and web developer who loves crafting clean, efficient, and scalable applications. For me, code is not just about functionality-it’s about creating digital experiences that are reliable, elegant, and easy to maintain.</p>
        </div>
        <div className='flex flex-col gap-4'>
            {socials.map(({icon, link}) => (
                <Social key={link} icon={icon} link={link} />
            ))}
        </div>
    </main>
  )
}
