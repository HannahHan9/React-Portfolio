import React from "react";

const Projects = () => {
    return (
        <div className="mt-20 bg-white flex flex-col">
            <h1 class="font-workSans font-bold text-4xl flex justify-center mt-10">
                My recent work
            </h1>
            <h2 class="font-workSans font-normal flex justify-center mt-5">
                Come and have a look at some of the projects I worked on below
            </h2>

            <section className="flex flex-row justify-center">
                <img
                    class="h-60 w-100"
                    src={require("../assets/duck-dale.png")}
                    alt="duck dale mobile game homescreen"
                />
                <h1 className="font-workSans font-bold text-2xl">
                    Duck Dale mobile game App
                </h1>
            </section>
            <section className="flex flex-row justify-center">
                <img
                    className="h-60 w-100"
                    src={require("../assets/nc-news-api.png")}
                    alt="nc news api code"
                />
                <h1 className="font-workSans font-bold text-2xl">
                    Nc News API
                </h1>
            </section>
        </div>
    );
};

export default Projects;
