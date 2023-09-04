import Marquee from '@/components/marquee'
import Image from 'next/image'

const marquee_items = ["ML", "AI", "Python", "Kotlin", "TypeScript", "Java", "C++", "Linux"]

export default function HomeSection() {
    return (
        <div id="home">
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
                <div className='flex flex-1 items-center justify-center'>
                    <Image src={'/coding-freak.gif'} alt="Where'd my content go???" width={800} height={800}/>
                </div>
                <Marquee items={marquee_items}/>
            </div>
        </div>
    )
}