import { useState } from 'react'
import './App.css'
import ColorBends from './ColorBends';
import NavBar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/About/Skills/Skills';
import Footer from './components/Footer/Footer/'

function App() {
  return (
    <div className="app-container">
      {/* Background Layer */}
      <div className="background-wrapper">
        <ColorBends speed={0.5} mouseInfluence={0.6} noise={0} />
      </div>

      {/* Content Layer */}
      <div className="content-wrapper">
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
