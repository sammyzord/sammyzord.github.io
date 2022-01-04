<template>
  <div
    class="flex flex-col my-10 mx-2 lg:mx-10 transition duration-75 ease-in-out transform hover:-translate-y-1"
  >
    <div
      class="flex bg-yellow-300 text-gray-900 w-24 justify-center content-center py-1 self-end -mb-4 mr-3 z-10 transition duration-75 ease-in-out transform rotate-3 hover:rotate-0"
    >
      <span class="font-semibold">{{ type }}</span>
    </div>
    <div class="border-2 p-4 border-yellow-300 bg-gray-900">
      <div class="flex flex-col w-56 xs:w-72 xl:w-80 space-y-2">
        <h2
          class="text-lg sm:text-2xl xl:text-3xl font-semibold text-yellow-300"
        >
          {{ title }}
        </h2>
        <div class="flex justify-between items-center">
          <h3 class="flex flex-col sm:text-xl xl:text-2xl text-yellow-300">
            <span v-for="item in splitSubtitle" :key="item">{{ item }}</span>
          </h3>
          <h3 class="text-xs xs:text-sm text-yellow-300 tracking-tight">
            {{ time }}
          </h3>
        </div>
        <ul
          class="ml-4 mt-2 text-xs xs:text-sm xl:text-base text-white xs:w-64"
        >
          <li
            class="my-2"
            v-for="item in description_list"
            :key="item"
            v-html="handleText(item)"
          />
        </ul>
        <span
          class="self-end bg-yellow-300 text-gray-900 font-semibold px-2 rounded-full"
        >
          {{ source }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import TextHighlight from "../../../mixins/TextHighlight.vue";

export default {
  name: "JobCard",
  props: ["title", "subtitle", "description", "type", "source", "time"],
  mixins: [TextHighlight],
  computed: {
    splitSubtitle() {
      return this.subtitle.split("%");
    },
    description_list() {
      return this.description.split("%");
    },
  },
};
</script>
