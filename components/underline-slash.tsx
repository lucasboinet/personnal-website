import {cn} from "@/lib/utils";

export default function UnderlineSlash({ color = 'text-primary', offset = "-bottom-3", strokeWidth = 2 }: { color?: string, offset?: string, strokeWidth?: number}) {
    return (
        <svg
            className={cn("absolute -bottom-2 left-0 w-full", offset)}
            viewBox="0 0 200 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 5.5C47.6667 1.5 154.4 -1.9 199 5.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                className={color}
            />
        </svg>
    )
}