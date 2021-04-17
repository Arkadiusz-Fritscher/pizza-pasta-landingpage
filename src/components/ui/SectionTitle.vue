<template>
  <h2 class="text-xl text-pasta-black font-bold py-4 lg:text-3xl">
    {{ section }}
  </h2>
</template>

<script>
export default {
  props: {
    section: {
      Type: String,
      required: true,
    },
  },
};
</script>
