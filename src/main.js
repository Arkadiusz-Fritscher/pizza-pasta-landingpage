import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";

import BaseIcon from "@/components/ui/BaseIcon";
import CategorieButton from "@/components/ui/CategorieButton";
import SectionTitle from "@/components/ui/SectionTitle";
import BaseCardTag from "@/components/ui/BaseCardTag";

createApp(App)
  .use(store)
  .use(router)
  .component("base-icon", BaseIcon)
  .component("categorie-button", CategorieButton)
  .component("section-title", SectionTitle)
  .component("base-card-tag", BaseCardTag)
  .mount("#app");
