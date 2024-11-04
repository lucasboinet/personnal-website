<template>
    <div class="flex flex-row justify-between items-center gap-[51px] px-[38px] py-7 bg-white-alt bg-opacity-5 rounded-2xl max-w-[1048px] mx-auto">
        <div class="flex flex-col text-white-alt gap-3">
            <h3 class="text-[32px] font-bold">Contactez moi</h3>
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, felis ac iaculis blandit, nisi libero cursus mauris, non pharetra sapien mi a velit. Proin at justo posuere felis feugiat hendrerit non eget leo.</p>
        </div>

        <div class="flex flex-col gap-6">
            <div 
                v-for="link in links" 
                :key="link.text"
                class="flex flex-row items-center gap-2"
            >
                <component :is="link.icon" class="size-6 text-primary" />
                <span class="text-primary bg-primary bg-opacity-20 px-3 py-1 rounded w-full">{{ link.text }}</span>
                <button @click="link.action" class="bg-primary h-7 px-2 flex justify-center items-center rounded">
                    <component :is="link.linkIcon" class="size-4 text-white-alt" />
                </button>
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