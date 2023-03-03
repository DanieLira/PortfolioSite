import React from "react"
import { TbCSharp } from "react-icons/tb"
import { SiTailwindcss } from "react-icons/si"
import { DiReact } from "react-icons/di"

export default function ProjectDescription(props){
    return(
        <div className="relative w-[58%] flex items-center">
                <img src="src\content\ejemplo-proyecto.png" className="w-[80%]" />
                <div className="drop-shadow-2xl p-4 flex flex-col items-end absolute right-0 w-[450px] h-[280px] bg-[#181818] z-10 text-slate-100 opacity-90">
                    <h3 className="text-2xl mb-2 font-bold">{props.data.title}</h3>
                    <p className="text-right">{props.data.description}</p>
                    <div className="absolute bottom-3 left-1 w-full flex flex-col p-2">
                        <p className="text-left  my-5">Tecnologies:</p>
                        <ul className="flex w-full justify-around">
                            <li className="flex items-center">
                                <DiReact className="text-2xl mr-1.5 text-[#1d4ed8]" />React
                            </li>
                            <li className="flex items-center">
                                <SiTailwindcss className="text-2xl mr-1.5 text-[#38bdf8]" />Tailwind
                            </li>
                            <li className="flex items-center">
                                <TbCSharp className="text-2xl mr-1.5 text-[#8b5cf6]" /> .NET
                            </li>
                            <li className="flex items-center">
                                <SiTailwindcss className="text-2xl mr-1.5 text-[#38bdf8]" />Tailwind
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}