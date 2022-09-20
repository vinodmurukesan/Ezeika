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
  padding: 20px 20px 20px 60px;
  display: flex;
  background-color: #ccc;
  position: relative;

  &__home-link {
    color: #333;
    text-decoration: none;
  }

  &__font-icon {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
  }

  &__title {
    margin: 5px 0 0;
    font-weight: bold;
    position: relative;

    &::before {
      content: ' ';
      position: absolute;
      left: 50%;
      bottom: 0px;
      height: 2px;
      width: 0%;
      background-color: #333;
      transition: all 0.8s ease;
    }

    &:hover {
      &::before  {
        width: 100%;
        left: 0;
      }
    }
  }

  &:hover &__font-icon {
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    100% {transform: rotate(360deg);}
  }
}
</style>
