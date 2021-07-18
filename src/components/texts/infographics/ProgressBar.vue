<template>
  <div class="flex flex-col gap-y-1">
    <span class="font-medium text-gray-900 self-start">{{ getName }}</span>
    <div class="flex items-center space-x-2">
      <div class="w-full h-4 bg-gray-800 border-2 border-gray-800">
        <div
          class="bg-yellow-400 h-full"
          :style="{ width: amount + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["amount", "name"],
  computed: {
    getName() {
      const aux = ["English", "Portuguese", "Typography", "Layout Design"];
      if (aux.includes(this.name)) {
        return this.$t(this.name);
      } else {
        return this.name;
      }
    },
  },
};
</script>

<style scoped>
span {
  cursor: text;
}
</style>
