<template>
  <div class="flex items-center py-2 xs:w-76">
    <div
      class="
        w-48
        xs:w-64 xs:pl-2
        pt-2
        border-r-2 border-yellow-300 border-dashed
      "
    >
      <div class="flex justify-left items-center">
        <div
          class="
            flex
            w-52
            h-24
            xs:h-32
            justify-center
            items-center
            border-r-2
            border-yellow-300
            border-b-2
            border-yellow-300
            border-t-2
            border-yellow-300
            border-dashed
          "
        >
          <ul
            class="
              list-disc
              ml-1
              xs:ml-2
              text-yellow-300 text-xs
              xs:text-base
              list-outside
            "
          >
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Mobile Development</li>
            <li>UI/UX</li>
          </ul>
        </div>
        <div
          class="
            font-semibold
            text-yellow-300
            tracking-wider
            vertical
            text-xs
            xs:text-base
            mx-2
          "
        >
          Skills
        </div>
      </div>
      <ul
        class="list-disc ml-4 xs:ml-5 mt-2 text-yellow-300 text-xs xs:text-base"
      >
        <li>DevOps</li>
        <li>Game Development</li>
        <li>Blockchain</li>
      </ul>
    </div>
    <div
      class="
        text-yellow-300
        font-semibold
        tracking-wider
        text-xs
        xs:text-base
        vertical
        mx-2
      "
    >
      Interests
    </div>
  </div>
</template>

<script>
export default {
  name: "InterestInfographic",
};
</script>

<style scoped>
.vertical {
  writing-mode: vertical-lr;
}
</style>
