import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Gallery } from './components/Gallery'
import { Details } from './components/Details'
import { RSVP } from './components/RSVP'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-emerald-50">
      <Hero />
      <Story />
      <Gallery />
      <Details />
      <RSVP />
      <Footer />
    </div>
  )
}

export default App