<template>
    <div id="contact" class="px-10" data-aos="fade-up">
        <div class="flex flex-col lg:flex-row justify-between md:items-center gap-[51px] p-7 sm:p-9 bg-white-alt bg-opacity-5 rounded-2xl max-w-[1048px] mx-auto">
            <div class="flex flex-col text-white-alt gap-3">
                <h3 class="text-[32px] font-bold">Contactez moi</h3>
                <p class="text-sm">Vous êtes à la recherche d’un développeur spécialisé en Vue, React ou Node.js pour renforcer votre équipe ? Vous souhaitez concevoir une application complexe avec des exigences élevées en termes de qualité et d'évolutivité ?</p>
            </div>

            <div class="flex flex-col md:flex-row lg:flex-col gap-6">
                <div 
                    v-for="link in links" 
                    :key="link.text"
                    class="flex flex-row items-center gap-2"
                >
                    <component :is="link.icon" class="w-6 h-6 min-w-6 text-primary" />
                    <span class="text-primary bg-primary text-xs sm:text-base bg-opacity-20 px-3 py-1 rounded md:w-full">{{ link.text }}</span>
                    <button @click="link.action" class="bg-primary h-7 px-2 flex justify-center items-center rounded">
                        <component :is="link.linkIcon" class="size-4 text-white-alt" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { EnvelopeIcon, InboxArrowDownIcon, ClipboardDocumentIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'

const { $toast } = useNuxtApp();

const contactEmail = 'lucasboinet.pro@gmail.com';
const twitterLink = 'https://google.fr'

const links = ref([
    { icon: InboxArrowDownIcon, text: contactEmail, action: () => handleCopyToClipboard(contactEmail), linkIcon: ClipboardDocumentIcon },
    { icon: EnvelopeIcon, text: '@lucasboinet.pro', action: () => openLinkInTab(twitterLink), linkIcon: ArrowRightIcon },
])

function handleCopyToClipboard(text) {
    navigator.clipboard.writeText(text)
    $toast.success('Copié avec succès');
}

async function openLinkInTab(link) {
    await navigateTo(link, {
        external: true
    });
}
</script>