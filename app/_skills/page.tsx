"use client";
import { Head, skillsList, ContentInfo, Content, contentList } from "./skills";
import { useState, useEffect } from "react";
import { Progress } from "@heroui/react";

export default function Skills() {
    const [idx, setIndex] = useState<number>(0)
    const [curr, setCurr] = useState<Head>({ ...skillsList[0] })
    const [data, setData] = useState<ContentInfo[]>([])

    const mapTitleToKey: Record<string, keyof Content> = {
        Language: "language",
        Frontend: "frontend",
        Backend: "backend",
        Database: "database",
        Concepts: "concepts",
        Tools: "tools",
    };

    const proficiencyMap: Record<string, number> = {
        Expert: 95,
        Advanced: 75,
        Proficient: 60,
        Learning: 40,
    };

    const proficiencyColor: Record<string, string> = {
        Expert: "#F45A33",
        Advanced: "#22C3AD",
        Proficient: "#248CF3",
        Learning: "#F9C21F",
    };

    function handleClick(index: number): void {
        setIndex(index)
        setCurr(() => ({ ...skillsList[index] }))
    }

    useEffect(() => {
        const category: keyof Content = mapTitleToKey[curr.title]
        const categoryList: ContentInfo[] = contentList[category]
        setData(categoryList)
    }, [curr])

    return (
        <section id={'skills'} className="py-[10vh] flex justify-center items-center flex-col gap-10 px-4">

            {/* Badge */}
            <div className="flex text-xs sm:text-sm justify-center items-center gap-2 text-[#8347ea] bg-[#8347ea20] px-3 sm:px-4 py-2 rounded-full ring-2 ring-[#8347ea30]" style={{ fontWeight: "500" }}>
                <img width="20" height="20" src="https://img.icons8.com/ios/50/8347ea/brain--v1.png" alt="brain--v1" />
                Tech Stack
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl text-center" style={{ fontWeight: "600" }}>
                Skills & <span className="bg-clip-text text-transparent font-bold" style={{ backgroundImage: "linear-gradient(90deg, #22C3AD 0%, #248CF3 55%, #8347EA 100%)", fontWeight: "600" }}>Technologies</span>
            </h1>

            <div className="text-sm sm:text-base lg:text-lg text-gray-500 text-center max-w-3xl">
                A curated collection of technologies I work with to build modern web applications.
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 transition-all duration-300 ease-in-out">

                {skillsList.map((element, index) => {
                    return (
                        idx !== index ?

                            <div
                                key={index}
                                className="
                                    shadow-lg 
                                    transition-all duration-300 ease-in-out 
                                    flex justify-center items-center gap-2 
                                    text-gray-500 
                                    px-3 sm:px-4 lg:px-5 
                                    py-2 sm:py-2.5 lg:py-3 
                                    text-xs sm:text-sm lg:text-base
                                    bg-gray-100 
                                    rounded-xl 
                                    hover:cursor-pointer
                                "
                                onClick={() => { handleClick(index) }}
                                style={{ fontWeight: "500" }}
                            >
                                <img width="20" height="20" className="sm:w-[22px] sm:h-[22px] lg:w-[25px] lg:h-[25px]" src={element.iconLink} alt="No Image available" />
                                {element.title}
                            </div>

                            :

                            <div
                                key={index}
                                className="
                                    transition-all duration-300 ease-in-out 
                                    flex justify-center shadow-lg items-center gap-2 
                                    text-white 
                                    px-3 sm:px-4 lg:px-5 
                                    py-2 sm:py-2.5 lg:py-3 
                                    text-xs sm:text-sm lg:text-base
                                    rounded-xl 
                                    hover:cursor-pointer
                                "
                                style={{ backgroundColor: element.colorCode, fontWeight: "500" }}
                                onClick={() => { handleClick(index) }}
                            >
                                <img
                                    width="20"
                                    height="20"
                                    className="sm:w-[22px] sm:h-[22px] lg:w-[25px] lg:h-[25px]"
                                    src={element.iconLink.replace("16161C", "FFFFFF")}
                                    alt="No Image available"
                                />
                                {element.title}
                            </div>
                    )
                })}
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center items-center w-full sm:w-[90%] lg:w-[80%] gap-5 sm:gap-6 lg:gap-7">
                {
                    data.map((element, idx) => {
                        return (
                            <div
                                key={idx}
                                className="
                                    hover:scale-105 
                                    transition-all duration-100 
                                    flex flex-col gap-6 
                                    ring-2 ring-[#16161c20] 
                                    w-full 
                                    sm:w-[45%] 
                                    lg:w-96 
                                    rounded-2xl 
                                    p-4 sm:p-5 
                                    shadow-md 
                                    hover:cursor-pointer
                                "
                            >
                                <div className="flex items-center justify-between">
                                    <div className="text-lg sm:text-xl" style={{ fontWeight: "600" }}>{element.title}</div>
                                    <div className="text-xs sm:text-sm px-3 sm:px-5 py-1 rounded-full text-white"
                                        style={{ backgroundColor: proficiencyColor[element.proficiency] }}>
                                        {element.proficiency}
                                    </div>
                                </div>

                                <Progress
                                    classNames={{
                                        base: "max-w-md",
                                        track: "drop-shadow-md border border-default",
                                        indicator: element.color,
                                        label: "tracking-wider font-medium text-default-600",
                                        value: "text-foreground/60",
                                    }}
                                    radius="lg"
                                    size="md"
                                    value={proficiencyMap[element.proficiency]}
                                />

                                <div className="text-gray-500 text-xs sm:text-sm">
                                    {element.description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Proficiency Legend */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">

                <div className="bg-[#F9C21F] px-2 sm:px-3 py-1 text-white rounded-2xl text-xs sm:text-sm" style={{ fontWeight: "500" }}>Learning</div>
                <div className="bg-[#248CF3] px-2 sm:px-3 py-1 text-white rounded-2xl text-xs sm:text-sm" style={{ fontWeight: "500" }}>Proficient</div>
                <div className="bg-[#22C3AD] px-2 sm:px-3 py-1 text-white rounded-2xl text-xs sm:text-sm" style={{ fontWeight: "500" }}>Advanced</div>
                <div className="bg-[#F45A33] px-2 sm:px-3 py-1 text-white rounded-2xl text-xs sm:text-sm" style={{ fontWeight: "500" }}>Expert</div>

            </div>

        </section>
    )
}
