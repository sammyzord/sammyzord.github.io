<template>
  <section class="flex items-center justify-center h-screen topography">
    <div
      class="
        flex
        justify-center
        items-center
        flex-col
        sm:flex-row
        p-6
        border-4 border-gray-900
        space-y-6
        md:space-x-8
        sm:rounded-l-full
        bg-yellow-300
        shadow-lg
        transform
        hover:-translate-y-1
        transition
        duration-75
        ease-in-out
      "
    >
      <div class="w-36 sm:w-48">
        <img
          src="../assets/avatar2_cropped.png"
          alt="..."
          class="sm:rounded-full border-2 border-black"
        />
      </div>
      <div>
        <div
          class="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-semibold
            text-center
            sm:text-right
            text-gray-900
          "
        >
          {{ $t("header") }}
        </div>
        <div
          class="
            mt-4
            text-xl
            sm:text-2xl
            md:text-3xl
            text-center
            sm:text-right
            text-gray-900
          "
        >
          {{ $t("subheader") }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: ["header", "subheader"],
};
</script>
