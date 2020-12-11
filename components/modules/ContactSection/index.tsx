import { FC, forwardRef } from "react";
import { Section } from "components/units/Section";
import { NavSeparator } from "components/units/NavSeparator";
import { useForm } from "react-hook-form";

function titleCase(str: string) {
    return str
        .toLowerCase()
        .split(" ")
        .filter((word) => word)
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(" ");
}

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & { labelText?: string };

const TextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { labelText, className, ...inputProps } = props;
    return (
        <div>
            <label className="block mb-2">{labelText || titleCase(props.name || "")}</label>
            <input
                className={className || "px-4 py-2 text-sm border w-full"}
                type="text"
                ref={ref}
                {...inputProps}
            />
        </div>
    );
});

TextField.displayName = "TextField";

type TextAreaProps = React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
> & { labelText?: string };

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const { labelText, className, ...inputProps } = props;
    return (
        <div>
            <label className="block mb-2">{labelText || titleCase(props.name || "")}</label>
            <textarea
                className={className || "px-4 py-2 text-sm border w-full h-52"}
                ref={ref}
                {...inputProps}
            />
        </div>
    );
});

TextArea.displayName = "TextArea";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export const ContactSection: FC = () => {
    const { register, handleSubmit, watch, errors } = useForm<FormData>();
    const onSubmit = handleSubmit(({ name, email, message }) => {
        console.log(name, email, message);
    });
    return (
        <Section name="contact">
            <NavSeparator />
            <div
                className="absolute left-0 flex justify-center w-full overflow-hidden font-bold leading-none text-gray-100"
                style={{ zIndex: -1, fontSize: "24rem" }}>
                <div className=" whitespace-nowrap">Contact</div>
            </div>
            <main className="relative flex items-center w-full h-full max-w-screen-lg px-12 mx-auto">
                <div className="z-10 grid gap-8" style={{ gridAutoColumns: "320px" }}>
                    <div className="text-5xl">Contact</div>
                    <form onSubmit={onSubmit} className="grid gap-4">
                        <TextField name="name" ref={register} required />
                        <TextField name="email" ref={register} required />
                        <TextArea
                            name="message"
                            ref={register}
                            placeholder="Say something?"
                            required
                        />

                        <button
                            type="submit"
                            className="px-4 py-2 mt-8 text-white bg-teal-500 border rounded-md justify-self-end">
                            Get in Touch
                        </button>
                    </form>
                </div>
            </main>
        </Section>
    );
};
