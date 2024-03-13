<script setup>
  import { RouterView } from "vue-router";
  import NavbarComp from "../../components/layouts/NavbarComp.vue";
  import FooterComp from "../../components/layouts/FooterComp.vue";
</script>

<template>
  <main class="layout-main">
    <section>
      <NavbarComp />
      <div class="container-fluid px-0">
        <RouterView />
      </div>
    </section>
    <section>
      <FooterComp />
    </section>
  </main>
</template>
