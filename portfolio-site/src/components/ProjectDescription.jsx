import React from "react"
import { TbCSharp } from "react-icons/tb"
import { SiTailwindcss, SiBootstrap } from "react-icons/si"
import { DiReact, DiMsqlServer } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"

export default function ProjectDescription(props) {

    const tecnologiesIcons = {
        "react": <DiReact className="text-2xl mr-1.5 text-[#1d4ed8]" />,
        "tailwind": <SiTailwindcss className="text-2xl mr-1.5 text-[#38bdf8]" />,
        "csharp": <TbCSharp className="text-2xl mr-1.5 text-[#8b5cf6]" />,
        "bootstrap": <SiBootstrap className="text-2xl mr-1.5 text-[#8b5cf6]" />,
        "sqlserver": <DiMsqlServer className="text-2xl mr-1.5 text-[#1d4ed8]" />,
        "javascript": <IoLogoJavascript className="text-2xl mr-1.5 text-[#fde047]" />
    }

    const tecElements = props.data.tecnologies.map((elem) => {
        return (
            <li className="flex items-center">
                {tecnologiesIcons[elem]} <span className="text-xs">{elem.toUpperCase()}</span>
            </li>
        )
    })

    return (
        <>
            
            <div className="flex flex-col items-end 2xl:absolute md:right-0 w-[90vw] h-[300px] md:w-[450px] md:h-[280px] drop-shadow-2xl p-4 bg-[#181818] z-10 text-slate-100 md:opacity-90 mt-10 md:mt-0">
                <h3 className="text-2xl mb-2 font-bold">{props.data.title}</h3>
                <p className="text-right">{props.data.description}</p>
                <div className="absolute bottom-3 left-1 w-full flex flex-col p-2">
                    <p className="text-left  my-5">Tecnologies:</p>
                    <ul className="flex w-full justify-around">
                        {tecElements}
                    </ul>
                </div>
            </div>
            <img src={props.data.imgUrl} className="w-[90%] md:w-[100%] 2xl:w-[90%] md:mt-10 rounded-md mt-10 2xl:mt-0" />
        </>
    )
}