import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

export default function ContactInfo() {

    function copyEmailToClipboard() {
        navigator.clipboard.writeText("danielira996@gmail.com");
        alert("Email copied to clipboard!")
    }

    return (
        <div className="w-[90%] 2xl:w-[45%] flex flex-col justify-center items-center">
            <div className="border-dashed border-2 border-lime-600 2xl:p-10 w-full flex justify-around 2xl:flex-col">
                <div className="2xl:flex 2xl:items-center 2xl:w-full justify-start my-5">
                    <MdEmail onClick={copyEmailToClipboard} className="text-5xl 2xl:text-6xl text-slate-100 2xl:mr-4" />
                    <h3 className="hidden 2xl:block text-2xl 2xl:text-3xl text-slate-100">danielira996@gmail.com</h3>
                </div>
                <div className="2xl:flex 2xl:items-center 2xl:w-full justify-start my-5">
                    <a href="https://linkedin.com/in/daniel-lira-733039151"><AiFillLinkedin className="text-5xl 2xl:text-6xl text-slate-100 2xl:mr-4" /></a>
                    <h3 className="hidden 2xl:block text-2xl 2xl:text-3xl text-slate-100">linkedin.com/in/daniel-lira-733039151</h3>
                </div>
                <div className="2xl:flex 2xl:items-center 2xl:w-full justify-start my-5">
                    <a href="https://github.com/DanieLira"><AiFillGithub className="text-5xl 2xl:text-6xl text-slate-100 2xl:mr-4" /></a>
                    <h3 className="hidden 2xl:block 2xl:text-3xl text-slate-100">github.com/DanieLira</h3>
                </div>
            </div>
        </div>
    )
}