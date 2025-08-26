import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Section'
import { Contact } from './components/Contact Section'

function App() {

  return (
    <div className='App'>
      <Navbar />

      <Hero />
      <Projects />
      <Contact />

      <>
      <p> &copy; 2025 Developed by Matheus Graciki. All rights reserved</p>
      </>
    </div>
  )
}

export default App
