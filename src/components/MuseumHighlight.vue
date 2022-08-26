<template>
  <article class="museum-highlight" :style="themeColor">

      <div class="museum-highlight__header">

        <h2 class="museum-highlight__title">
          {{ data.name }}
        </h2>

        <div class="museum-highlight__icon">
          <slot name="museum-highlight__icon" />
        </div>

      </div>

      <div class="museum-highlight__content">

        <figure class="museum-highlight__image-wrap">
          <img class="museum-highlight__image"
          :src="data.image ? data.image : fallbackImage"
          :alt="data.name" >
        </figure>

        <div v-if="data.news">
          <news-box :news="data.news"/>
        </div>

        <p>{{ data.description }}</p>

        <p v-if="data.quiz">
          <a :href="data.quiz">click Here for the quiz</a>
        </p>

      </div>

      <div class="museum-highlight__footer">
        Published: {{newsDate}}
      </div>

  </article>
</template>

<script>
import NewsBox from '@/components/NewsBox.vue';
import variables from '@/assets/style/_variables.scss';

export default {
  name: 'MuseumHighlight',
  components: {
    NewsBox,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
    bgColor: {
      type: String,
      required: false,
      default: variables.defaultMuseumHighlightColor,
    },
  },
  data() {
    return {
      fallbackImage: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Image Not Found',
    };
  },
  computed: {
    newsDate() {
      const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      };
      const newDate = new Date(this.data.date);
      return newDate.toLocaleDateString('en-US', options);
    },
    themeColor() {
      return {
        'background-color': this.$props.bgColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.museum-highlight {
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid $museum-highlight-border-color;
  background-color: $white;
  transition: all 0.3s ease-out;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px $museum-highlight__hover-box-shadow;
    background-color: $museum-highlight__hover-background-color;
  }

  &__icon {
    position: absolute;
    right: -10px;
    top: -10px;
  }

  &__header {
    display: flex;
    height: 52px;
    justify-content: space-between;
    align-items: center;
  }

  &__image-wrap {
    padding: 0;
    margin: 0;
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  &__footer {
    align-self: flex-end;
    padding: 10px;
  }

  @media only screen and (min-width: map-get($grid-breakpoints, 'md')) {
    flex-basis: calc(25% - 42px);
    width: calc(25% - 42px);
    max-width: calc(25% - 42px);
  }
}

</style>
