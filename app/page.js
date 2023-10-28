import Image from 'next/image'
import HeroSection from './components/HeroSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B132B] container mx-auto py-4" >
      <HeroSection />
    </main>
  )
}
