import React from 'react'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'


const Home = () => {
  return (
    <div>
      <Header/>
        <Hero/>
        <Features/>
        <Footer/>
        
    </div>
  )
}

export default Home
