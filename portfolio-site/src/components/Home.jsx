import React from "react"
import {AiOutlineArrowLeft} from "react-icons/ai"

export default function Home() {
    return (
        <div id="home" className="relative flex justify-between items-center py-[30vh]">
            <div>
                <h1 className="text-8xl text-slate-100">
                    Hi,<br />
                    I'm Daniel,<br />
                    Full Stack developer
                </h1>
                <button
                    type="button"
                    onClick={()=>location.href='#contact'}
                    className="border-4 text-slate-100 border-lime-600 py-4 px-14 mt-10 hover:bg-lime-600 duration-[600ms]">
                    Contact me!
                </button>
            </div>
            <img
                src="src\content\foto-mia.jpg"
                alt="A handsome guy posing"
                className="w-[300px] h-[300px] object-cover rounded-full mr-36"
            />
            <div className="absolute bottom-20 right-10 animate-bounce w-10 h-10">
                <p className="flex items-center  text-slate-100  -rotate-90 w-[150px] justify-between font-bold"><AiOutlineArrowLeft/>Scroll down! </p>
            </div>
        </div>
    )
}