'use client'
import { ConnectInfo } from '@/sections/connect'
import Image from 'next/image'
import { Fira_Code } from 'next/font/google'
import { useState } from 'react'

const fira = Fira_Code({weight: "400", subsets: ['latin']})

export default function ConnectCard({name, imgsrc, link, subtext}: ConnectInfo) {
    const [hover, setHover] = useState(false)
    return (
        <div className='flex flex-col justify-center items-center md:mx-20 my-10 overflow-visible' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <a href={link}className='relative w-36 h-36'>
                <Image src={imgsrc} alt={name} fill={true}/>
            </a>
            <div className={`absolute ${fira.className} p-2 bg-white text-black rounded-full transition-opacity ${hover ? '' : 'opacity-0' }`}>{subtext}</div>
        </div>
    )
}