'use client'
import Link from "next/link"
import { useState } from 'react';
import { Press_Start_2P } from 'next/font/google'

const p2p = Press_Start_2P({weight: "400", subsets: ['latin']})

export default function Nav() {
    const links = ["Home", "About", "Projects", "Connect"]
    const [activeSection, setActiveSection] = useState("Home")

    return (
        <div className="flex flex-row justify-between items-center h-14 p-4 bg-transparent fixed top-0 w-full z-20">
            <div className={`text-xl ${p2p.className}`}>Lars Fyhr</div>
            <ul className="flex flex-row">
                {links.map((link) => (
                    <li className={`pl-3 text-xxs md:text-sm ${p2p.className} transition-all hover:opacity-50 hover:scale-110 ${(link == activeSection) ? 'text-green-500 scale-110' : ''}`} key={link}>
                        <Link onClick={() => setActiveSection(link)} href={"#" + link.toLowerCase()}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
  }