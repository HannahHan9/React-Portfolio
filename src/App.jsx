import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
    return (
        <>
            <Nav />
            <Header />
            <Projects />
            <Experience />
            <Contact />
        </>
    );
};

export default App;
