<template>
  <nav class="main-nav" aria-label="Navigation">
    <ul class="main-nav__list">
      <li class="main-nav__item" v-for="(item, i) in links" :key="'nav-' + i">
        <router-link
          class="main-nav__link"
          :to="{ name: item.name.toLowerCase() }">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    links: [
      {
        name: 'Space',
      },
      {
        name: 'Dinosaurs',
      },
      {
        name: 'Wildlife',
      },
      {
        name: 'Oceans',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>

@import '@/assets/style/_variables.scss';

.main-nav {
  margin-left: auto;

  &__list {
    display: flex;
    margin: 5px 0;
    list-style-type: none;
  }

  &__item {
    padding: 0 0 0 10px;
  }

  &__link {
    padding: 10px 20px;
    border-radius: 10px;
    color: $white;
    background-color: #2c3e50;
    text-decoration: none;
    transition: all 0.8s ease;

    &:hover,
    &:focus,
    &.router-link-exact-active  {
      color: #2c3e50;
      background-color: #42b983;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;
      box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.5);
    }
  }
}
</style>
