import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export default function Sidebar() {
    const aStyle = "text-slate-100 text-center border-lime-600 p-4 hover:bg-lime-600 duration-[600ms]"

    return (
        <div className="hidden md:flex flex-col justify-between fixed left-0 top-0 h-screen w-[180px] bg-[#181818]">
            <div className="bg-[#000000] h-[200px] w-full flex items-center justify-center">
                <a href="#home">
                    <img
                        src="https://raw.githubusercontent.com/DanieLira/PortfolioSite/master/portfolio-site/src/content/logotipo.png"
                        alt="A handsome guy posing"
                        className="w-[150px] h-[150px] object-cover rounded-full"
                    />
                </a>
            </div>
            <nav className="flex flex-col h-[200px]">
                <a href="#about" className={aStyle + "  border-y"}>About</a>
                <a href="#skills" className={aStyle + "  border-b"}>My Skills</a>
                <a href="#projects" className={aStyle + "  border-b"}>Projects</a>
                <a href="#contact" className={aStyle + "  border-b"}>Contact</a>
            </nav>
            <div className="flex flex-row h-[200px] justify-around items-end w-full pb-6">
                <a href="https://github.com/DanieLira">
                    <AiFillGithub className="text-slate-100 text-5xl hover:text-lime-400 duration-[600ms]" />
                </a>
                <a href="https://linkedin.com/in/daniel-lira-733039151">
                    <AiFillLinkedin className="text-slate-100 text-5xl hover:text-lime-400 duration-[400ms]" />
                </a>
            </div>
        </div>
    )
}