<template>
  <div
    class="
      order-0
      sm:order-2
      w-60
      xs:w-72
      sm:w-64
      md:w-72
      xl:w-80
      border-2 border-gray-900
      p-4
      bg-yellow-300
      shadow-lg
    "
  >
    <div
      class="text-lg sm:text-2xl xl:text-3xl font-semibold mb-2 text-gray-900"
    >
      {{ $t("skills") }}
    </div>
    <div class="sm:text-lg xl:text-xl text-gray-900">
      <p>{{ $t("skills_text") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsText",
};
</script>
