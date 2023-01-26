<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <div class="bg-gray-900">
    <div class="pattern min-h-screen flex flex-col justify-between items-center">
      <div></div>
      <HeroSection></HeroSection>
      <div></div>
    </div>
    <div class="min-h-screen"></div>
  </div>
</template>

<style scoped>
@import "./assets/pattern.css";
</style>