<script setup lang="ts">
import { PropType } from "vue";
import { handleText } from "../utils/utils";
import MapPinIcon from "../components/icons/MapPinIcon.vue";

defineProps({
  name: { type: String, required: true },
  title: { type: String, required: true },
  periods: { type: Array as PropType<Array<Array<string>>>, required: true },
  details: { type: Array as PropType<Array<string>>, required: true },
  location: { type: String, required: true },
});
</script>

<template>
  <div
    class="flex flex-col items-end hover:-translate-y-2 transition ease-in-out"
  >
    <div
      class="flex gap-x-1 bg-yellow-300 text-gray-900 py-1 pl-2 pr-4 z-20 translate-y-6 translate-x-3 rounded"
    >
      <MapPinIcon :outline="true"></MapPinIcon>
      <span class="light-select">
        {{ location }}
      </span>
    </div>
    <div
      class="border-2 border-yellow-300 flex flex-col pl-4 pt-2 pb-6 gap-3 bg-gray-800 rounded-br-3xl w-full"
    >
      <h2 class="text-yellow-300 text-3xl font-bold font-serif dark-select">
        {{ name }}
      </h2>
      <div class="flex justify-between items-center">
        <p class="text-yellow-300 text-xl font-medium font-serif dark-select">
          {{ title }}
        </p>
        <div
          class="flex flex-col justify-center gap-y-2 text-yellow-300 border-2 border-yellow-300 py-0.5 px-2 translate-x-2 md:translate-x-3 lg:translate-x-6 rotate-6 bg-gray-800 min-w-64"
        >
          <div
            class="flex justify-center items-center gap-x-1 lg:gap-x-2 text-sm sm:text-base"
            v-for="period in periods"
          >
            <span class="dark-select select:">{{
              `${period[0]} → ${period[1]}`
            }}</span>
          </div>
        </div>
      </div>
      <div class="px-4 lg:mt-2">
        <ul class="list-disc flex flex-col space-y-2">
          <li
            class="detail-select"
            v-for="detail in details"
            v-html="handleText(detail)"
          ></li>
        </ul>
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
