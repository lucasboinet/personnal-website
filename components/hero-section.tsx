import GlowingOrb from "@/components/glowing-orb";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import UnderlineSlash from "@/components/underline-slash";

export default function HeroSection() {
    return (
        <div className="bg-background h-screen overflow-hidden relative flex items-center justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-center justify-center relative h-full">
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
                            <UnderlineSlash />
                        </p>
                        <h1 className="text-[40px] text-white font-bold max-w-[700px] w-full text-center opacity-0" style={{animation: "fadeIn 2s ease 500ms forwards"}}>Développeur web et créateur d'applications freelance</h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <Button className="opacity-0" style={{animation: "fadeIn 2s ease 600ms forwards"}}>Discutons de votre projet</Button>
                        <Button className="opacity-0" style={{animation: "fadeIn 2s ease 700ms forwards"}} variant="ghost">Voir mon portfolio</Button>
                    </div>
                </div>

                <p
                    style={{animation: "fadeIn 2s ease 750ms forwards"}}
                    className="absolute bottom-15 left-14 z-[1] text-base text-white opacity-0"
                >
                    <span className="text-primary font-semibold">+5 ans</span>
                    {" "}
                    d'expérience en développement web
                </p>

                <div
                    className="absolute bottom-0 mx-auto w-full z-[1]"
                >
                    <Image
                        src="/profile-image.jpeg"
                        alt="lucas boinet"
                        width={400}
                        height={431}
                        style={{animation: "translateIn 800ms ease 1200ms forwards"}}
                        className="rounded-2xl absolute -bottom-25 right-10 transform rotate-11 opacity-0 filter saturate-150"
                    />
                </div>
            </div>

            <GlowingOrb
                className="absolute -bottom-full left-1/2 transform -translate-x-1/2 opacity-0"
                style={{animation: "fadeIn 1s ease-out forwards"}}
            />
        </div>
    );
}
