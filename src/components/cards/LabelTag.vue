<template>
  <div
    class="
      flex
      bg-gray-900
      text-yellow-300
      justify-start
      items-center
      space-x-2
      text-xs
      font-bold
      uppercase
      px-4
      py-1
      rounded-lg
      tracking-wide
      transition
      duration-75
      ease-in-out
      transform
      hover:-translate-y-1
    "
  >
    <BackendIcon v-if="type === 'back'" />
    <FrontendIcon v-if="type === 'front'" />
    <DatabaseIcon v-if="type === 'data'" />
    <div>{{ name }}</div>
  </div>
</template>

<script>
import BackendIcon from "../icons/BackendIcon.vue";
import FrontendIcon from "../icons/FrontendIcon.vue";
import DatabaseIcon from "../icons/DatabaseIcon.vue";

export default {
  name: "LabelTag",
  props: ["name", "type"],
  components: { BackendIcon, FrontendIcon, DatabaseIcon },
};
</script>
