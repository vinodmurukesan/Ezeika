<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      In this App you can find some infromation on
      <router-link :to="{ name: 'space' }">Space</router-link>,
      <router-link :to="{ name: 'dinosaurs' }">Dinosaurs</router-link>,
      <router-link :to="{ name: 'wildlife' }">Wildlife</router-link> and
      <router-link :to="{ name: 'oceans' }">Oceans</router-link>, for more
      detail please click on the link or header menu section.
    </p>
  </div>
</template>

<script>
export default {
  name: 'WellcomeWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  padding: 50px 0;

  a {
    color: #42b983;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
}
</style>
