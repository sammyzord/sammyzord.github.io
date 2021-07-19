<template>
  <section
    class="
      flex flex-col
      py-4
      sm:py-0 sm:px-8
      lg:px-20
      xl:px-28
      justify-around
      bg-gray-900
      min-h-screen
      items-center
      sm:items-start
      space-y-20
      sm:space-y-0
    "
  >
    <div
      class="flex flex-col md:flex-row items-center sm:-space-x-3 -space-y-2"
    >
      <ContactText
        class="
          transition
          duration-75
          ease-in-out
          transform
          -rotate-1
          sm:-rotate-2
          hover:rotate-0
          bring-forward
        "
      />

      <ContactForm class="z-10" @messageSent="showAlert" />
    </div>
    <div
      class="
        w-10/12
        border-t-2 border-dashed border-yellow-300
        self-center
        sm:transform sm:-rotate-6
        md:-rotate-12
      "
    ></div>
    <div
      class="
        flex flex-col
        sm:flex-row sm:self-end
        items-center
        sm:items-end
        -space-x-3 -space-y-3
      "
    >
      <QRCodeCard />

      <FollowCard
        class="
          transition
          duration-75
          ease-in-out
          transform
          -rotate-2
          hover:rotate-0
          bring-forward
        "
      />
    </div>
    <div
      v-if="show_alert"
      class="
        fixed
        bg-yellow-300
        border-2 border-gray-900
        py-3
        pr-4
        pl-4
        sm:pl-10
        bottom-10
        sm:rounded-l-full sm:left-10
        bring-forward
        z-40
        text-gray-900
        alert
      "
      role="alert"
    >
      <p class="font-extrabold">{{ $t("message_sent") }}</p>
      <p class="text-sm font-medium mt-2">
        {{ $t("message_sent_text") }}
      </p>
    </div>
  </section>
</template>

<script>
import ContactForm from "./forms/ContactForm.vue";
import ContactText from "./texts/ContactText.vue";
import FollowCard from "./cards/FollowCard.vue";
import QRCodeCard from "./cards/QRCodeCard.vue";

export default {
  name: "Contact",
  components: { ContactForm, ContactText, FollowCard, QRCodeCard },
  data: () => ({
    show_alert: true,
  }),
  methods: {
    showAlert() {
      this.show_alert = true;
      setTimeout(() => (this.show_alert = false), 4000);
    },
  },
};
</script>

<style scoped>
.bring-forward:hover {
  z-index: 20;
}
@keyframes alert {
  0% {
    transform: translateX(-200%);
  }
  10% {
    transform: translateX(0%);
  }
  90% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
}

.alert {
  animation-name: alert;
  animation-duration: 4s;
}
</style>
