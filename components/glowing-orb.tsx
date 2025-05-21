import {cn} from "@/lib/utils";

type Props = {
    className?: string;
    style?: React.CSSProperties;
}

export default function GlowingOrb({ className, style }: Props) {
    return (
        <div
            className={cn(
                "bg-primary/40 filter blur-[1000px] w-full aspect-[1.3] rounded-[50%] z-0",
                className
            )}
            style={style}
        ></div>
    );
}