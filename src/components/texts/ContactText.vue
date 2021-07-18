<template>
  <div class="w-52 sm:w-64 xl:w-72 border-2 border-yellow-300 p-4 bg-gray-900">
    <h2
      class="text-lg sm:text-2xl xl:text-3xl text-yellow-300 font-semibold mb-2"
    >
      {{ $t("need_help") }}
    </h2>
    <p
      class="text-white sm:text-lg xl:text-xl"
      v-html="handleText($t('contact_text'))"
    />
  </div>
</template>

<script>
import TextHighlight from "../../mixins/TextHighlight.vue";

export default {
  name: "ContactText",
  mixins: [TextHighlight],
};
</script>
