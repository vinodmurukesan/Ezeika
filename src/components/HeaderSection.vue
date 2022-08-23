<template>
  <header class="header" aria-label="Header">
    <router-link :to="{ name: 'home' }" :class="'header__home-link'">
      <fa icon="earth-america" class="header__font-icon" />
      <p class="header__title">Natural History Museum</p>
    </router-link>
    <nav-bar></nav-bar>
  </header>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'HeaderSection',
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: 20px;
  display: flex;
  background-color: #ccc;

  &__home-link {
    display: flex;
    color: #333;
    text-decoration: none;
  }

  &__font-icon {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
  }

  &__title {
    margin: 5px 0 0;
    font-weight: bold;
  }
}
</style>
