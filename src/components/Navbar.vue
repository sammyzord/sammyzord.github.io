<template>
  <nav
    class="
      flex
      fixed
      h-16
      px-2
      sm:px-4
      justify-center
      sm:justify-start
      items-center
      w-full
      absolute
    "
  >
    <div class="inline-flex space-x-1 xs:space-x-4">
      <router-link
        class="
          flex
          justify-center
          py-1
          px-2
          font-semibold
          border-2
          bg-yellow-300
          text-gray-900 text-sm
          xs:text-base
          border-2 border-gray-900
          space-x-2
          w-32
          xs:w-36
        "
        to="/"
        :class="{
          'cursor-default bg-yellow-400': disabled,
          'transform hover:scale-105': !disabled,
        }"
      >
        <span v-if="disabled"> > </span>
        <span>{{ $t("about") }}</span>
      </router-link>
      <router-link
        class="
          flex
          justify-center
          py-1
          px-2
          font-semibold
          border-2
          bg-yellow-300
          text-gray-900 text-sm
          xs:text-base
          border-2 border-gray-900
          space-x-2
          w-32
          xs:w-36
        "
        to="/work"
        :class="{
          'cursor-default bg-yellow-400': !disabled,
          'transform hover:scale-105': disabled,
        }"
      >
        <span v-if="!disabled"> > </span>
        <span>{{ $t("work") }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    disabled() {
      return this.$route.name === "about";
    },
  },
};
</script>
