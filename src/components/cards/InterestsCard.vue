<template>
  <div
    class="
      flex
      space-x-8
      sm:items-center
      flex-col
      sm:flex-row
      border-2 border-yellow-300
      p-1
      xs:p-2
      bg-gray-900
    "
  >
    <MyInterests />
    <InterestInfographic />
  </div>
</template>

<script>
import MyInterests from "../texts/MyInterests.vue";
import InterestInfographic from "../texts/infographics/InterestInfographic.vue";
export default {
  name: "InterestsCard",
  components: { MyInterests, InterestInfographic },
};
</script>
