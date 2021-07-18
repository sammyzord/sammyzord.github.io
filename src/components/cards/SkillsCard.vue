<template>
  <div
    class="
      flex
      overflow-x-scroll
      border-t-2 border-gray-900 border-dashed
      scroll-snap-x
      bg-yellow-300
      py-2
      scroll-y
    "
  >
    <div class="w-custom flex-shrink-0 child-snap">
      <SkillsSubCard :items="programming" />
    </div>
    <div class="w-custom h-full flex-shrink-0 child-snap">
      <SkillsSubCard :items="langs" />
    </div>
    <div class="w-custom flex-shrink-0 child-snap last">
      <SkillsSubCard :items="design" />
    </div>
  </div>
</template>

<script>
import SkillsSubCard from "./SkillsSubCard.vue";

export default {
  name: "SkillsCard",
  data: () => ({
    design: {
      name: "Design",
      items: [
        { name: "Typography", amount: 50 },
        { name: "Layout Design", amount: 30 },
      ],
    },
    langs: {
      name: "Languages",
      items: [
        { name: "English", amount: 100 },
        { name: "Portuguese", amount: 100 },
      ],
    },
    programming: {
      name: "Programming",
      items: [
        { name: "Javascript / ES6", amount: 90 },
        { name: "Typescript", amount: 85 },
        { name: "Python", amount: 80 },
        { name: "PHP", amount: 85 },
        { name: "Go", amount: 40 },
        { name: "Ruby", amount: 35 },
      ],
    },
  }),
  components: { SkillsSubCard },
};
</script>

<style scoped>
.w-custom {
  width: 99%;
}

.last {
  margin-right: 2%;
}
.scroll-y {
  cursor: ew-resize;
}
</style>
