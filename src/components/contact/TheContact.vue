<template>
  <section id="kontakt" class="section-y-space">
    <div class="inner-wrapper overflow-visible">
      <section-title
        class="section-title-y-space"
        section="Kontakt / Anfahrt"
      ></section-title>

      <div class="space-y-6 md:space-y-0 md:flex md:gap-x-12">
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
    </div>
    <div class="py-6">
      <img class="object-cover w-full h-96" src="@/assets/img/map.jpg" alt="" />
    </div>
  </section>
</template>
