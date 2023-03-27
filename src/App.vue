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
      <div class="self-start pt-6 pb-10 pt-10 pl-4">
        <div
          class="bg-gray-800 border-2 border-yellow-300 text-yellow-300 py-1 px-4 -rotate-12 hover:rotate-0 hover:-translate-y-2 transition ease-in-out"
        >
          <h1 class="text-3xl font-bold font-serif dark-select">
            Work experience
          </h1>
        </div>
      </div>
      <JobSection></JobSection>
      <TotalExperience />
    </div>
  </div>
</template>

<style scoped>
@import "./assets/pattern.css";
</style>
