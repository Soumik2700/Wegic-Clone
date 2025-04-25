import { useEffect } from "react";
import "./Hero.css";
import AnimatedText from "./AnimatedText";
import { FaArrowUp } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";
import { IoDocumentLock } from "react-icons/io5";
import { SiAffinitydesigner } from "react-icons/si";

const Hero = () => {
    useEffect(() => {
        const hero = document.getElementById("hero");
        const textarea = document.getElementById("animated-textarea");

        const handleMouseMove = (e) => {
            hero.style.setProperty("--x", `${e.clientX}px`);
            hero.style.setProperty("--y", `${e.clientY}px`);
        };

        document.addEventListener("mousemove", handleMouseMove);

        const placeholders = [
            "Type your idea to build a website...",
            "Tell us what kind of website you want...",
            "Describe your business or brand...",
            "Need a blog, portfolio, or store?",
            "We'll build it in under a minute!",
        ];
        let index = 0;

        const interval = setInterval(() => {
            textarea.placeholder = placeholders[index];
            index = (index + 1) % placeholders.length;
        }, 4000); // change every 4s

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            clearInterval(interval);
        };
    }, []);


    const heading = "Magic Your Site Chat by Chat";
    return (
        <section
            id="hero"
            className="w-full h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex flex-col justify-center items-center overflow-hidden"
        >
            <div className="torch-light"></div>

            <AnimatedText text= "Magic Your Site Chat by Chat"/>
            <p className="mt-6 text-lg md:text-xl z-10 text-center max-w-2xl animate-blink border p-1 rounded-xl">
               👋Hey! We're Wegic. Chat with us and build your website in 1 minute.
            </p>
         
            <div className="relative mt-8 w-full max-w-2xl z-10">
                <textarea
                    className="w-full h-40 p-4 pr-24 rounded-xl bg-white/90 backdrop-blur text-gray-700 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none shadow-lg animate-placeholderScroll"
                    placeholder="Type your idea to build a website..."
                    id="animated-textarea"
                ></textarea>

                <button className="absolute bottom-16 right-4 bg-gray-600 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300">
                    <FaArrowUp/>
                </button>
            </div>


            <div className="max-w-2xl flex flex-wrap justify-center gap-4 mt-2">
                <p className="text-sm leading-[22px] border p-1 rounded-xl flex items-center gap-1"><IoSchoolSharp/>Online education platform</p>

                <p className="text-sm leading-[22px] border p-1 rounded-xl flex items-center gap-1"><MdShoppingBag />E-commerce product page</p>

                <p className="text-sm leading-[22px] border p-1 rounded-xl flex items-center gap-1"><FaGamepad />Game community</p>

                <p className="text-sm leading-[22px] border p-1 rounded-xl flex items-center gap-1"><IoDocumentLock />Product display page</p>

                <p className="text-sm leading-[22px] border p-1 rounded-xl flex items-center gap-1"><SiAffinitydesigner />Design studio</p>
            </div>

        </section>
    );
};

export default Hero;
