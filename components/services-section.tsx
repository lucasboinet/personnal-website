import UnderlineSlash from "@/components/underline-slash";

export default function ServicesSection() {
    return (
        <div
            className="bg-background rounded-2xl p-6 transform -translate-y-[31px] relative z-20 flex flex-col items-center gap-14"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="-100"
        >
            <div className="text-center">
                <h2 className="font-bold text-white text-[32px]">Développement web <span className="text-primary font-normal font-dm-serif-text">sur mesure</span></h2>
                <p className="text-white/60 text-base">Des solutions numériques complètes pour répondre à tous vos besoins en ligne.</p>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-16">
                {/** Service card */}
                <div className="bg-primary rounded-lg p-6 space-y-6">
                    <h3 className='relative text-background font-dm-serif-text text-2xl mx-auto w-fit'>
                        Applications Web
                        <UnderlineSlash color="text-background" offset="-bottom-2" />
                    </h3>

                    <p>
                        Que vous ayez besoin d'un outil métier, d'un espace client personnalisé ou d'une plateforme interactive, je conçois des solutions techniques fiables, sécurisées et performantes.
                        <br/><br/>
                        Mon objectif : vous fournir une application web parfaitement intégrée à votre workflow et facile à faire évoluer.
                    </p>

                    <div className="flex items-center gap-3 text-sm flex-wrap">
                        <span className="bg-background text-primary rounded-[100px] px-3 py-1.5">CRM</span>
                        <span className="bg-background text-primary rounded-[100px] px-3 py-1.5">App mobile</span>
                        <span className="bg-background text-primary rounded-[100px] px-3 py-1.5">Outils</span>
                        <span className="bg-background text-primary rounded-[100px] px-3 py-1.5">Sur-mesure</span>
                        <span className="bg-background text-primary rounded-[100px] px-3 py-1.5">Automatisation</span>
                    </div>
                </div>

                {/** Service card */}
                <div className="rounded-lg p-6 space-y-6">
                    <h3 className='relative text-primary font-dm-serif-text text-2xl mx-auto w-fit'>
                        Création de site web
                        <UnderlineSlash color="text-primary" offset="-bottom-2" />
                    </h3>

                    <p className="text-white">
                        Que ce soit pour un site vitrine, un portfolio ou un site d'entreprise, je m'adapte à vos besoins pour créer une interface intuitive, rapide et entièrement personnalisée.
                        <br/><br/>
                        Chaque site est pensé pour offrir la meilleure expérience utilisateur et valoriser votre image en ligne.
                    </p>

                    <div className="flex items-center gap-3 text-sm flex-wrap">
                        <span className="bg-primary text-background rounded-[100px] px-3 py-1.5">Site vitrine</span>
                        <span className="bg-primary text-background rounded-[100px] px-3 py-1.5">E-commerce</span>
                        <span className="bg-primary text-background rounded-[100px] px-3 py-1.5">SEO</span>
                        <span className="bg-primary text-background rounded-[100px] px-3 py-1.5">Clé en main</span>
                    </div>
                </div>
            </div>
        </div>
    );
}