<script setup lang="ts">
import JobCard from "./JobCard.vue";

import { merlionDetails, fluxDetails, liftDetails } from "../utils/data";
</script>

<template>
  <div class="lg:px-10">
    <div class="grid grid-cols-3 gap-8">
      <JobCard
        :name="'Merlion IT'"
        :title="'Fullstack Developer'"
        :periods="[['Jan 2019', 'Feb 2021']]"
        :details="merlionDetails"
      ></JobCard>
      <JobCard
        :name="'LIFT Learning'"
        :title="'Backend Developer'"
        :periods="[
          ['May 2021', 'Oct 2021'],
          ['Mar 2022', 'Aug 2022'],
        ]"
        :details="liftDetails"
      ></JobCard>
      <JobCard
        :name="'Flux Bank'"
        :title="'Fullstack Developer'"
        :periods="[['Jul 2021', 'Oct 2022']]"
        :details="fluxDetails"
      ></JobCard>
    </div>
  </div>
</template>
