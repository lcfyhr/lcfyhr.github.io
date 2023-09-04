'use client'

import { Project } from '@/sections/projects';
import Image from 'next/image'
import { useState } from 'react';
import { Fira_Code } from 'next/font/google'

const fira = Fira_Code({weight: "400", subsets: ['latin']})

export default function ProjectCard({name, imgsrc, description, tools}: Project) {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className="relative w-80 h-80 transition-transform [perspective:1000px] [transform-style:preserve-3d] hover:scale-110" onClick={() => setShowDescription(!showDescription)}>
            <div className={`absolute [backface-visibility:hidden] rounded-lg border-8 border-black w-full h-full z-10 transition-transform duration-700 ${showDescription ? '[transform:rotateY(180deg)]' : ''}`}>
                <Image src={imgsrc} alt="projectimg" fill={true}/>
            </div>
            <div className={`${fira.className} absolute [backface-visibility:hidden] flex flex-col justify-between items-center p-4 rounded bg-black text-white w-full h-full z-0 transition-transform duration-700 ${showDescription ? '' : '[transform:rotateY(-180deg)]'}`}>
                <h2 className='text-xl'>{name}</h2>
                <p className='text-xxs'>{description}</p>
                <div className='grid grid-cols-3 text-green-500 text-sm w-full'>
                    {tools.map((tool) => (
                        <p className='text-center p-1' key={tool}>{tool}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}