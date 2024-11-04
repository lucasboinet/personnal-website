<template>
    <div class="flex flex-row items-start gap-20">
        <div class="flex flex-col gap-3 relative">
            <div class="absolute bg-gradient-to-b from-[#00161600] to-[#001616] inset-0"></div>
            <div 
                v-for="project in showcaseProjects" 
                :key="project.name"
                class="w-[443px] h-[200px] rounded-2xl overflow-hidden"
            >
                <img :src="project.image" class="object-cover h-full w-full" />
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <h5 class="text-primary font-bold text-[32px]">Développement d'applications web</h5>
            <p class="mb-4 text-white-alt text-sm">
                Vous êtes à la recherche d’un développeur spécialisé en Vue, React ou Node.js pour renforcer votre équipe ? Vous souhaitez concevoir une application complexe avec des exigences élevées en termes de qualité et d'évolutivité ?
                <br><br>
                Passionné et autodidacte depuis l’âge de 12 ans, j’ai acquis 3 ans d’expérience professionnelle en travaillant sur des technologies telles que Nuxt, Next, Vue et Node, dans des secteurs variés comme <strong>le cloud</strong> et <strong>l’hôtellerie</strong>.
                <br><br>
                <strong>Mon objectif en tant que développeur est de garantir un code de qualité, évolutif, et optimisé afin de : </strong>
                <br>
                - Éviter à vos utilisateurs de rencontrer des bugs récurrents. <br>
                - Préserver la sérénité de vos équipes de développeurs en leur fournissant un code propre et maintenable.<br>
                <br>
                <strong>Voici comment je peux contribuer à vos projets : </strong>
                <br>
                - Compréhension et définition de vos besoins. <br>
                - Développement d’applications Web complexes telles que des ERP, backoffices ou sites web. <br>
                - Mise en place et gestion des pipelines CI/CD pour des déploiements fluides et efficaces. <br>
                - Création et gestion d’un Design System basé sur l’Atomic Design, avec contrôle des régressions visuelles pour minimiser les risques d'erreurs sur l'interface utilisateur. <br>
                - Accompagnement et formation de vos équipes sur les technologies, frameworks et bonnes pratiques les mieux adaptés à vos besoins. <br>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import projects from '~/data/projects'

const showcaseProjects = ref(projects.slice(0, 3));
</script>