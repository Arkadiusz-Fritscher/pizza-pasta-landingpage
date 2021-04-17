<template>
  <div class="wrapper">
    <the-header :isOpen="isOpen"></the-header>
    <the-menu></the-menu>
    <the-delivery></the-delivery>
    <the-openings :openingHours="openingHours"></the-openings>
    <the-contact></the-contact>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "@/components/header/TheHeader";
import TheMenu from "@/components/menu/TheMenu";
import TheDelivery from "@/components/delivery/TheDelivery";
import TheOpenings from "@/components/openings/TheOpenings";
import TheContact from "@/components/contact/TheContact";
import TheFooter from "@/components/footer/TheFooter";

export default {
  components: {
    TheHeader,
    TheMenu,
    TheDelivery,
    TheOpenings,
    TheContact,
    TheFooter,
  },

  data() {
    return {
      isOpen: false,
      openingHours: [
        {
          day: "Montag",
          times: ["Geschlossen"],
        },
        {
          day: "Dienstag",
          times: [
            {
              open: "11.00",
              close: "14.00",
            },
            {
              open: "17.00",
              close: "22.00",
            },
          ],
        },
        {
          day: "Mittwoch",
          times: [
            {
              open: "11.00",
              close: "14:00",
            },
            {
              open: "14.00",
              close: "22.00",
            },
          ],
        },
        {
          day: "Donnerstag",
          times: [
            {
              open: "11.00",
              close: "14.00",
            },
            {
              open: "17.00",
              close: "22.00",
            },
          ],
        },
        {
          day: "Freitag",
          times: [
            {
              open: "11.00",
              close: "14.00",
            },
            {
              open: "17.00",
              close: "22.00",
            },
          ],
        },
        {
          day: "Samstag",
          times: [
            {
              open: "11.00",
              close: "14.00",
            },
            {
              open: "17.00",
              close: "22.00",
            },
          ],
        },
        {
          day: "Sonntag",
          times: [
            {
              open: "11:00",
              close: "14:00",
            },
            {
              open: "17:00",
              close: "22:00",
            },
          ],
        },
      ],
    };
  },
  methods: {
    checkOpenings() {
      const date = new Date();
      const currentDay = date.getDay();
      const currentHour = date.getHours();
      const currentMin = date.getMinutes();
      const HM = parseFloat(`${currentHour}.${currentMin}`);

      if (this.openingHours[currentDay - 1].times.length === 1) {
        this.isOpen = false;
      } else {
        this.openingHours[currentDay - 1].times.forEach((time) => {
          if (parseFloat(time.open) <= HM && parseFloat(time.close) > HM) {
            this.isOpen = true;
          }
        });
      }
    },
  },

  beforeMount() {
    this.checkOpenings();
  },
};
</script>

<style>
.inner-wrapper {
  max-width: 1440px;
  margin: auto;
  padding: 0 1rem;
  overflow: hidden;
}

.section-y-space {
  @apply my-5 lg:my-9;
}

.section-title-y-space {
  @apply my-5;
}

.opening-status {
  filter: drop-shadow(0px 8px 12px rgba(158, 72, 54, 0.25));
}

/* SM - 640px */
@media only screen and (min-width: 40rem) {
  .inner-wrapper {
  }
}

/* MD - 768px */
@media only screen and (min-width: 48rem) {
  .inner-wrapper {
  }
}

/* LG - 1080px */
@media only screen and (min-width: 67.5rem) {
  .inner-wrapper {
    padding: 0 7.5rem;
  }
}

/* Typography */

.text__description {
  @apply text-pasta-black text-xs font-medium leading-none;
}
</style>
