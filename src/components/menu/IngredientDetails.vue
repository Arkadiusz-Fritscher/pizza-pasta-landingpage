<template>
  <div
    class="absolute bottom-6 right-6 bg-pasta-green rounded-2xl rounded-br-3xl py-6 px-6 left-0 z-20 shadow-md max-w-lg"
  >
    <template v-if="allergens.length > 0">
      <h5>Allergene</h5>
      <ul>
        <li v-for="allergen in allergens" :key="allergen.letter">
          <span>{{ allergen.letter }}</span> - {{ allergen.name }}
        </li>
      </ul>
    </template>
    <template v-if="additives.length > 0">
      <h5>Zusatzstoffe</h5>
      <ul>
        <li v-for="additive in additives" :key="additive.number">
          <span>{{ additive.number }}</span> - {{ additive.name }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  props: ["ingredients"],
  data() {
    return {
      additives: [],
      allergens: [],
    };
  },
  methods: {
    setAdditives() {
      for (const ingredient of this.ingredients) {
        if (ingredient.additives.length > 0) {
          this.additives.push(...ingredient.additives);
        }
      }
    },

    setAllergens() {
      for (const ingredient of this.ingredients) {
        if (ingredient.allergens.length > 0) {
          this.allergens.push(...ingredient.allergens);
        }
      }
    },
  },
  beforeMount() {
    this.setAdditives();
    this.setAllergens();

    console.log(this.additives, this.allergens);
  },
};
</script>

<style scoped>
h5 {
  @apply font-bold text-lg mb-2 text-white;
}

ul {
  @apply space-y-2 mb-6;
}

li {
  @apply text-white text-opacity-80;
}

span {
  @apply font-semibold;
}
</style>
