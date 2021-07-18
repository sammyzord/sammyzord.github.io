<template>
  <div
    class="
      flex flex-col
      items-end
      border-2 border-yellow-300
      p-4
      space-y-2
      w-52
      h-40
      bg-gray-900
    "
  >
    <h2
      class="
        text-lg
        sm:text-2xl
        xl:text-3xl
        text-yellow-300
        font-semibold
        mb-2
        sm:ml-1
        self-start
      "
    >
      {{ $t("follow_me") }}
    </h2>
    <div class="flex space-x-2">
      <a href="https://github.com/sammyzord">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/borges-sb/">
        <LinkedinIcon />
      </a>
    </div>
  </div>
</template>

<script>
import GithubIcon from "../icons/GithubIcon.vue";
import LinkedinIcon from "../icons/LinkedinIcon.vue";

export default {
  name: "FollowCard",
  components: { GithubIcon, LinkedinIcon },
};
</script>
