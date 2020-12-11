import { FC } from "react";

import { Section } from "components/units/Section";
import { NavSeparator } from "components/units/NavSeparator";

export const AboutMeSection: FC = () => (
    <Section name="about-me">
        <NavSeparator />
        <div
            className="absolute left-0 flex justify-center w-full overflow-hidden font-bold leading-none text-gray-100"
            style={{ zIndex: -1, fontSize: "24rem" }}>
            <div className=" whitespace-nowrap">About me</div>
        </div>
        <main className="relative flex items-center w-full h-full max-w-screen-lg px-12 mx-auto">
            <div className="z-10 grid gap-8">
                <div className="-mb-4 text-gray-400">About Me</div>
                <div className="text-5xl">Experienced CS Student</div>
                <div className="max-w-2xl text-gray-400">
                    Who possesses strong knowledge in making real-world applications with special
                    interests in GPU programming and AI. I develop and optimize fullstack software
                    running on micro-controllers with limited processing power for use in
                    environmental{" "}
                </div>
                <div className="text-gray-400 ">
                    <button
                        className="flex items-center p-4 text-sm text-white bg-teal-500 rounded-md"
                        type="button">
                        <a href="/docs/resume.pdf" download>
                            <img
                                src="/svg/download.svg"
                                className="inline-block w-4 mr-4"
                                alt="download"
                            />
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
        </main>
    </Section>
);
