<template>
  <section
    class="
      flex flex-col
      sm:flex-row
      items-center
      justify-evenly
      min-h-screen
      py-4
      sm:px-2
      md:px-0
      w-full
      topography
      space-x-2
    "
  >
    <div
      class="
        order-1
        flex flex-col
        w-11/12
        sm:w-7/12
        bg-yellow-300
        p-2
        border-2 border-gray-900
        shadow-lg
        space-y-4
      "
    >
      <NameLvl />
      <SkillsCard />

      <div class="relative self-center my-2">
        <ScrollIcon />
      </div>

      <h2 class="font-semibold text-lg mt-1 mb-2 text-gray-900">
        Other Skills:
      </h2>
      <div
        class="
          grid grid-cols-1
          xs:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          xl:grid-cols-6
          2xl:grid-cols-7
          gap-x-4 gap-y-2
          sm:gap-x-2
        "
      >
        <LabelTag
          v-for="item in extra_skills"
          :name="item.name"
          :type="item.type"
          :key="item.name"
        />
      </div>
    </div>

    <SkillsText
      class="
        transition
        duration-75
        ease-in-out
        transform
        rotate-1
        sm:rotate-2
        hover:rotate-0
        mb-2
        sm:mb-0
      "
    />
  </section>
</template>

<script>
import NameLvl from "./cards/NameLvl.vue";
import SkillsCard from "./cards/SkillsCard.vue";
import LabelTag from "./cards/LabelTag.vue";
import SkillsText from "./texts/SkillsText.vue";
import ScrollIcon from "./icons/ScrollIcon.vue";

export default {
  name: "Skills",
  components: {
    NameLvl,
    SkillsCard,
    LabelTag,
    SkillsText,
    ScrollIcon,
  },
  data: () => ({
    tooltip_hidden: true,
    extra_skills: [
      { name: "html/css", type: "front" },
      { name: "vue", type: "front" },
      { name: "react", type: "front" },
      { name: "tailwind", type: "front" },
      { name: "vuetify", type: "front" },
      { name: "laravel", type: "back" },
      { name: "node", type: "back" },
      { name: "express", type: "back" },
      { name: "django", type: "back" },
      { name: "docker", type: "back" },
      { name: "postgres", type: "data" },
      { name: "mysql", type: "data" },
    ],
  }),
  methods: {
    tooltipHide() {
      this.tooltip_hidden = true;
    },
    tooltipShow() {
      this.tooltip_hidden = false;
    },
  },
};
</script>
