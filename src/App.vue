<template>
  <Navbar />
  <router-view />
  <LocaleButton />
</template>

<script>
import About from "./pages/About.vue";
import Navbar from "./components/Navbar.vue";
import LocaleButton from "./components/LocaleButton.vue";

export default {
  components: { About, Navbar, LocaleButton },
};
</script>
