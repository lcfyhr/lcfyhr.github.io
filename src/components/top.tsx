'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Top() {
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 400) { 
            setVisible(true)
        } else {
            setVisible(false)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
      }, []);
    var visibility = visible ? '' : 'invisible opacity-0';
    return (
        <Link href="#home" className={`flex justify-center fixed bottom-0 right-0 w-10 h-10 m-4 bg-black rounded transition-all ${visibility}`}>
            <p className="p-2 text-white transition-all hover:text-green-500 hover:scale-150">▲</p>
        </Link>
    )
  }