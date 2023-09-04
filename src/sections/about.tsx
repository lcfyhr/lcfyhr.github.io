import Image from 'next/image'
import { Press_Start_2P, Fira_Code } from 'next/font/google'
import Timeline from '@/components/timeline'

const p2p = Press_Start_2P({weight: "400", subsets: ['latin']})
const fira = Fira_Code({weight: "400", subsets: ['latin']})
const about_content = "Hi! My name is Lars Fyhr. I love to ski, wakesurf, bike, golf, and play soccer. I enjoy exploring the world to experience new cultures and cuisines. I grew up in Houston, TX and graduated from the University of Texas at Austin (hook 'em) with a BS in Electrical/Computer Engineering. I would love to go back to school to further my education. I am currently located in Austin, TX working at Oracle. My interests include computer vision, quantitative finance, automation, and machine learning."


export default function AboutSection() {
    return (
        <div id="about">
            <div className="flex md:flex-row flex-col">
                <div className="flex items-center justify-center p-4 md:w-1/3 w-full h-96">
                    <div className='bg-black p-4 rounded-xl'>
                        <Image src={'/Headshot.jpg'} width={300} height={300} alt='headshot'></Image>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 md:w-2/3 w-full">
                    <h2 className={`text-4xl ${p2p.className}`}>About Me</h2>
                    <p className={`p-4 ${fira.className}`}>{about_content}</p>
                </div>
            </div>
            <div className="flex flex-col items-center p-4 w-full">
                <h1 className={`text-4xl ${p2p.className}`}>Experience</h1>
                <Timeline/>
            </div>
        </div>
    )
}