<template>
  <div class="mb-2">
    <div
      class="
        inline-block
        bg-yellow-300
        border-2 border-gray-900
        font-semibold
        px-1.5
        py-0.5
        transition
        duration-75
        ease-in-out
        transform
        translate-y-6 translate-x-2.5
        -rotate-6
        hover:rotate-0 hover:translate-y-7
        text-gray-900
        shadow
      "
    >
      Developer
    </div>
    <div>
      <div
        class="
          inline-block
          bg-gray-900
          text-yellow-300
          px-4
          pb-2
          pt-7
          rounded-sm
          font-bold
          text-center
          w-28
          text-lg
          tracking-wide
        "
      >
        Samuel
      </div>
      <div class="inline-block ml-2 font-semibold">
        <div>
          <div class="inline-block text-gray-900">Lv</div>
          <div
            class="
              inline-block
              bg-yellow-300
              border-2 border-gray-900
              px-1.5
              py-0.5
              ml-1
              origin-top-left
              transition
              duration-75
              ease-in-out
              transform
              -rotate-6
              -translate-y-1
              hover:rotate-0 hover:-translate-y-0.5
              text-gray-900
              shadow
            "
          >
            {{ age }}
          </div>
        </div>

        <div>
          <div class="inline-block text-gray-900">Next Lv</div>
          <div
            class="
              inline-block
              bg-yellow-300
              border-2 border-gray-900
              px-1.5
              py-0.5
              ml-1
              origin-top-left
              transition
              duration-75
              ease-in-out
              transform
              -rotate-6
              -translate-y-1
              hover:rotate-0 hover:-translate-y-0.5
              text-gray-900
              shadow
            "
          >
            {{ daysToBirthday + " xp" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  differenceInYears,
  differenceInDays,
  getYear,
  addYears,
} from "date-fns";

export default {
  name: "NameLvl",
  computed: {
    age() {
      return differenceInYears(new Date(), new Date(1997, 8, 20));
    },
    daysToBirthday() {
      const currentYear = getYear(new Date());
      const daysTo = differenceInDays(new Date(currentYear, 8, 20), new Date());
      if (daysTo >= 0) {
        return daysTo;
      } else {
        const nextYear = getYear(addYears(new Date(), 1));
        return differenceInDays(new Date(nextYear, 8, 20), new Date());
      }
    },
  },
};
</script>
