<template>
  <form
    class="flex flex-col border-2 border-yellow-300 p-4 bg-gray-900 space-y-2"
    ref="contactForm"
    @submit.prevent="sendEmail"
  >
    <h2 class="text-lg sm:text-2xl xl:text-3xl font-semibold text-yellow-300">
      {{ $t("contact_me") }}
    </h2>
    <div class="grid sm:grid-cols-2 gap-y-2 gap-x-4">
      <div class="order-0 flex flex-col space-y-2">
        <label class="font-semibold text-yellow-300">{{ $t("name") }}</label>
        <input
          v-model="name"
          class="
            px-2
            py-1
            rounded-sm
            bg-yellow-200
            text-gray-900
            focus:outline-none focus:ring
            ring-gray-600
            shadow-inner
          "
          type="text"
          required
        />
      </div>

      <div class="order-2 sm:order-1 flex flex-col space-y-2 row-span-2">
        <label class="font-semibold text-yellow-300">{{ $t("message") }}</label>
        <textarea
          v-model="message"
          class="
            px-2
            py-1
            rounded-sm
            bg-yellow-200
            text-gray-900
            focus:outline-none focus:ring
            ring-gray-600
            shadow-inner
          "
          rows="4"
          required
        ></textarea>
      </div>

      <div class="order-1 sm:order-2 flex flex-col space-y-2">
        <label class="font-semibold text-yellow-300">{{ $t("email") }}</label>
        <input
          v-model="email"
          class="
            px-2
            py-1
            rounded-sm
            bg-yellow-200
            text-gray-900
            focus:outline-none focus:ring
            ring-gray-600
            shadow-inner
          "
          type="email"
          required
        />
      </div>
    </div>
    <div class="h-2"></div>
    <button
      class="
        button
        self-end
        bg-transparent
        hover:bg-yellow-300
        text-yellow-300
        font-semibold
        hover:text-gray-900
        py-2
        px-4
        border-2 border-yellow-300
        hover:border-transparent
        rounded
      "
      :class="{ loading: loading }"
      type="submit"
      :disabled="disabled"
    >
      <div
        class="flex space-x-2 loader justify-center h-5 items-center"
        v-if="loading"
      >
        <div
          class="dot bg-yellow-300 p-1 w-2 h-2 rounded-full animate-bounce"
        />
        <div
          class="dot bg-yellow-300 p-1 w-2 h-2 rounded-full animate-bounce"
        />
        <div
          class="dot bg-yellow-300 p-1 w-2 h-2 rounded-full animate-bounce"
        />
      </div>
      <span v-else>{{ $t("send") }}</span>
    </button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data: () => ({
    name: "",
    email: "",
    message: "",
    loading: false,
    disabled: false,
  }),
  methods: {
    async sendEmail() {
      this.disabled = true;
      this.loading = true;

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      };

      await fetch("https://app.99inbound.com/api/e/HQZuh4Jk", requestOptions);
      this.name = "";
      this.email = "";
      this.message = "";
      this.$emit("messageSent");
      this.loading = false;
      setTimeout(() => (this.disabled = false), 4000);
    },
  },
};
</script>

<style scoped>
.button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
button.loading {
  cursor: wait !important;
}
.button:hover * .dot {
  background-color: #111827;
}
.loader div:first-child {
  animation-delay: 0.1s;
}

.loader div:nth-child(2) {
  animation-delay: 0.2s;
}

.loader div:nth-child(3) {
  animation-delay: 0.3s;
}
</style>
