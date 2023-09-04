import Nav from '@/components/nav'
import Top from '@/components/top'
import AboutSection from '@/sections/about'
import ConnectSection from '@/sections/connect'
import HomeSection from '@/sections/home'
import ProjectSection from '@/sections/projects'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav/>
      <HomeSection/>
      <AboutSection/>
      <ProjectSection/>
      <ConnectSection/>
      <Top/>
    </main>
  )
}
