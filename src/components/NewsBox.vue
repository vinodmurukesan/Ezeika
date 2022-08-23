<template>
  <div class="news-box">
    <h3 class="news-box__icon">
      NEWS!
      <fa icon="fa-newspaper"/>
    </h3>
    <div class="news-box__content">
      <p v-if="news.title">
        {{ news.title }}
      </p>
      <p v-if="news.date">
        {{ newsDate }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsBox',
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  computed: {
    newsDate() {
      const dateOptions = {
        year: 'numeric', month: 'long', weekday: 'long', day: 'numeric',
      };
      const newDate = new Date(this.news.date);
      return newDate.toLocaleDateString('en-US', dateOptions);
    },
  },
};
</script>

<style lang="scss" scoped>
.news-box {
  color: #fff;
  border: 1px solid #ccc;
  background-color: #a71919;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
  padding: 8px;
  border-radius: 5px;

  &__icon {
    color: #fff;
    display: block;
    flex-grow: 0;
    margin: 0.5rem;
    padding: 0.5rem;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: flex-start;
    order: 0;
  }

  &__content {
    display: block;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: stretch;
    order: 0;
  }

}
</style>
