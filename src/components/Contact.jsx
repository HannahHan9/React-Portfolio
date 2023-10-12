import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
    return (
        <div id="contact" className="text-white flex-col items-center text-center mt-20">
            <h1 className="text-6xl font-workSans font-extrabold">Contact me</h1>

            <section className="flex flex-row justify-center mt-10">
                <a className="mr-4 text-2xl" href={`mailto:h.han9204@gmail.com`}><AiOutlineMail />
                </a>
                <a className="text-[18px]" href={`mailto:h.han9204@gmail.com`}>
                    h.han9204@gmail.com
                </a>
            </section>
        </div>);
};

export default Contact;
