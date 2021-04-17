<template>
  <section class="section-y-space" id="oeffnungszeiten">
    <div class="inner-wrapper">
      <section-title
        class="section-title-y-space"
        section="Öffnungszeiten"
      ></section-title>
      <div>
        <ul
          class="space-y-6 p-6 bg-pasta-creme rounded-2xl md:flex flex-wrap md:space-y-0 md:gap-6"
        >
          <li
            class="day-wrapper"
            v-for="hours in openingHours"
            :key="hours.day"
          >
            <div class="day">
              <p>{{ hours.day }}</p>
            </div>
            <div class="time">
              <p v-if="hours.times.length === 1">{{ hours.times[0] }}</p>
              <p v-else v-for="(times, index) in hours.times" :key="index">
                {{ times.open }} - {{ times.close }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["openingHours"],
};
</script>

<style scoped>
.day-wrapper {
  @apply flex space-x-4;
}

.day {
  @apply w-28 text-pasta-black font-semibold;
}

.time {
}
</style>
