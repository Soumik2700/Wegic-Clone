const heading = "Magic Your Site Chat by Chat";

function AnimatedText({ text }) {
    return (
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold z-10 text-center leading-tight flex flex-wrap justify-center max-w-5xl text-wrap">
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className="inline-block animate-fadeInUp"
                    style={{ animationDelay: `${i * 0.05}s` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </h1>
    );
}

export default AnimatedText;
