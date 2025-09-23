import React from 'react'
import { Hero, About, Projects, Footer } from './site-content'

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer/>
    </>

  )
}

export default App