import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./index.css";
import en from "./locales/en.json";
import pt_BR from "./locales/pt_BR.json";
import router from "./router";

const i18n = createI18n({
  locale: "en",
  messages: {
    en,
    pt_BR,
  },
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");
