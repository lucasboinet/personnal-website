import GlowingOrb from "@/components/glowing-orb";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="pb-10 pt-6">
            <div className="bg-background p-9 rounded-2xl relative overflow-hidden">

                <div className="z-[1] flex items-start justify-between w-full">
                    <div className="flex flex-col gap-6 max-w-[425px]">
                        <Image src="/icons/logo.svg" alt="website logo" width={49} height={49} />

                        <p className="text-sm text-white">
                            Applications web & mobile ou encore site internet (e-commerce, vitrine, portfolio, blog, etc...). J’assure la prise en charge de votre besoin en développement web.
                        </p>

                        <div className="flex flex-row gap-4">
                            <Link href="https://www.linkedin.com/in/lucas-boinet/" target="_blank" className="bg-primary rounded-md p-2">
                                <Image src="/icons/linkedin.svg" alt="linkedin icon" width={14} height={14} />
                            </Link>
                        </div>
                    </div>
                    <span className="text-[10px] text-white">lucasboinet.pro@gmail.com</span>
                </div>

                <div className="z-[1] flex items-center justify-between w-full mt-14 text-[10px] text-white">
                    <span>© 2025 — Copyright Lucas Boinet</span>

                    <span>Designed by <Link href="https://www.hugoboinet.com" target="_blank" className="underline">Hugo Boinet</Link></span>
                </div>

                <GlowingOrb
                    className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-1/2 blur-[150px] opacity-0"
                    style={{animation: "fadeIn 500ms ease-out forwards"}}
                />
            </div>
        </div>
    )
}