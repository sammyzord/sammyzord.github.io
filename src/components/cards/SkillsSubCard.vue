<template>
  <div class="flex h-full">
    <div
      class="
        mt-3
        self-start
        bg-gray-900
        rounded-sm
        vertical
        justify-self-stretch
        pl-1
        pr-4
        py-2
      "
    >
      <h2
        class="
          text-lg
          sm:text-xl
          font-bold
          text-yellow-300
          tracking-wide
          vertical-text
        "
      >
        {{ $t(items.name) }}
      </h2>
    </div>
    <div
      class="
        w-full
        grid grid-flow-row grid-cols-1
        sm:grid-cols-2
        p-2
        gap-y-2 gap-x-8
      "
    >
      <ProgressBar
        v-for="item in items.items"
        :key="item.name"
        :amount="item.amount"
        :name="item.name"
      />
    </div>
  </div>
</template>

<script>
import ProgressBar from "../texts/infographics/ProgressBar.vue";
export default {
  name: "SkillsSubCard",
  props: ["items"],
  components: { ProgressBar },
};
</script>

<style scoped>
.vertical {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
.vertical > h2 {
  cursor: vertical-text;
}
</style>
