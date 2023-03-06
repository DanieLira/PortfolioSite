import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

export default function Contact() {
    
    function copyEmailToClipboard() {
        navigator.clipboard.writeText("danielira996@gmail.com");
        alert("Email copied to clipboard!")
    }
    //TODO: ADD FORM FUNCTIONALITY
    
    return (
        <div id="contact" className="w-full md:h-[100vh] flex flex-col items-center md:flex-row md:justify-between md:py-[30vh] ">
            <div className="w-[90%] md:w-[45%] flex flex-col justify-center items-center">
                <div className="border-dashed border-2 border-lime-600 md:p-10 w-full flex justify-around md:flex-col">
                    <div className="md:flex md:items-center md:w-full justify-start my-5">
                        <MdEmail onClick={copyEmailToClipboard} className="text-5xl md:text-6xl text-slate-100 md:mr-4" />
                        <h3 className="hidden md:block text-2xl md:text-3xl text-slate-100">danielira996@gmail.com</h3>
                    </div>
                    <div className="md:flex md:items-center md:w-full justify-start my-5">
                        <a href="https://linkedin.com/in/daniel-lira-733039151"><AiFillLinkedin className="text-5xl md:text-6xl text-slate-100 md:mr-4" /></a>
                        <h3 className="hidden md:block text-2xl md:text-3xl text-slate-100">linkedin.com/in/daniel-lira-733039151</h3>
                    </div>
                    <div className="md:flex md:items-center md:w-full justify-start my-5">
                        <a href="https://github.com/DanieLira"><AiFillGithub className="text-5xl md:text-6xl text-slate-100 md:mr-4" /></a>
                        <h3 className="hidden md:block md:text-3xl text-slate-100">github.com/DanieLira</h3>
                    </div>
                </div>
            </div>
            <div className="w-[90%] md:w-[48%] mt-10 md:mt-0 flex flex-col justify-center">
                <h2 className="text-lime-600 text-5xl font-bold my-3">Contact</h2>
                <p className="text-slate-100 my-3">I'm interested in any kind of opportunities. :)</p>
                <form action="" className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between w-full my-5">
                        <input type="text" placeholder="Name" className="mb-10 md:mb-0 md:w-[48%] h-10 p-3 bg-[#2b2b2b] text-slate-100"></input>
                        <input type="text" placeholder="Your Email" className="md:w-[48%] h-10 p-3 bg-[#2b2b2b] text-slate-100"></input>
                    </div>
                    <input type="text" placeholder="Subject" className="my-5 h-10 p-3 bg-[#2b2b2b] text-slate-100"></input>
                    <textarea type="text" placeholder="Message" className="my-5 h-40 p-3 bg-[#2b2b2b] text-slate-100"></textarea>
                    <input type="submit" value="Send Message!" className="border-2 self-end my-5 border-lime-600 text-slate-100 font-bold w-48 h-12 hover:bg-lime-600 duration-[600ms]"></input>
                </form>
            </div>
        </div>
    )
}
