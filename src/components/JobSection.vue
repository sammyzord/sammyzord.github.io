<script setup lang="ts">
import JobCard from "./JobCard.vue";
import {
  merlionDetails,
  fluxDetails,
  liftDetails,
  zooDetails,
} from "../utils/data";
</script>

<template>
  <div class="px-2 md:px-4 lg:px-10">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      <JobCard
        :name="'Merlion IT'"
        :title="'Fullstack Developer'"
        :periods="[['Jan 2019', 'Feb 2021']]"
        :details="merlionDetails"
        :location="'Brasília, Brazil'"
      ></JobCard>
      <JobCard
        :name="'LIFT Learning'"
        :title="'Backend Developer'"
        :periods="[
          ['May 2021', 'Aug 2022'],
        ]"
        :details="liftDetails"
        :location="'Brasília, Brazil'"
      ></JobCard>
      <JobCard
        :name="'Flux Bank'"
        :title="'Fullstack Developer'"
        :periods="[['Jul 2021', 'Oct 2022']]"
        :details="fluxDetails"
        :location="'Brasília, Brazil'"
      ></JobCard>
      <JobCard
        :name="'ZooStation'"
        :title="'Frontend Developer'"
        :periods="[['Oct 2022', 'Ongoing']]"
        :details="zooDetails"
        :location="'The Hague, Netherlands'"
      ></JobCard>
    </div>
  </div>
</template>
