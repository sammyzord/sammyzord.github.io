<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import JobSection from "./components/JobSection.vue";
import ArrowDownIcon from "./components/icons/ArrowDownIcon.vue";
import TotalExperience from "./components/TotalExperience.vue";
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
            Work experience
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clip-rule="evenodd"
            />
            <path
              d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"
            />
          </svg>
        </div>
      </div>
      <JobSection></JobSection>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
@import "./assets/pattern.css";
</style>
