import React from 'react'
import Info from './components/Info'
import Footer from './components/Footer'
import About from './components/About'
import Interests from './components/Interests'
import './components/styles.css'


export default function App() {
    return(

        <>
        <Info name="Henok-Belachew" title="Full-Stack Developer" />
        
        <About />
        <Interests />
        <Footer />
        </>
       
    )
}

