import React from "react";

const Contact = () => {
    return (
        <div
            id="contact"
            className="text-white flex-col items-center text-center mt-20"
        >
            <h1 className="text-6xl font-workSans font-extrabold">
                Contact me
            </h1>

            <a href={`mailto:h.han9204@gmail.com`}>h.han9204@gmail.com</a>
            <p className="font-workSans pt-28 text-[#999999]">Hannah Han 2023</p>
        </div>
    );
};

export default Contact;
