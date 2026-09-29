<script setup lang="ts">
import { handleText } from "../utils/utils";
import { intro, experience, interests } from "../utils/data";
</script>

<template>
  <div class="px-2 md:px-4 lg:px-10 w-full max-w-5xl">
    <div
      class="border-2 border-yellow-300 flex flex-col px-4 md:px-8 pt-6 pb-8 gap-6 bg-gray-800 rounded-br-3xl text-gray-200 hover:-translate-y-2 transition ease-in-out"
    >
      <div class="flex flex-col gap-3 text-lg">
        <p
          class="detail-select"
          v-for="paragraph in intro"
          v-html="handleText(paragraph)"
        ></p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 flex flex-col gap-3">
          <h2 class="text-yellow-300 text-2xl font-bold font-serif dark-select">
            Experience
          </h2>
          <ul class="list-disc flex flex-col space-y-2 pl-4">
            <li
              class="detail-select"
              v-for="item in experience"
              v-html="handleText(item)"
            ></li>
          </ul>
        </div>
        <div class="flex flex-col gap-3">
          <h2 class="text-yellow-300 text-2xl font-bold font-serif dark-select">
            Interests
          </h2>
          <ul class="list-disc flex flex-col space-y-2 pl-4">
            <li
              class="detail-select"
              v-for="item in interests"
              v-html="handleText(item)"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-select::-moz-selection {
  /* Code for Firefox */
  color: #fde047;
}

.detail-select::selection {
  color: #fde047;
}
</style>
