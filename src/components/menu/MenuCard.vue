<template>
  <li
    class="bg-pasta-creme rounded-2xl p-6 relative flex"
    @click="toggleInfoCard"
  >
    <ingredient-details
      v-if="infosOpen"
      :ingredients="toppings"
    ></ingredient-details>
    <div
      class="absolute right-4 -top-5 flex flex-row-reverse items-center gap-2"
    >
      <base-card-tag color="orange">{{ number }}</base-card-tag>
      <base-card-tag
        v-for="tag in tags"
        :key="tag"
        :icon="tag"
        size="small"
      ></base-card-tag>
    </div>
    <div class="relative w-10 flex-shrink-0 mr-4">
      <div class="absolute w-36 h-36 -top-2 right-0">
        <img class="object-cover image__shadow" :src="img.url" alt="" />
      </div>
    </div>
    <div class="space-y-4 w-full">
      <h3 class="text-lg font-bold text-pasta-black">{{ name }}</h3>
      <div class="text-sm leading-relaxed text-pasta-grey">
        <p v-if="toppings" v-html="formatToppings"></p>
      </div>
      <div class="flex justify-between items-end">
        <ul class="flex space-x-6">
          <li>
            <span class="text-sm font-medium text-pasta-orange block"
              >Ø 30cm</span
            >
            <span class="text-pasta-black font-bold block">9,40€</span>
          </li>
          <li>
            <span class="text-sm font-medium text-pasta-orange block"
              >Ø 40cm</span
            >
            <span class="text-pasta-black font-bold block">13,60€</span>
          </li>
        </ul>
        <div class="z-30">
          <span
            v-if="!infosOpen"
            class="text-pasta-green font-bold tracking-widest pl-12 pt-12"
            >...</span
          >
          <base-card-tag v-else icon="close" color="orange"></base-card-tag>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import IngredientDetails from "./IngredientDetails";
export default {
  components: { IngredientDetails },
  props: [
    "number",
    "name",
    "toppings",
    "categorie",
    "price",
    "priceLarge",
    "tags",
    "img",
  ],

  data() {
    return {
      infosOpen: false,
    };
  },
  methods: {
    toggleInfoCard() {
      this.infosOpen = !this.infosOpen;
    },
  },
  computed: {
    imgUrl() {
      if (this.img) {
        return require(`@/assets/img/food/${this.img}`);
      }
      return null;
    },

    formatPrice() {
      let price = [
        {
          name: "",
          price: null,
        },
      ];
      if (this.categorie.toLowerCase() === "pizza") {
        price = [
          {
            name: "Ø 30cm",
            price: this.price,
          },
          {
            name: "Ø 40cm",
            price: this.priceLarge,
          },
        ];
      }

      return price;
    },

    formatToppings() {
      const toppings = this.toppings;
      if (toppings) {
        let ingredients = [];
        for (const { name, allergens, additives } of toppings) {
          if (allergens || additives) {
            let formattedIngredients = "";
            if (allergens) {
              formattedIngredients += allergens.map(
                (allergen) => allergen.letter
              );
            }
            if (additives) {
              formattedIngredients += additives.map(
                (additive) => additive.number
              );
            }
            ingredients.push(`${name}<sup>${formattedIngredients}</sup>`);
          } else {
            ingredients.push(name);
          }
        }
        // Spielerrei
        const firstPart = ingredients
          .slice(0, ingredients.length - 1)
          .join(", ");
        const lastPart = ingredients.slice(ingredients.length - 1).toString();

        return `Mit ${firstPart} und ${lastPart}.`;
      }
      return null;
    },
  },
};
</script>

<style scoped>
.image__shadow {
  filter: drop-shadow(10px 10px 20px rgba(143, 91, 32, 0.18))
    drop-shadow(5px 5px 10px rgba(111, 72, 25, 0.25));
}
</style>
