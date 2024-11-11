
import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Skills from '@/components/Skills'
import React from 'react'
import '../style/page.css';
import Projects from '@/components/Projects'

export default function page() {
  return (
    <div className='custom-style'>
     <Header/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Footer/>
    </div>
  )
}

