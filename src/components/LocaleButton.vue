<template>
  <div class="fixed bottom-3 right-3 z-50">
    <button
      class="
        bg-yellow-300
        text-gray-900
        font-semibold
        p-2
        border-2 border-gray-900
        rounded-full
        transform
        hover:scale-105
        shadow
        focus:outline-none
      "
      @click="localeChange"
    >
      <TranslateIcon />
    </button>
  </div>
</template>

<script>
import TranslateIcon from "./icons/TranslateIcon.vue";
export default {
  name: "LocaleButton",
  components: { TranslateIcon },
  methods: {
    localeChange() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "pt_BR";
      } else {
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>
