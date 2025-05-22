'use client'

import { useEffect, useState } from "react";

const breakpoints = [
    { label: "XS", min: 0, max: 639, color: "bg-red-500", text: "0-639px" },
    { label: "SM", min: 640, max: 767, color: "bg-yellow-500", text: "640-767px" },
    { label: "MD", min: 768, max: 1023, color: "bg-green-500", text: "768-1023px" },
    { label: "LG", min: 1024, max: 1279, color: "bg-blue-500", text: "1024-1279px" },
    { label: "XL", min: 1280, max: 1535, color: "bg-indigo-500", text: "1280-1535px" },
    { label: "2XL", min: 1536, max: Infinity, color: "bg-purple-500", text: "1536px+" },
];

export default function BreakpointIndicator() {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint(1920));

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getBreakpoint(window.innerWidth));
        };

        setBreakpoint(getBreakpoint(window.innerWidth));

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className={`fixed bottom-4 right-4 p-2 text-white ${breakpoint.color} rounded shadow-lg`}
            style={{ zIndex: 9999 }}
        >
            {breakpoint.label} - {breakpoint.text}
        </div>
    );
};

const getBreakpoint = (width: number) => {
    return breakpoints.find(breakpoint => width >= breakpoint.min && width <= breakpoint.max) || breakpoints[0];
};