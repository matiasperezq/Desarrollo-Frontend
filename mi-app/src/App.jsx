import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar'
import './index.css'
import './App.css'
import About from './components/About'


function App() {

  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
    </>
  )
}

export default App
