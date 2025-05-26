import UnderlineSlash from "@/components/underline-slash";
import {Project} from "@/types/project";
import ProjectCard from "@/components/project-card";

const projects: Project[] = [
    {
        id: 1,
        images: ['/projects/skyloud.png'],
        customer: 'Skyloud',
        name: 'Application de monitoring d\'infrastructure cloud et de gestion de tickets clients',
        description: "Une application de monitoring d'infrastructure cloud et de gestion de tickets clients",
        tags: ["Application web", "Microservices", "Cloud", "Front-end", "Back-end", "Stripe"],
        date: 2024
    },
    {
        id: 2,
        images: ['/projects/tokatab.png'],
        customer: 'Tokatab',
        name: "Plateforme d'apprentissage du piano avec un professeur virtuel intégré",
        description: "Une plateforme d'apprentissage du piano en ligne visant à devenir un véritable professeur virtuel",
        tags: ["Application web", "Piano", "Front-end", "Back-end", "Stripe"],
        date: 2023
    },
    {
        id: 3,
        images: ['/projects/bizbuddy.png'],
        customer: 'BizBuddy',
        name: 'Plateforme de gestion de projets et administratif pour freelances',
        description: "Une plateforme pour les freelances pour gérer leur projets, factures, devis et clients le tout dans un seul endroit",
        tags: ["Application web", "Freelance", "Front-end", "Back-end", "Stripe"],
        date: 2025
    },
]

export default function ProjectsSection() {
    return (
        <div id="projects" className="flex flex-col items-center gap-14">
            <div
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <h2 className="text-[32px] font-bold">
                    Ils m'ont fait
                    {" "}
                    <span className="relative font-normal text-primary font-dm-serif-text">
                        confiance
                        <UnderlineSlash color="text-primary" offset="bottom-0" />
                    </span>
                </h2>
                <p className="text-base text-background opacity-45">Voici ce que nous pouvons faire ensemble</p>
            </div>

            <div className="w-full space-y-6">
                <div
                    className="w-full hidden md:block"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <ProjectCard  project={projects[0]} />
                </div>

                <div
                    className="w-full block md:hidden"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <ProjectCard  project={projects[0]} size="small" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.slice(1, projects.length).map((project, index) => (
                        <div
                            className="w-full"
                            data-aos="fade-up"
                            data-aos-delay={300 + (50 * (index + 1))}
                            key={project.id}
                        >
                            <ProjectCard
                                project={project}
                                size="small"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}