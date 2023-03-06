import React from "react"
import ProjectDescription from "./ProjectDescription"
import data from "../content/projects.json"
import { AiFillGithub } from "react-icons/ai"

export default function Projects() {

    const [currentProjectId, setCurrentProjectId] = React.useState(1)

    const currentProject = <ProjectDescription
        key={currentProjectId}
        data={data[currentProjectId - 1]}
    />

    const allProjects = data.map((elem, index) => {
        return <ProjectDescription
            key={index}
            data={elem}
        />
    })

    const projectNames = data.map(elem => {
        return (
            <p
                onClick={() => setCurrentProjectId(elem.id)}
                className="flex items-center justify-between cursor-pointer text-2xl my-5 border-b-2 border-lime-600 p-2 hover:bg-lime-600 duration-[600ms]">
                {elem.title}
                <a href={elem.gitUrl} >
                    <AiFillGithub className="text-4xl" />
                </a>
            </p>
        )
    })

    return (
        <div id="projects" className="w-full md:h-[100vh] flex flex-col md:flex-row justify-between my-20 md:my-[5vh]">
            <div className="hidden md:flex relative w-[58%] items-center">
                {currentProject}
            </div>
            <div className="md:hidden flex flex-col items-center h-full mt-36">
                <h1 className="text-lime-600 text-4xl font-bold">Projects</h1>
                {allProjects}
            </div>
            <div className="hidden md:flex flex-col border-2 border-lime-600 self-center h-[90%] border-dashed p-10 w-[40%] text-slate-100">
                <h2 className="text-5xl my-10">Projects</h2>
                {projectNames}
            </div>
        </div>
    )
}