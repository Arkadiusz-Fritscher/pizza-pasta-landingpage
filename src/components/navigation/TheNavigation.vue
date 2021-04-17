<template>
  <nav>
    <mobile-navigation
      v-if="isOpen"
      :links="links"
      @toggle="toggleMenu"
    ></mobile-navigation>
    <div class="inner-wrapper flex justify-between items-center py-4">
      <div
        @click="toggleMenu"
        class="text-white lg:hidden flex justify-center items-center z-40"
      >
        <base-card-tag
          v-if="isOpen"
          icon="close"
          color="orange"
        ></base-card-tag>
        <span v-else class="w-8 h-8 flex justify-center items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <ul class="text-white font-semibold space-x-4 hidden lg:flex">
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.url">{{ link.name }}</router-link>
        </li>
      </ul>
      <router-link
        to="#oeffnungszeiten"
        class="opening-status hidden lg:block text-pasta-creme py-2 px-6 bg-pasta-orange rounded-2xl font-semibold"
      >
        <span>{{ openingTime ? "Geöffnet" : "Geschlossen" }}</span>
      </router-link>
      <div class="flex items-center space-x-2">
        <base-card-tag icon="phone" color="orange"></base-card-tag>
        <a class="text-white font-semibold" :href="`tel:${contact.phone}`">{{
          formatPhoneNr
        }}</a>
      </div>
    </div>
  </nav>
</template>

<script>
import MobileNavigation from "./MobileNavigation";
export default {
  components: { MobileNavigation },
  props: ["openingTime"],
  data() {
    return {
      isOpen: false,
      links: [
        {
          name: "Speisekarte",
          url: {
            hash: "#menu",
          },
        },
        {
          name: "Lieferung",
          url: {
            hash: "#lieferung",
          },
        },
        {
          name: "Öffnungszeiten",
          url: {
            hash: "#oeffnungszeiten",
          },
        },
        {
          name: "Kontakt / Anfahrt",
          url: {
            hash: "#kontakt",
          },
        },
      ],
      contact: {
        phone: "061369544948",
        time: "geöffnet",
      },
    };
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },

  computed: {
    formatPhoneNr() {
      const nr = this.contact.phone;
      const prefix = nr.substring(0, 5);
      const tel = nr.substring(5);

      return `${prefix} - ${tel}`;
    },
  },
};
</script>
