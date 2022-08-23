<template>
  <div class="page-layout">
    <h1 class="page-layout__title">{{ pageTitle}}</h1>
    <section class="page-layout__container">
      <slot name="page-layout__data" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageLayout',
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.page-layout {
  &__container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
