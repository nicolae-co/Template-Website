import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne1, homeObjOne2, homeObjOne3 } from '../components/InfoSection/data'
import Navbar from '../components/NavBar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne1}/>
        <InfoSection {...homeObjOne2}/>
        <Services />
        <InfoSection {...homeObjOne3}/>
        <Footer />
      
    </>
  )
}

export default Home