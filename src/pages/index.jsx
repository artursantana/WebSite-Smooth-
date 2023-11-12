import { Navbar } from "../components/Navbar"
import { Sidebar } from '../components/Sidebar'
import { HeroSection } from '../components/HeroSection'

import { useState } from "react"



export const Home = () => {
const [isOpen, setisOpen] = useState(false)

const toggle = () => {
    setisOpen(!isOpen)
}

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
    </>
  )
}
