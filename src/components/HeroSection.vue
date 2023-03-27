<script setup lang="ts">
import LinkTickets from "./LinkTickets.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
import MapPinIcon from "./icons/MapPinIcon.vue";
import AcademicIcon from "./icons/AcademicIcon.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row gap-1 m-2">
    <div class="w-20"></div>
    <div class="flex flex-col items-start gap-y-1">
      <div
        class="flex bg-yellow-300 text-gray-900 border-2 border-gray-900 z-20 py-1 px-2 shadow-lg hover:translate-x-6 transition ease-in-out"
      >
        <MapPinIcon></MapPinIcon>
        <span class="font-semibold light-select">
          &nbsp; The Hague, Netherlands &nbsp;
        </span>
      </div>
      <div
        class="flex bg-yellow-300 text-gray-900 border-2 border-gray-900 z-20 py-1 px-2 shadow-lg hover:translate-x-6 transition ease-in-out"
      >
        <AcademicIcon></AcademicIcon>
        <span class="font-semibold light-select">
          &nbsp; B.S. in Software Engineering &nbsp;
        </span>
      </div>
      <div
        class="bg-yellow-300 text-gray-900 border-2 border-gray-900 flex flex-col items-center space-y-4 py-4 pl-4 pr-2 shadow-lg hover:translate-x-2 md:hover:translate-y-2 md:hover:translate-x-0 transition ease-in-out"
      >
        <img
          src="../assets/avatar2_cropped.png"
          alt="avatar"
          class="max-h-80 rounded-full border-2 border-gray-900 select-none"
        />
        <div class="flex flex-col items-end gap-1 text-right">
          <div
            class="text-4xl md:text-5xl font-bold font-serif light-select pr-2"
          >
            Samuel Borges
          </div>
          <div class="text-xl font-medium light-select">
            &nbsp; Software Engineer &nbsp;
          </div>
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
