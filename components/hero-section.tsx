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
                        className="bg-primary/20 text-primary mx-4 text-center rounded-lg px-2.5 py-2 font-medium text-base"
                    >
                        Applications web et sites internet sur mesure et performants
                    </span>
                        <p
                            className="relative text-5xl mb-1 font-dm-serif-text text-primary"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Lucas Boinet
                            <UnderlineSlash />
                        </p>
                        <h1
                            className="text-3xl md:text-[40px] mx-4 text-white font-bold max-w-[700px] w-full text-center"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            Développeur web et créateur d'applications freelance
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <Button
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            Discutons de votre projet
                        </Button>
                        <Button
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
                    className="relative lg:absolute -bottom-15 lg:bottom-15 left-0 w-full text-center lg:w-fit lg:left-14 z-[1] text-base text-white"
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
                        className="rounded-2xl absolute -bottom-12 right-10 opacity-0 transform rotate-8 filter saturate-150"
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
