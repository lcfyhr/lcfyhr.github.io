'use client'
import Image from 'next/image'
import { Fira_Code } from 'next/font/google'
import { useState } from 'react'

const fira = Fira_Code({weight: "400", subsets: ['latin']})

export interface Event {
    name: string,
    imgsrc: string,
    year: string
}

const timeline_events = [
    {
        name: "Started Coding",
        imgsrc: "/events/Start.png",
        year: "2016"
    },
    {
        name: "Golden Section Ventures",
        imgsrc: "/events/GSV.png",
        year: "2019"
    },
    {
        name: "Ping Identity",
        imgsrc: "/events/Ping.png",
        year: "2021"
    },
    {
        name: "UT Austin",
        imgsrc: "/events/UTAustin.png",
        year: "2022"
    },
    {
        name: "Oracle",
        imgsrc: "/events/Oracle.png",
        year: "2022"
    },
]

const TLEvent = (event: Event) => {
    const [hover, setHover] = useState(false)
    return (
        <div className='flex flex-col items-center' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='flex justify-center items-center relative p-4 m-4 bg-white h-36 w-36 rounded-full border-8 border-black'>
                <Image src={event.imgsrc} alt="event" width={150} height={150}/>
            </div>
            <div className={`${fira.className} h-6 flex flex-col items-center transition-opacity ${hover ? '' : 'opacity-0'}`}>
                <h3 className='absolute'>
                    {event.year + ": " + event.name}
                </h3>
            </div>
        </div>
    )
}

export default function Timeline() {
    return (
        <div className='flex md:flex-row flex-col justify-center items-center p-12'>
            {timeline_events.map((event) => (
                <TLEvent key={event.name} name={event.name} imgsrc={event.imgsrc} year={event.year}/>
            ))}
        </div>
    )
}