import React from 'react'
import Contact from '../Contact'
import Footer from '../Footer'
import Intro from '../Intro'
import Nav  from '../Nav'
import Projects from '../Project'
import Skills from '../Skills'

function HomePage() {
  return (
    <div>
        <Nav/>
        <Intro/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage