import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Section'
import { Contact } from './components/Contact Section'

function App() {

  return (
    <>
      <Navbar />

      <Hero />
      <Projects />
      <Contact />

      <>
      <p> &copy; 2025 Developed by Matheus Graciki. All rights reserved</p>
      </>
    </>
  )
}

export default App
