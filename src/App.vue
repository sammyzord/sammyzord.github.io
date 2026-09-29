<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ArrowDownIcon from "./components/icons/ArrowDownIcon.vue";
</script>

<template>
  <div class="bg-gray-900">
    <div
      class="pattern min-h-screen flex flex-col justify-between items-center"
    >
      <div></div>
      <HeroSection></HeroSection>
      <div class="text-gray-900 mb-2">
        <div class="bg-yellow-300 rounded-full animate-bounce">
          <ArrowDownIcon></ArrowDownIcon>
        </div>
      </div>
    </div>
    <div class="min-h-screen flex flex-col justify-between items-center">
      <div class="self-start pt-8 pl-4 pb-10 md:pb-8 xl:pb-2">
        <div
          class="flex items-center gap-4 bg-gray-800 border-2 border-yellow-300 text-yellow-300 py-1 px-4 -rotate-12 translate-y-4 hover:scale-105 transition ease-in-out"
        >
          <h1 class="text-3xl font-bold font-serif dark-select">
            About me
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <AboutSection></AboutSection>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
@import "./assets/pattern.css";
</style>
