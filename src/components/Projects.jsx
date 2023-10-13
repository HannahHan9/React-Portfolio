import React from "react";

const Projects = () => {
    return (
        <div className="pl-20 pr-20 bg-white">
            <section className="mt-20 flex flex-col">
                <h1 class="font-workSans font-bold text-5xl flex justify-center mt-10">
                    My recent work
                </h1>
                <h2 class="font-workSans font-normal flex justify-center mt-5">
                    Check out some of the projects I worked on below
                </h2>
                <a
                    href={"https://github.com/HannahHan9"}
                    className="font-workSans flex justify-center mt-10 bg-[#55E6A5] p-3 rounded-3xl w-40 border-2 border-black shadow-[5px_3px_0px_1px_black] active:shadow-[0px_0px_0px_1px_black]"
                >
                    View my Github
                </a>
            </section>
            <section className="flex flex-row justify-start mt-20">
                <img
                    class="h-[350px] w-[500px] shadow-[15px_15px_0px_1px_black]"
                    src={require("../assets/duck-dale.png")}
                    alt="duck dale mobile game homescreen"
                />
                <article className="ml-20">
                    <h1 className="font-workSans font-bold text-3xl mt-5">
                        Duck Dale mobile game App
                    </h1>
                    <p className="font-workSans mr-20 mt-8">
                        Description of the project
                    </p>
                    <section className="mt-40">
                        <a
                            href={"https://www.youtube.com/watch?v=ZZwPUhjSJBc"}
                            className="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
                        >
                            DEMO VIDEO
                        </a>
                        <a
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
            <section className="flex flex-row justify-end mt-20">
                <article className="mr-20">
                    <h1 className="font-workSans font-bold text-3xl ml-20 mt-5">
                        Nc News API
                    </h1>
                    <p className="font-workSans ml-20 mt-8">
                        summary of the project
                    </p>
                    <section className="mt-40"></section>
                    <a
                        href={"https://github.com/HannahHan9/be-nc-news"}
                        className="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 ml-20 mr-3 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
                    >
                        REPOSITORY
                    </a>
                    <a
                        href={"https://nc-news-49cb.onrender.com/api"}
                        className="font-workSans text-[#999999] border-2 border-[#999999] rounded-2xl p-1 pl-2 pr-2 hover:bg-[#dcdcdc] hover:border-[#dcdcdc] hover:text-black"
                    >
                        LIVE VERSION
                    </a>
                </article>
                <img
                    className="h-[350px] w-[490px] shadow-[15px_15px_0px_1px_black]"
                    src={require("../assets/nc-news-api.png")}
                    alt="nc news api code"
                />
            </section>
        </div>
    );
};

export default Projects;
