import {cn} from "@/lib/utils";

type Props = {
    className?: string;
}

export default function GlowingOrb({ className }: Props) {
    return (
        <div
            className={cn(
                "bg-primary/40 filter blur-[1000px] w-full aspect-[1.3] rounded-[50%] blur-ellipsis opacity-0 z-0",
                className
            )}
            style={{animation: "fadeIn 1s ease-out forwards"}}
        ></div>
    );
}