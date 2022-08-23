<template>
  <div>
    <header-section />
    <main class="main" aria-label="Main">
      <router-view />
    </main>
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(231, 228, 228);
}

.main {
  padding: 0 20px;

  p {
    margin: 0;
    padding: 10px 0 0;
  }

  .fa-star,
  .fa-filter-circle-dollar {
    width: 25px;
    height: 25px;
    color: rgb(255, 215, 0);
  }
}
</style>
