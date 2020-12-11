import Head from "next/head";
import { ReactElement, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { scrollTo } from "redux/actions";

import { HomeSection } from "components/modules/HomeSection";
import { AboutMeSection } from "components/modules/AboutMeSection";
import { ContactSection } from "components/modules/ContactSection";
import { ProjectSection } from "components/modules/Projects";

function withProps<T extends Record<string, unknown>>(props: T): T {
    return props;
}

const NavItem: FC<{
    text: string;
    href: string;
    className?: string;
}> = ({ text, href, className }) => {
    const path = useSelector((state: RootState) => state.path);
    const dispatch = useDispatch();
    return (
        <li className={`flex items-center px-4 py-2 ml-2 ${className}`}>
            <button
                {...withProps({ href })}
                className={href === path ? " border-b-2 border-teal-500" : ""}
                onClick={() => {
                    dispatch(scrollTo(href));
                }}>
                {text}
            </button>
        </li>
    );
};

export default function Home(): ReactElement {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(scrollTo("#home"));
        console.log("Pathname: ", window.location.href);
    }, [dispatch]);
    return (
        <div className="h-full overflow-x-hidden">
            <Head>
                <title>Kawin Pechetratanapanit</title>
            </Head>

            <nav
                className="fixed top-0 z-50 flex w-full max-w-screen-lg mx-auto text-sm"
                style={{ left: "50%", transform: "translateX(-50%)" }}>
                <div className="flex items-center flex-grow">
                    <div className="flex items-center justify-center w-16 h-16 text-2xl text-white bg-teal-500">
                        KP
                    </div>
                </div>

                <ul className="flex items-center">
                    <NavItem href="#home" text="Home" />
                    <NavItem href="#about-me" text="About Me" />
                    <NavItem href="#projects" text="Projects" />
                    <NavItem
                        href="#contact"
                        text="Get In Touch"
                        className="text-white bg-teal-500 rounded-md"
                    />
                </ul>
            </nav>

            <HomeSection />
            <AboutMeSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
}
