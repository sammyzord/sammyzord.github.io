<template>
  <section
    class="flex justify-center items-center min-h-screen px-10 py-20 topography"
  >
    <div class="flex flex-wrap justify-center md:justify-between">
      <JobCard
        :title="$t('merlion')"
        :subtitle="$t('jr_developer')"
        :type="$t('job')"
        :source="'Closed Source'"
        :description="$t('merlion_description')"
        :time="'2019 ~ 2021'"
      />
    </div>
  </section>
</template>

<script>
import JobCard from "../components/cards/abstract_cards/JobCard.vue";

export default {
  name: "Work",
  components: { JobCard },
};
</script>

<style scoped>
@import "../assets/styles/topography_dark.css";
</style>
