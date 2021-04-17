<template>
  <div class="w-screen h-screen absolute z-40 lg:hidden" @click.self="toggle">
    <div class="max-w-md mt-12">
      <div class="bg-white mx-6 px-4 py-12 h-auto rounded-2xl shadow-lg">
        <ul class="space-y-4">
          <li
            v-for="link in links"
            :key="link.name"
            class="w-full px-6 py-4 bg-pasta-creme rounded-2xl text-pasta-black font-semibold text-lg"
          >
            <router-link @click="toggle" :to="link.url">{{
              link.name
            }}</router-link>
          </li>
        </ul>
        <div class="space-y-6 my-12">
          <div>
            <a href="tel:065635698561" class="flex items-center space-x-2">
              <base-card-tag icon="phone" color="orange"></base-card-tag>
              <p>06563 - 5698561</p>
            </a>
          </div>
          <div class="flex items-center space-x-2">
            <base-card-tag icon="location" color="orange"></base-card-tag>
            <div>
              <p>Musterstr. 21</p>
              <p>55278 Musterstadt</p>
            </div>
          </div>
        </div>
        <ul class="text-pasta-grey">
          <li class="font-bold">Pizza Pasta</li>
          <li>Mustermannstr. 12</li>
          <li>12345 Musterhausen</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["toggle"],
  props: ["links"],

  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
};
</script>
