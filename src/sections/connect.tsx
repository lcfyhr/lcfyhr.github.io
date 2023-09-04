import ConnectCard from '@/components/connectCard'
import { Press_Start_2P, Fira_Code } from 'next/font/google'

const p2p = Press_Start_2P({weight: "400", subsets: ['latin']})
const fira = Fira_Code({weight: "400", subsets: ['latin']})

export interface ConnectInfo {
    name: string,
    imgsrc: string,
    link: string,
    subtext: string
}

const connect_items = [
    {
        name: "Email",
        imgsrc: "/icons/Email.png",
        link: "mailto:fyhr_lars@yahoo.com",
        subtext: "fyhr_lars@yahoo.com"
    },
    {
        name: "LinkedIn",
        imgsrc: "/icons/LI.png",
        link: "https://www.linkedin.com/in/lars-fyhr/",
        subtext: "@lars-fyhr"
    },
    {
        name: "GitHub",
        imgsrc: "/icons/GH.png",
        link: "https://www.github.com/lcfyhr/",
        subtext: "@lcfyhr"
    }
]

export default function ConnectSection() {
    return (
        <div id="connect">
            <div className="flex justify-center items-center p-4 w-full h-24">
                <h1 className={`text-4xl ${p2p.className}`}>{"Connect"}</h1>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center p-4 w-full">
                {connect_items.map((item) => (
                    <ConnectCard key={item.name} name={item.name} imgsrc={item.imgsrc} link={item.link} subtext={item.subtext}/>
                ))}
            </div>
            <div className="flex flex-col justify-center items-center p-4 w-full h-12 mt-12">
                <h2 className={`${p2p.className} text-xs`}>Crafted by Lars Fyhr</h2>
                <h3 className={`text-xxs pt-4 ${fira.className}`}>I am not a front end developer and I made this! Imagine what I can build for you!</h3>
            </div>
        </div>
    )
}