import React from "react";

const Nav = () => {
    return (
        <div className="text-white flex flex-row justify-center font-workSans font-medium mt-10">
            <button
                onClick={() => window.location.replace("/#projects")}
                className="mr-2 md:mr-20"
            >
                Projects
            </button>
            <button
                onClick={() => window.location.replace("/#experience")}
                className="mr-2 md:mr-20"
            >
                Experience
            </button>
            <button onClick={() => window.location.replace("/#contact")}>
                Contact
            </button>
        </div>
    );
};

export default Nav;
