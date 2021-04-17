<template>
  <div id="filter" class="py-6">
    <div class="mx-auto max-w-4xl">
      <div v-if="isLoading">Loading...</div>
      <ul v-else class="flex flex-wrap gap-4">
        <li
          v-for="ingredient in ingredients"
          :key="ingredient"
          class="flex-grow flex-shrink-0"
        >
          <ingredient-button
            :ingredient="ingredient"
            @handleClick="toggleIngredient"
          ></ingredient-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IngredientButton from "./IngredientButton";
export default {
  components: {
    IngredientButton,
  },
  data() {
    return {
      ingredients: [],
      selectet: [],
      isLoading: true,
    };
  },

  methods: {
    toggleIngredient(ingredient) {
      const index = this.selectet.findIndex((item) => item === ingredient);
      if (index === -1) {
        this.selectet.push(ingredient);
      } else {
        this.selectet.splice(index, 1);
      }
      this.$emit("activeFilter", this.selectet);
    },

    async fetchIngredients() {
      this.isLoading = true;
      this.ingredients = [];
      const URL =
        "https://api-eu-central-1.graphcms.com/v2/ckncu8315oo9p01xo6zhad3fq/master";

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query {
                    ingredients {
                      name
                    }
                  }`,
        }),
      });

      const result = await response.json();
      const ingredients = result.data.ingredients;

      ingredients.forEach((ingredient) => {
        this.ingredients.push(ingredient.name);
      });

      this.isLoading = false;
    },
  },

  beforeMount() {
    this.fetchIngredients();
  },
};
</script>
