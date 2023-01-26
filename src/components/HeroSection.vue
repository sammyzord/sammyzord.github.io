<script setup lang="ts">
import LinkTickets from './LinkTickets.vue';
import GithubIcon from './icons/GithubIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
</script>

<template>
    <div class="flex space-x-1">
        <div
            class="bg-yellow-300 text-gray-900 border-2 border-gray-900 flex flex-col items-center space-y-4 p-4 shadow-lg">
            <img src="../assets/avatar2_cropped.png" alt="avatar"
                class="max-h-80 rounded-full border-2 border-gray-900" />
            <div class="flex flex-col items-end space-y-1">
                <div class="text-4xl font-semibold">
                    Samuel Borges
                </div>
                <div>Software Engineer</div>
            </div>
        </div>
        <div class="flex flex-col justify-end space-y-4">
            <LinkTickets :link="'https://www.linkedin.com/in/sammyzord/'">
                <LinkedinIcon></LinkedinIcon>
            </LinkTickets>
            <LinkTickets :link="'https://github.com/sammyzord'">
                <GithubIcon></GithubIcon>
            </LinkTickets>
        </div>
    </div>
</template>