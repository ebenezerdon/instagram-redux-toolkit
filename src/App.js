import React from 'react'
import { Bio, Gallery, Nav } from './components'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Bio />
        <Gallery />
      </div>
    </>
  )
}

export default App
