"use client";
import { div } from "framer-motion/client";
import { projectSchema, projectsData } from "./Data";
import { useState } from "react";

export default function Projects() {
    const [clicked, setClicked] = useState<boolean>(false)
    const [current, setCurrent] = useState<projectSchema>({
        title: "",
        thumbnail: "/",
        shortDescription: "",
        overview: "",
        problem: "",
        solution: "",
        techStack: [],
        keyFeatures: [],
        codeLink: "",
        liveLink: "",
    })

    const handleClick = (element: projectSchema) => {
        setClicked(true)
        setCurrent({ ...element })
    }

    return (
        <section id='projects' className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/4">

            <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl"></div>

            <div className="relative z-40 flex flex-col justify-start py-[8vh] md:py-[10vh] items-center gap-6 md:gap-10 px-5">

                <div className="flex justify-center text-sm items-center gap-2 bg-[#f45a3315] px-4 py-2 rounded-full ring-2 ring-[#f45a3340]">
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/f45a33/folder-invoices--v1.png" alt="folder" />
                    <span className="text-[#f45a33]" style={{ fontWeight: "500" }}>Portfolio</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight" style={{ fontWeight: "600" }}>
                    Featured{" "}
                    <span
                        className="bg-clip-text text-transparent font-bold"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #f45a33 0%, #8347EA 55%, #248CF3 75% , #22C3AD 100%)",
                            fontWeight: "600",
                        }}
                    >
                        Projects
                    </span>
                </h1>

                <div className="text-base md:text-lg text-gray-500 text-center max-w-2xl">
                    Real-world applications built to solve actual problems with modern technologies.
                </div>

                <div className="flex gap-10 flex-wrap justify-center items-center">
                    {
                        projectsData.map((element: projectSchema, idx: number) => {
                            return (
                                <div
                                    key={idx}
                                    className={`z-50 w-[90%] sm:w-80 md:w-[90%] lg:w-96 flex flex-col justify-start items-center rounded-2xl hover:cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-100 hover:ring-[#f45a3330] hover:ring-2 ${clicked ? 'z-10' : 'z-50'}`}
                                    onClick={() => { handleClick(element) }}
                                >
                                    <div className="w-full h-[220px] sm:h-[250px] rounded-t-2xl overflow-hidden">
                                        <img
                                            src={element.thumbnail}
                                            alt="No Image Available"
                                            className="w-full h-full object-cover rounded-t-2xl hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="p-5 w-full gap-4 flex flex-col justify-start items-start rounded-b-2xl">
                                        <div className="text-xl sm:text-2xl" style={{ fontWeight: "550" }}>
                                            {element.title}
                                        </div>

                                        <div className="text-sm text-gray-600">
                                            {element.shortDescription}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {element.techStack.slice(0, 5).map((element, idx) => {
                                                return (
                                                    <div key={idx} className="text-sm text-gray-500 px-3 py-1 rounded-full bg-gray-100">
                                                        {element}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Overlay */}
                <div
                    className={`fixed inset-0 mt-15 bg-[#00000070] backdrop-blur-md flex justify-center items-center transition-all duration-200 ${clicked ? 'opacity-100 z-[999]' : 'opacity-0 pointer-events-none'}`}
                >
                    <div className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[80%] h-[90vh] flex-col rounded-2xl shadow-2xl flex relative justify-start items-center bg-white">

                        <div className="w-full h-full overflow-y-auto flex flex-col">

                            <div
                                className="absolute bg-white ring-2 ring-[#00000030] shadow-2xl h-12 w-12 flex hover:cursor-pointer justify-center items-center text-2xl rounded-full top-4 right-4"
                                style={{ fontWeight: "600" }}
                                onClick={() => { setClicked(false) }}
                            >
                                X
                            </div>

                            <div className="w-full flex-shrink-0 rounded-t-2xl h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden">
                                <img
                                    src={current.thumbnail}
                                    alt="No Image Available"
                                    className="w-full h-full object-cover rounded-t-2xl"
                                />
                            </div>

                            <div className="flex flex-col justify-start w-full items-center gap-6 py-6">

                                <div className="w-full flex flex-col items-start justify-start gap-2 px-5">
                                    <div className="text-2xl sm:text-3xl text-[#F45A33]" style={{ fontWeight: "600" }}>
                                        {current.title}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {current.shortDescription}
                                    </div>
                                </div>

                                <div className="px-5 text-sm text-gray-700">
                                    <div className="text-lg text-[#22c3ad]" style={{ fontWeight: "600" }}>
                                        Overview
                                    </div>
                                    {current.overview}
                                </div>

                                <div className="p-5 w-full flex flex-col md:flex-row justify-center gap-5">
                                    <div className="flex flex-col gap-2 text-sm text-gray-500 w-full md:w-[45%] bg-[#f45a3315] rounded-2xl p-5 ring-2 ring-[#f45a3330]">
                                        <div className="text-[#f45a33] text-lg" style={{ fontWeight: "600" }}>
                                            Problem
                                        </div>
                                        {current.problem}
                                    </div>

                                    <div className="flex flex-col gap-2 text-sm text-gray-500 w-full md:w-[45%] bg-[#22C3AD15] ring-2 ring-[#22C3AD30] rounded-2xl p-5">
                                        <div className="text-[#22C3AD] text-lg" style={{ fontWeight: "600" }}>
                                            Solution
                                        </div>
                                        {current.solution}
                                    </div>
                                </div>

                                <div className="w-full flex flex-col gap-5">
                                    <div className="w-full px-5 text-xl" style={{ fontWeight: "600" }}>
                                        Key Features
                                    </div>

                                    <div className="w-full gap-3 flex-wrap flex justify-start items-center px-5">
                                        {current.keyFeatures.map((element: string, idx: number) => {
                                            return (
                                                <div key={idx} className="bg-[#f45a3320] rounded-full ring-2 text-sm text-[#f45a33] ring-[#f45a3350] px-5 py-1">
                                                    {element}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="w-full flex flex-col gap-5 pb-5">
                                    <div className="w-full px-5 text-xl" style={{ fontWeight: "600" }}>
                                        Tech Stack
                                    </div>

                                    <div className="w-full gap-3 flex-wrap flex justify-start items-center px-5">
                                        {current.techStack.map((element: string, idx: number) => {
                                            return (
                                                <div key={idx} className="bg-[#00000010] text-gray-800 rounded-full text-sm px-5 py-1">
                                                    {element}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="w-full p-5 flex flex-col sm:flex-row gap-5 justify-start">
                                    <a href={current.codeLink} target="_blank" rel="noopener noreferrer">
                                        <div className="ring-2 ring-[#00000020] flex justify-center items-center gap-2 rounded-xl px-5 py-3" style={{ fontWeight: "500" }}>
                                            <img width='25' height='25' src="https://img.icons8.com/ios/50/16161c/github--v1.png" alt="github" />
                                            View Code
                                        </div>
                                    </a>

                                    <a href={current.liveLink} target="_blank" rel="noopener noreferrer">
                                        <div className="bg-[#f45a33] text-white flex justify-center items-center gap-2 rounded-xl px-5 py-3" style={{ fontWeight: "500" }}>
                                            Live Preview
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
