import Image from "next/image";
import GlowingOrb from "@/components/glowing-orb";
import UnderlineSlash from "@/components/underline-slash";
import {Button} from "@/components/ui/button";
import {CheckIcon} from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function ContactSection() {
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <div
                className="flex flex-col justify-between items-center bg-background relative rounded-2xl w-full lg:max-w-[526px] h-[616px] px-6 py-[42px] overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="flex flex-col items-center gap-6 z-[1]">
                    <Image src="/icons/google_calendar.svg" alt="google calendar icon" width={52} height={52} />

                    <div>
                        <h3 className="font-bold text-white text-[32px] text-center">
                            Réservez votre
                            {" "}
                            <span className="text-primary font-normal font-dm-serif-text relative">
                            appel
                            <UnderlineSlash color="text-primary" offset="bottom-1" strokeWidth={6} />
                        </span>
                        </h3>
                        <p className="text-white/60 text-base">Une visio pour comprendre et analyser votre besoin !</p>
                    </div>
                </div>

                <ul className="z-[1] text-primary space-y-6">
                    <li
                        className="flex items-center gap-2"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <CheckIcon />
                        Une proposition adaptée à vos besoins
                    </li>
                    <li
                        className="flex items-center gap-2"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <CheckIcon />
                        Un suivi personnalisé</li>
                    <li
                        className="flex items-center gap-2"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <CheckIcon />
                        Une application ou un site moderne et optimisé
                    </li>
                </ul>

                <Button
                    variant="ghost"
                    className="z-[1]"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    Réserver un appel
                </Button>


                <GlowingOrb
                    className="absolute -bottom-10 -right-2/6 w-5/6 blur-[150px] opacity-0"
                    style={{animation: "fadeIn 500ms ease-out forwards"}}
                />
            </div>

            <div
                className="flex flex-col items-start justify-between gap-7 w-full py-3.5 z-[1]"
                data-aos="fade-up"
                data-aos-delay="250"
            >
                <h3 className="font-bold text-background text-[32px] text-center">
                    Me contacter
                    {" "}
                    <span className="text-primary font-normal font-dm-serif-text relative">
                        par mail
                        <UnderlineSlash color="text-primary" offset="bottom-1" strokeWidth={6} />
                    </span>
                </h3>

                <ContactForm />
            </div>
        </div>
    )
}