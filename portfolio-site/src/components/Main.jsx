import React from "react"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import Skills from "./Skills"
import About from "./About"

export default function Main() {
    return (
        <div className="md:ml-[180px] xl:px-10 2xl:px-20 bg-[#1d1d1d] overflow-x-hidden">
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}