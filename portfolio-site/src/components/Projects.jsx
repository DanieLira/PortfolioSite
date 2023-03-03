import React from "react"
import ProjectDescription from "./ProjectDescription"
import data from "../content/projects.json"
import {AiFillGithub} from "react-icons/ai"

export default function Projects() {

    const [currentProjectId, setCurrentProjectId] = React.useState(1)

    const currentProject = <ProjectDescription
        key={currentProjectId}
        data={data[currentProjectId - 1]}
    />

    return (
        <div id="projects" className="w-full h-[100vh] flex justify-between my-[5vh]">
            {currentProject}
            <div className="flex flex-col border-2 border-lime-600 self-center h-[98%] border-dashed p-10 w-[40%] text-slate-100">
                <h2 className="text-5xl my-10">Projects</h2>
                <p onClick={() => setCurrentProjectId(1)} className="flex items-center justify-between cursor-pointer text-2xl my-5 border-b-2 border-lime-600 p-2 hover:bg-lime-600 duration-[600ms]">Quizzical <AiFillGithub/></p>
                <p onClick={() => setCurrentProjectId(2)} className="flex items-center justify-between cursor-pointer text-2xl my-5 border-b-2 border-lime-600 p-2 hover:bg-lime-600 duration-[600ms]">Optician Manager <AiFillGithub/></p>
                <p onClick={() => setCurrentProjectId(3)} className="flex items-center justify-between cursor-pointer text-2xl my-5 border-b-2 border-lime-600 p-2 hover:bg-lime-600 duration-[600ms]">Excercise Tracker<AiFillGithub/></p>
                <p onClick={() => setCurrentProjectId(4)} className="flex items-center justify-between cursor-pointer text-2xl my-5 border-b-2 border-lime-600 p-2 hover:bg-lime-600 duration-[600ms]">Time Tracking Dashboard<AiFillGithub/></p>
            </div>
        </div>
    )
}