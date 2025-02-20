import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import FeatureSection from './components/FeatureSection'
import DesignSection from './components/DesignSection'
import CustomerSection from './components/CustomerSection'
import About from './components/About'
import TryNow from './components/TryNow'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <CompanyLogo/>
     <FeatureSection/>
     <DesignSection/>
     <CustomerSection/>
     <About/>
     <TryNow/>
     <Footer/>
    </>
  )
}

export default App
