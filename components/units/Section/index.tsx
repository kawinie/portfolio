import { FC } from "react";

export const Section: FC<{ className?: string; name?: string }> = ({ children, name }) => (
    <div className="w-screen h-screen overflow-hidden" id={name}>
        {children}
    </div>
);
