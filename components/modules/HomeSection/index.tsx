import { FC } from "react";
import { Section } from "components/units/Section";
import { NavSeparator } from "components/units/NavSeparator";

export const HomeSection: FC = () => {
    return (
        <Section name="home">
            <NavSeparator />
            <div
                className="absolute left-0 flex justify-center w-full overflow-hidden font-bold leading-none text-gray-100"
                style={{ zIndex: -1, fontSize: "24rem" }}>
                <div className=" whitespace-nowrap">Hello!</div>
            </div>
            <main className="relative flex items-center w-full h-full max-w-screen-lg px-12 mx-auto">
                <div className="z-10 grid gap-8">
                    <div className="-mb-4 text-gray-400">Hello!</div>
                    <div className="text-5xl">I‘m Kawin</div>
                    <div className="text-gray-400 ">Computer science student</div>
                    <div className="text-gray-400 ">
                        <button
                            className="p-4 mt-6 text-sm text-white bg-teal-500 rounded-md "
                            type="button">
                            Get in touch
                        </button>
                    </div>
                </div>
            </main>
        </Section>
    );
};
