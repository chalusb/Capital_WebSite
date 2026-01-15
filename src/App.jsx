import { useState } from 'react'
import IntroAnimation from './home/IntroAnimation'
import Navigation from './home/Navigation'
import Hero from './home/Hero'
import About from './home/About'
import Schedule from './home/Schedule'
import Events from './home/Events'
import Contact from './home/Contact'
import Footer from './home/Footer'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <IntroAnimation onComplete={() => setIntroComplete(true)} />

      {introComplete && <Navigation />}

      <main>
        <Hero />
        <About />
        <Schedule />
        <Events />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
