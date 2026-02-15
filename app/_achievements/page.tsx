"use client";
import AnimatedCounter from "./AnimatedCounter";

export default function Achievements() {

    return (
        <section id="achievements" className="min-h-screen flex justify-center items-center flex-col gap-6 sm:gap-8 md:gap-10 py-16 sm:py-20">

            {/* Badge */}
            <div className="gap-2 flex justify-center items-center px-4 py-2 ring-2 ring-[#ed5ea530] rounded-full bg-[#ed5ea515] text-[#ed5ea5] text-xs sm:text-sm">
                <img width="20" height="20" src="https://img.icons8.com/parakeet-line/48/ed5ea5/trophy.png" alt="trophy" />
                Milestones
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4" style={{ fontWeight: "600" }}>
                Achievements &{" "}
                <span
                    className="bg-clip-text text-transparent font-bold"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #f45a33 0%, #ed5ea5 55%, #8347ea 100%)",
                        fontWeight: "600",
                    }}
                >
                    Impact
                </span>
            </h1>

            <div className="text-sm sm:text-base md:text-lg text-gray-500 text-center px-6">
                Numbers that reflect my dedication to growth and continuous improvement.
            </div>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-5 px-4">

                {/* Card 1 */}
                <div className="ring-2 ring-[#f45a3340] gap-5 w-full sm:w-[20rem] md:w-[20rem] lg:w-74 xl:w-74 h-auto sm:h-[22rem] md:h-88 rounded-2xl p-5 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-2xl shadow-lg transition-all duration-200">
                    <div className="bg-[#f45a3315] p-3 rounded-xl">
                        <img width="50" height="50" src="https://img.icons8.com/parakeet-line/48/f45a33/trophy.png" alt="trophy" />
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f45a33]">
                        <AnimatedCounter to={5} />+
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-center">Projects Completed</div>
                    <div className="text-sm sm:text-md text-gray-500 text-center">
                        Full-stack applications built from scratch
                    </div>
                </div>

                {/* Card 2 */}
                <div className="ring-2 ring-[#22C3AD40] gap-5 w-full sm:w-[20rem] md:w-[20rem] lg:w-74 xl:w-74 h-auto sm:h-[22rem] md:h-88 rounded-2xl p-5 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-2xl shadow-lg transition-all duration-200">
                    <div className="bg-[#22C3AD15] p-3 rounded-xl">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/22c3ad/code--v1.png" alt="code--v1" />
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#22C3AD]">
                        <AnimatedCounter to={15} />+
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-center">Technologies Mastered</div>
                    <div className="text-sm sm:text-md text-gray-500 text-center">
                        From React.js to Next.js and beyond
                    </div>
                </div>

                {/* Card 3 */}
                <div className="ring-2 ring-[#8347EA40] gap-5 w-full sm:w-[20rem] md:w-[20rem] lg:w-74 xl:w-74 h-auto sm:h-[22rem] md:h-88 rounded-2xl p-5 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-2xl shadow-lg transition-all duration-200">
                    <div className="bg-[#8347EA15] p-3 rounded-xl">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/8347ea/questions.png" alt="questions" />
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#8347EA]">
                        <AnimatedCounter to={250} />+
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-center">DSA Problems Solved</div>
                    <div className="text-sm sm:text-md text-gray-500 text-center">
                        Mastered DP, Graphs, Greedy, Backtracking and more.
                    </div>
                </div>

                {/* Card 4 */}
                <div className="ring-2 ring-[#ED5EA540] gap-5 w-full sm:w-[20rem] md:w-[20rem] lg:w-74 xl:w-74 h-auto sm:h-[22rem] md:h-88 rounded-2xl p-5 flex flex-col justify-center items-center hover:cursor-pointer hover:shadow-2xl shadow-lg transition-all duration-200">
                    <div className="bg-[#ED5EA515] p-3 rounded-xl">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/ed5ea5/delivery-time--v1.png" alt="delivery-time--v1" />
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ED5EA5]">
                        <AnimatedCounter to={500} />+
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-center">Hours of Coding</div>
                    <div className="text-sm sm:text-md text-gray-500 text-center">
                        Dedicated to learning and building
                    </div>
                </div>

            </div>
        </section>
    );
}
