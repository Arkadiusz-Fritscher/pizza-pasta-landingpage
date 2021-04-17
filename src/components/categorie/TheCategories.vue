<template>
  <div class="flex justify-between max-w-xl mx-auto">
    <categorie-button
      v-for="categorie in categories"
      :key="categorie.categorie"
      @handleClick="setActiveCategorie"
      :categorie="categorie.categorie"
      :isActive="categorie.categorie === selectedCategorie"
    >
    </categorie-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategorie: "Alles",
      categories: [
        { categorie: "Alles" },
        { categorie: "Pizza" },
        { categorie: "Pasta" },
        { categorie: "Getränke" },
      ],
    };
  },
  methods: {
    setActiveCategorie(cat) {
      this.$emit("categorie", cat);
      this.selectedCategorie = cat;
    },
  },
};
</script>
