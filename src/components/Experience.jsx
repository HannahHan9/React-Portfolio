import React from "react";

const Experience = () => {
    return (
        <div className="pl-20 pr-20 pt-10 pb-20 bg-[#55E6A5]">
            <h1 className="font-workSans font-bold text-5xl flex text-center justify-center">
                My experience and skills
            </h1>

            <div className="flex flex-row">
                <article className="bg-white">
                    <h1>Back-end</h1>
                    <p>JavaScript</p>
                    <p>Node.js</p>
                    <p>Express</p>
                    <p>PostgreSQL</p>
                    <p>Jest</p>
                    <p>Test Driven Development</p>
                    <p>REST APIs</p>
                    <p>Supertest</p>
                </article>

                <article className="bg-white ml-20 mr-20">
                    <h1>Front-end</h1>
                    <p>React JS</p>
                    <p>React Native</p>
                    <p>Tailwind</p>
                    <p>HTML5</p>
                    <p>CSS</p>
                </article>

                <article className="bg-white">
                    <h1>Best practices</h1>
                    <p>Git</p>
                    <p>Github</p>
                    <p>Paired programming</p>
                    <p>Agile</p>
                </article>
            </div>
        </div>
    );
};

export default Experience;
