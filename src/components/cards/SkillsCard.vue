<template>
  <div
    id="carrousel"
    class="
      flex
      overflow-x-scroll
      border-t-2 border-gray-900 border-dashed
      scroll-snap-x
      bg-yellow-300
      py-2
      scroll-y
      items-start
    "
    @scroll="handleScroll"
  >
    <div class="w-custom flex-shrink-0 child-snap">
      <SkillsSubCard :items="programming" />
    </div>
    <div class="w-custom flex-shrink-0 child-snap">
      <SkillsSubCard :items="langs" />
    </div>
    <div class="w-custom flex-shrink-0 child-snap last">
      <SkillsSubCard :items="design" />
    </div>
  </div>
  <div class="flex justify-center space-x-2">
    <div
      class="
        dot
        bg-gray-900
        p-2
        rounded-full
        transition
        duration-300
        ease-in-out
      "
      :class="{ 'transform -translate-y-1': slideNo === 0 }"
    />
    <div
      class="
        dot
        bg-gray-900
        p-2
        rounded-full
        transition
        duration-300
        ease-in-out
      "
      :class="{ 'transform -translate-y-1': slideNo === 1 }"
    />
    <div
      class="
        dot
        bg-gray-900
        p-2
        rounded-full
        transition
        duration-300
        ease-in-out
      "
      :class="{ 'transform -translate-y-1': slideNo === 2 }"
    />
  </div>
</template>

<script>
import SkillsSubCard from "./SkillsSubCard.vue";

export default {
  name: "SkillsCard",
  components: { SkillsSubCard },
  data: () => ({
    width: 0,
    position: 0,
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
        { name: "Python", amount: 85 },
        { name: "PHP", amount: 85 },
        { name: "Go", amount: 40 },
        { name: "Ruby", amount: 35 },
      ],
    },
  }),
  computed: {
    slideNo() {
      return Math.round(this.position / this.width) || 0;
    },
  },
  methods: {
    handleScroll() {
      this.position = document.getElementById("carrousel").scrollLeft;
      this.width = document.getElementById("carrousel").clientWidth;
    },
  },
};
</script>

<style scoped>
.w-custom {
  width: 99%;
}

.last {
  margin-right: 1%;
}
.scroll-y {
  cursor: ew-resize;
}
</style>
