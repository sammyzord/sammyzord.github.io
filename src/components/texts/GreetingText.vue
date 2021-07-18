<template>
  <div class="border-2 p-4 border-yellow-300 bg-gray-900">
    <div class="w-56 sm:w-72">
      <h2
        class="
          text-lg
          sm:text-2xl
          xl:text-3xl
          font-semibold
          mb-2
          text-yellow-300
        "
      >
        {{ $t("greeting") }}
        <span class="animate">👋</span>
      </h2>
      <p
        class="sm:text-lg xl:text-xl text-white"
        v-html="handleText($t('about_me'))"
      ></p>
    </div>
  </div>
</template>

<script>
import TextHighlight from "../../mixins/TextHighlight.vue";

export default {
  name: "GreetingText",
  mixins: [TextHighlight],
};
</script>

<style scoped>
@keyframes wave {
  0% {
    transform: rotate(0deg) rotateY(180deg);
  }
  10% {
    transform: rotate(14deg) rotateY(180deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg) rotateY(180deg);
  }
  30% {
    transform: rotate(14deg) rotateY(180deg);
  }
  40% {
    transform: rotate(-4deg) rotateY(180deg);
  }
  50% {
    transform: rotate(10deg) rotateY(180deg);
  }
  60% {
    transform: rotate(0deg) rotateY(180deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg) rotateY(180deg);
  }
}

.animate {
  display: inline-block;
  animation-name: wave;
  transform-origin: 70% 70%;
  animation-duration: 2s;
  transform: rotateY(180deg);
  animation-iteration-count: infinite;
}
</style>
