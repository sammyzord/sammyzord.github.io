<template>
  <div
    class="
      flex flex-col
      border-2 border-yellow-300
      bg-gray-900
      p-4
      space-y-4
      z-10
      w-64
      xs:w-auto
    "
  >
    <h2 class="text-lg sm:text-2xl xl:text-3xl text-yellow-300 font-semibold">
      {{ $t("payment_title") }}
    </h2>
    <div class="flex flex-col md:flex-row space-y-4 space-x-5">
      <div
        class="
          flex flex-col
          space-y-3
          sm:space-y-4
          text-white
          w-44
          xs:w-64
          xl:w-72
          sm:text-lg
          xl:text-xl
        "
      >
        <p v-html="handleText($t('payment_text'))" />
        <p v-html="handleText($t('coffee'))" />
      </div>
      <div
        class="
          flex flex-col
          h-44
          self-center
          overflow-y-scroll
          scroll-snap-y
          w-48
          xl:w-52
        "
      >
        <div class="child-snap pb-2">
          <div class="flex justify-end items-center space-x-3">
            <h4 class="text-yellow-300 font-semibold vertical">BRL (PIX)</h4>
            <img src="../../assets/pix-qr-code.png" alt="..." class="w-40" />
          </div>
        </div>
        <div class="child-snap pb-2">
          <div class="flex justify-end items-center space-x-3">
            <h4 class="text-yellow-300 font-semibold vertical">Nano</h4>
            <img src="../../assets/nano-qr-code.png" alt="..." class="w-40" />
          </div>
        </div>
        <div class="child-snap pb-2">
          <div class="flex justify-end items-center space-x-3">
            <h4 class="text-yellow-300 font-semibold vertical">Monero</h4>
            <img src="../../assets/monero-qr-code.png" alt="..." class="w-40" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextHighlight from "../../mixins/TextHighlight.vue";
export default {
  name: "QRCodeCard",
  mixins: [TextHighlight],
};
</script>

<style scoped>
.vertical {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
</style>
