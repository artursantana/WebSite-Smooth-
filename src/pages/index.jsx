import { Navbar } from "../components/Navbar"
import { Sidebar } from '../components/Sidebar'
import { HeroSection } from '../components/HeroSection'
import { InfoSection } from "../components/InfoSection"

import { useState } from "react"
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/Data"


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
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
    </>
  )
}
