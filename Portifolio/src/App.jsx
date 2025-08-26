import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Section'
import { Contact } from './components/Contact Section'
import { useEffect, useState } from 'react'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
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
