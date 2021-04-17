<template>
  <div class="max-w-md space-y-6">
    <div class="flex space-x-2">
      <base-card-tag
        class="flex-shrink-0"
        color="orange"
        icon="location"
      ></base-card-tag>
      <p class="font-medium mt-2 text-pasta-grey text-sm">{{ location }}</p>
    </div>
    <div class="p-6 rounded-2xl bg-pasta-creme">
      <h5 class="text-center font-bold text-pasta-black text-lg">
        Kostenlose Lieferung ab {{ number }} gerichten.
      </h5>
      <p class="text-center text-sm text-pasta-grey">
        Ansonsten {{ fee }}€ Liefergebühr.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["location", "fee", "number"],
};
</script>
