import React from "react";

const Projects = () => {
    return (
        <div
            id="projects"
            className="pr-5 pl-5 pb-20 md:pl-20 md:pr-20 pt-5 bg-white"
        >
            <section className="flex flex-col items-center">
                <h1 className="font-workSans font-bold text-center text-5xl flex justify-center mt-10">
                    My recent work
                </h1>
                <h2 className="font-workSans font-normal flex justify-center text-center mt-5">
                    Check out some of the projects I worked on below
                </h2>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://github.com/HannahHan9"}
                    className="font-workSans mt-10 bg-[#55E6A5] p-3 rounded-3xl w-40 border-2 border-black shadow-[5px_3px_0px_1px_black] active:shadow-[0px_0px_0px_1px_black]"
                >
                    View my Github
                </a>
            </section>
            <section className="flex flex-col md:flex-row justify-start mt-20">
                <img
                    className="h-[180px] w-[400px] md:h-[420px] md:w-[580px]shadow-[15px_15px_0px_1px_black]"
                    src={require("../assets/duck-dale.png")}
                    alt="duck dale mobile game homescreen"
                />
                <article className="md:ml-20">
                    <h1 className="pt-5 md:pt-0 font-workSans font-bold text-3xl mt-5">
                        Duck Dale mobile game App
                    </h1>
                    <p className="font-workSans md:mr-20 mt-8">
                        Description of the project
                    </p>
                    <section className="mt-10 md:mt-40">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={"https://www.youtube.com/watch?v=ZZwPUhjSJBc"}
                            className="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
                        >
                            DEMO VIDEO
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={
                                "https://github.com/HannahHan9/Duck-Dale-mobile-game"
                            }
                            className="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
                        >
                            REPOSITORY
                        </a>
                    </section>
                </article>
            </section>
            <section className="flex flex-col-reverse md:flex-row justify-end mt-20">
                <article className="md:mr-20">
                    <h1 className="pt-5 md:pt-0 font-workSans font-bold text-3xl md:ml-20 mt-5">
                        Nc News API
                    </h1>
                    <p className="font-workSans md:ml-20 mt-8">
                        summary of the project
                    </p>
                    <section className="mt-10 md:mt-40"></section>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://github.com/HannahHan9/be-nc-news"}
                        className="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 md:ml-20 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
                    >
                        REPOSITORY
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://nc-news-49cb.onrender.com/api"}
                        className="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
                    >
                        LIVE VERSION
                    </a>
                </article>
                <img
                    className="h-[230px] w-[300px] md:h-[420px] md:w-[580px] shadow-[15px_15px_0px_1px_black]"
                    src={require("../assets/nc-news-api.png")}
                    alt="nc news api code"
                />
            </section>
        </div>
    );
};

export default Projects;
