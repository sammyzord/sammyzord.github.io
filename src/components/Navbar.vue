<template>
  <nav class="flex fixed h-16 px-2 sm:px-4 items-center w-full absolute">
    <div class="inline-flex space-x-1 sm:space-x-2">
      <router-link
        class="
          py-1
          px-2
          font-semibold
          border-2
          bg-yellow-300
          text-gray-900
          border-2 border-gray-900
          transform
          hover:scale-105
        "
        to="/"
      >
        {{ $t("about") }}
      </router-link>
      <router-link
        class="
          py-1
          px-2
          font-semibold
          border-2
          bg-yellow-300
          text-gray-900
          border-2 border-gray-900
          transform
          hover:scale-105
        "
        to="/work"
      >
        {{ $t("work") }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
