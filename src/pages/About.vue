<template>
  <Hero />
  <Greeting />
  <Skills />
  <Contact />
</template>

<script>
import Hero from "../components/Hero.vue";
import Greeting from "../components/Greeting.vue";
import Skills from "../components/Skills.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "About",
  components: { Hero, Greeting, Skills, Contact },
};
</script>
