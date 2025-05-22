import GlowingOrb from "@/components/glowing-orb";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import UnderlineSlash from "@/components/underline-slash";

export default function HeroSection() {
    return (
        <div className="bg-background h-screen overflow-hidden relative flex items-center justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-center justify-center relative h-full">
                <div className="flex flex-col items-center gap-10 z-[3]">
                    <div className="flex flex-col items-center gap-4">
                    <span
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="bg-primary/20 text-primary rounded-lg px-2.5 py-2 font-medium text-base opacity-0"
                    >
                        Applications web et sites internet sur mesure et performants
                    </span>
                        <p
                            className="relative text-5xl font-dm-serif-text text-primary opacity-0"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Lucas Boinet
                            <UnderlineSlash />
                        </p>
                        <h1
                            className="text-[40px] text-white font-bold max-w-[700px] w-full text-center opacity-0"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            Développeur web et créateur d'applications freelance
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <Button
                            className="opacity-0"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            Discutons de votre projet
                        </Button>
                        <Button
                            className="opacity-0"
                            data-aos="fade-up"
                            data-aos-delay="700"
                            variant="ghost"
                        >
                            Voir mon portfolio
                        </Button>
                    </div>
                </div>

                <p
                    data-aos="fade-up"
                    data-aos-delay="750"
                    data-aos-offset="-100"
                    className="absolute bottom-15 left-14 z-[1] text-base text-white opacity-0"
                >
                    <span className="text-primary font-semibold">+5 ans</span>
                    {" "}
                    d'expérience en développement web
                </p>

                <div
                    className="hidden lg:block absolute bottom-0 mx-auto w-full z-[1]"
                >
                    <Image
                        src="/profile-image.jpeg"
                        alt="lucas boinet"
                        width={400}
                        height={431}
                        style={{animation: "translateIn 400ms ease-out 1100ms forwards"}}
                        className="rounded-2xl absolute -bottom-12 right-10 transform rotate-8 opacity-0 filter saturate-150"
                    />
                </div>
            </div>

            <GlowingOrb
                className="absolute -bottom-full transform -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 w-[1300px]"
                style={{animation: "fadeIn 1s ease-out forwards"}}
            />
        </div>
    );
}
