import { Press_Start_2P } from 'next/font/google'

const p2p = Press_Start_2P({weight: "400", subsets: ['latin']})
interface Items {
    items: string[]
}

export default function Marquee({items}: Items) {
    return (
        <div className={`${p2p.className} text-xl relative flex flex-row items-center bg-black text-white w-full h-24 overflow-x-hidden`}>
            <div className='animate-marquee whitespace-nowrap'>
                {items.map((item) => (
                    <span key={item}>/ {item} /</span>
                ))}
            </div>
            <div className='absolute animate-marquee2 whitespace-nowrap'>
                {items.map((item) => (
                    <span key={item}>/ {item} /</span>
                ))}
            </div>
        </div>
    )
}