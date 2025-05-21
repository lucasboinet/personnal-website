import GlowingOrb from "@/components/glowing-orb";
import {Button} from "@/components/ui/button";

export default function HeroSection() {
    return (
        <div className="bg-background h-screen overflow-hidden relative flex items-center justify-center">
            <div className="flex flex-col items-center gap-10 z-[1]">
                <div className="flex flex-col items-center gap-4">
                    <span
                        style={{animation: "fadeIn 2s ease 300ms forwards"}}
                        className="bg-primary/20 text-primary rounded-lg px-2.5 py-2 font-medium text-base opacity-0"
                    >
                        Applications web et sites internet sur mesure et performants
                    </span>
                    <p className="relative text-5xl font-dm-serif-text text-primary opacity-0" style={{animation: "fadeIn 2s ease 400ms forwards"}}>
                        Lucas Boinet
                        <svg
                            className="absolute -bottom-3 left-0 w-full"
                            viewBox="0 0 200 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 5.5C47.6667 1.5 154.4 -1.9 199 5.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                className="text-primary"
                            />
                        </svg>
                    </p>
                    <h1 className="text-[40px] text-white font-bold max-w-[700px] w-full text-center opacity-0" style={{animation: "fadeIn 2s ease 500ms forwards"}}>Développeur web et créateur d'applications freelance</h1>
                </div>

                <div className="flex items-center gap-6">
                    <Button className="opacity-0" style={{animation: "fadeIn 2s ease 600ms forwards"}}>Discutons de votre projet</Button>
                    <Button className="opacity-0" style={{animation: "fadeIn 2s ease 700ms forwards"}} variant="ghost">Voir mon portfolio</Button>
                </div>
            </div>
            <GlowingOrb className="absolute -bottom-full left-1/2 transform -translate-x-1/2" />
        </div>
    );
}
