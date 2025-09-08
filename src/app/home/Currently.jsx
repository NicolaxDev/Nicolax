import React from 'react'
import CurrentProject from './components/CurrentProject'
import projectImage from './assets/mitrapets.png'
import "./styles/social.css"
import { GoProjectSymlink } from "react-icons/go";

export default function Currently() {
  return (
    <section className='flex items-center justify-center flex-col my-20 font-leagueSpartan'>
        <h2 className='text-4xl font-bold'>I'm curently work in...</h2>
        <div className='px-4 sm:px-0'>
            <CurrentProject current={projectImage} name="Mitrapets" description="Mitrapets is a web service to adopt pets, pets who need a second life oportunity" link="https://mitrapets.vercel.app/" />
        </div>
        <a href="/projects" className='inline-flex mt-16 social-link p-4 hover:scale-95 ease-in-out duration-200 font-medium '> Explore another projects {"->"} </a>
    </section>
  )
}
