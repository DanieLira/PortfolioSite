import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar() {
    const [isBeingShown, setIsBeingShown] = React.useState(false)

    const aStyle = "w-[100vw] text-slate-100 text-center border-lime-600 p-4 hover:bg-lime-600 duration-[600ms]"
    const navStyle = `${isBeingShown ? "h-[100vh] overflow-y-hidden" : "h-20"} md:hidden fixed top-0 w-[100vw] bg-[#181818] flex flex-col z-20`

    function toggleNavbar() {
        setIsBeingShown(prevState => !prevState)        
    }

    return (
        <nav className={navStyle}>
            <div className="flex justify-center items-center w-14 h-14 bg-[#1d1d1d] border border-slate-100 rounded-md relative top-3 self-end mr-3">
                <GiHamburgerMenu onClick={toggleNavbar} className="text-slate-100 text-4xl" />
            </div>
            {
                isBeingShown &&
                <div className="flex flex-col justify-center h-[100vh] w-[100vw] items-center">
                    <a onClick={toggleNavbar} href="#home" className={`${aStyle} border-y`}>Home</a>
                    <a onClick={toggleNavbar} href="#about" className={`${aStyle} border-b`}>About me</a>
                    <a onClick={toggleNavbar} href="#skills" className={`${aStyle} border-b`}>My Skills</a>
                    <a onClick={toggleNavbar} href="#projects" className={`${aStyle} border-b`}>Projects</a>
                    <a onClick={toggleNavbar} href="#contact" className={`${aStyle} border-b`}>Contact</a>
                </div>
            }
        </nav>
    )
}