<script setup lang="ts">
import LinkTickets from "./LinkTickets.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
import MapPinIcon from "./icons/MapPinIcon.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row gap-1 m-2">
    <div class="w-20"></div>
    <div class="flex flex-col items-start gap-y-1">
      <div
        class="flex gap-x-2 bg-yellow-300 text-gray-900 border-2 border-gray-900 z-20 py-1 px-2 shadow-lg hover:-translate-x-6 transition ease-in-out"
      >
        <MapPinIcon></MapPinIcon>
        <span class="font-semibold">The Hague, Netherlands</span>
      </div>
      <div
        class="bg-yellow-300 text-gray-900 border-2 border-gray-900 flex flex-col items-center space-y-4 p-4 shadow-lg hover:-translate-y-2 transition ease-in-out"
      >
        <img
          src="../assets/avatar2_cropped.png"
          alt="avatar"
          class="max-h-80 rounded-full border-2 border-gray-900"
        />
        <div class="flex flex-col items-end gap-1 text-right">
          <div class="text-4xl md:text-5xl font-bold font-serif">
            Samuel Borges
          </div>
          <div class="text-xl font-medium">Software Engineer</div>
        </div>
      </div>
    </div>
    <div class="flex flex-row md:flex-col justify-end gap-4 items-start">
      <LinkTickets :link="'https://www.linkedin.com/in/sammyzord/'">
        <LinkedinIcon></LinkedinIcon>
      </LinkTickets>
      <LinkTickets :link="'https://github.com/sammyzord'">
        <GithubIcon></GithubIcon>
      </LinkTickets>
    </div>
  </div>
</template>
