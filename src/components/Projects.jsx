import React from "react";

const Projects = () => {
    return (
        <div className="pl-3 pr-3 bg-white">
            <section className="mt-20 flex flex-col">
                <h1 class="font-workSans font-bold text-4xl flex justify-center mt-10">
                    My recent work
                </h1>
                <h2 class="font-workSans font-normal flex justify-center mt-5">
                    Come and have a look at some of the projects I worked on
                    below
                </h2>
            </section>
            <section className="flex flex-row justify-start mt-8 pl-20">
                <img
                    class="h-48 w-64"
                    src={require("../assets/duck-dale.png")}
                    alt="duck dale mobile game homescreen"
                />
                <article>
                    <h1 className="font-workSans font-bold text-2xl">
                        Duck Dale mobile game App
                    </h1>
                    <button>DEMO VIDEO</button>
                    <button>REPOSITORY</button>
                </article>
            </section>
            <section className="flex flex-row justify-end mt-8 pr-20">
                <article>
                    <h1 className="font-workSans font-bold text-2xl">
                        Nc News API
                    </h1>
                    <button>LIVE VERSION</button>
                    <button>REPOSITORY</button>
                    </article>
                    <img
                        className="h-48 w-64"
                        src={require("../assets/nc-news-api.png")}
                        alt="nc news api code"
                    />
            </section>
        </div>
    );
};

export default Projects;
