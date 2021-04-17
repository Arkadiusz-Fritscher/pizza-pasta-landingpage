<template>
  <div class="bg-pasta-green">
    <div class="bg-white rounded-t-2xl h-4"></div>
  </div>
  <main class="section-y-space pt-4 lg:pt-10">
    <div id="menu" class="inner-wrapper overflow-visible">
      <div class="section-title-y-space flex justify-between">
        <section-title section="Speisekarte"></section-title>
        <div
          @click="toggleFilter"
          class="text-pasta-black flex items-center space-x-2"
        >
          <span class="text__description">Filter</span>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
            >
              <path
                d="M12 6V4M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10M6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14M6 18C4.89543 18 4 17.1046 4 16C4 14.8954 4.89543 14 6 14M6 18V20M6 14V4M12 10V20M18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14M18 18C16.8954 18 16 17.1046 16 16C16 14.8954 16.8954 14 18 14M18 18V20M18 14V4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <the-categories
        class="m-5"
        @categorie="setSelectedCategorie"
      ></the-categories>
      <the-filter
        v-show="isFilterOpen"
        @activeFilter="setActiveFilter"
      ></the-filter>
      <ul
        class="py-9 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 gap-x-24 gap-y-8"
      >
        <li v-if="isLoading">Loading...</li>
        <template v-else>
          <menu-card
            v-for="product in filteredProducts"
            :key="product.name"
            :name="product.name"
            :categorie="product.categorie"
            :number="product.number"
            :toppings="product.ingredients"
            :price="product.priceNormal"
            :priceLarge="product.largePrice"
            :tags="product.tags"
            :img="product.picture"
          ></menu-card>
        </template>
      </ul>
    </div>
  </main>
</template>

<script>
import TheCategories from "@/components/categorie/TheCategories";
import TheFilter from "@/components/categorie/TheFilter";
import MenuCard from "./MenuCard";

export default {
  components: {
    TheCategories,
    TheFilter,
    MenuCard,
  },

  data() {
    return {
      graphUrl:
        "https://api-eu-central-1.graphcms.com/v2/ckncu8315oo9p01xo6zhad3fq/master",
      isFilterOpen: false,
      activeFilter: [],
      selectedCategorie: "Alles",
      isLoading: true,
      products: [],
    };
  },
  methods: {
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    },

    async fetchAllProducts() {
      const query = this.queryAllProducts;
      this.isLoading = true;
      const response = await fetch(this.graphUrl, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });

      const result = await response.json();
      const data = result.data.products;
      this.isLoading = false;
      this.products = data;
    },

    filterCategorie(products) {
      const filter = products.filter((product) => {
        return product.category.name === this.selectedCategorie;
      });
      return filter;
    },

    // filterIngredients(products) {
    //   // const filtered = products.filter((product) => {
    //   //   return product.ingredients.some((ingredient) => {
    //   //     return this.activeFilter.some((filter) => filter === ingredient.name);
    //   //   });
    //   // });
    //   // return filtered;

    // },

    filterIngredients(products) {
      const filtered = products.filter((product) => {
        const ingredientArray = product.ingredients.map((ingredient) => {
          return ingredient.name;
        });
        return this.activeFilter.every((filter) =>
          ingredientArray.includes(filter)
        );
      });
      return filtered;
    },

    setSelectedCategorie(cat) {
      this.selectedCategorie = cat;
    },

    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
  },

  computed: {
    queryAllProducts() {
      return {
        query: `query {
                    products {
                      category {
                        name
                      }
                      name
                      number
                      ingredients {
                        name
                        additives {
                          name
                          number
                        }
                        allergens {
                          name
                          letter
                        }
                      }
                      picture {
                        url
                      }
                      largePrice
                      priceNormal
                      tags
                    }
                  }`,
      };
    },

    filteredProducts() {
      const products = this.products;
      const filter = this.activeFilter;
      const categorie = this.selectedCategorie;
      let filterdProducts = [];

      // filterIngredients()

      // filterCategorie()

      if (categorie !== "Alles") {
        filterdProducts = this.filterCategorie(products);
        if (filter.length > 0) {
          filterdProducts = this.filterIngredients(filterdProducts);
        }
      } else {
        filterdProducts = products;
        if (filter.length > 0) {
          filterdProducts = this.filterIngredients(products);
        }
      }

      return filterdProducts;
    },
  },

  beforeMount() {
    // this.fetchCategoriesProducts();
    // this.fetchAllProducts(this.queryCategorieFilterd);
    this.fetchAllProducts();
  },
};
</script>
