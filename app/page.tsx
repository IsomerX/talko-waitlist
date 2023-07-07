import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Persona = [
    {
        name: "Chetan",
        description:
            "Your go-to career advisor – Chetan’s the AI guru with the know-how to boost your professional life.",
        img: "https://framerusercontent.com/images/XSU9IPTBHTBTXmmQ9Lj0Kxd5Kp4.jpg?scale-down-to=512",
    },
    {
        name: "Riya",
        description:
            "Riya, the relationship advisor – ready to listen, understand, and help you navigate the complexities of your love life.",
        img: "https://framerusercontent.com/images/XSU9IPTBHTBTXmmQ9Lj0Kxd5Kp4.jpg?scale-down-to=512",
    },
    {
        name: "Maya",
        description:
            "A friend to vent to, Maya’s here to lend an ear and share your ups and downs in this wild ride called life.  ",
        img: "https://framerusercontent.com/images/XSU9IPTBHTBTXmmQ9Lj0Kxd5Kp4.jpg?scale-down-to=512",
    },
    {
        name: "More Coming Soon",
        description:
            "We are constantly working to pump out new personas to help you in various aspects of life!",
        img: "https://framerusercontent.com/images/XSU9IPTBHTBTXmmQ9Lj0Kxd5Kp4.jpg?scale-down-to=512",
    },
];

const Wrapper = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`${className} px-6 sm:px-10 lg:px-20`}>{children}</div>
    );
};

const PersonaCard = ({
    name,
    description,
    img,
}: {
    name: string;
    description: string;
    img: string;
}) => {
    return (
        <div className="flex flex-col gap-4">
            <img
                alt=""
                src={img}
                className="w-full aspect-square object-cover rounded-xl"
            />
            <div className="space-y-2">
                <h4 className="font-semibold text-xl lg:text-2xl">{name}</h4>
                <p className="font-primary text-xl font-thin lg:font-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <main className="text-primary">
            <Wrapper>
                <nav className="border-t-2 border-b-2 py-3 flex flex-col justify-center gap-3 mt-5 border-primary sm:flex-row sm:justify-between">
                    <div className="text-xl text-center">Talko</div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link href="#">
                            <div className="text-xl text-center">Home</div>
                        </Link>
                        <Link href="#">
                            <div className="text-xl text-center">Persona</div>
                        </Link>
                        <Link href="#">
                            <div className="text-xl text-center">Waitlist</div>
                        </Link>
                    </div>
                </nav>
                <div className="mt-10 flex flex-col gap-5 lg:gap-10 xl:flex-row items-center">
                    <h1 className="font-primary font-bold text-center text-7xl sm:text-9xl text-primary">
                        WAITLIST
                    </h1>
                    <p className="text-center text-xl lg:text-2xl">
                        Welcome to the future of AI chat companions – Talko! Get
                        ready to meet your new best friends in the digital
                        world. Sign up for the waitlist to experience chat
                        personas with flair!
                    </p>
                </div>
            </Wrapper>
            <img
                src="https://framerusercontent.com/images/XSU9IPTBHTBTXmmQ9Lj0Kxd5Kp4.jpg?scale-down-to=512"
                alt="buffer-image"
                className="w-full aspect-[1.714/1] object-cover grayscale mt-10 rounded-b-3xl"
            />
            <Wrapper className="max-w-6xl mx-auto mt-10 lg:mt-20">
                <h4 className="text-xl mb-10">Introducing</h4>
                <h3 className="text-3xl font-bold lg:text-5xl w-11/12">
                    Chetan, Riya, and Maya - AI personas that will rock your
                    world!
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:gap-8 mt-10 sm:grid-cols-2">
                    {Persona.map((item) => (
                        <PersonaCard key={item.name} {...item} />
                    ))}
                </div>
                <h4 className="text-center text-red-500 text-3xl font-bold mt-24">
                    Ready for an AI-infused chat adventure? Sign up for the
                    ZenChat waitlist and be among the first to experience it!
                </h4>
                <form
                    className="mt-10 space-y-3 max-w-md mx-auto"
                    action="https://formspree.io/f/mvojozgn"
                    method="POST"
                >
                    <input
                        className="bg-zinc-900 w-full p-3 rounded-xl"
                        placeholder="name@email.com"
                        type="email"
                        name="email"
                    />
                    <button className="w-full p-3 bg-red-500/80 rounded-xl">
                        Submit
                    </button>
                </form>
                <footer className="py-10">
                    <div className="text-center text-primary/40">
                        &copy;2023 Talko. All rights reserved.
                    </div>
                </footer>
            </Wrapper>
        </main>
    );
}
