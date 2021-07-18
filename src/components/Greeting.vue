<template>
  <section class="flex justify-center bg-gray-900 min-h-screen py-6">
    <div
      class="flex flex-col justify-evenly items-center space-y-6 sm: space-y-0"
    >
      <GreetingText
        class="
          transition
          duration-75
          ease-in-out
          transform
          -rotate-1
          sm:-rotate-2
          hover:rotate-0
        "
      />
      <InterestsCard
        class="
          transition
          duration-75
          ease-in-out
          transform
          rotate-1
          sm:rotate-2
          hover:rotate-0
          translate-x-fixx translate-y-fixy
        "
      />
    </div>
  </section>
</template>

<script>
import GreetingText from "./texts/GreetingText.vue";
import InterestsCard from "./cards/InterestsCard.vue";
export default {
  name: "Greeting",
  components: { GreetingText, InterestsCard },
};
</script>
<style scoped>
.lol {
  transform: translateX(0%) translateY(calc(0% - 0.5px));
}
</style>
