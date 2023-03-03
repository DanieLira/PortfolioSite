import React from "react"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"

export default function Main() {
    return (
        <div className="ml-[180px] px-10 bg bg-[#1d1d1d]">
            <Home/>
            <Projects/>
            <Contact/>
        </div>
    )
}