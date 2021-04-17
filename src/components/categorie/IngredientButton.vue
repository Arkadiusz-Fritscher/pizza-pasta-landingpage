<template>
  <button
    @click="handleClick"
    class="border rounded-full py-2 px-4 text-sm leading-none font-medium w-full focus:outline-none"
    :class="[isActive ? 'selected' : 'not-selected']"
  >
    {{ ingredient }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: ["ingredient"],
  methods: {
    handleClick() {
      this.isActive = !this.isActive;
      this.$emit("handleClick", this.ingredient);
    },
  },
};
</script>

<style scoped>
.selected {
  @apply bg-pasta-green bg-opacity-30 border-pasta-green text-pasta-green;
}

.not-selected {
  @apply bg-pasta-grey bg-opacity-20 border-pasta-grey text-pasta-grey;
}
</style>
