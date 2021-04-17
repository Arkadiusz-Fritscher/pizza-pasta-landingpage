<template>
  <section class="section-y-space md:space-y-0" id="lieferung">
    <div class="inner-wrapper">
      <section-title
        class="section-title-y-space"
        section="Lieferung"
      ></section-title>
      <div
        class="md:flex md:justify-between md:flex-wrap space-y-12 md:space-y-0 md:gap-y-12 md:gap-x-4"
      >
        <delivery-card number="2" fee="2" location="Nieder-Olm"></delivery-card>

        <delivery-card
          number="3"
          fee="3"
          location="Saulheim / Udenheim  / Mainz-Ebersheim / Klein-Winterheim / Ober-Olm/ Essenheim / Stadecken / Elsheim / Zornheim / Sörgenloch"
        ></delivery-card>
      </div>
    </div>
  </section>
</template>

<script>
import DeliveryCard from "./DeliveryCard";
export default {
  components: {
    DeliveryCard,
  },
};
</script>
