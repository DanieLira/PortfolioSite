import React from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"

export default function Home() {
    return (
        <div id="home" className="relative pl-5 w-[90vw] h-[100vh] flex justify-between items-center py-[10vh]">
            <div>
                <h1 className="text-4xl 2xl:text-6xl text-slate-100">
                    <span className="text-lime-600">&lt;h1&gt;</span>
                    Hi,<br />
                    I'm Daniel,<br />
                    <strong>Full Stack Developer</strong>
                    <span className="text-lime-600">&lt;/h1&gt;</span>
                </h1>
                <button
                    type="button"
                    onClick={() => location.href = '#contact'}
                    className="font-bold border-4 2xl:font-thin text-slate-100 border-lime-600 py-4 px-14 mt-10 hover:bg-lime-600 duration-[600ms]">
                    Contact me!
                </button>
            </div>
            <div className="absolute bottom-20 -left-10 animate-bounce w-10 h-10">
                <p className="flex items-center  text-slate-100  -rotate-90 w-[150px] justify-between font-bold"><AiOutlineArrowLeft />Scroll down! </p>
            </div>
        </div>
    )
}