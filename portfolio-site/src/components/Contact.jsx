import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

export default function Contact() {
    
    //TODO: ADD FORM FUNCTIONALITY
    
    return (
        <div id="contact" className="w-full h-[100vh] flex justify-between py-[30vh] ">
            
            <div className="w-[45%] flex flex-col justify-center items-start ">
                <div className="border-dashed border-2 border-lime-600 p-10">
                    <div className="flex items-center w-full justify-start my-5">
                        <MdEmail className="text-6xl text-slate-100 mr-4" />
                        <h3 className="text-3xl text-slate-100">danielira996@gmail.com</h3>
                    </div>
                    <div className="flex items-center w-full justify-start my-5">
                        <AiFillLinkedin className="text-6xl text-slate-100 mr-4" />
                        <h3 className="text-3xl text-slate-100">linkedin.com/in/daniel-lira-733039151</h3>
                    </div>
                    <div className="flex items-center w-full justify-start my-5">
                        <AiFillGithub className="text-6xl text-slate-100 mr-4" />
                        <h3 className="text-3xl text-slate-100">github.com/DanieLira</h3>
                    </div>
                </div>
            </div>
            <div className="w-[48%] flex flex-col justify-center">
                <h2 className="text-lime-600 text-5xl font-bold my-3">Contact</h2>
                <p className="text-slate-100 my-3">I'm interested in any kind of opportunities. :)</p>
                <form action="" className="flex flex-col">
                    <div className="flex justify-between w-full my-5">
                        <input type="text" placeholder="Name" className="w-[48%] h-10 p-3 bg-[#2b2b2b] text-slate-100"></input>
                        <input type="text" placeholder="Email" className="w-[48%] h-10 p-3 bg-[#2b2b2b] text-slate-100"></input>
                    </div>
                    <input type="text" placeholder="Subject" className="my-5 h-10 p-3 bg-[#2b2b2b] text-slate-100"></input>
                    <textarea type="text" placeholder="Message" className="my-5 h-40 p-3 bg-[#2b2b2b] text-slate-100"></textarea>
                    <input type="submit" value="Send Message!" className="border-2 self-end my-5 border-lime-600 text-slate-100 font-bold w-48 h-12 hover:bg-lime-600 duration-[600ms]"></input>
                </form>
            </div>
        </div>
    )
}
