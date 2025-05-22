import {Project} from "@/types/project";
import Image from "next/image";
import {cn} from "@/lib/utils";

export default function ProjectCard({ project, size = "default" }: { project: Project, size?: "default" | "small" }) {
    return (
        <div className="bg-[#F5F8FE] p-6 rounded-3xl w-full">
            <div className={cn(
                "w-full overflow-hidden",
                size === 'default' && "h-[420px] lg:h-[627px]",
                size === 'small' && "h-[300px] lg:h-[420px]",
            )}>
                <Image
                    src={project.images[0]}
                    alt={project.name}
                    width={1313}
                    height={627}
                    className="rounded-2xl object-cover h-full w-full"
                />
            </div>

            <div className="mt-4 flex flex-col gap-6">
                <div className="flex flex-row justify-between items-start gap-3 text-background">
                    <h3
                        className={cn(
                            "font-dm-serif-text text-2xl",
                            size === 'default' && "text-xl lg:text-2xl",
                            size === 'small' && "text-lg lg:text-xl",
                        )}
                    >
                        <span className="text-primary">{project.customer} :</span>
                        {" "}
                        {project.name}
                    </h3>
                    <span
                        className={cn(
                            "font-semibold",
                            size === 'default' && "text-base lg:text-lg",
                            size === 'small' && "text-sm lg:text-base",
                        )}
                    >
                        {project.date}
                    </span>
                </div>

                <div
                    className={cn(
                        "flex flex-row items-center gap-2 flex-wrap",
                        size === 'default' && "text-xs lg:text-sm",
                        size === 'small' && "text-xs",
                    )}
                >
                    {project.tags.map((tag: string, index: number) => (
                        <span
                            className="text-background bg-background/8 rounded-4xl px-3 py-1"
                            key={index}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-background text-base">{project.description}</p>
            </div>
        </div>
    )
}