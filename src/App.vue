<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import JobSection from "./components/JobSection.vue";
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
        <div class="bg-yellow-300 rounded-full">
          <ArrowDownIcon></ArrowDownIcon>
        </div>
      </div>
    </div>
    <div class="min-h-screen flex flex-col justify-between items-center">
      <div class="bg-gray-900 border-2 border-yellow-300 text-yellow-300 self-start mt-7 ml-3 py-1 px-4 -rotate-12">
        <h1 class="text-2xl font-semibold">Work experience</h1>
      </div>
      <JobSection></JobSection>
      <div class="mb-8"></div>
    </div>
  </div>
</template>

<style scoped>
@import "./assets/pattern.css";
</style>
