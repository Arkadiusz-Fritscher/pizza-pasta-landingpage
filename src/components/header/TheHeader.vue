<template>
  <header class="bg-pasta-green">
    <the-navigation :openingTime="isOpen"></the-navigation>
    <div>
      <div class="header relative inner-wrapper overflow-visible">
        <router-link
          to="#oeffnungszeiten"
          class="opening-status absolute left-0 bottom-1/4 bg-pasta-orange py-2 px-6 rounded-r-2xl z-30 text-pasta-creme font-semibold lg:hidden"
        >
          <span>{{ isOpen ? "Geöffnet" : "Geschlossen" }}</span>
        </router-link>

        <div class="absolute top-1/4 z-10">
          <h1 class="text-white font-bold text-5xl md:text-6xl lg:text-8xl">
            Pizza Pasta
          </h1>
          <p class="text-pasta-creme font-medium text-lg">
            Weil es einfach besser schmeckt.
          </p>
        </div>
        <div class="absolute -bottom-16 left-auto right-4 h-auto max-w-lg">
          <img
            class="object-contain ml-auto w-11/12"
            src="@/assets/img/header/pizza-slice2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TheNavigation from "@/components/navigation/TheNavigation";
export default {
  components: {
    TheNavigation,
  },
  props: ["isOpen"],
};
</script>

<style scoped>
.header {
  height: 60vh;
  max-height: 22.5rem;
}

/* MD - 768px */
@media only screen and (min-width: 48rem) {
  .header {
    max-height: 25rem;
  }
}

/* LG - 1080px */
@media only screen and (min-width: 67.5rem) {
  .header {
    max-height: 43.75rem;
  }
}
</style>
