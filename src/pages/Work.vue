<template>
  <section
    class="
      flex
      justify-center
      items-center
      min-h-screen
      px-10
      py-20
      topography-dark
    "
  >
    <div class="flex flex-wrap justify-center md:justify-between">
      <JobCard
        :title="$t('merlion')"
        :subtitle="$t('jr_developer')"
        :type="$t('job')"
        :source="'Closed Source'"
        :description="$t('merlion_description')"
        :time="'Jan 2019 ~ Feb 2021'"
      />
      <JobCard
        :title="$t('lift')"
        :subtitle="$t('jr_developer')"
        :type="$t('project')"
        :source="'Closed Source'"
        :description="$t('lift_mb_description')"
        :time="'Jun 2021 ~ Oct 2021'"
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
