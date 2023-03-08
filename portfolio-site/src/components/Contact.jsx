import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

export default function Contact() {
    
    function copyEmailToClipboard() {
        navigator.clipboard.writeText("danielira996@gmail.com");
        alert("Email copied to clipboard!")
    }
        
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => console.log("Form successfully submitted"))
          .catch((error) => alert(error));
      };
      
      document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);

    return (
        <div id="contact" className="w-full 2xl:h-[100vh] flex flex-col items-center 2xl:flex-row 2xl:justify-between 2xl:py-[30vh] ">
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
            <div className="w-[90%] 2xl:w-[48%] mt-10 2xl:mt-0 flex flex-col justify-center">
                <h2 className="text-lime-600 text-5xl font-bold my-3">Contact</h2>
                <p className="text-slate-100 my-3">I'm interested in any kind of opportunities. :)</p>
                <form action="" className="flex flex-col" data-netlify="true">
                    <div className="flex flex-col 2xl:flex-row justify-between w-full my-5">
                        <input type="text" placeholder="Name" className="mb-10 2xl:mb-0 2xl:w-[48%] h-10 p-3 bg-[#2b2b2b] text-slate-100"></input>
                        <input type="text" placeholder="Your Email" className="2xl:w-[48%] h-10 p-3 bg-[#2b2b2b] text-slate-100"></input>
                    </div>
                    <input type="text" placeholder="Subject" className="my-5 h-10 p-3 bg-[#2b2b2b] text-slate-100"></input>
                    <textarea type="text" placeholder="Message" className="my-5 h-40 p-3 bg-[#2b2b2b] text-slate-100"></textarea>
                    <input type="submit" value="Send Message!" className="border-2 self-end my-5 border-lime-600 text-slate-100 font-bold w-48 h-12 hover:bg-lime-600 duration-[600ms]"></input>
                </form>
            </div>
        </div>
    )
}
