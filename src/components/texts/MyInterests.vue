<template>
  <div class="w-48 sm:w-60 xl:w-64 ml-7 xs:ml-11 sm:ml-0">
    <h2
      class="
        text-lg
        sm:text-2xl
        xl:text-3xl
        mb-3
        font-semibold
        text-yellow-300
        sm:text-right
      "
    >
      {{ $t("interests") }}
    </h2>
    <div
      class="
        flex flex-col
        space-y-3
        sm:text-lg
        xl:text-xl
        text-white text-left
        sm:text-right
      "
    >
      <p v-html="handleText($t('interest_text'))"></p>
      <p v-html="handleText($t('interest_text2'))"></p>
    </div>
  </div>
</template>

<script>
import TextHighlight from "../../mixins/TextHighlight.vue";

export default {
  name: "MyInterests",
  mixins: [TextHighlight],
};
</script>
