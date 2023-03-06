import React from "react"

export default function Skills() {
    return (
        <div id="skills" className="w-full h-[100vh] py-2 flex flex-col md:flex-row items-center justify-between">
            <div className="w-[90vw] md:w-[48%]">
                <h2 className="text-lime-600 text-5xl font-bold mb-10">Skills and Experience</h2>
                <p className="text-slate-100 text-justify">
                    Since I got into the industry as a programmer, I have dedicated myself to web development both in Frontend and in
                    Backend.
                </p>
                <br />
                <p className="text-slate-100 text-justify">
                    In my jobs I have had the opportunity to create efficient applications that are easy to use, following
                    the best practices. I can develop complete applications using
                    HTML, CSS and Javascript for the Frontend; also using ReactJS as a reactive component framework.
                    For the style of the pages I have used libraries like Bootstrap and Tailwind CSS.
                </p>
                <br />
                <p className="text-slate-100 text-justify">
                    As for the Backend, I have experience in .NET with C#, developing RESTful APIs following the best
                    standards implementing, for example, the repository pattern, pagination and Jason Web Token (JWT)
                    and Entity Framework.
                </p>
                <br />
                <p className="text-slate-100 text-justify">
                    I have also worked with database environments such as SQL Server and Oracle.
                </p>
            </div>
            <div className="w-[90vw] md:w-[48%] mt-8">
                <div className="pb-5">
                    <p className="text-slate-100 font-bold">C# (.NET)</p>
                    <div className="w-full h-[10px] bg-slate-300 flex justify-start my-2">
                        <div className="w-[85%] h-full bg-[#8b5cf6]"></div>
                    </div>
                </div>
                <div className="pb-5">
                    <p className="text-slate-100 font-bold">Frontend (JS, HTML, CSS)</p>
                    <div className="w-full h-[10px] bg-slate-300 flex justify-start my-2">
                        <div className="w-[95%] h-full bg-lime-600"></div>
                    </div>
                </div>
                <div className="pb-5">
                    <p className="text-slate-100 font-bold">React</p>
                    <div className="w-full h-[10px] bg-slate-300 flex justify-start my-2">
                        <div className="w-[75%] h-full bg-[#1d4ed8]"></div>
                    </div>
                </div>
                <div className="pb-5">
                    <p className="text-slate-100 font-bold">SQL</p>
                    <div className="w-full h-[10px] bg-slate-300 flex justify-start my-2">
                        <div className="w-[80%] h-full bg-orange-500"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}