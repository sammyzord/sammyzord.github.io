<script setup lang="ts">
import { PropType } from "vue";
import { handleText } from "../utils/utils";

const props = defineProps({
  name: { type: String, required: true },
  title: { type: String, required: true },
  periods: { type: Array as PropType<Array<Array<string>>>, required: true },
  details: { type: Array as PropType<Array<string>>, required: true },
});
</script>

<template>
  <div
    class="border-2 border-yellow-300 flex flex-col pl-4 py-2 gap-3 bg-gray-800 rounded-br-3xl hover:-translate-y-2 transition ease-in-out"
  >
    <h2 class="text-yellow-300 text-2xl font-semibold">{{ name }}</h2>
    <div class="flex justify-between">
      <p class="text-yellow-300 text-lg">{{ title }}</p>
      <div
        class="flex flex-col text-yellow-300 border-2 border-yellow-300 py-0.5 px-2 translate-x-6 rotate-6 bg-gray-800"
      >
        <p v-for="period in periods">{{ period.join(" ~ ") }}</p>
      </div>
    </div>
    <div class="px-4 mt-2">
      <ul class="list-disc flex flex-col space-y-2">
        <li v-for="detail in details" v-html="handleText(detail)"></li>
      </ul>
    </div>
  </div>
</template>
