import React from "react";

const Nav = () => {
    return (
    <div className="text-white flex flex-row justify-center mt-5 font-workSans font-medium">
        <button onClick={()=>window.location.replace("/#projects")} class="mr-5 md:mr-48">Projects</button>
        <h1 className="mr-2 md:mr-20">About</h1>
        <h1>Experience</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
    </div>
    )
};

export default Nav;
