import { useEffect } from 'react'
import Aos from 'aos'
import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/UI/Hero'
import Exercise from './components/UI/Exercise'
import Start from './components/UI/Start'
import Pricing from './components/UI/Pricing'
import Testimonials from './components/UI/Testimonials'
import Footer from './components/UI/Footer'

const App = () => {

  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Header />
      <Hero />
      <Exercise />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App