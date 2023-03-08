import React from "react"

export default function About() {
    return (
        <div id="about" className="w-full h-[100vh] py-6 flex flex-col items-center md:flex-row ">
            <div className="w-[90%] md:w-[48%] flex items-center justify-center">
                <div className="w-[300px] h-[300px] 2xl:w-[500px] 2xl:h-[500px] object-cover rounded-full relative bg-lime-600">
                    <img
                        src="https://raw.githubusercontent.com/DanieLira/PortfolioSite/master/portfolio-site/src/content/foto-mia.png"
                        alt="A handsome guy posing"
                        className="w-full h-full object-cover rounded-full relative right-6 bottom-6"
                    />
                </div>
            </div>
            <div className="w-[90%] 2xl:w-[48%] h-full flex items-center flex-col justify-center">
                <h1 className="text-lime-600 text-5xl font-bold mb-10 w-full ">About me</h1>
                <p className="text-slate-100 w-full text-justify">
                    I am a Fullstack developer located in Mexico, passionate about programming and the world of
                    Computer Science in general.
                </p>
                <br />
                <p className="text-slate-100 w-full text-justify">
                    Committed to my work, problem solver,
                    Independent and team worker. Musician in my spare time
                    and a fan of video games.
                </p>
                <br />
                <p className="text-slate-100 w-full text-justify">
                    I am interested in learning from the best companies and working on ambitious projects
                    with positive people.
                </p>
            </div>
        </div>
    )
}